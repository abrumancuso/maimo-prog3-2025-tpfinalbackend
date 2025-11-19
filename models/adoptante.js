import mongoose from "mongoose";

const adoptanteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true },
    household: { type: String, required: true },
    housingType: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, default: "" }
  },
  { timestamps: true }
);

const Adoptante = mongoose.model("Adoptante", adoptanteSchema);

export default Adoptante;
