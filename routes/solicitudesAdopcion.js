import express from "express";
import AdoptionRequest from "../models/adoptionRequest.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const solicitud = await AdoptionRequest.create(req.body);
    res.status(201).json({ ok: true, solicitud });
  } catch (e) {
    console.error("Error al crear solicitud de adopción:", e);
    res
      .status(500)
      .json({ ok: false, message: "Error al crear la solicitud de adopción" });
  }
});

export default router;
