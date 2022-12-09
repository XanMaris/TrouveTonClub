var listeComite = [];


 function PremierProg() {
    var page = require('webpage').create();
    var url = 'https://resultats.ffbb.com/comites.html';
    var listeLien = [];
    tab = [];
    page.open(url, function () {

        tab = page.evaluate(function () {

            table = document.getElementsByClassName('liste')[0];
            var maliste = [];
            var tablien = [];
            var u = 0;

            for (var i = 1, row; row = table.rows[i]; i++) {
                //rows would be accessed using the "row" variable assigned in the for loop

                maliste[u] = table.rows[i].cells[1].innerText;
                if (table.rows[i].cells[1].getElementsByTagName("a")[0].href == undefined) {
                    tablien[u] = "";
                } else {
                    tablien[u] = table.rows[i].cells[1].getElementsByTagName("a")[0].href.toString();
                }
                u++;
            }
            return { 'liste': maliste, 'lien': tablien }

        });
        listeComite = tab.liste;
        listeLien = tab.lien;
        console.log(listeLien);
        phantom.exit();
    });
    return listeLien;
}


 function deuxiemeProg(url) {
    var tabClub = [];
    var page = require('webpage').create();

    page.open(url, function () {
        tabClub = page.evaluate(function () {

            table = document.getElementById("idIframeOrganismeFils").contentDocument.getElementsByClassName('liste')[0];
            var maliste2 = [];
            var tablien2 = [];
            var u = 0;

            for (var i = 1, row; row = table.rows[i]; i++) {
                //rows would be accessed using the "row" variable assigned in the for loop
                if(table.rows[i].cells[2] === undefined)
                {
                    maliste2[u] ="";
                }
                else
                {
                    maliste2[u] = table.rows[i].cells[2].innerText;
                }
                if (table.rows[i].cells[2].getElementsByTagName("a")[0].href == undefined) {
                    tablien2[u] = "";
                } else {
                    tablien2[u] = table.rows[i].cells[1].getElementsByTagName("a")[0].href;
                }
                u++;
            }
            return { 'liste': maliste2, 'lien': tablien2 }

        });
        console.log(tabClub.lien);
        phantom.exit();
    });
}

var listeLien = ["https://resultats.ffbb.com/organisation/7eb.html","https://resultats.ffbb.com/organisation/802.html"];
// while(!verrou)
// {}

// for (i=0;i<listeLien.length;i++)
// {
     deuxiemeProg("https://resultats.ffbb.com/organisation/7eb.html");
// }




