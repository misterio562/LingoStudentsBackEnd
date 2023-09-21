import express from "express";
import { methods as studentController } from "../controller/student.controller";

const router = express.Router();

/* Actualización del displayName del alumno en la base de datos. */
router.put("/studentupdate", studentController.updateStudentName);

export default router;
