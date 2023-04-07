import {Router, Request, Response} from "express";
import {StudentController} from "../controller/StudentController";

let studentRouter = Router();

const studentController = new StudentController();

studentRouter.route('/')
    .get((req: Request, res: Response) => studentController.getStudents(req, res))
    .post((req: Request, res: Response) => studentController.createStudent(req, res));

export {studentRouter};