const http = require('http');  
const fs = require('fs');

const requesthendler = function (req, res) {
    console.log(req.url);
    let filename = "";
    switch (req.url) {
        case '/':
            filename = 'Home.html';
            break;
        case '/about':
            filename = 'Info.html';
            break;
        case '/contact':
            filename = 'Contact.html';
            break;
        
    }
    
    fs.readFile(filename, function (err, result) {
        if(err) {
            console.log(err);
        }else {
            res.end(result); 
        }
    })
    
}

const server = http.createServer(requesthendler);
const Port = 5000;

server.listen(Port, ()=> {
    console.log(`Server started at http://localhost:${Port}`);
});