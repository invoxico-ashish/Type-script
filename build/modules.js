"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bike_1 = __importDefault(require("./bike"));
const car_1 = __importDefault(require("./car"));
let carObj = new car_1.default();
console.log(carObj.data);
console.log(bike_1.default);
