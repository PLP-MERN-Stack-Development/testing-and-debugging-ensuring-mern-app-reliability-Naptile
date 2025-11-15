const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const { verifyToken } = require('../utils/auth'); // we'll create this

// Create a new post
router.post('/', verifyToken, async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    return res.status(400).json({ error: 'Title, content and category are required' });
  }

  const post = await Post.create({
    title,
    content,
    author: req.user.id,
    category,
    slug: title.toLowerCase().replace(/\s+/g, '-'),
  });

  res.status(201).json(post);
});

// Get all posts with optional category filter and pagination
router.get('/', async (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  const filter = category ? { category } : {};

  const posts = await Post.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(posts);
});

// Get post by ID
router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// Update post
router.put('/:id', verifyToken, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  if (post.author.toString() !== req.user.id) return res.status(403).json({ error: 'Forbidden' });

  Object.assign(post, req.body);
  await post.save();
  res.json(post);
});

// Delete post
router.delete('/:id', verifyToken, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  if (post.author.toString() !== req.user.id) return res.status(403).json({ error: 'Forbidden' });

  await post.deleteOne();
  res.json({ message: 'Deleted' });
});

module.exports = router;
