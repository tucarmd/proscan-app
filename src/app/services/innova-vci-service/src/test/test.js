"use strict";
exports.__esModule = true;
var DataParser = require("./../utilities/dataParser");
var _ = require("lodash");
function sumdata(data) {
    var cs = 0;
    data.map(function (t) {
        cs += t;
        return t;
    });
    cs &= 0xff;
    return cs;
}
var data = [1, 2, 3, 4];
var cs = sumdata(data);
data.push(cs);
console.log(data, DataParser.bytesToHexString(data, true));
console.log(_.VERSION);
console.log(_.isEmpty([1]));
var a = "{a:1}";
JSON.parse(a);
console.log(data, DataParser.bytesToInt([1, 2, 3]));
