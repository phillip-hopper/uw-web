/**
 * This script is designed to pull Bible versions from the Unfolding Word Project.
 * It will pull all the versions from https://api.unfoldingword.org/uw/txt/2/catalog.json,
 * and download the usfm files into the input folder.  Then you can generate the appropriate
 * HTML for this app.
 *
 * To use this script:
 *
 * 1) Run this script `node uw-grab-available-texts.js`
 * 2) Run the generate script `node generate.js -a`
 * 3) Finally create the text index with `node create_texts_index.js`
 *
 */
var uwGrabAvailableTexts = function() {
  /**
   * This classes main object
   *
   * @type {Object}
   * @access private
   */
  var uwObject = {};
  /**
   * Nodejs package request for grabbing the JSON
   *
   * @type {Object}
   * @access private
   */
  var request = require('request');
  /**
   * Nodejs package mkdirp for creating directories
   *
   * @type {Object}
   * @access private
   */
  var mkdirp = require('mkdirp');
  /**
   * Nodejs package del for finding and deleting directories
   *
   * @type {Object}
   * @access private
   */
  var del = require('del');
  /**
   * Nodejs package country-language for finding country language data
   *
   * @type {Object}
   * @access private
   */
  var countryLanguage = require('country-language');
  /**
   * Nodejs package filesystem for writing files
   *
   * @type {Object}
   * @access private
   */
  var fileSystem = require('fs');
  /**
   * The url to grab the available Bible texts from
   *
   * @type {String}
   * @access private
   */
  var catalogUrl = 'https://api.unfoldingword.org/uw/txt/2/catalog.json';
  /**
   * An array of all the current directories that will need to be removed on preparation.
   * This variable is used to track progress on deleting the folders. (async)
   *
   * @type {Array}
   * @access private
   */
  var currentDirectories = [];
  /**
   * All of our private methods
   */
  /**
   * A shortcut function for sending your message to the terminal
   *
   * @param  {String} msg The message to display
   *
   * @return {void}
   * @access private
   *
   * @author Johnathan Pulos <johnathan@missionaldigerati.org>
   */
  function display(msg, isError) {
    var start = (isError) ? 'X Error > ' : '> ';
    console.log(start + msg);
  }
  /**
   * Prepare the folders for the ufw content.  We remove all folders with a uw prefix
   * in the input folder
   *
   * @return {void}
   *
   * @author Johnathan Pulos <johnathan@missionaldigerati.org>
   */
  function prepareFolder(_callback) {
    display('Preparing the input folder.');
    del(['input/uw_*'], function (error) {
      if (error) {
        display('Unable to locate directories to clean up received error: ' + error, true);
      } else {
        _callback();
      }
    });
  }
  /**
   * Iterates over the toc data, and makes an array of the files to download
   *
   * @param  {Array} tocData An array of JSON objects storing all the Bible files
   *
   * @return {Array}         An array of all the files to download
   * @access private
   *
   * @author Johnathan Pulos <johnathan@missionaldigerati.org>
   */
  function getFiles(tocData) {
    var files = [];
    for (var i = 0; i < tocData.length; i++) {
      files.push(tocData[i].src);
    };
    return files;
  }
  /**
   * Grab the json object from the latest Unfolding Word catalog feed.
   * Once the content is received, we pass it to the parseBibleData() function.
   *
   * @return {void}
   *
   * @author Johnathan Pulos <johnathan@missionaldigerati.org>
   */
  function grabContent() {
    display('Grabing content from ' + catalogUrl + '.');
    request(catalogUrl, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        var bibles = [];
        for (var i = 0; i < data.cat.length; i++) {
          if (data.cat[i].slug == 'bible') {
            bibles = data.cat[i].langs;
          }
        }
        parseBibleData(bibles);
      } else {
        display('Unable to pull the content: ' + error, true);
      }
    });
  }
  /**
   * Takes the bible content from the latest Unfolding Word catalog feed,
   * and parses through it, and creates the folder and files for each version.
   *
   * @param  {Object} bibleData The JSON Object of available bibles
   *
   * @return {void}
   *
   * @author Johnathan Pulos <johnathan@missionaldigerati.org>
   */
  function parseBibleData(bibleData) {
    display('Parsing the Bible data.');
    for (var i = 0; i < bibleData.length; i++) {
      var langCode = bibleData[i].lc;
      var language = countryLanguage.getLanguage(langCode);
      var versions = bibleData[i].vers;
      for (var n = 0; n < versions.length; n++) {
        var version = versions[n];
        var versionInfo = {
          id:               'uw_' + langCode + '_' + version.slug,
          abbr:             version.slug.toUpperCase(),
          name:             version.name,
          nameEnglish:      '',
          lang:             language.iso639_3,
          langName:         language.nativeName[0],
          langNameEnglish:  language.name[0],
          dir:              language.direction.toLowerCase(),
          generator:        'usfm'
        };
        var files = getFiles(version.toc);
        console.log(files);
        /**
         * Let's create the directory for the files
         */
        mkdirp('input/' + versionInfo.id);
        /**
         * let's add the info.json file
         */
        fileSystem.writeFile('input/' + versionInfo.id + '/info.json', JSON.stringify(versionInfo), function(error) {
          if (error) {
            display('Unable to create the info JSON file at: input/' + versionInfo.id + '/info.json because: ' + error);
          }
        });
        /**
         * Now download all the files
         */
        
      }
    }
  }
  /**
   * All of our public methods
   */

  /**
   * Run the process of grabbing all the texts and downloading the files locally
   *
   * @return {void}
   * @access public
   *
   * @author Johnathan Pulos <johnathan@missionaldigerati.org>
   */
  uwObject.process = function() {
    prepareFolder(function () {
      grabContent();
    });
  };
  /**
   * Return this object
   */
  return uwObject;
};

var uw = new uwGrabAvailableTexts;
uw.process();