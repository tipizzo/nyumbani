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

    switch(req.method) {
        case 'GET': // Lire tous les posts
            try {
                const properties = await Property.find({});
                res.status(200).json({ sucess: true, data: properties });
            } catch (error) {
                res.status(400).json({ success: false });
            }

            break;

        case 'POST': // Create a new post
            upload.array('images', 10)(req, res, async (err) => {
                if(err) {
                    return res.status(400).json({ success: false, message: err.message })
                } 

                try {
                    const { description, price, location, bedRooms, status, type } = req.body;
                    let imagesUrls = [];

                    // Upload images to cloudinary
                    if (req.files && req.files.length > 0) {
                        const uploadPromises = req.files.map((map) =>
                         cloudinary.uploader.upload_stream({ folder: 'properties_images' }, (error, result) => {
                            if (error) throw error;
                            return result.secure_url;
                         }).end(file.buffer)
                        );
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

                    res.status(201).json({ success: true, data: property })
                } catch (error) {
                    res.status(400).json({ success: false, message: error.message })
                }
            })

            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}