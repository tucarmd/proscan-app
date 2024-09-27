/*
 * Created by Truyen Nguyen.
 * Email: truyenn@carmd.com.
 * Date: 7/23/2018 (m/d/y).
 * Time: 10:47:38.
 * Copyright (c) 2018, CARMD.COM CORP, (http://carmd.com). All rights reserved.
 * Preference: Stefan Benicke <stefan.benicke@gmail.com> https://github.com/opusonline/uuid.js
 */

import {Injectable} from "@angular/core";

@Injectable()
export class UuidV4 {
	static uuid = function ():string {
		return this.create();
	};


	static create = function() {
		let bytes = this.createBinary();
		return this.parseBinary(bytes);
	};

	static createBinary = function():Uint8Array {
		let getRandomBytes = function():Uint8Array {
			let bytes = new Uint8Array(16);
			for (let i = 0; i < 16; i++) {
				bytes[i] = (Math.random() * 256) | 0;
			}
			return bytes;
		};

		// version 4
		let bytes = getRandomBytes();
		bytes[6] = bytes[6] & 0x0f | 0x40;
		bytes[8] = bytes[8] & 0x3f | 0x80;
		return bytes;
	};

	static parseBinary = function(bytes:Uint8Array):string {
		let result = '';
		let toHex = function(number):string {
			let hex = Number(number).toString(16);
			if (hex.length & 1) {
				return '0' + hex;
			}
			return hex;
		};
		for (let i = 0; i < 16; i++) {
			if (i === 4 || i === 6 || i === 8 || i === 10) {
				result += '-';
			}
			result += toHex(bytes[i]);
		}
		return result;
	};

	static parse = function(string):Uint8Array {
		let result = new Uint8Array(16);
		let charCount = 0;
		let toNumber = function(hex):number {
			return parseInt(hex, 16);
		};
		for (let i = 0; i < 16; i++) {
			if (i === 4 || i === 6 || i === 8 || i === 10) {
				charCount++;
			}
			result[i] = toNumber(string[charCount] + string[charCount + 1]);
			charCount += 2;
		}
		return result;
  };

  static isValid = (str: string) => {
    const REG_EX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return REG_EX.test(str);
  }
}
