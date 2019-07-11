const server = require('./server');

const port = process.env.PORT || 3500;

server.listen((port), () => {
  console.log(`Server is running on http://localhost:${port}`)
});
