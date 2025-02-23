import { connectToDB } from "@/utils/database";
import Property from "@/models/property";

export default async function handler(req, res) {
    const { id } = req.query;
    await connectToDB();

    switch (req.method) {
        case 'PUT': // Update a property
            try {
                const property = await Property.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                });

                if(!property) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: property });
            } catch (error) {
                res.status(400).json({ success: false });
            }

            break;

        case 'DELETE': // Delete a property
            try {
                const deleteProperty = await Property.findByIdAndDelete(id);
                if(!deleteProperty) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }

            break;

        default:
            res.status(400).json({ success: false });
            break;
    }

}