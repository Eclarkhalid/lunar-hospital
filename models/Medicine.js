import { Schema, model, models } from "mongoose";

const MedicineSchema = new Schema({

  // Name of the medicine
  name: {
    type: String,
    required: true
  },
  
  // Description of the medicine
  description: {
    type: String,
  },
  
  // Quantity of the medicine (e.g., 10 tablets, 100ml, etc.)
  quantity: {
    type: String,
  },
  
  // Dosage of the medicine (e.g., 1 tablet, 5ml, etc.)
  dosage: {
    type: String,
  },
  
  // Instructions for taking the medicine (e.g., before meals, twice a day, etc.)
  instructions: {
    type: String,
  },
  
  // Expiry date of the medicine
  expiryDate: {
    type: Date,
  },
  
  // Manufacturer of the medicine
  manufacturer: {
    type: String,
  },
  
  // Price of the medicine
  price: {
    type: Number,
  },
  
  // Category of the medicine (e.g., Antibiotic, Analgesic, etc.)
  category: {
    type: String,
  },
  
  // Active ingredients of the medicine
  activeIngredients: {
    type: [String],
  },
  
  // Side effects of the medicine
  sideEffects: {
    type: [String],
  },

});

export const Medicine = models.Medicine || model("Medicine", MedicineSchema);
