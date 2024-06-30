
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import DashboardLayout from "../../../../components/dashboard/DashboardLayout";
import MedicineForm from "../../../../components/MedicineForm";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [medicineInfo, setMedicineInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/medicine?id=' + id).then(response => {
      setMedicineInfo(response.data)
    })
  }, [id])
  return <>

    <DashboardLayout>
      <DashboardHeader />
      <div className="p-4">
      {medicineInfo && (
        <MedicineForm {...medicineInfo} />
      )}
      </div>
    </DashboardLayout>
  </>
}