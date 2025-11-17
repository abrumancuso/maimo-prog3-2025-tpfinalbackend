import express from "express";
import Animal from "../models/animal.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const animals = await Animal.find().select(
      "_id name species age size location description image"
    );
    res.status(200).send({ message: "Todos los animales", animals });
  } catch (error) {
    res.status(500).send({ message: "Error al obtener animales", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id).select(
      "_id name species age size location description image"
    );
    if (!animal) {
      return res
        .status(404)
        .send({ message: "No se encontró el animal", id: req.params.id });
    }
    res.status(200).send({ message: "Animal encontrado", animal });
  } catch (error) {
    res.status(500).send({ message: "Error al obtener animal", error });
  }
});

router.post("/", async (req, res) => {
  const { name, species, age, size, location, description, image } = req.body;

  try {
    const animal = new Animal({
      name,
      species,
      age,
      size,
      location,
      description,
      image
    });

    await animal.save();
    res.status(200).send({ message: "Animal creado", animal });
  } catch (error) {
    res.status(500).send({ message: "Error al crear animal", error });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, species, age, size, location, description, image } = req.body;

  try {
    const animal = await Animal.findById(id);
    if (!animal) {
      return res
        .status(404)
        .send({ message: "No se encontró el animal", id });
    }

    animal.name = name ?? animal.name;
    animal.species = species ?? animal.species;
    animal.age = age ?? animal.age;
    animal.size = size ?? animal.size;
    animal.location = location ?? animal.location;
    animal.description = description ?? animal.description;
    animal.image = image ?? animal.image;

    await animal.save();

    res.status(200).send({ message: "Animal actualizado", animal });
  } catch (error) {
    res.status(500).send({ message: "Error al actualizar animal", error });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const animal = await Animal.findById(id);
    if (!animal) {
      return res
        .status(404)
        .send({ message: "No se encontró el animal", id });
    }

    await Animal.deleteOne({ _id: id });
    res.status(200).send({ message: "Animal borrado", animal });
  } catch (error) {
    res.status(500).send({ message: "Error al borrar animal", error });
  }
});

export default router;
