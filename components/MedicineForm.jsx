import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";



export default function MedicineForm({
  _id,
  name: existingName,
  description: existingDescription,
  quantity: existingQuantity,
  dosage: existingDosage,
  instructions: existingInstructions,
  expiryDate: existingExpiryDate,
  manufacturer: existingManufacturer,
  price: existingPrice,
  category: existingCategory,
  activeIngredients: existingActiveIngredients,
  sideEffects: existingSideEffects,
}) {
  const [name, setName] = useState(existingName || '');
  const [description, setDescription] = useState(existingDescription || '');
  const [quantity, setQuantity] = useState(existingQuantity || '');
  const [dosage, setDosage] = useState(existingDosage || '');
  const [instructions, setInstructions] = useState(existingInstructions || '');
  const [expiryDate, setExpiryDate] = useState(existingExpiryDate || '');
  const [manufacturer, setManufacturer] = useState(existingManufacturer || '');
  const [price, setPrice] = useState(existingPrice || '');
  const [category, setCategory] = useState(existingCategory || '');
  const [activeIngredients, setActiveIngredients] = useState(existingActiveIngredients || '');
  const [sideEffects, setSideEffects] = useState(existingSideEffects || '');
  const [redirect, setRedirect] = useState(false);

  const router = useRouter();

  async function createMedicine(e) {
    e.preventDefault();
    const data = {
      name,
      description,
      quantity,
      dosage,
      instructions,
      expiryDate,
      manufacturer,
      price,
      category,
      activeIngredients,
      sideEffects,
    };

    if (_id) {
      await axios.put('/api/medicine', { ...data, _id });
      console.log("Medicine updated successfully!!");
    } else {
      await axios.post('/api/medicine', data);
      console.log("Medicine created successfully!!");
    }

    setRedirect(true);
  }

  if (redirect) {
    router.push('/dashboard/medicines');
    return null;
  }

  return <>
    <form action="" onSubmit={createMedicine} className="space-y-4">
      <Card className="w-full">
        
        <CardHeader>
          <CardTitle className="text-xl">Medicine Information</CardTitle>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
            Provide prescriptions and other medical information.
          </p>
        </CardHeader>
        <CardContent className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2 ">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="text"
              id="quantity"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              type="text"
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="border w-full px-4 rounded-md p-2"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dosage">Dosage</Label>
            <Input
              type="text"
              id="dosage"
              placeholder="Enter dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expiry-date">Expiry Date</Label>
            <Input
              type="date"
              id="expiry-date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="manufacturer">Manufacturer</Label>
            <Input
              type="text"
              id="manufacturer"
              placeholder="Enter manufacturer"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              type="text"
              id="price"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              type="text"
              id="category"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="instructions">Instructions</Label>
            <textarea 
              rows={3}
              className="border w-full px-4 rounded-md p-2"
              type="text"
              id="instructions"
              placeholder="Enter instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="active-ingredients">Active Ingredients</Label>
            <textarea 
              rows={3}
              className="border w-full px-4 rounded-md p-2"
              type="text"
              id="active-ingredients"
              placeholder="Enter active ingredients"
              value={activeIngredients}
              onChange={(e) => setActiveIngredients(e.target.value)}
            />
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="side-effects">Side Effects</Label>
            <textarea
              id="side-effects"
              placeholder="Enter side effects"
              value={sideEffects}
              onChange={(e) => setSideEffects(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button  className="ml-auto " type="submit">Save Medicine</Button>
        </CardFooter>
      </Card>
    </form>
  </>
}
