'use strict'

const pool = require('./db')
var uuid = require('uuid-random');

module.exports = {
   createCourse: async (root, { input })  => {
      let defaults = {
         teacher: '',
         topic: ''
      }

      const newCourse = Object.assign(defaults, input)
      console.log('newCourse',newCourse)
      let course

      try {
         const uid = uuid()
         const { title, teacher, description, topic } = newCourse
         console.log(title, teacher, description, topic)
         const client = await pool.connect()
         const { rows } = await client.query('INSERT INTO course (uuid_course,title,teacher,description,topic) values ($1, $2, $3, $4, $5)  returning *', [uid, title, teacher, description, topic])
         course = rows[0]

      } catch (error) {
          console.error(error)
      }
      return course
   },
   editCourse: async (root, { uuid_course, input } ) => {
      let course
      try {
         const { title, teacher, description, topic } = input   
         const client = await pool.connect()
         const { rows } = await client.query('UPDATE course SET title=$2, teacher=$3, description=$4, topic=$5 WHERE uuid_course=$1 returning *',[
            uuid_course, title, teacher, description, topic
         ])
         course = rows[0]
      } catch (error) {
         console.error(error)
      }
      return course
   },
   deleteCourse: async (root, { uuid_course }) => {
      let isDeleted
      try {
         const client = await pool.connect()
         const { rowCount } = await client.query('DELETE FROM course WHERE uuid_course=$1',[uuid_course])         
         console.log('result: ',rowCount)

         isDeleted = rowCount
         

      } catch (error) {
         console.log(error)
      }
      return isDeleted
   },
   createStudent: async (root, { input })  => {
      let student
      try {
         const uid = uuid()
         const { name, email } = input
         const client = await pool.connect()
         const { rows } = await client.query('INSERT INTO student (uuid_student,name,email) values ($1, $2, $3)  returning *', [uid, name, email])
         student = rows[0]

      } catch (error) {
          console.error(error)
      }
      return student
   },
   editStudent: async (root, { uuid_student, input } ) => {
      let student
      try {
         const { name, email } = input   
         const client = await pool.connect()
         const { rows } = await client.query('UPDATE student SET name=$2, email=$3 WHERE uuid_student=$1 returning *',[
            uuid_student, name, email
         ])
         student = rows[0]
      } catch (error) {
         console.error(error)
      }
      return student
   },
   deleteStudent: async (root, { uuid_student }) => {
      try {
         const client = await pool.connect()
         const r = await client.query('DELETE FROM student WHERE uuid_student=$1',[uuid_student])         
         console.log('result: ',r)

      } catch (error) {
         console.log(error)
      }
      return true
   }
} 