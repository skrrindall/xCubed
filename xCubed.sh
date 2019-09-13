#!/bin/bash

# Restart Command
if [ "$1" == "restart" ]
then
  pm2 restart xCubed
  # Shows the logs
  elif [ "$1" == "logs" ]
  then
    pm2 logs xCubed
    else
    printf "Commands\n\n"logs   :   Shows the bot logs\nrestart   :   Restarts the bot\n\n"
   fi
