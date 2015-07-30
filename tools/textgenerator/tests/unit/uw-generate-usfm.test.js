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
    
    it("should return an array for each book with the correct object", function() {
      var inputBasePath = path.join(testFilePath, 'short_books');
      console.log(inputBasePath);
      var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
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