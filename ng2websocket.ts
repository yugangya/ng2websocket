/// <reference path="../../node_modules/angular2/core.d.ts" />
import {Injectable} from '../../node_modules/angular2/core';

type onMessageCallback = (buf: ArrayBuffer|string) => void;
type onOpenCallback = () => void;
type onCloseCallback = () => void;
type onErrorCallback = () => void;


@Injectable()
export class ng2websocket {

  private ws: WebSocket;
  private _nowMs: number;

  private connect(){
    this.ws=new WebSocket(this.addr,this.proto);
    this.ws.binaryType="arraybuffer";
    this.ws['self']=this;


    this.ws.onmessage=function(event){
      this.self._onMessage(event.data)
    };

    this.ws.onopen=function(event){
      console.log("WebSocket connection Success");
      this.self._nowMs=100;
      this.self._onOpen();
    };

    this.ws.onclose=function(event){
      console.log("reconnect",this.self.addr,"in",this.self._nowMs,"ms");
      this.self._onClose();
      let self=this.self;
      setTimeout(function(){
        self.connect();
      },this.self._nowMs);
      this.self._nowMs=this.self._nowMs*2;

      if(this.self._nowMs>this.self.reconnectMaxTimeS*1000){
        this.self._nowMs=this.self.reconnectMaxTimeS*1000;
      }
    };

    this.ws.onerror=function(event){
      console.log("WebSocket connection Error");
      this.self._onError();
    };


  }



  constructor(private addr: string, private proto: string, private reconnectMaxTimeS: number,
    private _onMessage: onMessageCallback,private _onOpen: onOpenCallback,
    private _onClose: onCloseCallback,private _onError: onErrorCallback
  ){
    this._nowMs=100;
    this.connect();

  }

  send(buf: ArrayBuffer|string){
    this.ws.send(buf);
  }

  close(){
    this.ws.close();
  }




}
