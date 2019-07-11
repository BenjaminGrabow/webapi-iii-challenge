const express = require('express');
const Posts = require('./postDb');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const post = await Posts.get(req.query);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' });
  }
});

router.get('/:id', validatePostId, async (req, res) => {
      res.status(200).json(req.post);
});

router.delete('/:id', validatePostId, async (req, res) => {
    const deleteIt = await Posts.remove(req.params.id);
      res.status(200).json({ message: 'Post got deleted !' });
});

router.put('/:id', async (req, res) => {
  try {
    const update = await Posts.update(req.params.id, req.body);
    if (req.body.text[4]) {
      res.status(200).json({ message: 'Post got updated !' });
    } else {
      res.status(400).json({ message: 'Text must be at least 5 characters long !' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' });
  }
});

// custom middleware

async function validatePostId(req, res, next) {
  const { id } = req.params
  const post = await Posts.getById(id);
  try {
    if (post) {
      req.post = post;
      next();
    } else {
      res.status(400).json({ message: 'invalid Id ' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
};

module.exports = router;