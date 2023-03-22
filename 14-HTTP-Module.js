const http = require('http');

// url will be the address
// for to a particular page we put forward slash and that page behind the url e.g. MyWebsite/About for homepage just a forward slash is used('/')
// node-https-server is the snippet that can be used for creating a server 
const server = http.createServer((req, res) => {

    // req is a giant object
    // console.log(req)
    // The above line will be printed only after we go to browser and open start our webpage(localhost) because the server is waiting for those requests which server will get once the webpage is loaded or started

    // if (req.url === '/') {
        // res.end('Welcome to our page')
    // }
    // if (req.url === '/about') {
        // res.end('Here is our short history')
    // }

    //below is default to  run existing page ....also the representation is not exact same to be used but just a sample of HTML

    // res.end(`<h1>OOps!</h1>
        // <p>We can't find the page you are looking for</p>
        // <a href="/">Back Home</a>
        // `)
        // the code has some error about which we'll learn in express tutorial
    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('Here is our short history')
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `)
    }


    /*the url property in the req tell us what address client is requesting*/;
    // res.write(`Welcome to our homepage`);
    // res.end();
})
// createsServer() method looks for a callback function which has two parameters and both are objects
// first parameter represents the incoming request.....imagine a client is requesting from the web browser your webpage...so request object will have methods and other information
//second parameter is the response in a form of object that we are sending back to the server 


server.listen(5000);
//we have to mention the port that our server is going to listen to
// go to your browser and type localhost:5000 and you will see the effect



