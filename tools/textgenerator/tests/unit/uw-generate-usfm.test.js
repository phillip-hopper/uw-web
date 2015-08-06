/**
 * Setup test libraries
 *
 */
var chai = require('chai');
var should = chai.should();
var mockery = require('mockery');
var sinon = require('sinon');
var baseInfoJson = {"id":"uw_en_udb","abbr":"UDB","name":"Unlocked Dynamic Bible","nameEnglish":"","lang":"eng","langName":"English","langNameEnglish":"English","dir":"ltr","generator":"uw_usfm"};
var fs = require('fs');
var path = require('path');
/**
 * Parser for HTML
 *
 * @type {Object}
 */
var cheerio = require('cheerio');

describe('uwGenerateUsfm', function() {

  var uw;
  var testFilePath;

  before(function() {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    testFilePath = path.join('tests', 'support', 'usfm_test_files');
    uw = require('unfolding-word/uw-generate-usfm');
  });

  describe("Function: generate()", function() {

    it("should return an object with the correct keys", function() {
      var inputBasePath = path.join(testFilePath, 'short_books');
      var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
      (result.hasOwnProperty('chapterData')).should.be.equal(true);
      (result.hasOwnProperty('indexData')).should.be.equal(true);
      (result.hasOwnProperty('indexLemmaData')).should.be.equal(true);
      (result.hasOwnProperty('aboutHtml')).should.be.equal(true);
    });

    describe("Return Data: chapterData", function() {

      it("should return an the correct id for each book", function() {
        /**
         * These are the codes for James 1-5, 3 John 1 & Jude 1
         */
        var expected = ['JM1', 'JM2', 'JM3', 'JM4', 'JM5', 'J31', 'JD1'];
        var inputBasePath = path.join(testFilePath, 'short_books');
        var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
        var actual = [];
        result.chapterData.length.should.equal(expected.length);
        for (var i = result.chapterData.length - 1; i >= 0; i--) {
          actual.push(result.chapterData[i].id);
        }
        actual.should.have.all.members(expected);
      });

      it("should return the correct titles for each book", function() {
        var expected = [
          'Jude\'s Letter 1',
          'John\'s Third Letter 1',
          'The Letter from James 5',
          'The Letter from James 4',
          'The Letter from James 3',
          'The Letter from James 2',
          'The Letter from James 1'
        ];
        var inputBasePath = path.join(testFilePath, 'short_books');
        var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
        var actual = [];
        result.chapterData.length.should.equal(expected.length);
        for (var i = result.chapterData.length - 1; i >= 0; i--) {
          actual.push(result.chapterData[i].title);
        }
        actual.should.have.all.members(expected);
      });

      it("should return the correct previd's for the chapter", function() {
        /**
         * These are the id for the chapter previous to the current one based only on the files given.
         * So Hebrews won't be previous since we do not give the Hebrews USFM document
         */
        var expected = [
          'J31',
          'JM5',
          'JM4',
          'JM3',
          'JM2',
          'JM1',
          null
        ];
        var inputBasePath = path.join(testFilePath, 'short_books');
        var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
        var actual = [];
        result.chapterData.length.should.equal(expected.length);
        for (var i = result.chapterData.length - 1; i >= 0; i--) {
          actual.push(result.chapterData[i].previd);
        }
        actual.should.have.all.members(expected);
      });

      it("should return the correct nextid's for the chapter", function() {
        /**
         * These are the id for the chapter following to the current one based only on the files given.
         * So Revelations won't be following since we do not give the Revelations USFM document
         */
        var expected = [
          null,
          'JD1',
          'J31',
          'JM5',
          'JM4',
          'JM3',
          'JM2'
        ];
        var inputBasePath = path.join(testFilePath, 'short_books');
        var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
        var actual = [];
        result.chapterData.length.should.equal(expected.length);
        for (var i = result.chapterData.length - 1; i >= 0; i--) {
          actual.push(result.chapterData[i].nextid);
        }
        actual.should.have.all.members(expected);
      });

      describe("Return Data: chapterData[i].html", function() {

        describe("Wrapping Div Element", function() {
          
          it("should have the correct classes", function() {
            var inputBasePath = path.join(testFilePath, 'three_verses');
            var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
            var c = cheerio.load(result.chapterData[0].html);
            var wrapper = c('div').first();
            wrapper.hasClass('section').should.equal(true);
            wrapper.hasClass('chapter').should.equal(true);
            wrapper.hasClass('JM').should.equal(true);
            wrapper.hasClass('JM1').should.equal(true);
            wrapper.hasClass('uw_en_udb').should.equal(true);
            wrapper.hasClass('section').should.equal(true);
          });

          it("should have the correct data tags", function() {
            var inputBasePath = path.join(testFilePath, 'short_books');
            var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
            var c = cheerio.load(result.chapterData[1].html);
            var wrapper = c('div').first();
            wrapper.data('id').should.equal('JM2');
            wrapper.data('nextid').should.equal('JM3');
            wrapper.data('previd').should.equal('JM1');
          });

          it("should have the correct language attributes", function() {
            var inputBasePath = path.join(testFilePath, 'three_verses');
            var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
            var c = cheerio.load(result.chapterData[0].html);
            var wrapper = c('div').first();
            wrapper.attr('dir').should.equal('ltr');
            wrapper.attr('lang').should.equal('en');
          });

        });

        describe("Chapter Headers", function() {
          
          it("should set the correct default chapter header", function() {
            var expected = '1';
            var inputBasePath = path.join(testFilePath, 'three_verses');
            var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
            result.chapterData.length.should.equal(1);
            result.chapterData[0].html.should.not.equal('');
            var c = cheerio.load(result.chapterData[0].html);
            c('div.c').text().should.be.equal(expected);
          });

          it("should return Psalm 1 header for a Psalms chapter", function() {
            var expected = 'Psalm 1';
            var inputBasePath = path.join(testFilePath, 'psalms');
            var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
            var c = cheerio.load(result.chapterData[0].html);
            c('div.c').text().should.be.equal(expected);
          });

          it("should return Psalm 1 header for a Psalm chapter (no s on the end of the header)", function() {
            var expected = 'Psalm 1';
            var inputBasePath = path.join(testFilePath, 'psalm_no_s');
            var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
            var c = cheerio.load(result.chapterData[0].html);
            c('div.c').text().should.be.equal(expected);
          });

        });

        describe("Introductions", function() {
          
          it("should set the correct usfm introductions (p13)", function() {
            /**
             * Not all introductions are implemented
             */
            var inputBasePath = path.join(testFilePath, 'introductions');
            var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
            var c = cheerio.load(result.chapterData[0].html);
            c('div.is').text().should.equal('The \'is\' heading');
            c('div.ip').text().should.equal('The \'ip\' heading');
            c('div.ili').text().should.equal('The \'ili\' heading');
            c('div.ili2').text().should.equal('The \'ili2\' heading');
          });

        });

      });

    });

    describe("Return Data: indexLemmaData", function() {
      
      it("should return an empty object by default", function() {
        var inputBasePath = path.join(testFilePath, 'short_books');
        var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
        result.indexLemmaData.should.deep.equal({});
      });

    });

    describe("Return Data: aboutHtml", function() {

      it("should return the about.html content if the file exists", function() {
        var inputBasePath = path.join(testFilePath, 'short_books_with_about');
        var aboutUsFilePath = path.join(inputBasePath, 'about.html');
        var expected = fs.readFileSync(aboutUsFilePath, 'utf8');

        var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
        expected.should.be.equal(result.aboutHtml);
      });

      it("should return an empty string if the file does not exist", function() {
        var inputBasePath = path.join(testFilePath, 'short_books');
        var expected = '';

        var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
        expected.should.be.equal(result.aboutHtml);
      });

    });

  });


  after(function() {
    mockery.disable();
  });
});