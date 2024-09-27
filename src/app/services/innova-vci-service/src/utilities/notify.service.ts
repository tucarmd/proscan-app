import { Injectable, EventEmitter, Output } from '@angular/core';
import { EnumNotify,NotifyDataType } from '../standard/enums'
import { Observable } from 'rxjs';
import { isArray } from 'util';
import * as DataParser from './dataParser'
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  public Event: EventEmitter<NotifyDataType> = new EventEmitter<NotifyDataType>()

  constructor() {

  }

  log(t): void {
    this.Event.emit({
      tag: EnumNotify.NOTIFY_DEBUG_LOG,
      data: t // ngoclb: no need log timestamp here
    })
  }

  logComTx(t):void{
    if(isArray(t))
    {
      t = DataParser.bytesToHexString(t)
    }

    this.Event.emit({
      tag: EnumNotify.NOTIFY_DEBUG_LOG_COM_TX,
      data: t
    })
  }

  logComRx(t,f?: boolean):void{
    if(isArray(t))
    {
      t = DataParser.bytesToHexString(t)
    }
    this.Event.emit({
      tag: f ? EnumNotify.NOTIFY_DEBUG_LOG_COM_RX_RX : EnumNotify.NOTIFY_DEBUG_LOG_COM_RX,
      data: t
    })
  }

  notify(t:NotifyDataType):void{
    this.Event.emit(t)
  }

  notifyResponse(data)
  {
    this.notify({
      tag:EnumNotify.NOTIFY_VCI_DATA_RESPONSE,
      data
    })
  }

}
