
import { Patient } from "../../models/Patient";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handle(req, res) {
  const {method} = req;

  await mongooseConnect();

  if (method === 'POST') {
    const { 
      name,
      lastName,
      gender,
      dob,
      address,
      phone,
      email,
      medicalHistory,
      allergies,
      diagnosis,
      treatment,
      prescription,
      bloodType,
      height,
      weight,
      emergencyContactName,
      emergencyContactPhone,
      insuranceProvider,
      insurancePolicyNumber,
      preferredLanguage,
      occupation,
      primaryCarePhysician,
      lastAppointmentDate,
      nextAppointmentDate,
      medicines,
      quantity,
      dosage,
      instructions,
    } = req.body;

    const patientDoc = await Patient.create({
      name,
      lastName,
      gender,
      dob,
      address,
      phone,
      email,
      medicalHistory,
      allergies,
      diagnosis,
      treatment,
      prescription,
      bloodType,
      height,
      weight,
      emergencyContactName,
      emergencyContactPhone,
      insuranceProvider,
      insurancePolicyNumber,
      preferredLanguage,
      occupation,
      primaryCarePhysician,
      lastAppointmentDate,
      nextAppointmentDate,
      medicines,
      quantity,
      dosage,
      instructions,
    })
    res.json(patientDoc)
  }

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Patient.findOne({_id: req.query.id}));
    } else {
      res.json(await Patient.find())
    }
  }

  if (method === 'PUT') {
    const {_id, name,
      lastName,
      gender,
      dob,
      address,
      phone,
      email,
      medicalHistory,
      allergies,
      diagnosis,
      treatment,
      prescription,
      bloodType,
      height,
      weight,
      emergencyContactName,
      emergencyContactPhone,
      insuranceProvider,
      insurancePolicyNumber,
      preferredLanguage,
      occupation,
      primaryCarePhysician,
      lastAppointmentDate,
      nextAppointmentDate,
      medicines,
      quantity,
      dosage,
      instructions,
    } = req.body;
    await Patient.updateOne({_id}, {
      name,
      lastName,
      gender,
      dob,
      address,
      phone,
      email,
      medicalHistory,
      allergies,
      diagnosis,
      treatment,
      prescription,
      bloodType,
      height,
      weight,
      emergencyContactName,
      emergencyContactPhone,
      insuranceProvider,
      insurancePolicyNumber,
      preferredLanguage,
      occupation,
      primaryCarePhysician,
      lastAppointmentDate,
      nextAppointmentDate,
      medicines,
      quantity,
      dosage,
      instructions,
    });
    res.json(true)
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Patient.deleteOne({_id:req.query?.id})
      res.json(true)
    }
  }
}