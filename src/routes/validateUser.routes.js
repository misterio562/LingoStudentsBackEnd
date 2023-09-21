import express from "express";
import { methods as validateUserController } from "../controller/validateUser.controller";

const router = express.Router();

/* Una función que se llama cuando el usuario realiza una solicitud GET al punto final /student. */
router.get("/student", validateUserController.getByEmail);

/* Creación de un nuevo alumno en la base de datos. */
router.post("/student", validateUserController.addStudent);

/* Una función que selecciona el id del estudiante mediante un email. */
router.get("/student/id", validateUserController.selectIdByEmail);

export default router;
