const server = require('./server.js');

const port = proces.env.PORT || 3500;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});
