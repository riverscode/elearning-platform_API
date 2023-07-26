const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/lambda-ingenier-a-e-innovaci-n/image/upload/v1647158309/Cursos/revit-api_gacvdk.png",
    },
    duration: {
      type: String,
      default: "Por definir",
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    price: {
      type: Number,
      required: true,
      default: 99.99,
    },
    published: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    certificates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Certificate",
      },
    ],
    chapters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapter",
      },
    ],
    links: [{}],
  },
  {
    timestamps: true, //TODO: add createdAt and updatedAt
    versionKey: false, //TODO: remove versionKey
  }
);

export default mongoose.model("Course", CourseSchema);
