from cgitb import text
from bs4 import BeautifulSoup;
import urllib.request, urllib.error, urllib.parse

url = "https://resultats.ffbb.com/comites.html"

import requests


url = requests.get('https://resultats.ffbb.com/organisation/7eb.html')

htmltext = url.text

print(htmltext)
'''
print(htmltext)
'''

# soup = BeautifulSoup(htmltext, 'html.parser')

# for tag in soup.find_all(class_="liste") :
#     print(tag)



    
# soup2 = BeautifulSoup(text
# , 'html.parser') 

# for link in soup2.find_all('a'):
#     print(link.text)
# '''
