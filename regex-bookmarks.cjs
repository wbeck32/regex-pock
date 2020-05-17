/* eslint-disable no-sync*/
const str = require( './sourceData/bookmarks_5_17_20.cjs' );
const fs = require( 'fs' );

function buildBookmarks( fileName ) {
	const regex = ( /(http|https)[^"]*/gm );
	const first = 0;
	let matchy = {};
	let bookmarkData = []

	while ( ( matchy = regex.exec( str ) ) !== null ) {
		if ( matchy.index === regex.lastIndex ) {
			regex.lastIndex++;
		}

		matchy.forEach( ( match, groupIndex ) => {
			if ( groupIndex === first ) {
				bookmarkData.push( `${match}`)
			}
		});
	}
	return bookmarkData
}

module.exports = buildBookmarks;
