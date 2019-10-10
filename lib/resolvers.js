'use strict'

const pool = require('./db')

module.exports = {
    Query:{
        getCourses: async () => {
            let db
            let courses = []
            try {
                db = await (async function() {
                    const client = await pool.connect()
                    await client.query('SELECT * FROM course')
                    console.log(client.release())
                  })()

                  console.log(db)
                  
                courses = await db.collection('courses').find().toArray()
            } catch (error) {
                console.error(error)
            }
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course._id === args.id)
            return course.pop() /* return only first element */
        }
    }
}