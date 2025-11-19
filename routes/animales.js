import { Router } from "express";
import Animal from "../models/Animal.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const animals = await Animal.find().sort({ createdAt: -1 });
    res.json({ animals });
  } catch (e) {
    res.status(500).json({ message: "Error al obtener animales" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) return res.status(404).json({ message: "Animal no encontrado" });
    res.json({ animal });
  } catch (e) {
    res.status(500).json({ message: "Error al obtener el animal" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, species, age, size, location, description } = req.body;

    const newAnimal = await Animal.create({
      name,
      species,
      age,
      size,
      location,
      description,
      image: ""
    });

    res.status(201).json({ animal: newAnimal });
  } catch (e) {
    res.status(500).json({ message: "Error al crear animal" });
  }
});

export default router;
