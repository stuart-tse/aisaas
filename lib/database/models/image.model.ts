import {model, models, Schema} from 'mongoose';

export interface IImage extends Document{
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: string; // Assuming URL is a string for simplicity, could be replaced with a URL type if available
    width?: number;
    height?: number;
    config?: object; // Could be more specific if the shape of config is known
    transformationURL?: string; // Assuming URL is a string for simplicity
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        first: string;
        last: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: {type: String, required: true},
    secureURL: {type: URL, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationURL: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;
