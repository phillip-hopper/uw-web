/**
 * Setup test libraries
 *
 */
var chai = require('chai');
var should = chai.should();
var mockery = require('mockery');
var sinon = require('sinon');
var uwFeedData = {"cat":[{"langs":[{"lc":"en","mod":"1437687666","vers":[{"mod":"1437687666","name":"Unlocked Dynamic Bible","slug":"udb","status":{"checking_entity":"Wycliffe Associates","checking_level":"3","comments":"Original source text","contributors":"Wycliffe Associates","publish_date":"20150723","source_text":"en","source_text_version":"2.0.0-beta9","version":"2.0.0-beta9"},"toc":[{"desc":"","mod":"1437687666","slug":"gen","src":"https://api.unfoldingword.org/udb/txt/1/udb-en/01-GEN.usfm","src_sig":"https://api.unfoldingword.org/udb/txt/1/udb-en/01-GEN.sig","title":"Genesis"}]},{"mod":"1437687666","name":"Unlocked Literal Bible","slug":"ulb","status":{"checking_entity":"Wycliffe Associates","checking_level":"3","comments":"Original source text","contributors":"Wycliffe Associates","publish_date":"20150723","source_text":"en","source_text_version":"2.0.0-beta9","version":"2.0.0-beta9"},"toc":[{"desc":"","mod":"1437687666","slug":"gen","src":"https://api.unfoldingword.org/ulb/txt/1/ulb-en/01-EXD.usfm","src_sig":"https://api.unfoldingword.org/ulb/txt/1/ulb-en/01-EXD.sig","title":"Genesis"},]}]}],"slug":"bible","title":"Bible"}],"mod":1437687666};
var englishData = {iso639_1: 'en',iso639_2: 'eng',iso639_2en: 'eng',iso639_3: 'eng',name: [ 'English' ],nativeName: [ 'English' ],direction: 'LTR'};

