'use strict'

const pool = require('./db')
const errorHandler = require('./errorHandler')

module.exports = {
    getCourses: async () => {
        let courses = []
        try {
            const client = await pool.connect()
            const { rows } = await client.query('SELECT * FROM course')
            courses = rows
        } catch (error) {
            errorHandler(error)
        }
        return courses
    },
    getCourse: async (root, args) => {
        let course
        try {
            const client = await pool.connect()
            const { rows } = await client.query('SELECT * FROM course WHERE uuid_course=$1',[args.uuid_course])
            course = rows[0]
            console.log('rows',rows)
        } catch (error) {
            errorHandler(error)
        }
        return course
    },/* students */
    getPeople: async () => {
        let students = []
        try {
            const client = await pool.connect()
            const { rows } = await client.query('SELECT * FROM student')
            students = rows
        } catch (error) {
            errorHandler(error)
        }
        return students
    }, 
    getPerson: async (root, args) => {
        let student
        try {
            const client = await pool.connect()
            const { rows } = await client.query('SELECT * FROM student WHERE uuid_student=$1',[args.uuid_student])
            student = rows[0]
            console.log('rows',rows)
        } catch (error) {
            errorHandler(error)
        }
        return student
    }
}