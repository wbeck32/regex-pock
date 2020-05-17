
const response = require( './sourceData/pocket.json' );
const fs = require( 'fs' );

function buildPockets() {
	const regex = ( /(http|https):\/\/[a-zA-Z.\-/0-9%:?_&=]+[^",]/gm );
	const first = 0;
	const duh = JSON.stringify( response );
	let matchy = {};
	let pocketData = []

	while ( ( matchy = regex.exec( duh ) ) !== null ) {
		if ( matchy.index === regex.lastIndex ) {
			regex.lastIndex++;
		}
		matchy.forEach( ( match, groupIndex ) => {
			if ( groupIndex === first ) {
				pocketData.push(`${match}`)
			};
		})
	}
		return pocketData
}

module.exports = buildPockets