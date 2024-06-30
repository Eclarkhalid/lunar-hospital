
import { Payment } from "../../models/Payment";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handle(req, res) {
  const {method} = req;

  await mongooseConnect();

  if (method === 'POST') {
    const { 
      
      name,
      date,
      method,
      amount,
      description,
    } = req.body;

    const paymentdoc = await Payment.create({
      
      name,
      date,
      method,
      amount,
      description,
    })
    res.json(paymentdoc)
  }

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Payment.findOne({_id: req.query.id}));
    } else {
      res.json(await Payment.find())
    }
  }

  if (method === 'PUT') {
    const {_id, 
      name,
      date,
      method,
      amount,
      description,
    } = req.body;
    await Payment.updateOne({_id}, {
      
      name,
      date,
      method,
      amount,
      description,
    });
    res.json(true)
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Payment.deleteOne({_id:req.query?.id})
      res.json(true)
    }
  }
}