describe('uwGrabAvailableTexts', function() {

  var delStub;
  var requestStub;
  var countryLanguageStub;
  var mkdirpStub;
  var fileSystemStub;
  var downloadStub;
  var uw;

  before(function() {
    mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
    });

    delStub = sinon.stub();
    requestStub = sinon.stub();
    mkdirpStub = sinon.stub();
    countryLanguageStub = {
      getLanguage: sinon.stub()
    };
    fileSystemStub = {
      writeFile: sinon.stub()
    };
    exports.Download = function(options) {};
    downloadStub = sinon.stub(exports, 'Download').returns({get: sinon.stub(), dest: sinon.stub(), run: sinon.stub()});

    mockery.registerMock('del', delStub);
    mockery.registerMock('request', requestStub);
    mockery.registerMock('country-language', countryLanguageStub);
    mockery.registerMock('mkdirp', mkdirpStub);
    mockery.registerMock('fs', fileSystemStub);
    mockery.registerMock('download', downloadStub);
    uw = require('unfolding-word/uw-grab-available-texts');
    uw.destinationFolder = 'tests/support/input';
    uw.catalogUrl = 'http://test.com/test';
    uw.silenceNotification = true;
  });

  it("should prepare the input folder by removing the old uw_ directories", function() {
    uw.process();
    delStub.called.should.be.equal(true);
  });

  describe("Function: getBibles()", function() {

    it("should get the latest bibles from the given catalogUrl", function() {
      var expected = [
        {
          version_info: {
            id:               'uw_en_udb',
            abbr:             'UDB',
            name:             'Unlocked Dynamic Bible',
            nameEnglish:      '',
            lang:             'eng',
            langName:         'English',
            langNameEnglish:  'English',
            dir:              'ltr',
            generator:        'uw_usfm'
          },
          files: [
            'https://api.unfoldingword.org/udb/txt/1/udb-en/01-GEN.usfm'
          ]
        },
        {
          version_info: {
            id:               'uw_en_ulb',
            abbr:             'ULB',
            name:             'Unlocked Literal Bible',
            nameEnglish:      '',
            lang:             'eng',
            langName:         'English',
            langNameEnglish:  'English',
            dir:              'ltr',
            generator:        'uw_usfm'
          },
          files: [
            'https://api.unfoldingword.org/ulb/txt/1/ulb-en/01-EXD.usfm'
          ]
        }
      ];
      requestStub.yields(null, {statusCode: 200}, JSON.stringify(uwFeedData));
      countryLanguageStub.getLanguage.yields(null, englishData);

      uw.getBibles(function(bibles) {
        bibles.should.be.deep.equal(expected);
      });

      requestStub.called.should.be.equal(true);
    });

    it("should request language data for each language", function() {
      requestStub.yields(null, {statusCode: 200}, JSON.stringify(uwFeedData));

      uw.getBibles(function(bibles) {});

      countryLanguageStub.getLanguage.called.should.be.equal(true);
      countryLanguageStub.getLanguage.firstCall.calledWith('en').should.be.equal(true);
      countryLanguageStub.getLanguage.secondCall.calledWith('en').should.be.equal(true);
      countryLanguageStub.getLanguage.calledTwice.should.be.equal(true);
    });
    
  });

  describe("Function downloadBibles", function() {

    beforeEach(function() {
      requestStub.yields(null, {statusCode: 200}, JSON.stringify(uwFeedData));
      countryLanguageStub.getLanguage.yields(null, englishData);
      uw.getBibles(function(bibles) {
        uw.downloadBibles(bibles);
      });
    });
    
    it("should create the correct directory for the files", function() {
      mkdirpStub.called.should.be.equal(true);
      mkdirpStub.calledTwice.should.be.equal(true);
      mkdirpStub.firstCall.calledWith('tests/support/input/uw_en_udb').should.be.equal(true);
      mkdirpStub.secondCall.calledWith('tests/support/input/uw_en_ulb').should.be.equal(true);
    });

    it("should create the info.json files", function() {
      var firstInfoJson = JSON.stringify({id:'uw_en_udb',abbr:'UDB',name:'Unlocked Dynamic Bible',nameEnglish:'',lang:'eng',langName:'English',langNameEnglish:'English',dir:'ltr',generator:'uw_usfm'});
      var secondInfoJson = JSON.stringify({id:'uw_en_ulb',abbr:'ULB',name:'Unlocked Literal Bible',nameEnglish:'',lang:'eng',langName:'English',langNameEnglish:'English',dir:'ltr',generator:'uw_usfm'});
      fileSystemStub.writeFile.called.should.be.equal(true);
      fileSystemStub.writeFile.firstCall.calledWith('tests/support/input/uw_en_udb/info.json', firstInfoJson).should.be.equal(true);
      fileSystemStub.writeFile.secondCall.calledWith('tests/support/input/uw_en_ulb/info.json', secondInfoJson).should.be.equal(true);
    });

    it("should download all the files for the Bibles", function() {
      downloadStub.called.should.be.equal(true);
      var download = new downloadStub;
      download.get.called.should.be.equal(true);
      download.get.firstCall.calledWith('https://api.unfoldingword.org/udb/txt/1/udb-en/01-GEN.usfm').should.be.equal(true);
      download.get.secondCall.calledWith('https://api.unfoldingword.org/ulb/txt/1/ulb-en/01-EXD.usfm').should.be.equal(true);
      download.dest.called.should.be.equal(true);
      download.dest.firstCall.calledWith('tests/support/input/uw_en_udb').should.be.equal(true);
      download.dest.secondCall.calledWith('tests/support/input/uw_en_ulb').should.be.equal(true);
      download.run.called.should.be.equal(true);
    });

  });

  after(function() {
    mockery.deregisterMock('del');
    mockery.deregisterMock('request');
    mockery.deregisterMock('country-language');
    mockery.disable();
  });

});
