/* eslint-disable no-sync*/
const fs = require( 'fs' );
const buildBookmarks = require( './regex-bookmarks.cjs' );
const buildPockets = require( './regex-pocket.cjs' );


( function buildUrlList() {
	const fileName = `urls.txt`;
	if ( fs.existsSync( 'urls.txt' ) ) {
	  fs.unlink( 'urls.txt', ( err ) => {
	  	console.log( 'err in unlink: ', err );
	  } );
	  }
	buildBookmarks( fileName );
	buildPockets( fileName );
}() );
