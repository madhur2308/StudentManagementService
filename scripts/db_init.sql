create schema IF NOT EXISTS user_mgmt;

create table IF NOT EXISTS user_mgmt.Students
(
    "studentId"   uuid not null
        constraint "Student_pk"
            primary key,
    "firstName"   text not null,
    "familyName"  text,
    "dateOfBirth" date not null,
    "createdOn"   date not null,
    "archivedOn"  date
);

-- todo add course archived_on representing that it is no longer offered
create table IF NOT EXISTS user_mgmt.Courses
(
    "courseId"   text not null
        constraint course_pk
            primary key,
    "courseName" text not null,
    program      text
);


-- todo add a season (fall, spring) to allow studnets take same course in same year.
create table IF NOT EXISTS user_mgmt."Scores"
(
    "studentId" uuid
        constraint "Score_students_studentId_fk"
            references user_mgmt.students,
    "courseId"  text
        constraint "Score_courses_courseId_fk"
            references user_mgmt.courses,
    "year"      integer,
    score       text,
    constraint "Score_pk"
        primary key ("courseId", "studentId", "year")
);




