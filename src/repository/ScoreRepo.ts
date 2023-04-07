import {db} from "./DbConnect";

export class ScoreRepo {

    constructor() {
    }

    // todo add pagination here
    public async getAllScores() {
        return await db.query(`SELECT s."firstName", s."lastName", sc.score, c."courseName"
                               FROM user_mgmt."Scores" sc
                                        JOIN user_mgmt."courses" c ON sc."courseId" = c."courseId"
                                        JOIN user_mgmt."students" s ON sc."studentId" = s."studentId"`)
    }

    public async assignStudentScore(studentId: string, courseId: string, score: string) {
        const insertQuery = `INSERT INTO user_mgmt."Scores" ("courseId", "studentId", "score", "year")
                             VALUES ($1, $2, $3, $4)`
        const args = [courseId, studentId, score, 2023]
        return await db.query(insertQuery, args);
    }
}