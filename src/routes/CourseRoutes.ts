import {Router, Request, Response} from "express";
import {CourseController} from "../controller/CourseController";

let courseRouter = Router();

const courseController = new CourseController();

courseRouter.route('/')
    .get((req: Request, res: Response) => courseController.getAllCourses(req, res))
    .post((req: Request, res: Response) => courseController.createCourse(req, res));

export {courseRouter};