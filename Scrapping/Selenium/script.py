from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from time import sleep
options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
# options.add_experimental_option( 'headless', True)
options.headless = True
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)
driver.set_page_load_timeout(600)
driver.get('http://resultats.ffbb.com/comites.html')

l = driver.find_elements(By.CLASS_NAME,'tableau')
linksComite = {}

# A GARDER !
# for element in l:
#     link = element.get_attribute("href")
#     text = element.text
#     if(link is not None):
#         linksComite[text]=link
linksComite["ILES-SOUS-LE-VENT DE BASKET-BALL"] = "https://resultats.ffbb.com/organisation/8d9095695.html"
print(linksComite)
for comite in linksComite:
    driver.get(linksComite[comite])
    sleep(2)
    l = driver.find_elements(By.CLASS_NAME,'gauche')
    for element in l:
        print(element.text)
        print(element.get_attribute("href"))
    # elem = l.find_elements(By.XPATH, "//text[contains(text(), 'ARA')]")
    # for element in elem:
        # print(element.text)
    # print(elem)

print("done")
driver.close()
