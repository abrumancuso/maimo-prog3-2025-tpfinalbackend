import mongoose from "mongoose";

const adoptionProposalSchema = new mongoose.Schema(
  {
    adoptanteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Adoptante",
    },
    adoptanteName: {
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
    nombreAnimal: {
      type: String,
      required: true,
    },
    especie: {
      type: String,
      required: true,
    },
    edadAnimal: {
      type: String,
    },
    tamanio: {
      type: String,
    },
    descripcionConvivencia: {
      type: String,
    },
    mensaje: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AdoptionProposal =
  mongoose.models.AdoptionProposal ||
  mongoose.model("AdoptionProposal", adoptionProposalSchema);

export default AdoptionProposal;
