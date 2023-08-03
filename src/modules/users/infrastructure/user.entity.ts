const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // select: false,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/lambda-ingenier-a-e-innovaci-n/image/upload/c_thumb,w_200,g_face/v1654909384/Lambda%20Campus/onre-piece-logo_w2t0tq.jpg",
    },
    role: {
      type: String,
      default: "student",
      enum: ["student", "admin"],
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    workshops: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workshop",
      },
    ],
    specializations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialization",
      },
    ],
    certificates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Certificate",
      },
    ],
    refreshToken: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      select: false,
    },
    passwordResetCode: {
      type: String,
      default: "",
      select: false,
    },
  },
  {
    timestamps: true, //TODO: add createdAt and updatedAt
    versionKey: false, //TODO: remove versionKey
  }
);

export default mongoose.model("User", UserSchema);

// module.exports = mongoose.model("User", UserSchema);
