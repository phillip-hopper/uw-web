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
  var request = require('request');
  /**
   * Do you want to keep the Bible versions included with this repo?
   *
   * @type {Boolean}
   * @access public
   */
  uwObject.keepOtherVersions = false;
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
  function display(msg) {
    console.log('-> ' + msg);
  }
  function prepareFolder() {
    display('Preparing the input folder.');
    if (uwObject.keepOtherVersions === false) {
      display('Removing all the old versions of the Bible.');
    }
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
        };
        parseBibleData(bibles);
      } else {
        display('Unable to pull the content: ' + error);
      }
    });
  }
  /**
   * Takes the bible content from the latest Unfolding Word catalog feed,
   * and parses through it.
   *
   * @param  {Object} bibleData The JSON Object of available bibles
   *
   * @return {void}
   *
   * @author Johnathan Pulos <johnathan@missionaldigerati.org>
   */
  function parseBibleData(bibleData) {
    display('Parsing the Bible data.');
    console.log(bibleData);
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
    grabContent();
  };
  /**
   * Return this object
   */
  return uwObject;
};

var uw = new uwGrabAvailableTexts;
uw.keepOtherVersions = false;
uw.process();