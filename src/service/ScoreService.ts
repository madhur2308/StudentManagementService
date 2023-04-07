import {ScoreRepo} from "../repository/ScoreRepo";

export class ScoreService {

    constructor(readonly scoreRepo: ScoreRepo = new ScoreRepo()) {
    }

    public async getAllScores() {
        return await this.scoreRepo.getAllScores();
    }

    public async assignStudentScore(studentId: string, courseId: string, score: string) {
        return this.scoreRepo.assignStudentScore(studentId, courseId, score);
    }
}