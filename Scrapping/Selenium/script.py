from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from time import sleep
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.headless = True
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

driver.set_page_load_timeout(600)


def getComiteLinks():
    # TODO : 
    # BUGS : 
    #   * retourne trois element pour chaque comite 
    global driver

    linksComite = {}
    driver.get('http://resultats.ffbb.com/comites.html')

    l = driver.find_elements(By.CLASS_NAME,'tableau')

    for element in l:
        link = element.get_attribute("href")
        text = element.text
        if(link is not None):
            linksComite[text]=link

    return linksComite

linksComite = getComiteLinks()
# linksComite = {"COMITE DE L'AIN DE BASKET-BALL" :"https://resultats.ffbb.com/organisation/7eb.html"}
def getLinksClubs(linksComite):
    global driver
    linksClubs = {}
    for key, value in linksComite.items():
        driver.get(value)
        # sleep(2)
        WebDriverWait(driver, 30).until(EC.frame_to_be_available_and_switch_to_it((By.ID,"idIframeOrganismeFils")))
        l = driver.find_elements(By.CLASS_NAME,'tableau')
        print(l)
        for element in l:
            link = element.get_attribute("href")
            text = element.text
            if(link is not None):
                linksClubs[text]=link
            print(element.text)
            print(element)
    return linksClubs
print(getLinksClubs(linksComite))
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