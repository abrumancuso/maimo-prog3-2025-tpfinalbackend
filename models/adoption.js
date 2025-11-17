import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema(
  {
    animalId: { type: mongoose.Schema.Types.ObjectId, ref: "Animal", required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    zone: { type: String, required: true },
    livingWith: { type: String, required: true },
    otherPets: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

const Adoption = mongoose.model("Adoption", adoptionSchema);

export default Adoption;
