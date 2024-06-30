
import { Medicine } from "../../models/Medicine";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handle(req, res) {
  const {method} = req;

  await mongooseConnect();

  if (method === 'POST') {
    const { 
      
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
    } = req.body;

    const medicineDoc = await Medicine.create({
      
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
    })
    res.json(medicineDoc)
  }

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Medicine.findOne({_id: req.query.id}));
    } else {
      res.json(await Medicine.find())
    }
  }

  if (method === 'PUT') {
    const {_id, 
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
    } = req.body;
    await Medicine.updateOne({_id}, {
      
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
    });
    res.json(true)
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Medicine.deleteOne({_id:req.query?.id})
      res.json(true)
    }
  }
}