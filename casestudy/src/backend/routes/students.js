const express = require('express');
const mongoose = require('mongoose');
const Student = require('../models/Student');

const router = express.Router();

router.get('/health', (req, res) => {
  const db = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.status(db === 'connected' ? 200 : 503).json({ status: 'ok', database: db });
});

router.get('/students', async (req, res, next) => {
  try {
    const data = await Student.find().sort({ regNo: 1 }).lean();
    res.json({ success: true, count: data.length, data });
  } catch (e) { next(e); }
});

router.post('/students', async (req, res, next) => {
  try {
    res.status(201).json({ success: true, data: await Student.create(req.body) });
  } catch (e) { next(e); }
});

router.put('/students/:id', async (req, res, next) => {
  try {
    const s = await Student.findByIdAndUpdate(req.params.id, req.body,
      { new: true, runValidators: true });
    if (!s) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: s });
  } catch (e) { next(e); }
});

router.delete('/students/:id', async (req, res, next) => {
  try {
    const s = await Student.findByIdAndDelete(req.params.id);
    if (!s) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true });
  } catch (e) { next(e); }
});

module.exports = router;
