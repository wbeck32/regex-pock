/* eslint-disable no-sync*/
const str = require( './sourceData/bookmarks_5_17_20.js' );
const fs = require( 'fs' );

function buildBookmarks( fileName ) {
	const regex = ( /(http|https)[^"]*/gm );
	const first = 0;
	let matchy = {};

	while ( ( matchy = regex.exec( str ) ) !== null ) {
		if ( matchy.index === regex.lastIndex ) {
			regex.lastIndex++;
		}

		matchy.forEach( ( match, groupIndex ) => {
			if ( groupIndex === first ) {
				fs.appendFile( fileName, `${match}\n`, ( err ) => {
					if ( err ) {
						throw err;
					}
					console.log( 'The "data to append" was appended to file!' );
				} );
			}
		} );
	}
}

module.exports = buildBookmarks;
