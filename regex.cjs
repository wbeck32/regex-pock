
const response = require( './response' );
const fs = require( 'fs' );

( function buildIt() {
	const regex = ( /(http|https):\/\/[a-zA-Z.\-/0-9%:?_&=]+[^",]/gm );
	const first = 0;
	const duh = JSON.stringify( response );
	let matchy = {};
	fs.unlink( 'results.txt', ( err ) => {
		console.log( 'err: ', err );
	} );

	while ( ( matchy = regex.exec( duh ) ) !== null ) {
		if ( matchy.index === regex.lastIndex ) {
			regex.lastIndex++;
		}

		matchy.forEach( ( match, groupIndex ) => {
			if ( groupIndex === first ) {
				fs.appendFile( 'results.txt', `${match}\n`, ( err ) => {
					if ( err ) {
						throw err;
					}
					console.log( 'The "data to append" was appended to file!' );
				} );
			}
		} );
	}
}() );

/*
 * Newman run -k newman/pocket.postman_collection.json --export-environment newman/. --export-globals newman/.
 * newman run -k newman/pocket.postman_collection-with-chaining.json --export-environment newman/. --export-globals newman/.
 * newman run ./newman/pocket.postman_collection.json --environment ./newman/_pocketAPI.postman_environment.json -g ./newman/_pocketAPI.postman_globals.json -r cli,json -n 3
 */
