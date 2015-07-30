/**
 * Setup test libraries
 *
 */
var chai = require('chai');
var should = chai.should();
var mockery = require('mockery');
var sinon = require('sinon');
var baseInfoJson = {"id":"uw_en_udb","abbr":"UDB","name":"Unlocked Dynamic Bible","nameEnglish":"","lang":"eng","langName":"English","langNameEnglish":"English","dir":"ltr","generator":"uw_usfm"};

describe('uwGenerateUsfm', function() {

  var uw;

  before(function() {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    uw = require('unfolding-word/uw-generate-usfm');
  });

  describe("Function: generate()", function() {

    it("should return an object with the correct keys", function() {
      var inputBasePath = 'tests/support/usfm_test_files/short_books';
      var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
      (result.hasOwnProperty('chapterData')).should.be.equal(true);
      (result.hasOwnProperty('indexData')).should.be.equal(true);
      (result.hasOwnProperty('indexLemmaData')).should.be.equal(true);
      (result.hasOwnProperty('aboutHtml')).should.be.equal(true);
    });
    
    it("should return an array for each book with the correct object", function() {
      var inputBasePath = 'tests/support/usfm_test_files/short_books';
      var result = uw.generate(inputBasePath, baseInfoJson, false, function(){}, function() {});
    });

  });


  after(function() {
    mockery.disable();
  });
});