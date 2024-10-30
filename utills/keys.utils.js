import dotenv from "dotenv";

dotenv.config({
    path: '.env'
})

const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME
const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET

export {cloudinaryCloudName, cloudinaryApiKey, cloudinaryApiSecret}
