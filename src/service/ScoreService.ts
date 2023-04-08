import {ScoreRepo} from "../repository/ScoreRepo";
import {Score} from "../model/Score";

export class ScoreService {

    constructor(readonly scoreRepo: ScoreRepo = new ScoreRepo()) {
    }

    public async getAllScores():Promise<Score[]> {
        return await this.scoreRepo.getAllScores();
    }

    public async assignStudentScore(studentId: string, courseId: string, score: string) {
        return this.scoreRepo.assignStudentScore(studentId, courseId, score);
    }
}