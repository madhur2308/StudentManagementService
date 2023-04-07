import {StudentRepo} from "../repository/StudentRepo";
import {IncomingStudentRequest, Student} from "../model/Student";
import moment from "moment/moment";
import {ErrorCodes} from "../utils/errors/ErrorCode";

export class StudentService {

    constructor(readonly studentRepo: StudentRepo = new StudentRepo()) {
    }

    public async getAllStudents() {
        const students = await this.studentRepo.getAllStudents();
        return students.map((student: Student) => {
            return {
                studentId: student.studentId,
                firstName: student.firstName,
                lastName: student.lastName,
                dob: moment(student.dob, "DD-MM-YYYY")
            }
        })
    }

    public async createStudent(incomingStudentReqObject: IncomingStudentRequest) {
        const {dob} = incomingStudentReqObject;
        const dobMoment = moment(dob, "YYYY-MM-DD");
        const age = moment().diff(dobMoment, 'years');
        if (age < 10) {
            throw ErrorCodes.STUDENT_TOO_YOUNG;
        }
        return this.studentRepo.createStudent(incomingStudentReqObject);
    }
}