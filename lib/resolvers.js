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
                console.log('rows:', rows)

            } catch (error) {
                console.error(error)
            }
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course.uuid_course === args.uuid_course)
            return course.pop() /* return only first element */
        }
    }
}