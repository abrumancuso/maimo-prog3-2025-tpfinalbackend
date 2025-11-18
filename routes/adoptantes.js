import express from "express";
import Adoptante from "../models/adoptante.js";

const router = express.Router();

const findAllAdoptantes = async (req, res) => {
  try {
    const adoptantes = await Adoptante.find().select(
      "_id name age location household housingType bio image"
    );
    return res
      .status(200)
      .send({ message: "Todos los adoptantes", adoptantes });
  } catch (error) {
    return res.status(500).send({ message: "Hubo un error", error });
  }
};

const findOneAdoptante = async (req, res) => {
  const { id } = req.params;
  try {
    const adoptante = await Adoptante.findById(id).select(
      "_id name age location household housingType bio image"
    );
    if (!adoptante) {
      return res.status(404).send({ message: "No existe el adoptante" });
    }
    return res.status(200).send({ message: "Adoptante encontrado", adoptante });
  } catch (error) {
    return res.status(500).send({ message: "Hubo un error", error });
  }
};

const addAdoptante = async (req, res) => {
  const { name, age, location, household, housingType, bio, image } = req.body;
  try {
    const adoptante = new Adoptante({
      name,
      age,
      location,
      household,
      housingType,
      bio,
      image
    });
    await adoptante.save();
    return res.status(201).send({ message: "Adoptante creado", adoptante });
  } catch (error) {
    return res.status(500).send({ message: "Hubo un error", error });
  }
};

const deleteAdoptante = async (req, res) => {
  const { id } = req.params;
  try {
    const adoptante = await Adoptante.findById(id);
    if (!adoptante) {
      return res.status(404).send({ message: "No existe el adoptante" });
    }
    await Adoptante.deleteOne({ _id: id });
    return res.status(200).send({ message: "Adoptante borrado", adoptante });
  } catch (error) {
    return res.status(500).send({ message: "Hubo un error", error });
  }
};

const updateAdoptante = async (req, res) => {
  const { id } = req.params;
  const { name, age, location, household, housingType, bio, image } = req.body;
  try {
    const adoptante = await Adoptante.findById(id);
    if (!adoptante) {
      return res.status(404).send({ message: "No existe el adoptante" });
    }

    adoptante.name = name ?? adoptante.name;
    adoptante.age = age ?? adoptante.age;
    adoptante.location = location ?? adoptante.location;
    adoptante.household = household ?? adoptante.household;
    adoptante.housingType = housingType ?? adoptante.housingType;
    adoptante.bio = bio ?? adoptante.bio;
    adoptante.image = image ?? adoptante.image;

    await adoptante.save();
    return res
      .status(200)
      .send({ message: "Adoptante actualizado", adoptante });
  } catch (error) {
    return res.status(500).send({ message: "Hubo un error", error });
  }
};

router.get("/", findAllAdoptantes);
router.get("/:id", findOneAdoptante);
router.post("/", addAdoptante);
router.put("/:id", updateAdoptante);
router.delete("/:id", deleteAdoptante);

export default router;
