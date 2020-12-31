import psutil
import redis
import threading, time, json


try:
    r = redis.Redis(
        host='localhost',
        port=6379,
    )
except Exception as e:
    print(e)


def fetch_cpu(): 
    ct = psutil.cpu_times()
    data = []
    for i in range(0, len(ct)):
        data.append([ct._fields[i], ct[i]])
    cpu = {
        "cpu": {
            "freq": str(psutil.cpu_freq().current),
            "percent": str(psutil.cpu_percent()),
            "userTimes": (data[0]),
            "systemTimes": (data[1]),
            "idleTimes": (data[2]),
        }
        
    }
    final = json.dumps(cpu, separators=(',', ':'))
    r.set('cpu', str(final))

INTERVAL = 1

stop_event = threading.Event()
while not stop_event.wait(INTERVAL):
    fetch_cpu()
