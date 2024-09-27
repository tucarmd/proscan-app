/*
*Handle respones data buffers
* */

import { Injectable, EventEmitter } from '@angular/core';
import { NotifyService } from './../utilities/notify.service'
import { BufferResp } from './BufferResp'
import * as DataParser from './../utilities/dataParser'
@Injectable({
  providedIn: 'root'
})

export class Response {
  private currentResponse

  constructor(private Logger: NotifyService) {
    this.currentResponse = null
  }

  private ensurePayload(payload) {
    return payload && payload.slice(0, payload.length - 1)
  }

  /**
   * Process a given buffer and then returns response if completed, otherwise returns null
   */
  public parseResponse(buffer, command) {

    if (!command) {
      return {
        command: 'Unknown',
        error: 'Unexpected data received',
        payload: buffer
      }
    }
    /*
      Fix bug drop package data
    */
    //If there is a pending response, just append data
    if (!this.currentResponse || (this.currentResponse.command !== command.id)) {
      // rule: response command id must equal request command id + 1
      if (!this.currentResponse) {

          this.currentResponse = new BufferResp(buffer, (logt) => {
            this.Logger.log(logt)
          });
        if (buffer && (buffer[1] === 0x81)) { //response in JSON format , Pro34
          this.currentResponse['isJSON'] = true;
        }
      }
      else if (this.currentResponse && this.currentResponse.isJSON) {
        this.currentResponse.appendData(buffer)
      }
      else {
        // kind of unknown response, just skip it
        return null
      }
    }
    else if (this.currentResponse.command === command.id) {
      this.currentResponse.appendData(buffer)
    }

    //If response is completed constructed, remove from pending list
    //And returns the response, otherwise returns null
    if (this.currentResponse.isCompleted && this.ensurePayload(this.currentResponse.payload)) {
      let res = this.currentResponse

      // if ((this.currentResponse.isJSON || command.isVCIMode) && (res.payload.length > 4))
      // {
      //   res.status = res.payload[4];
      //   res.payload = res.payload.slice(5);/*4bytes length , 1byte status , <data>*/
      // }

      this.currentResponse = null

      //console.log('payload----------------------', bytesToHexString(res.payload))
      return {
        command: res.command,
        error: res.error,
        payload: res.payload,
        status: res.status
      }
    }

    return null
  }

  /**
   * When error occurs reset the current response
   */
  public resetResponse() {

    this.currentResponse = null
  }
}