const express = require('express');
const Posts = require('./postDb.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const post = await Posts.get(req.query);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.getById(req.params.id);

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).json({ message: 'Post id is not available !' });
    }

  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteIt = await Posts.remove(req.params.id);
    
    if (deleteIt > 0) {
      res.status(200).json({ message: 'Post got deleted !'});
    } else {
      res.status(400).json({ message: 'Post id is not available !' });
    }
    
      } catch (error) {
        res.status(500).json({ errorMessage: 'The request failed !!!' });
      }
});

router.put('/:id', async (req, res) => {
  try {
    const update = await Posts.update(req.params.id, req.body);
    if(req.body.text[4]) {
    res.status(200).json({ message: 'Post got updated !'});
    } else {
      res.status(400).json({ message: 'Text must be at least 5 characters long !'})
    }
      } catch (error) {
        res.status(500).json({ errorMessage: 'The request failed !!!' });
      }
});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;