import mongoose from 'mongoose';

const connectDB = async (mongoUri) => {
  if (!mongoUri) {
    throw new Error('MONGODB_URI is required');
  }

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('Connected to MongoDB');
};

export default connectDB;
