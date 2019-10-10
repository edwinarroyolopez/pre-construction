'use strict'

const pool = require('./db')
const uuid = require('uuid/v5');

module.exports = {
   createCourse: async (root, { input })  => {
      console.log("createCurse")
      const defaults = {
         teacher: '',
         topic: ''
      }

      const newCourse = Object.assign(defaults, input)
      console.log('newCourse',newCourse)
      let db
      let course
      try {
         const uid = uuid()
         console.log('uid',uid)
         const { title, teacher, description, topic } = newCourse
         const client = await pool.connect()
         course = await client.query('INSERT INTO course (uuid_course,title,teacher,description) values ($1, $2, $3, $4, $5)  returning *', [uid, title, teacher, description, topic])

      } catch (error) {
          console.error(error)
      }
      return course
   }
} 