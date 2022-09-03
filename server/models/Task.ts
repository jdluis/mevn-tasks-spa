import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true,
    },

    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: Boolean,
        default: false,
        trim: true
    },
    date: {
        type: Date,
        required: false,
        trim: true,
    },
},
    {
        versionKey: false,
        timestamps: true,
    },
);

export default model("Task", taskSchema);