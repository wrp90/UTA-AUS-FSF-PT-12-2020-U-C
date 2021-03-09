const http = require('http');

const PORT = 9050;

const displayRoot = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Home Page</h1>
        <a href='/'>Fav Foods</a>
      </body>
    </html>`;
  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(myHTML);
};

const displayFoods = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Fav Foods</h1>
        <a href='/'>Go Home</a>
      </body>
    </html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(myHTML);
};

const displayMovies = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Fav Movies</h1>
        <a href='/'>Go Home</a>
      </body>
    </html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(myHTML);
};

const displayCSS = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Fav CSS Framework</h1>
        <a href='/'>Go Home</a>
      </body>
    </html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(myHTML);
};

const display404 = (url, res) => {
    const myHTML = `
    <html>
      <body>
        <h1>404 Not Found </h1>
        <p>The page you were looking for: ${url} can not be found</p>
      </body>
    </html>`;
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(myHTML);
};

const handleRequest = (req, res) => {
    // Capture the url the request is made to
    const path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
        case '/':
            return displayRoot(res);

        case '/FavFoods':
            return displayFoods(res);

        case '/FavMovies':
            return displayMovies(res);
        
        case '/FavMovies':
            return displayMovies(res);

        case '/FavCSS':
            return displayCSS(res);
            
        default:
            return display404(path, res);
        
    }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});