const http = require('http');

const PORT = 8080;

const handleRequest = (req, res) => {
  req.on('index.html', (data) => {
    requestData += data;
  });
  req.on('end', () => {
      console.log(data);
      res.end();
    });
};
    

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
