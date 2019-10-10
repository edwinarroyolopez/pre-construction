Esquema
---
Define detalladamente todos los tipos de información que va a tener el api
. tipo de campos


-- Pasos 
1. npm i -g npx
2. npx license mit > LICENSE && npx gitignore node && git init && npm init -y
3. npm i graphql



Queries
----
Me permite ejecutar un request al api para obtener información

Yo puedo pedir tantos campos como desee

/* resolvers 
    Debe tener propiedades que tiene que ser igual a la query!
    la función que está adentro se va a ejecutar cuándo llamen esa query

    Nota: Si yo defino una query nueva, yo debo definir otra función para ese resolvers

*/


-- Publicar 

1. npm i express express-graphql --save
2. npm i nodemon -D
3. npm i standard -D


Custom Types

-- Query
{
  getCourses{
    _id
    title
  }
}

-- Query
{
  getCourse(id:"anyid2") {
    _id
    title
    description
  }
}

-- dotenv
me permite almacenar de una forma segura las credenciales de las conexiones de la db de una forma segura

1.  npm i dotenv



sudo systemctl start mongodb
sudo systemctl stop mongodb
sudo systemctl status mongodb

https://zocada.com/setting-mongodb-users-beginners-guide/

2. npm i mongo


https://www.techrunnr.com/install-robomongo-robo-3t-on-ubuntu-18-04/
