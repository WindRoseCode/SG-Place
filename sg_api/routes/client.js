import express from "express";
import { getCliente, addCliente, updateCliente,deleteCliente } from "../controllers/clientController.js";

const router = express.Router()

router.get("/", getCliente);
router.post("/", addCliente);
router.put("/:id", updateCliente);
router.delete("/:id", deleteCliente);


export default router;