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
   * Nodejs package rimraf for deleting directories recursively
   *
   * @type {Object}
   * @access private
   */
  var rimraf = require('rimraf');
  /**
   * Nodejs package glob for finding files
   *
   * @type {Object}
   * @access private
   */
  var glob = require('glob');
  /**
   * The url to grab the available Bible texts from
   *
   * @type {String}
   * @access private
   */
  var catalogUrl = 'https://api.unfoldingword.org/uw/txt/2/catalog.json';
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
  function prepareFolder() {
    display('Preparing the input folder.');
    glob('input/uw_*', {}, function(error, files) {
      if (error) {
        display('Unable to locate directories to clean up received error: ' + error, true);
      } else {
        for (var i = 0; i < files.length; i++) {
          rimraf(files[i], function(error) {
            if (error) {
              display('Unable to delete the directory: ' + files[i] + ' received error: ' + error, true);
            }
          });
        };
        // grabContent();
      }
    });
  }
  /**
   * Grab the json object from the latest Unfolding Word catalog feed
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
      var language = bibleData[i].lc;
      var versions = bibleData[i].vers;
      for (var n = 0; n < versions.length; n++) {
        var version = versions[n];
        var id = 'uw_' + language + '_' + version.slug;
        /**
         * Let's create the directory for the files
         */
        mkdirp('input/' + id, function(error) {
          if (error) {
            display('Unable to create the directory: ' + id + ' received error: ' + error, true);
          } else {
            display('Created directory: ' + id);
          }
        });
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
    prepareFolder();
  };
  /**
   * Return this object
   */
  return uwObject;
};

var uw = new uwGrabAvailableTexts;
uw.process();