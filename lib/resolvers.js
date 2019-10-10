'use strict'

const pool = require('./db')

module.exports = {
    Query:{
        getCourses: async () => {
            let db
            let courses = []
            try {
                const client = await pool.connect()
                const { rows } = await client.query('SELECT * FROM course')
                courses = rows
            } catch (error) {
                console.error(error)
            }
            return courses
        },
        getCourse: async (root, args) => {

            let db
            let course
            try {
                const client = await pool.connect()
                const { rows } = await client.query('SELECT * FROM course WHERE uuid_course=$1',[args.uuid_course])
                course = rows[0]
                console.log('rows',rows)
            } catch (error) {
                console.error(error)
            }
            return course
        }
    }
}