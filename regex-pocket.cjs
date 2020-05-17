
const response = require( './sourceData/pocket.json' );
const fs = require( 'fs' );

function buildPockets( fileName ) {
	const regex = ( /(http|https):\/\/[a-zA-Z.\-/0-9%:?_&=]+[^",]/gm );
	const first = 0;
	const duh = JSON.stringify( response );
	let matchy = {};

	while ( ( matchy = regex.exec( duh ) ) !== null ) {
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

module.exports = buildPockets;

/*
 * Newman run -k newman/pocket.postman_collection.json --export-environment newman/. --export-globals newman/.
 * newman run -k newman/pocket.postman_collection-with-chaining.json --export-environment newman/. --export-globals newman/.
 * newman run ./newman/pocket.postman_collection.json --environment ./newman/_pocketAPI.postman_environment.json -g ./newman/_pocketAPI.postman_globals.json -r cli,json -n 3
 */
