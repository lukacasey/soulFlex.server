const express = require("express");
const {
  createAppointment,
  getAppointments,
} = require("../controllers/appointmentController");

const router = express.Router();

// GET all appointments
router.get("/", getAppointments);

// POST a new appointment
router.post("/", createAppointment);

module.exports = router;
