console.log("Czesc, JS!");
var naszDiv = document.getElementsByTagName("div")[0];

naszDiv.innerHTML = "Odliczanie: "

for(var i = 0; i < 10; i++) {
    naszDiv.innerHTML += i;
}
