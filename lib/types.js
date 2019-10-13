'use strict'

const pool = require('./db')

module.exports = {
    Course: {
        students: async ({ students }) => {
            let studentsData
            let uuids
            try {
                const client = await pool.connect()
                uuids = students ? students.map( student =>  student.uuid_student ) : []
                studentsData  = uuids.length > 0 
                    ? await client.query('SELECT * FROM student where uuid_student in ($1)', [uuids.join(',')])
                    : []

                studentsData = Array.isArray(studentsData) ? [] : studentsData.rows
            } catch (error) {
                console.error(error)
            }

            return studentsData
        }
    }
}