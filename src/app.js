import express from 'express';
import morgan  from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

//Router
import languageRoutes from "./routes/lenguages.routes"
import validateUserRoutes from "./routes/validateUser.routes"
import moduleRoutes from "./routes/module.routes"
import progressRoutes from "./routes/progress.routes"
import studentRoutes from "./routes/student.routes"


const app = express();

//Settings
app.set("port", 4000);

//Middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())

//Routes
app.use("/api/languages", languageRoutes)
app.use("/validate", validateUserRoutes);
app.use("/modules", moduleRoutes);
app.use("/progress", progressRoutes);
app.use("/student", studentRoutes);

export default app;