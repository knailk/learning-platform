#!/bin/sh
 
cd nginx-letsencrypt && docker-compose up --build -d

# cd ../phpmyadmin && docker-compose up --build -d

exit;
