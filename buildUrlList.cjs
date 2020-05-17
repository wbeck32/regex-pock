/* eslint-disable no-sync*/
const fs = require( 'fs' );
const buildBookmarks = require( './regex-bookmarks.cjs' );
const buildPockets = require( './regex-pocket.cjs' );

( function buildUrlList() {
	const fileName = `urls.txt`;
	const urlsArray = [];
	if ( fs.existsSync( 'urls.txt' ) ) {
	  fs.unlink( 'urls.txt', ( err ) => {
	  	console.log( 'err in unlink: ', err );
	  } );
	  }
	const bookmarkData = buildBookmarks();
	const pocketData = buildPockets();
	bookmarkData.forEach(b=>{
		if (urlsArray.indexOf(b)<0){
		urlsArray.push(b)

		}
	});
	pocketData.forEach(p=>{
				if (urlsArray.indexOf(p)<0){

		urlsArray.push(p)
				}
	})
		console.log('urlsArray: ', urlsArray.length);
fs.writeFile('urls.txt', urlsArray, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
}() );
