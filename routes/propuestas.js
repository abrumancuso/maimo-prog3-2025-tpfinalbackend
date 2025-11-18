import express from "express";
import Propuesta from "../models/propuesta.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const propuesta = await Propuesta.create({
      adoptanteId: req.body.adoptanteId,
      adoptanteName: req.body.adoptanteName,
      nombreAnimal: req.body.nombreAnimal,
      especie: req.body.especie,
      edadAproximada: req.body.edadAproximada,
      tamaño: req.body.tamaño,
      castrado: req.body.castrado,
      vacunasAlDia: req.body.vacunasAlDia,
      localidad: req.body.localidad,
      descripcionAnimal: req.body.descripcionAnimal,
      nombreContacto: req.body.nombreContacto,
      emailContacto: req.body.emailContacto,
      telefonoContacto: req.body.telefonoContacto,
    });

    res.status(201).json({ ok: true, propuesta });
  } catch (error) {
    res.status(500).json({ ok: false, message: "Error al guardar la propuesta", error: error.message });
  }
});

export default router;
