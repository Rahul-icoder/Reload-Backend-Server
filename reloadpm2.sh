#! /bin/sh
pm2 delete 0
cd /var/www/client/backend 
pm2 start index.js
