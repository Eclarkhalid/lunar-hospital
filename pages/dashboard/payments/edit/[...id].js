
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import DashboardLayout from "../../../../components/dashboard/DashboardLayout";
import PaymentForm from "../../../../components/PaymentForm";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/payments?id=' + id).then(response => {
      setPaymentInfo(response.data)
    })
  }, [id])
  return <>

    <DashboardLayout>
      <DashboardHeader />
      <div className="p-4 space-x-8">
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
      {paymentInfo && (
        <PaymentForm {...paymentInfo} />
      )}
      </div>
    </DashboardLayout>
  </>
}