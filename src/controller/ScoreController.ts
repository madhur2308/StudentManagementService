import {Request, Response} from "express";
import {ScoreService} from "../service/ScoreService";

export class ScoreController {
    constructor(readonly scoreService: ScoreService = new ScoreService()) {
    }

    public async getAllScores(req: Request, res: Response) {
        res.status(200);
        // todo wrap this in a try catch or maybe use error handler created as a middleware
        //  and also the same for other routes too
        const courses = await this.scoreService.getAllScores();
        res.send({
            "success": true,
            "data": courses
        });
    }

    public async assignStudentScore(req: Request, res: Response) {
        const {studentId, courseId, score} = req.body;
        try {
            await this.scoreService.assignStudentScore(studentId, courseId, score);
            res.status(201);
            res.send({
                "success": true,
                "message": "Score is assigned to the student successfully"
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