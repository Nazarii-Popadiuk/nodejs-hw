import { Schema } from "mongoose";
import { model } from "mongoose";


const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: false,
        trim: true,
        default: "",
    },
    tag: {
        type: String,
        enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
        required: false,
        default: 'Todo',
    }
},
{
    timestamps: true,
    });

noteSchema.index({ title: "text", content: "text" }, {
    name: "NoteTextIndex",
    weights: { tag: 10, content: 6 },
    default_language: "english",
});

export const Note = model('Note', noteSchema);
