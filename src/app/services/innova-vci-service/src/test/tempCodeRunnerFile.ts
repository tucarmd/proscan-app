import  * as DataParser  from './../utilities/dataParser';
import * as _ from 'lodash'

let cmddata = _.concat([1,2,3,4,5],[7])
let shit = new Uint8Array([0x12,3,8,4,4,5,7])
console.log(cmddata,shit.toString())

let t = new ArrayBuffer(10);
for(let j=0;j<10;j++) t[j]=j;

console.log(t);

let c = new Uint8Array(t)
console.log('c',c)

let b = c.map(cc=>{
    return cc
})
console.log(b)
