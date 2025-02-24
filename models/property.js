import { Schema, model, models } from "mongoose";

const propertySchema = new Schema({

    description: {
        type: String,
        required: [true, 'Description is required']
    },

    price: {
        type: Number,
        required: [true, 'Price is required']
    },

    location: {
        type: String,
        required: [true, 'Location is required']
    },

    images: [{
        type: String
    }] ,// array of images URLs

    bedrooms: {
        type: Number,
        required: [true, 'Number of bedrooms is required']
    },

    bathrooms: {
        type: Number,
        required: [true, 'Number of bathrooms is required']
    },
    
    type: {
        type: String,
        enum: ["house", "apartment", "land"],
        required: [true, "Type of property is required"]
    },

    status: {
        type: String,
        enum: ["available", "sold", "rented"],
        default: "available"
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Property = models.Property || model("Property", propertySchema);

export default Property;