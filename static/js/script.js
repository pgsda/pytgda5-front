console.log("Czesc, JS!");
var naszDiv = document.getElementsByTagName("div")[0];

naszDiv.innerHTML = "Odliczanie: ";

var naszObj = {
    jakisKlucz: "jakasWartosc",
    innyKlucz: "innaWartosc"
};

naszDiv.innerHTML += naszObj.jakisKlucz;

function wpiszLiczby(ileLiczb, jakiElement) {
    for(var i = 0; i < ileLiczb; i++) {
        jakiElement.innerHTML += i;
    }
}

function wypiszLiczbyWNaszymDiv() {
    wpiszLiczby(20, naszDiv);
}

// wpiszLiczby(20, naszDiv);

naszDiv.addEventListener("click", (element) => {
    wpiszLiczby(20, element.path[0]);
});
