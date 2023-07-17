"use strict";
/** Mapped types **/
Object.defineProperty(exports, "__esModule", { value: true });
const brandRecord = {
    apple: {
        name: 'Mac',
        country: 'USA',
        createdAt: new Date(),
    }
};
function pcCatalog(pcCatalog) {
    var _a;
    console.log((_a = pcCatalog.apple) === null || _a === void 0 ? void 0 : _a.country);
}
const p = {
    screen: window.screen
};
