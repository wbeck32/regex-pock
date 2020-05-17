/* eslint-disable no-sync*/
const fs = require( 'fs' );
const buildBookmarks = require( './regex-bookmarks.cjs' );
const buildPockets = require( './regex-pocket.cjs' );

( function buildUrlList() {
	const fileName = `urls.js`;
	let urlsObj = {};
	if ( fs.existsSync( 'urls.js' ) ) {
	  fs.unlink( 'urls.js', ( err ) => {
	  	console.log( 'err in unlink: ', err );
	  } );
	  }
	const bookmarkData = buildBookmarks();
	console.log('bookmarkData: ', bookmarkData, typeof bookmarkData);
	const pocketData = buildPockets();
		urlsObj = {
			...urlsObj,
			bookmarkData,
			pocketData
		}
	// console.log('urlsObj: ', Object.entries(urlsObj));
	fs.writeFile('urls.js', Object.entries(urlsObj), (err) => {
  	if (err) throw err;
  		console.log('The file has been saved!');
		});
}() );
