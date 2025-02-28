import { connectToDB } from "@/utils/database";
import Property from "@/models/property";
import cloudinary from "@/utils/cloudinary";
import upload from "@/middleware/multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await connectToDB();

  switch (req.method) {
    case 'GET': // Lire tous les posts
      try {
        const properties = await Property.find({});
        res.status(200).json({ success: true, data: properties });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case 'POST': // Créer une nouvelle propriété
      upload.array('images', 10)(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ success: false, message: err.message });
        }

        try {
          const { description, price, location, bedRooms, status, type } = req.body;

          // Validation des champs
          if (!description || !price || !location || !bedRooms || !status || !type) {
            return res.status(400).json({ success: false, message: 'Tous les champs sont requis' });
          }

          let imagesUrls = [];

          // Upload vers Cloudinary
          const uploadToCloudinary = (file) =>
            new Promise((resolve, reject) => {
              cloudinary.uploader.upload_stream({ folder: 'properties_images' }, (error, result) => {
                if (error) reject(error);
                else resolve(result.secure_url);
              }).end(file.buffer);
            });

          if (req.files && req.files.length > 0) {
            const uploadPromises = req.files.map((file) => uploadToCloudinary(file));
            imagesUrls = await Promise.all(uploadPromises);
          }

          const property = await Property.create({
            description,
            price,
            location,
            bedRooms,
            status,
            type,
            images: imagesUrls,
          });

          res.status(201).json({ success: true, data: property });
        } catch (error) {
          res.status(400).json({ success: false, message: error.message });
        }
      });
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}