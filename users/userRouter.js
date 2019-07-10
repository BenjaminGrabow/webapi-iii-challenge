const express = require('express');
const User = require('./userDB.js');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const user = await User.get(req.query)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' })
  }
});

router.get('/:id', (req, res) => {
try {

} catch (error) {

}
});

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
