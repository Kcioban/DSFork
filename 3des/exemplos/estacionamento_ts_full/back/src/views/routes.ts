import express from "express";
import veiculo from "../controllers/veiculo";

const router = express.Router();

router.post("/veiculos", veiculo.create);
router.get("/veiculos", veiculo.read);
router.put("/veiculos/:id", veiculo.update);
router.delete("/veiculos/:id", veiculo.remove);

export default router;