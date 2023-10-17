const  { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const postSchema = new Schema({
    Contenido: {
        type: String,
        required: true
    },
    DatePost:  {
        type: Date,
        required: true
    },
    Image:  {
        type: String,
        required: true
    },
    TeamName:  {
        type: String,
        required: true
    },
    TimeRead:  {
        type: Number,
        required: true
    },
    Title:  {
        type: String,
        required: true
    },
    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    Tags: {
        type: Array,
        required: true
    }
},
{
    timestamps: true
}
);

const Posts = model('posts', userSchema);
module.exports =  Posts;