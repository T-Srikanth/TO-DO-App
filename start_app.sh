#!/bin/bash

# start backend
echo "Starting backend..."
cd ~/TO-DO-App/backend
node server.js &

# start frontend
echo "Starting frontend..."
cd ~/TO-DO-App/frontend
npm start &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?