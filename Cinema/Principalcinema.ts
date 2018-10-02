import {Controller} from "./Controller";

declare function require(msg : string) : any;
var readline = require('readline-sync');

let c : Controller = new Controller();

c.menu();