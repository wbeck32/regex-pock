import newman from 'newman';
// Call newman.run to pass `options` object and wait for callback

newman.run( { collection: require( './pocket.postman_collection.json' ),
	reporters: 'cli' }, ( err ) => {
	if ( err ) {
		throw err;
	}
	console.log( 'collection run complete!' );
} );
