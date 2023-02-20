const allas = ['nyugati', 'Zugló', 'Kőbányi-Kispest', 'Ferihegy', 'Vecsés',
    'Üllő', 'Monor', 'Monorierdő', 'Pilis', 'Albertirsa', 'Ceglédbercel',
    'Cegléd', 'Abony', 'Szolnok', 'Szajol', 'Törökszentmikós', 'Fegyvernek-Örményes',
    'Kisújszállás']

function kiir(megallo) {
    var p = allas.findIndex(item =>
        allas.toLowerCase() === item.toLowerCase())
    var r = "";

    if (p == -1) 
    {
        r = "nincs ilyen megálló ezen a vonalon"
    }
    else 
    {
        if (p != 0) {
            r += "Előtte: " + allas[p - 1];
        }
        else {
            r += "előtte: -"
        }
        r+="<br>"

        if (p == allas.length - 1) {
            r += "utánna: -"

        }
        else {
            r += "Utánna: " + allas[p + 1]
        }
    }
return r;

    }

    function keres()
    {
        var anev = document.getElementById("allask").value.toLowerCase();
        document.getElementById("ered").innerHTML += kiir(anev)
    }
