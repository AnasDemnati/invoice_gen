import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
  codepostal: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Company', companySchema);
