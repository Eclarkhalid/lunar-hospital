
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import DashboardLayout from "../../../../components/dashboard/DashboardLayout";
import PatientForm from "../../../../components/PatientForm";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [patientsInfo, setPatientsInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/patients?id=' + id).then(response => {
      setPatientsInfo(response.data)
    })
  }, [id])
  return <>

    <DashboardLayout>
      <DashboardHeader />
      <div className="p-4">
      {patientsInfo && (
        <PatientForm {...patientsInfo} />
      )}
      </div>
    </DashboardLayout>
  </>
}