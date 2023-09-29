import express from "express";
import { methods as moduleController } from "../controller/module.controller.js";

const router = express.Router();

/* Una ruta que se utilizará para obtener todos los módulos de la base de datos. */
router.get("/modules", moduleController.getModules);

export default router;
