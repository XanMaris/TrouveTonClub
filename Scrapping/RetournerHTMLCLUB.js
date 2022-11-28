var page = require('webpage').create();
var url = 'https://resultats.ffbb.com/comites.html';
var tableau_Region = [];
var liste = [];
tabLien = [];
page.open(url, function() {

    liste = page.evaluate(function() {
        var maListe = []
        maListe = document.getElementsByClassName('gauche');

        return maListe;
    })

    for (i = 0; i < liste.length; i++) {
        console.log(liste[i]);
    }
    phantom.exit();

});



// for (i = 1; i < liste.length; i + 2) {
//     tabComite = liste[i].innerText;
//     tabLien = liste[i].InnerHTML;
//     console.log(tabLien);
// }