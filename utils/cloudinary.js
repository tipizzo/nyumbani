import { v2 } from "cloudinary";

cloudinary.config({
    cloudinary_url: process.env.CLOUDINARY_URL
});

export default cloudinary;