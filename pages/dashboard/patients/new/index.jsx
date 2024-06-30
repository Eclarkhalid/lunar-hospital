import React from 'react'
import PatientsForm from '../../../../components/PatientForm'
import DashboardLayout from '../../../../components/dashboard/DashboardLayout'
import Header from '../../../../components/dashboard/Header'

const AddPatient = () => {
  return <>
    <DashboardLayout>
      <Header />
      <div className="px-2">
        <PatientsForm />
      </div>
    </DashboardLayout>
  </>
}

export default AddPatient