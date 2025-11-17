import express from "express";
import Adoption from "../models/adoption.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { animalId, fullName, email, phone, zone, livingWith, otherPets, message } = req.body;

  try {
    const adoption = new Adoption({
      animalId,
      fullName,
      email,
      phone,
      zone,
      livingWith,
      otherPets,
      message
    });

    await adoption.save();

    res.status(200).send({ message: "Postulación creada", adoption });
  } catch (error) {
    res.status(500).send({ message: "Hubo un error", error });
  }
});

export default router;
