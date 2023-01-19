from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from time import sleep
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
import requests

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.headless = True
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

driver.set_page_load_timeout(800)

def removeWhiteSpaces(text):
    whiteSpace = True
    i=-1
    while whiteSpace:
        whiteSpace=text[i+1]== " "
        i+=1
    return text[i:]

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

#linksComite = getComiteLinks()
# print(linksComite)
linksComite = {'0001': 'https://resultats.ffbb.com/organisation/7eb.html'}
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
#linksClubs = getLinksClubs(linksComite)
linksClubs={'ARA0001001': 'https://resultats.ffbb.com/organisation/2a84.html'}
    
def getClubInfo(clubLink):
    global driver
    club={}

    try:
        driver.get(clubLink)
        organisme  = driver.find_element(By.ID,'idTdOrganisme')
        # Organisme info
        organismeParse = organisme.text.split("\n")
        club["nom"]=organismeParse[0]
        club["adresse"]=organismeParse[1]
        club["ville"]=organismeParse[2]
        club["telephone"]=organismeParse[3]
        club["email"]=organismeParse[4]
        club["site"]=organismeParse[5]
        
        # Get salle info
        WebDriverWait(driver, 30).until(EC.frame_to_be_available_and_switch_to_it((By.ID,"idIframeSalle")))
        salleElement=driver.find_elements(By.CLASS_NAME,'p140')
        infoSalle=[]
        for element in salleElement:
            infoSalle.append(removeWhiteSpaces(element.text))
        club["salle"]=infoSalle

        # Get direction info
        driver.switch_to.default_content()
        WebDriverWait(driver, 30).until(EC.frame_to_be_available_and_switch_to_it((By.ID,"idIframeDirection")))
        directionInfo = driver.find_elements(By.CLASS_NAME,'p120')
        directionNames = driver.find_elements(By.CLASS_NAME,'bolder')
        direction = {}
        for element in directionNames:
            direction[str(element.text)]=[]
        key=list(direction.keys())[0]
        for element in directionInfo:
            if('vertical-align' not in element.get_attribute('style')): # maybe use child number instead
                if('bolder' in element.get_attribute('class')):
                    key = element.text
                else:         
                    direction[key].append(removeWhiteSpaces(element.text))    
        club["direction"]=direction
        driver.switch_to.default_content()
        
        # Get equipe info
        WebDriverWait(driver, 30).until(EC.frame_to_be_available_and_switch_to_it((By.ID,"idIframeEngagement")))
        # print(driver.page_source)
        equipeElement=driver.find_elements(By.TAG_NAME,'a')
        equipes=[]
        for element in equipeElement:
            equipes.append(removeWhiteSpaces(element.text))
        club["equipes"]=equipes
           
    except Exception as e:
        print("can't find info for club : " + clubLink)
        print(repr(e))
        raise(e)
    return club


def insertClubs(linksClubs):
    for value in linksClubs.values():
        club = getClubInfo(value)
        dump = json.dumps(club)
        print(dump)
        
        # try:
        #     r = requests.post("http://localhost:3001/api/clubs", data=dump, headers={'Content-Type': 'application/json'})
        #     print(r)
        #     if(r.status_code != 204):
        #         print("error with API : " + r.text)
        #     else:
        #         print("add info for club : "+club["nom"])
        # except(requests.exceptions.RequestException) as e:
        #     print("error with API : ")
        #     print(e)
        
insertClubs(linksClubs)
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