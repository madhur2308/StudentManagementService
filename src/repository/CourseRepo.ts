import {db} from "./DbConnect";
import {Course} from "../model/Course";

export class CourseRepo {

    constructor() {
    }

    // todo add pagination here
    public async getAllCourses() {
        return await db.query('SELECT * FROM user_mgmt.Courses')
    }
    public async createCourse(newCourse: Course) {
        const insertQuery = `INSERT INTO user_mgmt.Courses ("courseId", "courseName")
                             VALUES ($1, $2)`
        const args = [newCourse.courseId, newCourse.courseName]
        return await db.query(insertQuery, args);
    }
}