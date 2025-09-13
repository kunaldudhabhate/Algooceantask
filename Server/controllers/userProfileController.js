import UserProfile from '../models/UserProfile.js';
import { calculateAge } from '../utils/dateHelpers.js';

export const createUserProfile = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, dogImage } = req.body;
    
    if (!firstName || !lastName || !dateOfBirth || !dogImage) {
      return res.status(400).json({ 
        success: false,
        error: "All fields are required: firstName, lastName, dateOfBirth, dogImage" 
      });
    }

    // Extract only the date part (YYYY-MM-DD) from the dateOfBirth
    const dateOnly = new Date(dateOfBirth).toISOString().split('T')[0];
    const age = calculateAge(dateOfBirth);

    const userProfile = new UserProfile({
      firstName,
      lastName,
      dateOfBirth: dateOnly,
      age,
      dogImage
    });

    const savedProfile = await userProfile.save();
    
    res.status(201).json({
      success: true,
      message: "User profile saved successfully",
      data: savedProfile
    });
  } catch (error) {
    console.error("Error saving user profile:", error);
    res.status(500).json({ 
      success: false,
      error: "Failed to save user profile",
      details: error.message 
    });
  }
};

export const getUserProfiles = async (req, res) => {
  try {
    const profiles = await UserProfile.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: profiles.length,
      data: profiles
    });
  } catch (error) {
    console.error("Error fetching user profiles:", error);
    res.status(500).json({ 
      success: false,
      error: "Failed to fetch user profiles",
      details: error.message 
    });
  }
};

export const getUserProfileById = async (req, res) => {
  try {
    const profile = await UserProfile.findById(req.params.id);
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        error: "Profile not found"
      });
    }
    
    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ 
      success: false,
      error: "Failed to fetch user profile",
      details: error.message 
    });
  }
};

export const deleteUserProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findByIdAndDelete(req.params.id);
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        error: "Profile not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Profile deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting user profile:", error);
    res.status(500).json({ 
      success: false,
      error: "Failed to delete user profile",
      details: error.message 
    });
  }
};