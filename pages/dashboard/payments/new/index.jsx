import React from 'react'
import PaymentForm from '../../../../components/PaymentForm'
import DashboardLayout from '../../../../components/dashboard/DashboardLayout'
import Header from '../../../../components/dashboard/Header'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../components/ui/card'

const AddPatient = () => {
  return <>
    <DashboardLayout>
      <Header />
      <div className="px-2 space-y-8">
        <Card
          className="sm:col-span-1 w-[350px]" x-chunk="dashboard-05-chunk-0 mb-4"
        >
          <CardHeader className="pb-3">
            <CardTitle className='text-red-600'>Receptionist</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              This is the receptionist page. Enter payments made by patients.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            {/* <Button>Add New Patient</Button> */}
          </CardFooter>
        </Card>
        <PaymentForm />
      </div>
    </DashboardLayout>
  </>
}

export default AddPatient