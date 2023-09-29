import express from "express";
import { methods as progressController } from "../controller/progress.controller.js";

const router = express.Router();

/* Comprobando si el alumno ya ha completado el tema. */
router.get("/progress", progressController.selectProgressBy3Id);

/* Inserción del progreso del alumno en la base de datos. */
router.post("/progress", progressController.addProgress);

/* Comprobando si el módulo está completo. */
router.get("/progress/modulecompleted", progressController.searchModuleCompleted);

export default router;
