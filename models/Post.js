const mongoose = require('mongoose');

const { Schema } = mongoose;

// Post Schema

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: String,
  title: String,
  text: String,
  categories: [String],
  date: {
    type: Date,
    default: Date.now
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: String,
      name: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
