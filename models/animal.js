import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: String, required: true },
    size: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "" }
  },
  {
    timestamps: true
  }
);

const Animal = mongoose.model("Animal", animalSchema);

export default Animal;
