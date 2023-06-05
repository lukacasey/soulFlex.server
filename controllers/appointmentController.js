const Appointment = require("../models/appointmentsModel");
const mongoose = require("mongoose");

// Create new appointment
const createAppointment = async (req, res) => {
  const { email, fullName, date, time } = req.body;

  // add doc to db
  try {
    const appointment = await Appointment.create({
      email,
      fullName,
      date,
      time,
    });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all appointments
const getAppointments = async (req, res) => {
  const appointments = await Appointment.find().sort({ createdAt: -1 });

  res.status(200).json(appointments);
};

// exports
module.exports = {
  createAppointment,
  getAppointments,
};
