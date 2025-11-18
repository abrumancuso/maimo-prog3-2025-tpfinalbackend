import mongoose from "mongoose";

const propuestaSchema = new mongoose.Schema(
  {
    adoptanteId: { type: mongoose.Schema.Types.ObjectId, ref: "Adoptante", required: true },
    adoptanteName: { type: String, required: true },

    nombreAnimal: { type: String, required: true },
    especie: { type: String, required: true },
    edadAproximada: { type: String, required: true },
    tamaño: { type: String, required: true },
    castrado: { type: String },
    vacunasAlDia: { type: String },

    localidad: { type: String, required: true },
    descripcionAnimal: { type: String, required: true },

    nombreContacto: { type: String, required: true },
    emailContacto: { type: String, required: true },
    telefonoContacto: { type: String },
  },
  { timestamps: true }
);

const Propuesta = mongoose.model("Propuesta", propuestaSchema);

export default Propuesta;
