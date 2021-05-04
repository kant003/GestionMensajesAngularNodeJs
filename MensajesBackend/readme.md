npm init
npm install express
npm install mongoose
npm install dotenv
npm install cors
npm install morgan
npm install -g nodemon

docker run --name mongo -d -p 27017:27017 mongo
docker stop mongo
docker start mongo
docker exec -it mongo mongo
 > show dbs
 > use mensajes
 > db.mensajes.insert( {msg:'hola', user:'Pedro'} )
 > db.mensajes.insert( {msg:'Buenos dias', user:'Pedro'})
 > db.mensajes.find()
 > exit

