#!/bin/sh
#for Debian/Ubuntu:

#install rabbitmq server
sudo apt-get update
sudo apt-get install rabbitmq-server

# check status
systemctl status rabbitmq-server


# start rabbitmq -> start rabbitmq temporarily
# sudo systemctl start rabbitmq-server
#
# activate rabbitmq -> start rabbitmq every time the system boots
# sudo systemctl enable rabbitmq-server
#
# only disables rabbitmq
# sudo systemctl stop rabbitmq-server
#
# disable rabbitmq autostart
# sudo systemctl disable rabbitmq-server