export interface Student extends IncomingStudentRequest{
    readonly studentId: string;
    readonly createdOn: Date;
    readonly archivedOn: Date;
}

export interface IncomingStudentRequest {
    readonly firstName: string;
    readonly familyName: string;
    readonly dateOfBirth: Date;
}