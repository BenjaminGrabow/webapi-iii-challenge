const express = require('express');
const User = require('./userDB.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const user = await User.get(req.query);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' });
  }
});

router.get('/:id', validateUserId, async (req, res) => {
      res.status(200).json(req.user);
});

router.get('/:id/posts', async (req, res) => {
  try {
    const posts = await User.getUserPosts(req.params.id);
    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(400).json({ message: 'User id is not available !' });
    }

  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
const deleteIt = await User.remove(req.params.id);

if (deleteIt > 0) {
  res.status(200).json({ message: 'User got deleted !'});
} else {
  res.status(400).json({ message: 'User id is not available !' });
}

  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' });
  }
});

router.put('/:id', async (req, res) => {
  try {
const update = await User.update(req.params.id, req.body);
if(req.body.name[4]) {
res.status(200).json({ message: 'User got updated !'});
} else {
  res.status(400).json({ message: 'Name must be at least 5 characters long !'})
}
  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' });
  }
});

router.post('/', async (req, res) => {
  try {
const addUser = await User.insert(req.body);
if(req.body.name[4]) {
  res.status(200).json({ message: 'User got added'});
} else {
  res.status(400).json({ message: 'User name must be at least 5 charactes long !!!'})
}
  } catch (error) {
    res.status(500).json({ errorMessage: 'The request failed !!!' });
  }
});

// router.post('/:id/posts', async (req, res) => {
//   try {
// const addPosts = await User.insert(req.body);
// if(req.body.text[4]) {
//   res.status(200).json({ message: 'User got added'});
// } else {
//   res.status.json({ message: 'User name must be at least 5 charactes long !!!'})
// }
//   } catch (error) {
//     res.status(500).json({ errorMessage: 'The request failed !!!' })
//   }
// });


//custom middleware

async function validateUserId(req, res, next) {
try {
const { id } = req.params;
const user = await User.getById(id);
if(user){
  req.user = user;
  next();
} else {
res.status(404).json({ message: 'Id is not available !'})
}
} catch (error) {
  res.status(500).json({ errorMessage: 'The request failed !!!'})
}
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
