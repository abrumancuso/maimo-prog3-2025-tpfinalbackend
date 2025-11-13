import express from "express";
import Animal from "../models/animal.js";

const router = express.Router();

const findAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find().select(
      "_id name species age size location description"
    );
    return res
      .status(200)
      .send({ message: "Todos los animales", animals });
  } catch (error) {
    return res.status(501).send({ message: "Hubo un error", error });
  }
};

const findOneAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const animal = await Animal.findOne({ _id: id }).select(
      "_id name species age size location description"
    );

    if (!animal) {
      return res.status(404).send({ message: "No se encontró el animal", id });
    }

    return res.status(200).send({ message: "Animal encontrado", animal });
  } catch (error) {
    return res.status(501).send({ message: "Hubo un error", error });
  }
};

const addAnimal = async (req, res) => {
  const { name, species, age, size, location, description } = req.body;
  try {
    const animal = new Animal({
      name,
      species,
      age,
      size,
      location,
      description,
    });

    await animal.save();

    return res.status(200).send({ message: "Animal creado", animal });
  } catch (error) {
    return res.status(501).send({ message: "Hubo un error", error });
  }
};

const deleteAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const animalToDelete = await Animal.findOne({ _id: id });

    if (!animalToDelete) {
      return res
        .status(404)
        .send({ message: "No existe el animal", id });
    }

    await Animal.deleteOne({ _id: id });

    return res
      .status(200)
      .send({ message: "Animal borrado", animal: animalToDelete });
  } catch (error) {
    return res.status(501).send({ message: "Hubo un error", error });
  }
};

const updateAnimal = async (req, res) => {
  const { id } = req.params;
  const { name, species, age, size, location, description } = req.body;

  try {
    const animalToUpdate = await Animal.findOne({ _id: id });

    if (!animalToUpdate) {
      return res
        .status(404)
        .send({ message: "No existe el animal", id });
    }

    animalToUpdate.name = name ?? animalToUpdate.name;
    animalToUpdate.species = species ?? animalToUpdate.species;
    animalToUpdate.age = age ?? animalToUpdate.age;
    animalToUpdate.size = size ?? animalToUpdate.size;
    animalToUpdate.location = location ?? animalToUpdate.location;
    animalToUpdate.description =
      description ?? animalToUpdate.description;

    await animalToUpdate.save();

    return res
      .status(200)
      .send({ message: "Animal actualizado", animal: animalToUpdate });
  } catch (error) {
    return res.status(501).send({ message: "Hubo un error", error });
  }
};

// CRUD endpoints
router.get("/", findAllAnimals);
router.get("/:id", findOneAnimal);
router.post("/", addAnimal);
router.put("/:id", updateAnimal);
router.delete("/:id", deleteAnimal);

export default router;

