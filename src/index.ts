import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import {studentRouter} from "./routes/StudentRoutes";
import {courseRouter} from "./routes/CourseRoutes";
import {scoreRouter} from "./routes/ScoreRoutes";


dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 1234;
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.status(200).send('ok');
});

app
    .use('/students', studentRouter)
    .use('/courses', courseRouter)
    .use('/scores', scoreRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
