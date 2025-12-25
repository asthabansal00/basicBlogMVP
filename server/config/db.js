// const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Db connected successfully");
  } catch (err) {
    console.log("Db not connected");
  }
};

module.exports = { dbConnection };
