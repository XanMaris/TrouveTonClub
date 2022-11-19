from cgitb import text
from bs4 import BeautifulSoup;
import urllib.request, urllib.error, urllib.parse


import requests


url = requests.get("https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Club_de_basket-ball_en_Provence-Alpes-C%C3%B4te_d%27Azur")

# PORTION DE CODE QUI S OCCUPE D AVOIR LE NOM ET LE SITE WEB DU CLUB
htmltext = url.text
nomClub = []
tabLien = []
info_club = []
nomCLub = []
titre =""

soup = BeautifulSoup(htmltext, 'html.parser')

baliseCLub = soup.find('div', class_='mw-category mw-category-columns').findAll('a')

for club in baliseCLub:
    if 'href' in club.attrs:
        tabLien.append("https://fr.wikipedia.org/"+club.attrs['href']) 
        nomClub.append(club.text)

#print(nomClub)
#print(tabLien)

def getClubInfo(url):
    url2 = requests.get(str(url))
    soup = BeautifulSoup(url2.text, 'html.parser')
    domTable = soup.find('div', class_='infobox_v3 noarchive').find('table').find('tbody')
    clubInfoAttribute = []
    clubInfoValue = []
    for tr in domTable.findAll("tr"):
        if(tr.find("th") != "\n  "):
            clubInfoAttribute.append(tr.find("th").text)
            clubInfoValue.append(tr.find("td").text)
    print(clubInfoValue)

# PORTION DE CODE D OUVRIR LES LIENS DE CHAQUE CLUB POUR EN DEDURIE LES INFO 


getClubInfo(tabLien[0])
#for lien in tabLien :
    
    
    #url2 = requests.get(str(lien))
    #soup = BeautifulSoup(url2.text, 'html.parser')
    #info_club.append(soup.find('div', class_='infobox_v3 noarchive').find('table').find_all('td'))

    #print(info_club)

    #for info in info_club :

     #       balise_td = info.findAll('td')
      #      print(balise_td)
       #     for a in balise_td:
        #        nomCLub.append(a.text)

           # print(nomCLub)









