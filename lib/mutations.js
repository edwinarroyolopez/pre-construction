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
      let db
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
   }
} 