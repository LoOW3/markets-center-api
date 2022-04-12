import { Schema, model } from "mongoose";
//password: tiene que tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
//date: examples 31.12.3013 01/01/2013 5-3-2013 15.03.2013

const cateogiresSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name required']
    },
    image: {
        type: String,
        default: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/tags_categories_icon_145927.png',
        required: false
    }
},
    {
        timestamps: true,
        versionKey: false
    });

export default model('Categories', cateogiresSchema)