import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  dogImage: {
    type: String,
    required: true
  }
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

export default UserProfile;