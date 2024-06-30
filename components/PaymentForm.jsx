import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";

export default function PaymentForm({
  _id,
  name: existingName,
  date: existingDate,
  method: existingMethod,
  amount: existingAmount,
  description: existingDescription,
}) {
  const [name, setName] = useState(existingName || '');
  const [date, setDate] = useState(existingDate || '');
  const [method, setMethod] = useState(existingMethod || '');
  const [amount, setAmount] = useState(existingAmount || '');
  const [description, setDescription] = useState(existingDescription || '');
  const [redirect, setRedirect] = useState(false);

  const router = useRouter();

  async function createPayment(e) {
    e.preventDefault();
    const data = {
      name,
      date,
      method,
      amount,
      description,
    };

    if (_id) {
      await axios.put('/api/payments', { ...data, _id });
      console.log("Payment updated successfully!!");
    } else {
      await axios.post('/api/payments', data);
      console.log("Payment created successfully!!");
    }

    setRedirect(true);
  }

  if (redirect) {
    router.push('/dashboard/payments');
    return null;
  }

  return <>
    <form action="" onSubmit={createPayment} className="space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">Payment Information</CardTitle>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
            Provide payment details.
          </p>
        </CardHeader>
        <CardContent className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Transaction ID</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter transaction ID"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="method">Method</Label>
            <select
              id="method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="border w-full px-4 rounded-md p-2"
            >
              <option value="">Select a method</option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Insurance">Insurance</option>
              <option value="Online Payment">Online Payment</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="description">Description</Label>
            <textarea 
              rows={3}
              className="border w-full px-4 rounded-md p-2"
              type="text"
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto" type="submit">Save Payment</Button>
        </CardFooter>
      </Card>
    </form>
  </>
}
