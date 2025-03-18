#!/bin/sh
#for Debian/Ubuntu:

#install rabbitmq server
#sudo apt-get update
#sudo apt-get install rabbitmq-server

# check status
#systemctl status rabbitmq-server

sudo docker pull rabbitmq:3-management

sudo docker run -d --name rabbitmq-container -p 5672:5672 -p 15672:15672 rabbitmq:3-management


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