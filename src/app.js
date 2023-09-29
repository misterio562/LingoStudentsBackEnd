import express from 'express';
import morgan  from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

//Router
import languageRoutes from "./routes/lenguages.routes.js"
import validateUserRoutes from "./routes/validateUser.routes.js"
import moduleRoutes from "./routes/module.routes.js"
import progressRoutes from "./routes/progress.routes.js"
import studentRoutes from "./routes/student.routes.js"


const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

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