import os


session_storage[os.urandom(32).hex()] = 'admin' # username이 admin인 Session ID를 무작위로 생성
print(session_storage)