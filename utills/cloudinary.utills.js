import { v2 as cloudinary } from "cloudinary";
import { cloudinaryApiKey, cloudinaryApiSecret, cloudinaryCloudName } from "./keys.utils.js";

const cf = {
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
  secure: true,
};

cloudinary.config(cf);
console.log('api key is ', cloudinaryApiKey);


const uploadFileOnCloudinary = async filePath => {
  try {
    if (!filePath) {
      throw new Error("File Path not Provided");
    }
    const response = await cloudinary.uploader.upload(filePath);
    if (response) {
      console.log("File Uploaded Successfully");
      console.table([filePath, response.url]);
    }
    return response;
  } catch (error) {
    console.error(`Cloudinary Error: \n ${JSON.stringify(error)}`);
    throw error; // Rethrow the error to handle it in the route
  }
};

export { uploadFileOnCloudinary };
