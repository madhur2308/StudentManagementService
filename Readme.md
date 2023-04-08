### The following service is a backend service written in NodeJS/TS to handle CREATE and READ operations for managing
- Students
- Courses
- Result/Grades

### To run the app, follow the steps below

- Spin up the postgress image by `docker compose up`
- once postgres container is running, we need to initialize db (schema and table creation), by running the [db_init.sql](scripts%2Fdb_init.sql)
- Lastly the server can be run locally by running the command `npm run dev`


### Areas that need improvements 

- Write Unit Tests
- Use of an ORM like Sequelize
- Better handling of errors that are also marked as Todo in the code
- In the design we need to handle multiple aspects that have been ignored to keep the service simple, but should be added as next steps 
  - a course cannot be taken by same student in the same semester. So we should have a concept of semester (fall, spring, summer)
  - a course can be offered by multiple professors/teachers and that should also be handled.
  - add routes to handle UPDATE AND DELETE operations on the entities