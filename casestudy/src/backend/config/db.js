const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is not defined');
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000, // fail fast if Atlas blocks the connection
  });
  console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
