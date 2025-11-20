import express from "express";
import AdoptionProposal from "../models/adoptionProposal.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const propuesta = await AdoptionProposal.create(req.body);
    res.status(201).json({ ok: true, propuesta });
  } catch (e) {
    console.error("Error al crear propuesta de adopción:", e);
    res
      .status(500)
      .json({ ok: false, message: "Error al crear la propuesta de adopción" });
  }
});

export default router;
