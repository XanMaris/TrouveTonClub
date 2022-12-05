var listeComite = [];
var listeLien = [];
var tabClub = [];
function PremierProg()
{
    var page = require('webpage').create();
    var url = 'https://resultats.ffbb.com/comites.html';
    var tableau_Region = [];
    tab = [];
    
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
        listeComite = tab.liste;
        listeLien = tab.lien;
        console.log(listeLien);
        phantom.exit();
    });
}


function deuxiemeProg(url)
{
        var page2 = require('webpage').create();
        page2.open(url, function() {
            tabClub += page2.evaluate(function() {
                
               table =  document.findById("idIframeOrganismeFils").contentDocument.getElementsByClassName('liste')[0];
                var maliste = [];
                var tablien = [];
                var u = 0;

                for (var i = 1, row; row = table.rows[i]; i++) {
                    //rows would be accessed using the "row" variable assigned in the for loop

                    maliste[u] = table.rows[i].cells[2].innerText;
                    if (table.rows[i].cells[2].getElementsByTagName("a")[0].href == undefined) {
                        tablien[u] = "";
                    } else {
                        tablien[u] = table.rows[i].cells[2].getElementsByTagName("a")[0].href;
                    }
                    u++;
                }
                return { 'liste': maliste, 'lien': tablien }
            });
            console.log(tabClub.lien);
            phantom.exit();
        });
}


//PremierProg();
tabOui = ["https://resultats.ffbb.com/organisation/7eb.html","https://resultats.ffbb.com/organisation/7f3.html","https://resultats.ffbb.com/organisation/7f2.html"];
for (i=1;i<tabOui.length;i++)
{
    deuxiemeProg(tabOui[i]);
}