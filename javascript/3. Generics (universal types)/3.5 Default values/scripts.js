"use strict";
/** Default values **/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function request(url) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
var data = request('');
