import {Router, Request, Response} from "express";
import {ScoreController} from "../controller/ScoreController";

let scoreRouter = Router();

const scoreController = new ScoreController();

scoreRouter.route('/')
    .get((req: Request, res: Response) => scoreController.getAllScores(req, res))
    .post((req: Request, res: Response) => scoreController.assignStudentScore(req, res));

export {scoreRouter};