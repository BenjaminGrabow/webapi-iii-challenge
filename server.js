const express = require('express');
const userRouter = require('./users/userRouter.js');
const postsRouter = require('./posts/postRouter.js'); 

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
 console.log(req.method, req.url, new Date());
 next();
};

server.use(express.json());

server.use(logger);

server.use('/api/user', userRouter)
server.use('/api/posts', postsRouter)


module.exports = server;
