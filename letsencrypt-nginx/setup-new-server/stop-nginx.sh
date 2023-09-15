#!/bin/sh

cd nginx-letsencrypt && docker-compose down

cd ../phpmyadmin && docker-compose down

exit;
