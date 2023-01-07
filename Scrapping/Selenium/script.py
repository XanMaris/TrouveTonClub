from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from time import sleep
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.headless = True
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

driver.set_page_load_timeout(600)


def getComiteLinks():
    global driver

    linksComite = {}
    driver.get('http://resultats.ffbb.com/comites.html')

    l = driver.find_elements(By.CLASS_NAME,'tableau')

    for element in l:
        link = element.get_attribute("href")
        text = element.text
        if(link is not None and link not in linksComite.values()):
            linksComite[text]=link
            print("add comite : " + text)

    return linksComite

linksComite = getComiteLinks()
# print(linksComite)
# linksComite = {'0001': 'https://resultats.ffbb.com/organisation/7eb.html'}
def getLinksClubs(linksComite):
    global driver
    linksClubs = {}
    for value in linksComite.values():
        driver.get(value)
        try:
            WebDriverWait(driver, 30).until(EC.frame_to_be_available_and_switch_to_it((By.ID,"idIframeOrganismeFils")))
            l = driver.find_elements(By.CLASS_NAME,'tableau')
            for element in l:
                link = element.get_attribute("href")
                text = element.text
                if(link is not None and link not in linksClubs.values()):
                    linksClubs[text]=link
                    print("add club : " + text)
        except:
            print("can't find links for comite : " + value)
    return linksClubs
linksClubs = getLinksClubs(linksComite)
#linksClub={'ARA0001001': 'https://resultats.ffbb.com/organisation/2a84.html'}
def getClubsInfo(linksClubs):
    global driver
    clubs = []
    for value in linksClubs.values():
        try:
            club={}
            driver.get(value)
            organisme  = driver.find_element(By.ID,'idTdOrganisme')
            # for element in organisme.text.split():
            #     if(element)
            # while()
            organismeParse = organisme.text.split("\n")
            club["nom"]=organismeParse[0]
            club["adresse"]=organismeParse[1]
            club["ville"]=organismeParse[2]
            club["telephone"]=organismeParse[3]
            club["email"]=organismeParse[4]
            club["site"]=organismeParse[5]
            clubs.append(club)
            print("add info for club : "+club["nom"])
        except:
            print("can't find info for club : " + value)
    return clubs

print(getClubsInfo(linksClubs))
# linksComite["ILES-SOUS-LE-VENT DE BASKET-BALL"] = "https://resultats.ffbb.com/organisation/8d9095695.html"
# print(linksComite)


# for comite in linksComite:
#     driver.get(linksComite[comite])
#     sleep(2)
#     l = driver.find_elements(By.CLASS_NAME,'liste')
#     print(l)
#     for element in l:
#         print(element.text)
#         print(element.get_attribute("href"))


    # elem = l.find_elements(By.XPATH, "//text[contains(text(), 'ARA')]")
    # for element in elem:
        # print(element.text)
    # print(elem)

print("done")
driver.close()