const http = require('http');
function handleRequest(request , response)
{
    if(request.url === "/currenttime")
    {
        request.statusCode = 200 ;
        response.end('<h1>' + new Date().toISOString(n) + '</h1>');
    }
    else if (request.url === "/")
    {
        response.statusCode = 200;
        response.end('<h1>Hello world</h1>');
    }
    //localhost::3000/currenttime   
    //localhost::3000
}

const server = http.createServer(handleRequest);

server.listen(3000);
