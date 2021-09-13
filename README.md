sudo docker run \
 --name mysql \
 -e MYSQL_ROOT_PASSWORD=meusegredao \
 -p 3306:3306 \
 -d \
 mysql

sudo docker run \
 --name adminer-mysql \
 -p 8080:8080 \
 --link mysql:mysql \
 -d \
 adminer
