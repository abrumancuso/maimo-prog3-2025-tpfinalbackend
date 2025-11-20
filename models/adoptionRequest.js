import mongoose from "mongoose";

const adoptionRequestSchema = new mongoose.Schema(
  {
    animalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Animal",
    },
    animalName: {
      type: String,
    },
    nombrePersona: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
    },
    zona: {
      type: String,
      required: true,
    },
    tipoVivienda: {
      type: String,
      required: true,
    },
    conviveCon: {
      type: String,
    },
    otrasMascotas: {
      type: String,
    },
    mensaje: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AdoptionRequest =
  mongoose.models.AdoptionRequest ||
  mongoose.model("AdoptionRequest", adoptionRequestSchema);

export default AdoptionRequest;
