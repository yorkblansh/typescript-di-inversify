"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myContainer = void 0;
var inversify_1 = require("inversify");
require("reflect-metadata");
var types_1 = require("./types");
var dog_1 = require("./dog");
var myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
//myContainer.bind<IOutput>(TYPES.IOutput).to(CliOutput);
myContainer.bind(types_1.TYPES.Dog).to(dog_1.Dog);