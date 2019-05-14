// Get the http module
var http = require('http');

// fs module allows us to read and write content for responses!!
var fs = require('fs');

// Create the server using the http module:
var server = http.createServer(function (request, response) {
    // see what URL the client is requesting:
    console.log('client request URL: ', request.url);

    // Routes
    // Cars
    if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }

    // New Car
    else if (request.url === '/cars/new') {
        fs.readFile('./views/newCar.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }

    // Cats
    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }

    // CSS -- must include "." in route before folder
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }

    // Routes for images

    // Cars

    // car1
    else if (request.url === '/images/car1.jpg') {
        fs.readFile('./images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    // car2
    else if (request.url === '/images/car2.jpg') {
        fs.readFile('./images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    // car3
    else if (request.url === '/images/car3.jpg') {
        fs.readFile('./images/car3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    // Cats

    // cat1
    else if (request.url === '/images/cat1.jpg') {
        fs.readFile('./images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    // cat2
    else if (request.url === '/images/cat2.jpg') {
        fs.readFile('./images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    // cat3
    else if (request.url === '/images/cat3.jpg') {
        fs.readFile('./images/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    // Request didn't match a route
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// Tell server which port to listen for HTTP requests
server.listen(7077);
// Print port/listen info to console
console.log("Running in localhost at port 7077")