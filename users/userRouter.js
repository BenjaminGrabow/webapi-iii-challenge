const express = require('express');
const User = require('./userDB.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const user = await User.get(req.query);

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.getById(req.params.id);

    if (user) {
res.status(200).json(user);
    } else {
      res.status(400).json({ message: 'User id is not available !' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' })
  }
});

router.get('/:id/posts', async (req, res) => {
try {

} catch (error) {
  res.status(500).json({ errorMessage: 'The request failed !!!' })
}
});

router.post('/', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' })
  }
});

router.post('/:id/posts', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' })
  }
});


router.delete('/:id', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' })
  }
});

router.put('/:id', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' })
  }
});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
