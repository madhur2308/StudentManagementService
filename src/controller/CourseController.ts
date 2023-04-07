import {Request, Response} from "express";
import {CourseService} from "../service/CourseService";

export class CourseController {
    constructor(readonly courseService: CourseService = new CourseService()) {
    }

    public async getAllCourses(req: Request, res: Response) {
        res.status(200);
        // todo wrap this in a try catch or maybe use error handler created as a middleware
        //  and also the same for other routes too
        const courses = await this.courseService.getAllCourses();
        res.send({
            "success": true,
            "data": courses
        });
    }

    public async createCourse(req: Request, res: Response) {
        const {courseId, courseName} = req.body;
        try {
            await this.courseService.createCourse({courseId, courseName});
            res.status(201);
            res.send({
                "success": true,
                "message": "Course is created successfully"
            });
        } catch (err) {
            switch (err) {
                default:
                    res.status(400).send('The request failed').status(400);
                    break;
            }
        }

    }
}