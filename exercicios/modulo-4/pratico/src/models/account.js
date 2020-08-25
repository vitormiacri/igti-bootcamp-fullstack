import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  agencia: {
    type: Number,
    required: true,
  },
  conta: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Account', AccountSchema);
