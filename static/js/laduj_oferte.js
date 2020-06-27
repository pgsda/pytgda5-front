// znalezienie ciała tabeli, do której będziemy doklejać wiersze
var tabela = document.querySelector("table tbody");

// nowy obiekt to obslugi HTTP
var xhttp = new XMLHttpRequest();

// Funkcja dodajaca rzeczy do koszyka
function dodaj_do_koszyka(id) {
    // wyciągamy koszyk z local storage
    var koszyk = localStorage.getItem("koszyk");

    // sprawdzamy, czy koszyk wgl istnieje
    if(koszyk != null && koszyk != undefined) {
        // jeśli tak - parsujemy
        koszyk = JSON.parse(koszyk);
    } else {
        // jeśli nie - przypisujemy pustą listę
        koszyk = [];
    }

    // dodajemy nowy element do naszego koszyka
    koszyk.push(id);

    // zapisujemy koszyk, który najpierw zapisujemy do JSON'a
    localStorage.setItem("koszyk", JSON.stringify(koszyk));

    // wypisujemy koszyk po zmianie:
    console.log(localStorage.getItem("koszyk"));
}

// nadpisanie metody onload, ktora zostanie wywolana, gdy polaczenie HTTP sie zakonczy
xhttp.onload = function () {
    // otrzymany tekst (JSON) parsujemy do tablicy
    var listaProduktow = JSON.parse(this.responseText);

    // dla każdego elementu tablicy
    for(var i = 0; i < listaProduktow.length; i++) {
        // nazwe produktu przypisujemy do zmiennej name
        var name = listaProduktow[i].name;
        // id produktu przypisujemy do zmiennej id
        var productId = listaProduktow[i].id;
        // cene produktu przypisujemy do zmiennej cena
        var price = listaProduktow[i].price

        // zamiast tworzyć całą masę węzłów (znaczników) z użyciem document.createElement
        // w tym przypadku rzeczywiście dużo łatwiej i ładniej posłyżyć się wieloliniowym stringiem.
        // taki string tworzymy z użyciem symbolu ` (ten sam klawisz co ~)
        var nowyWiersz = `
            <tr>
                <td>` + name + `</td>
                <td>` + price + `</td>
                <td>
                    <button onclick="dodaj_do_koszyka(` + productId + `)">Dodaj do koszyka</button>
                </td>
            </tr>
        `;
        // w tym przypadku, nie trzeba uciekać, dlatego że przekazujemy jako parametr liczbę,
        // która ciapków nie potrzebuje.

        // tak wygenerowany nowy wiersz możemy dokleić do ciała naszej tabeli
        tabela.innerHTML += nowyWiersz;
    }
};

// otwarcie i wykonanie połączenia do zasobu. UWAGA NA PORT!
xhttp.open("GET", "http://localhost:5500/lista_produktow.json", true);
xhttp.send();
