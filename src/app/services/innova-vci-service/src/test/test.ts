import  * as DataParser  from './../utilities/dataParser';
import * as _ from 'lodash'
import {BufferResp} from './../command/BufferResp'
function sumdata(data)
{
  let cs =0;
  data.map(t=>{
    cs +=t;
    return t
  })
  cs &=0xff
  return cs
}
let data = [1,2,3,4]
let cs = sumdata(data)
data.push(cs)

console.log(data,DataParser.bytesToHexString(data,true))

console.log(_.VERSION)

console.log(_.isEmpty([1]))

let a = "{a:1}"
JSON.parse(a)
console.log(data, DataParser.bytesToInt([1,2,3]));