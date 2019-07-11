const express = require('express');
const userRouter = require('./users/userRouter');
const postsRouter = require('./posts/postRouter'); 

const server = express();
const cors = require('cors');

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
 console.log(req.method, req.url, new Date());
 next();
};

server.use(express.json());

server.use(cors());

server.use(logger);

server.use('/api/user', userRouter)
server.use('/api/posts', postsRouter)


module.exports = server;
