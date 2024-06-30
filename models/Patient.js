import { Schema, model, models } from "mongoose";

const PatientsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  dob: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: Number
  },
  email: {
    type: String
  },
  
  bloodType: {
    type: String
  },
  height: {
    type: String
  },
  weight: {
    type: String
  },
  
  emergencyContactName: {
    type: String
  },
  emergencyContactPhone: {
    type: String
  },
  insuranceProvider: {
    type: String
  },
  insurancePolicyNumber: {
    type: String
  },
  preferredLanguage: {
    type: String
  },
  occupation: {
    type: String
  },
  primaryCarePhysician: {
    type: String
  },
  lastAppointmentDate: {
    type: String
  },
  nextAppointmentDate: {
    type: String
  },

  // doctors field
  medicalHistory: {
    type: String
  },
  allergies: {
    type: String
  },
  diagnosis: {
    type: String
  },
  treatment: {
    type: String
  },
  prescription: {
    type: String
  },

  // chemist part
  medicines: {
    type: String
  },
  quantity: {
    type: String
  },
  dosage: {
    type: String
  },
  instructions: {
    type: String
  },


});

export const Patient = models.Patient || model("Patient", PatientsSchema);
