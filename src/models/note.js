import { Schema } from "mongoose";
import { model } from "mongoose";
import { TAGS } from "../constants/tags.js";


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
        enum: TAGS,
        required: false,
        default: 'Todo',
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
},
{
    timestamps: true,
    versionKey: false,
    });

noteSchema.index({ title: "text", content: "text" }, {
    name: "NoteTextIndex",
    weights: { title: 10, content: 6 },
    default_language: "english",
});

export const Note = model('Note', noteSchema);
