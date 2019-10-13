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



-- dotenv
me permite almacenar de una forma segura las credenciales de las conexiones de la db de una forma segura

1.  npm i dotenv

sudo systemctl start mongodb
sudo systemctl stop mongodb
sudo systemctl status mongodb

https://zocada.com/setting-mongodb-users-beginners-guide/

2. npm i mongo


https://www.techrunnr.com/install-robomongo-robo-3t-on-ubuntu-18-04/


mutation siempre va a transportar información 


-- postgres
UPDATE course
SET students = students || '["newString"]'::jsonb
WHERE uuid_course='49f23ec9-5532-4415-8928-07d4cb38178c'



UPDATE course
SET students =  ('{"id":123}')
WHERE uuid_course = '49f23ec9-5532-4415-8928-07d4cb38178c' returning *


To add the value use the JSON array append opperator (||)

UPDATE jsontesting
SET jsondata = jsondata || '["newString"]'::jsonb
WHERE id = 7;
Removing the value looks like this

UPDATE jsontesting
SET jsondata = jsondata - "newString"
WHERE id = 7; 
Concatenating to a nested field looks like this

UPDATE jsontesting
SET jsondata = jsonb_set(
  jsondata::jsonb,
  array['nestedfield'],
  (jsondata->'nestedfield')::jsonb || '["newString"]'::jsonb) 


  -- Para evitar que se actualicen todos los campos
  https://stackoverflow.com/questions/21759852/easier-way-to-update-data-with-node-postgres
