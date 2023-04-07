import {CourseRepo} from "../repository/CourseRepo";
import {Course} from "../model/Course";
import {randomUUID} from "crypto";

export class CourseService {

    constructor(readonly courseRepo: CourseRepo = new CourseRepo()) {
    }

    public async getAllCourses() {
        return await this.courseRepo.getAllCourses();
    }

    public async createCourse(newCourse: Course) {
        if (!newCourse.courseId) {
            newCourse = {...newCourse, courseId: randomUUID()}
        }
        return this.courseRepo.createCourse(newCourse);
    }
}