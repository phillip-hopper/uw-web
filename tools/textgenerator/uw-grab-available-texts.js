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
  var url = 'https://api.unfoldingword.org/uw/txt/2/catalog.json';
  /**
   * All of our private methods
   */
  function prepareFolder() {
    console.log('Preparing the input folder.');
    if (uwObject.keepOtherVersions) {
      console.log('Removing all the old versions of the Bible.');
    };
  }
  function grabContent() {
    console.log('Grabing content from ' + url + '.');
  }
  function parseContent(data) {
    console.log('Parsing the content.');
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
    var data = grabContent();
    parseContent(data);
  };
  /**
   * Return this object
   */
  return uwObject;
};

var uw = new uwGrabAvailableTexts;
uw.keepOtherVersions = false;
uw.process();