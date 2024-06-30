import { Schema, model, models } from "mongoose";

const PaymentSchema = new Schema({
  // Name of the patient or service received
  name: {
    type: String,
    required: true
  },
  
  // Date of the payment
  date: {
    type: Date,
    default: Date.now
  },
  
  // Method of payment (e.g., Cash, Credit Card, Insurance, etc.)
  method: {
    type: String,
    enum: ["Cash", "Credit Card", "Debit Card", "Insurance", "Online Payment", "Mpesa"]
  },
  
  // Amount paid
  amount: {
    type: Number,
    required: true
  },

  // Description or reason for the payment
  description: {
    type: String
  }
});

export const Payment = models.Payment || model("Payment", PaymentSchema);
