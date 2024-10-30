import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import { uploadFileOnCloudinary } from "../utills/cloudinary.utills.js";
import fs from "fs";

const app = express();
app.use(express.json('16kb'));

const PORT = 3000;

app.post("/upload/files", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path; // Path to the uploaded file
    const response = await uploadFileOnCloudinary(filePath);
    fs.unlinkSync(filePath); // Cleanup temp file after upload

    res.status(200).json({
      message: "File uploaded successfully",
      url: response.url,
    });
  } catch (error) {
    console.error("Error during file upload:", error.message || error);
    res
      .status(500)
      .json({ message: "File upload failed", error: error.message || error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
