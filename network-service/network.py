import redis
import psutil
import threading, time, json

try:
    r = redis.Redis(
        host='localhost',
        port=6379,
    )
except Exception as e:
    print(e)


def fetch_network(): 
    network = {
        "network": {
            "counters": "{:.2f}".format(psutil.net_io_counters().bytes_recv/1024/1024),
            # "connections": str(psutil.net_connections('tcp')),
            # "addrs": str(psutil.net_if_addrs()),
        }
    }

    final = json.dumps(network, separators=(',', ':'))
    r.set('network', str(network))


INTERVAL = 1

stop_event = threading.Event()
while not stop_event.wait(INTERVAL):
    fetch_network()