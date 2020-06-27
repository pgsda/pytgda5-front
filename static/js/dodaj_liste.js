var naszDiv = document.querySelector("div");

// naszDiv.innerHTML = "<ul></ul>";

// var naszUl = document.querySelector("div ul");

// for(var i = 0; i < 10; i++) {
//     naszUl.innerHTML += "<li>" + i + "</li>";
// }

var noweUl = document.createElement("ul");

for(var i = 0; i < 10; i++) {
    var noweLi = document.createElement("li");
    noweLi.innerHTML = i;
    noweUl.appendChild(noweLi);
}

naszDiv.appendChild(noweUl);
