var page = require('webpage').create();
var url = 'https://resultats.ffbb.com/comites.html';
var tableau_Region = [];
tab = [];
listeComite = [];
listeLien = [];
page.open(url, function() {

    tab = page.evaluate(function() {

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
                tablien[u] = table.rows[i].cells[1].getElementsByTagName("a")[0].href;
            }
            u++;
        }
        return { 'liste': maliste, 'lien': tablien }

    });



    listeComite = tab.liste
    listeLien = tab.lien
    phantom.exit();
});

for (let i = 0; i < listeLien.length; i++) {
    page.open(listeLien[i], function() {
        tab = page.evaluate(function() {
            liste = document.documentElement.getElementsByClassName('liste')[0];
            var maliste = [];
            var tablien = [];
            var u = 0;

            for (var i = 1, row; row = table.rows[i]; i++) {
                //rows would be accessed using the "row" variable assigned in the for loop

                maliste[u] = table.rows[i].cells[1].innerText;
                if (table.rows[i].cells[1].getElementsByTagName("a")[0].href == undefined) {
                    tablien[u] = "";
                } else {
                    tablien[u] = table.rows[i].cells[1].getElementsByTagName("a")[0].href;
                }
                u++;
            }
            return { 'liste': maliste, 'lien': tablien }
        });
    });



    console.log(tab.lien);

}