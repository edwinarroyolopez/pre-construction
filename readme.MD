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
  getCourses {
    uuid_course
    title
    description
  }
}

{
  getCourse(uuid_course:"f5c4a820-3e76-4242-a7a9-891b94f7785b"){
    uuid_course
    title
    topic
    description
    teacher
  }
}


-- mutation
mutation {
  createCourse( input: {
    	title: "Example 5"
    	description: "Descripcion 6"
    	topic: "Programmin"
    	teacher: "aaaa"
  	}
  ) {
    title
    description
    teacher
    topic
  }
}

-- DELETE COURSE
mutation {
  deleteCourse(uuid_course:"9bf7df3a-318d-45df-8b89-fb5a8fd97100")
}


-- EDIT
 mutation {
  editCourse(uuid_course:"f5c4a820-3e76-4242-a7a9-891b94f7785b",
    input: {
    	title: "Example 4"
    	description: "New description4"
    	topic: "Diseño"
    	teacher: "teacher 4"
  	}
  ) {
    teacher
    topic
  }
}

--- Student

mutation {
  createStudent( input: {
    	name: "Pedro"
    	email: "pedro@yopmail.com"
  	}
  ) {
    uuid_student
    name
    email
  } 
}
-- EDIT STUDENT

mutation { 
  editStudent(uuid_student:"460f75cd-29d2-4d5c-a244-d1c7c53a67df", 
  	input: {
    name:"juanes"
    email:"juanes@yopmail.com"
  }){
  	name
    email
  }
  
}

-- GET ALL STUDENTS

{
  getStudents{
    uuid_student
    name
    email
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


mutation siempre va a transportar información 


-- postgres
UPDATE course
SET students = students || '["newString"]'::jsonb
WHERE uuid_course='49f23ec9-5532-4415-8928-07d4cb38178c'



UPDATE course
SET students =  ('{"id":123}')
WHERE uuid_course = '49f23ec9-5532-4415-8928-07d4cb38178c' returning *
