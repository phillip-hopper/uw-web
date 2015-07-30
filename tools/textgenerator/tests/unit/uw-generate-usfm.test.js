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
        };
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
        };
        actual.should.have.all.members(expected);
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