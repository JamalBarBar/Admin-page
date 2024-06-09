// routes/vesselRoutes.js

const express = require('express');
const router = express.Router();
const Vessel = require('../models/Vessel');

// GET all vessels
router.get('/api/vessels', async (req, res) => {
  try {
    const vessels = await Vessel.find();
    res.json(vessels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new vessel
router.post('/api/vessels', async (req, res) => {
  const vessel = new Vessel({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    price: req.body.price
    // Add other fields as needed
  });

  try {
    const newVessel = await vessel.save();
    res.status(201).json(newVessel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET a single vessel
router.get('/api/vessels/:id', getVessel, (req, res) => {
  res.json(res.vessel);
});

// PUT update a vessel
router.put('/api/vessels/:id', getVessel, async (req, res) => {
  try {
    res.vessel.name = req.body.name;
    res.vessel.type = req.body.type;
    res.vessel.description = req.body.description;
    res.vessel.price = req.body.price;
    // Update other fields as needed
    const updatedVessel = await res.vessel.save();
    res.json(updatedVessel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a vessel
router.delete('/api/vessels/:id', getVessel, async (req, res) => {
  try {
    await res.vessel.remove();
    res.json({ message: 'Vessel deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single vessel by ID
async function getVessel(req, res, next) {
  let vessel;
  try {
    vessel = await Vessel.findById(req.params.id);
    if (vessel == null) {
      return res.status(404).json({ message: 'Cannot find vessel' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.vessel = vessel;
  next();
}

module.exports = router;
