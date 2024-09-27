#!/usr/bin/env node
const fs    = require( "fs" );
const path  = require( "path" );
const plist = require( "plist" );

const projectName  = "ProScan 2.0";
const cameraUsageDescription = 'This app uses your camera to capture your VIN.';
const bluetoothUsageDescription = 'This app uses bluetooth to connect Pro15\'s tools.';
const locationWhenInUseUsageDescription = 'This app requires access to your location to get the connected Bluetooth name.';

module.exports = context => {
	const plistPath = path.resolve( context.opts.projectRoot, "platforms", "ios", projectName, `${projectName}-Info.plist` );

	if( !fs.existsSync( plistPath ) ) {
		console.log( `'${plistPath}' does not exist. Overriding UsageDescriptions is skipped.` );
		return;
	}

	const plistContent = plist.parse( fs.readFileSync( plistPath, "utf-8" ) );

    if( !plistContent || !plistContent.NSCameraUsageDescription ) return;
    
    console.log( '' );
    console.log( '## BEGIN OVERRIDING UsageDescriptions ##' );

    console.log( '----------' );
    console.log( `NSCameraUsageDescription Before: ${JSON.stringify( plistContent.NSCameraUsageDescription )}` );
    plistContent.NSCameraUsageDescription = cameraUsageDescription;
    console.log( `NSCameraUsageDescription After: ${JSON.stringify( plistContent.NSCameraUsageDescription )}` );

    console.log( '----------' );
		console.log( `NSBluetoothPeripheralUsageDescription Before: ${JSON.stringify( plistContent.NSBluetoothPeripheralUsageDescription )}` );
    plistContent.NSBluetoothPeripheralUsageDescription = bluetoothUsageDescription;
    console.log( `NSBluetoothPeripheralUsageDescription After: ${JSON.stringify( plistContent.NSBluetoothPeripheralUsageDescription )}` );
		
    console.log( '----------' );
		console.log( `NSBluetoothAlwaysUsageDescription Before: ${JSON.stringify( plistContent.NSBluetoothAlwaysUsageDescription )}` );
    plistContent.NSBluetoothAlwaysUsageDescription = bluetoothUsageDescription;
    console.log( `NSBluetoothAlwaysUsageDescription After: ${JSON.stringify( plistContent.NSBluetoothAlwaysUsageDescription )}` );

    console.log( '----------' );
		console.log( `NSLocationWhenInUseUsageDescription Before: ${JSON.stringify( plistContent.NSLocationWhenInUseUsageDescription )}` );
    plistContent.NSLocationWhenInUseUsageDescription = locationWhenInUseUsageDescription;
    console.log( `NSLocationWhenInUseUsageDescription After: ${JSON.stringify( plistContent.NSLocationWhenInUseUsageDescription )}` );

    console.log( '----------' );
    console.log( '## END OVERRIDING UsageDescriptions ##' );
    console.log( '' );

    //const plistData = Object.assign( {}, plistContent, plistChanges );
	fs.writeFileSync( plistPath, plist.build( plistContent, {
		indent : "\t",
		offset : -1
	} ), "utf-8" );/** */
}
