/**
 * Grab the latest bibles from Unfolding Word, and prepare them for integrating in this app.
 * Read the README.md file at the root of this project for more details.
 */
var uw = require('unfolding-word/uw-grab-available-texts');
/**
 * Set some of the settings before processing
 *
 */
uw.catalogUrl = 'https://api.unfoldingword.org/uw/txt/2/catalog.json';
uw.destinationFolder = 'input';
/**
 * Process the current Bibles
 */
uw.process();