let http = require('http');  
let url = require('url');  
let fs = require('fs');  
let server = http.createServer(function(request, response) {  
    let path = url.parse(request.url).pathname; 
  
    switch (path) {  
        case '/':  
           
            fs.readFile(__dirname + '/index.html', function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        default:  
            try {
                //try to load any file given
                fs.readFile(__dirname + path, function (err,data) {
                    if (err) {
                        response.writeHead(404);
                        response.end(JSON.stringify(err));
                        return;
                    }
                    response.writeHead(200);
                    response.end(data);
                });
                break;
            } catch(error) {
                response.writeHead(404);  
                response.write("opps this doesn't exist - 404");  
                response.end();  
                break;  
            }
         
    }  
});  
server.listen(8080);