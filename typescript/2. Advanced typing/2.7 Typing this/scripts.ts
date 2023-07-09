/** Typing this **/
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
}

// <button onClick="myClickHandler(`something`)">Click!</button>
function myClickHandler(this: HTMLButtonElement, event:Event, something: string) {
    this.disabled = true;
}