import {db} from "./DbConnect";
import {IncomingStudentRequest} from "../model/Student";
import {v4 as uuidv4} from 'uuid';

export class StudentRepo {

    constructor() {
    }

    // todo add pagination here
    public async getAllStudents() {
        return await db.query('SELECT * FROM user_mgmt.students WHERE "archivedOn" is NULL')
    }

    public async createStudent(student: IncomingStudentRequest) {
        const studentId = uuidv4();
        const insertQuery = `INSERT INTO user_mgmt.students ("studentId", "firstName", "familyName", "dateOfBirth", "createdOn")
                             VALUES ($1, $2, $3, $4, $5)`
        const args = [studentId, student.firstName, student.familyName, student.dateOfBirth, new Date()]
        return await db.query(insertQuery, args);
    }
}