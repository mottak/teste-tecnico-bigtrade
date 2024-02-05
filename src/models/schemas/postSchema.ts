import { Schema } from 'mongoose';
import IPost from '../../interfaces/IPost';

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: String, required: true },
  published: { type: Date, required: true },
  updated: { type: Date, required: true }
},
{
  toJSON: {
  transform: function (doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
}, });

export default postSchema