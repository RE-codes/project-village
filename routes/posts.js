const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

// @route   GET /api/posts
// @desc    Get all posts
// @access  Public
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => console.error(err));
});

// @route   POST /api/posts
// @desc    add post
// @access  Private
router.post('/', (req, res) => {
  // create post
  const newPost = new Post({
    user: req.body.user,
    text: req.body.text,
    name: req.body.name,
    title: req.body.title,
    categories: req.body.categories
  });

  newPost.save().then(post => res.json(post));
});

// @route   POST /api/posts/comment/:postId
// @desc    add comment
// @access  Private
router.post('/comment/:postId', (req, res) => {
  // Find post by id
  Post.findById(req.params.postId)
    .then(post => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        user: req.body.user
      };
      // push to comments array
      post.comments.unshift(newComment);
      // save to db
      post.save().then(
        Post.find()
          .sort({ date: -1 })
          .then(posts => res.json(posts))
      );
    })
    .catch(err => console.error(err));
});

module.exports = router;
