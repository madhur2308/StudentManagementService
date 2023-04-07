import {Request, Response} from "express";
import {StudentService} from "../service/StudentService";

export class StudentController {
    constructor(readonly studentService: StudentService = new StudentService()) {
    }

    public async getStudents(req: Request, res: Response) {
        res.status(200);
        // todo wrap this in a try catch or maybe use error handler created as a middleware
        //  and also teh same for other routes too
        const students = await this.studentService.getAllStudents();
        res.send(students);
    }

    public async createStudent(req: Request, res: Response) {
        const {firstName, lastName, dob} = req.body;
        try {
            await this.studentService.createStudent({firstName, lastName, dob});
            res.status(201);
            res.send('Student is enrolled successfully');
        } catch (err) {
            switch (err) {
                case 'STUDENT_TOO_YOUNG':
                    res.status(400).send('The user is not old enough to be enrolled in the school');
                    break;
                default:
                    res.status(400).send('The request failed').status(400);
                    break;
            }
        }

    }
}