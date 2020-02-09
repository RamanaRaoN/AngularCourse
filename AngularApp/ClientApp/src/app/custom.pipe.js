"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { Pipe, PipeTransform } from "@angular/core";
//@Pipe({
//    name: 'shorten'
//})
//export class customPipe implements PipeTransform {
//    transform(value: any) {
//        if (value > 10) {
//            return value.substr(0, 5) + '...';
//        }
//        return value;
//    }
//}
var customPipe = /** @class */ (function () {
    function customPipe() {
    }
    customPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value.length > 10) {
            return value.substr(0, 6) + '...';
        }
        else {
            return value;
        }
    };
    return customPipe;
}());
exports.customPipe = customPipe;
//# sourceMappingURL=custom.pipe.js.map