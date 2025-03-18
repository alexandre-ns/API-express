#!/bin/sh

DBCONTAINER="mongodb"
NAMEDB=""

sudo docker pull mongo

# local
sudo docker run --name $DBCONTAINER -d -p 27017:27017 mongo 

sudo docker start $DBCONTAINER

sudo docker exec -it $DBCONTAINER mongosh

#mongosh, check "show dbs"
#use $DBCONTAINER