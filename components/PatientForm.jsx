import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";

export default function PatientsForm({
  _id,
  name: existingName,
  lastName: existingLastName,
  gender: existingGender,
  dob: existingDob,
  address: existingAddress,
  phone: existingPhone,
  email: existingEmail,
  medicalHistory: existingMedicalHistory,
  allergies: existingAllergies,
  diagnosis: existingDiagnosis,
  treatment: existingTreatment,
  prescription: existingPrescription,
  bloodType: existingBloodType,
  height: existingHeight,
  weight: existingWeight,
  emergencyContactName: existingEmergencyContactName,
  emergencyContactPhone: existingEmergencyContactPhone,
  insuranceProvider: existingInsuranceProvider,
  insurancePolicyNumber: existingInsurancePolicyNumber,
  preferredLanguage: existingPreferredLanguage,
  occupation: existingOccupation,
  primaryCarePhysician: existingPrimaryCarePhysician,
  lastAppointmentDate: existingLastAppointmentDate,
  nextAppointmentDate: existingNextAppointmentDate,
  medicines: existingMedicines,
  quantity: existingQuantity,
  dosage: existingDosage,
  instructions: existingInstructions,
}) {
  const [name, setName] = useState(existingName || '');
  const [lastName, setLastName] = useState(existingLastName || '');
  const [gender, setGender] = useState(existingGender || '');
  const [dob, setDob] = useState(existingDob || '');
  const [address, setAddress] = useState(existingAddress || '');
  const [phone, setPhone] = useState(existingPhone || '');
  const [email, setEmail] = useState(existingEmail || '');
  const [medicalHistory, setMedicalHistory] = useState(existingMedicalHistory || '');
  const [allergies, setAllergies] = useState(existingAllergies || '');
  const [diagnosis, setDiagnosis] = useState(existingDiagnosis || '');
  const [treatment, setTreatment] = useState(existingTreatment || '');
  const [prescription, setPrescription] = useState(existingPrescription || '');
  const [bloodType, setBloodType] = useState(existingBloodType || '');
  const [height, setHeight] = useState(existingHeight || '');
  const [weight, setWeight] = useState(existingWeight || '');
  const [emergencyContactName, setEmergencyContactName] = useState(existingEmergencyContactName || '');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState(existingEmergencyContactPhone || '');
  const [insuranceProvider, setInsuranceProvider] = useState(existingInsuranceProvider || '');
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState(existingInsurancePolicyNumber || '');
  const [preferredLanguage, setPreferredLanguage] = useState(existingPreferredLanguage || '');
  const [occupation, setOccupation] = useState(existingOccupation || '');
  const [primaryCarePhysician, setPrimaryCarePhysician] = useState(existingPrimaryCarePhysician || '');
  const [lastAppointmentDate, setLastAppointmentDate] = useState(existingLastAppointmentDate || '');
  const [nextAppointmentDate, setNextAppointmentDate] = useState(existingNextAppointmentDate || '');
  const [medicines, setMedicines] = useState(existingMedicines || '');
  const [quantity, setQuantity] = useState(existingQuantity || '');
  const [dosage, setDosage] = useState(existingDosage || '');
  const [instructions, setInstructions] = useState(existingInstructions || '');
  const [redirect, setRedirect] = useState(false);

  const router = useRouter();

  async function createPatient(e) {
    e.preventDefault();
    const data = {
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
    };

    if (_id) {
      await axios.put('/api/patients', { ...data, _id });
      console.log("Patient updated successfully!!");
    } else {
      await axios.post('/api/patients', data);
      console.log("Patient created successfully!!");
    }

    setRedirect(true);
  }

  if (redirect) {
    router.push('/dashboard/patients');
    return null;
  }

  return <>
    <form action="" onSubmit={createPatient} className="space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">Add New Patient Information <span className="text-red-600">Receptionists Only</span></CardTitle>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
            Fill in the form below to add a new patient
          </p>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Existing fields */}
          {/* First name */}
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Enter first name" value={name} onChange={ev => setName(ev.target.value)} required />
          </div>
          {/* Last name */}
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Enter last name" required value={lastName} onChange={ev => setLastName(ev.target.value)} />
          </div>
          {/* Gender */}
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Input id="gender" placeholder="Enter gender" value={gender} onChange={ev => setGender(ev.target.value)} />
          </div>
          {/* Date of Birth */}
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" value={dob} onChange={ev => setDob(ev.target.value)} />
          </div>
          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter address" value={address} onChange={ev => setAddress(ev.target.value)} />
          </div>
          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter phone number" type="tel" value={phone} onChange={ev => setPhone(ev.target.value)} />
          </div>
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter email" type="email" value={email} onChange={ev => setEmail(ev.target.value)} />
          </div>
          

          {/* Additional fields */}
          {/* Blood Type */}
          <div className="space-y-2">
            <Label htmlFor="blood-type">Blood Type</Label>
            <Input id="blood-type" placeholder="Enter blood type" value={bloodType} onChange={ev => setBloodType(ev.target.value)} />
          </div>
          {/* Height */}
          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Input id="height" placeholder="Enter height" value={height} onChange={ev => setHeight(ev.target.value)} />
          </div>
          {/* Weight */}
          <div className="space-y-2">
            <Label htmlFor="weight">Weight</Label>
            <Input id="weight" placeholder="Enter weight" value={weight} onChange={ev => setWeight(ev.target.value)} />
          </div>
          
          {/* Emergency Contact Name */}
          <div className="space-y-2">
            <Label htmlFor="emergency-contact-name">Emergency Contact Name</Label>
            <Input id="emergency-contact-name" placeholder="Enter emergency contact name" value={emergencyContactName} onChange={ev => setEmergencyContactName(ev.target.value)} />
          </div>
          {/* Emergency Contact Phone */}
          <div className="space-y-2">
            <Label htmlFor="emergency-contact-phone">Emergency Contact Phone</Label>
            <Input id="emergency-contact-phone" placeholder="Enter emergency contact phone" value={emergencyContactPhone} onChange={ev => setEmergencyContactPhone(ev.target.value)} />
          </div>
          {/* Insurance Provider */}
          <div className="space-y-2">
            <Label htmlFor="insurance-provider">Insurance Provider</Label>
            <Input id="insurance-provider" placeholder="Enter insurance provider" value={insuranceProvider} onChange={ev => setInsuranceProvider(ev.target.value)} />
          </div>
          {/* Insurance Policy Number */}
          <div className="space-y-2">
            <Label htmlFor="insurance-policy-number">Insurance Policy Number</Label>
            <Input id="insurance-policy-number" placeholder="Enter insurance policy number" value={insurancePolicyNumber} onChange={ev => setInsurancePolicyNumber(ev.target.value)} />
          </div>
          {/* Preferred Language */}
          <div className="space-y-2">
            <Label htmlFor="preferred-language">Preferred Language</Label>
            <Input id="preferred-language" placeholder="Enter preferred language" value={preferredLanguage} onChange={ev => setPreferredLanguage(ev.target.value)} />
          </div>
          {/* Occupation */}
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input id="occupation" placeholder="Enter occupation" value={occupation} onChange={ev => setOccupation(ev.target.value)} />
          </div>
          {/* Primary Care Physician */}
          <div className="space-y-2">
            <Label htmlFor="primary-care-physician">Primary Care Physician</Label>
            <Input id="primary-care-physician" placeholder="Enter primary care physician" value={primaryCarePhysician} onChange={ev => setPrimaryCarePhysician(ev.target.value)} />
          </div>
          {/* Last Appointment Date */}
          <div className="space-y-2">
            <Label htmlFor="last-appointment-date">Last Appointment Date</Label>
            <Input id="last-appointment-date" type="date" value={lastAppointmentDate} onChange={ev => setLastAppointmentDate(ev.target.value)} />
          </div>
          {/* Next Appointment Date */}
          <div className="space-y-2">
            <Label htmlFor="next-appointment-date">Next Appointment Date</Label>
            <Input id="next-appointment-date" type="date" value={nextAppointmentDate} onChange={ev => setNextAppointmentDate(ev.target.value)} />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-xl">Treat Information <span className="text-red-600">Doctors Only</span></CardTitle>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
            Fill in the form below to create a new patient record.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Medical History */}
          <div className="space-y-2">
            <Label htmlFor="medical-history">Medical History</Label>
            <textarea
              id="medical-history"
              placeholder="Enter medical history"
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
              rows={3}
            />
          </div>
          {/* Allergies */}
          <div className="space-y-2">
            <Label htmlFor="allergies">Allergies</Label>
            <textarea
              id="allergies"
              placeholder="Enter allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
              rows={3}
            />
          </div>
          {/* Diagnosis */}
          <div className="space-y-2">
            <Label htmlFor="diagnosis">Diagnosis</Label>
            <textarea
              id="diagnosis"
              placeholder="Enter diagnosis"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
              rows={3}
            />
          </div>
          {/* Treatment */}
          <div className="space-y-2">
            <Label htmlFor="treatment">Treatment</Label>
            <textarea
              id="treatment"
              placeholder="Enter treatment"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
              rows={3}
            />
          </div>
          {/* Prescription */}
          <div className="space-y-2">
            <Label htmlFor="prescription">Prescription</Label>
            <textarea
              id="prescription"
              placeholder="Enter prescription"
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
              rows={3}
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-xl">Medical Information <span className="text-red-600">Chemist Only</span></CardTitle>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
            Provide prescriptions and other medical information.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="medicines">Medicines</Label>
            <textarea
              className="border w-full px-4 rounded-md p-2"
              rows={3}
              name="medicines"
              id="medicines"
              placeholder="Enter medicines"
              value={medicines}
              onChange={(e) => setMedicines(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <textarea
              id="quantity"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dosage">Dosage</Label>
            <textarea
              id="dosage"
              placeholder="Enter dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions</Label>
            <textarea
              id="instructions"
              placeholder="Enter instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter>
          <button className="ml-auto text-gray-900 border rounded-md p-4 w-full bg-green-300" type="submit">Save Patient</button>
        </CardFooter>
      </Card>
    </form>
  </>
}
