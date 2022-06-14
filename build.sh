#/bin/bash
trap "exit" INT TERM ERR
trap "kill 0" EXIT

node server.js &
bash run.sh &

wait