# Angular 2 Websocket



## How do I add this to my project?

You can download ng2websocket by:

* Using npm and running `npm install ng2websocket --save`
* Downloading it manually by clicking [here to download development unminified version](https://raw.github.com/vanishs/ng2websocket/master/ng2websocket.ts)

## Import
* import {ng2websocket} from 'ng2websocket/ng2websocket';

## Usage



## API

### Methods

name        | arguments                                              | description
------------|-------------------------------------------------------------------------------------------------------|------------
ng2websocket <br>_constructor_ | addr:String,proto:string,reconnectMaxTimeS:number,<br>onMessage,onOpen,onClose,onError | Creates and opens a [WebSocket] instance. <br>ws = new ng2websocket("ws://addr","proto",30,<br>      (data)=>{this.onMessage(data);},<br>      ()=>{this.onOpen();},<br>      ()=>{this.onClose();},<br>      ()=>{this.onError();}<br>      );
send        | data:String|ArrayBuffer                                                                               | send data
close       |                                                                                                       | Close the underlying socket,



## TODO



## License
