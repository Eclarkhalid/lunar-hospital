import React from 'react'
import MedicineForm from '../../../../components/MedicineForm'
import DashboardLayout from '../../../../components/dashboard/DashboardLayout'
import Header from '../../../../components/dashboard/Header'

const AddPatient = () => {
  return <>
    <DashboardLayout>
      <Header />
      <div className="px-2">
        <MedicineForm />
      </div>
    </DashboardLayout>
  </>
}

export default AddPatient