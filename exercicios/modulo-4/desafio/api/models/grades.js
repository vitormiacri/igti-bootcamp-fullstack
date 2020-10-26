import mongoose from 'mongoose';

const GradesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  lastModified: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('Grades', GradesSchema);
