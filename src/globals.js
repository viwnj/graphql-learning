import EventEmitter from "events";
class MyEmitter extends EventEmitter {}

global.emitter = new MyEmitter();
emitter.on("write", data => {});
