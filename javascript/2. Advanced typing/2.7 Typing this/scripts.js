"use strict";
/** Typing this **/
var user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
// <button onClick="myClickHandler(`something`)">Click!</button>
function myClickHandler(event, something) {
    this.disabled = true;
}
