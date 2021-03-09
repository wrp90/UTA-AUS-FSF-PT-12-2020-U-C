const http = require('http');

const PORT = 8500;

const handleRequest = (request, response) => {
    response.end(`Path Hit: ${request.url}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`)
});

const PORTTWO = 8000;

const handleRequest2 = (request, response) => {
    response.end(`Path Hit Again: ${request.url}`);
};

const server2 = http.createServer(handleRequest2);

server2.listen(PORTTWO, () => {
    console.log(`Server listening on: http://localhost:${PORTTWO}`)
});



