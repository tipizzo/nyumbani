import { connectToDB } from "@/utils/database";
import Property from "@/models/property";

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
            try {
                const property = await Property.create(req.body);
                res.status(201).json({ success: true, data: property });
            } catch (error) {
                res.status(400).json({ success: false })
            }

            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}