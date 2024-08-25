#!/bin/sh

DBCONTAINER=""
NAMEDB=""

docker pull mongo

# local
docker run --name $DBCONTAINER -d -p 27017:27017 mongo 

docker start $DBCONTAINER

docker exec -it $DBCONTAINER mongosh

#mongosh, check "show dbs"
use $DBCONTAINER