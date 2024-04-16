const express = require("express");
const router = express.Router();

const{auth, isInstructor}  =require('../middlewares/auth')

const {
    deleteAccount,
    updateProfile,
    getAllUserDetails,
    updateDisplayPicture,
    getEnrolledCourses,
    instructorDashboard,
  } = require("../controllers/Profile")


//DELETE USER ACCOUNT
router.delete("/deleteProfile", auth, deleteAccount);
router.put("/updateProfile", auth, updateProfile);

router.get("/getAllUserDetails", auth, getAllUserDetails);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)
router.get("/getEnrolledCourses", auth, getEnrolledCourses)


module.exports = router