#!/usr/bin/env node
const fs    = require( "fs" );
const path  = require( "path" );
const plist = require( "plist" );

const projectName  = "ProScan 2.0";
const audioKey = 'audio';

module.exports = context => {
	const plistPath = path.resolve( context.opts.projectRoot, "platforms", "ios", projectName, `${projectName}-Info.plist` );

	if( !fs.existsSync( plistPath ) ) {
		console.log( `'${plistPath}' does not exist. Overriding UIBackgroundModes is skipped.` );
		return;
	}

	const plistContent = plist.parse( fs.readFileSync( plistPath, "utf-8" ) );

    if( !plistContent || !plistContent.UIBackgroundModes ) return;
    console.log( '' );
    console.log( '## BEGIN REMOVE "audio" KEY FROM UIBackgroundModes ##' );
		//console.log( '----------' );
    console.log( `UIBackgroundModes Before: ${JSON.stringify( plistContent.UIBackgroundModes )}` );
    plistContent.UIBackgroundModes = plistContent.UIBackgroundModes.filter( function( item ) {
        return item !== audioKey
    });
    console.log( `UIBackgroundModes After: ${JSON.stringify( plistContent.UIBackgroundModes )}` );
		//console.log( '----------' );
    console.log( '## END REMOVE "audio" KEY FROM UIBackgroundModes ##' );
		console.log( '' );

    //const plistData = Object.assign( {}, plistContent, plistChanges );
	fs.writeFileSync( plistPath, plist.build( plistContent, {
		indent : "\t",
		offset : -1
	} ), "utf-8" );/** */
}
