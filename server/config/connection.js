import mongoose from 'mongoose';

const connection = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_URI,);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

export default connection;