import { app, App} from "./main"


declare global {
  var app : App;
}

globalThis.app = app;