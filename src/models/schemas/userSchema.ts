import { Schema, model } from 'mongoose';
import IUser from '../../interfaces/IUser';

const userSchema= new Schema<IUser>({
  displayName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
},
{
  toJSON: {
  transform: function (doc, ret) {
    // Retira a propriedade `_id` e adiciona `_d`
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
}, });

export default userSchema