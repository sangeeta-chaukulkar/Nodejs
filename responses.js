const http=require('http') 
http.createServer(function (req, res) {
    console.log(req.url,req.method,req.headers);
    const url=req.url;
    if(url === '/home'){
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome home</h1> </body>');
    res.write('/<html>');
    return res.end();
    }
    if(url === '/about'){
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to About Us page</h1> </body>');
    res.write('/<html>');
    return res.end();
    }
    if(url === '/node'){
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>< <h1>Welcome to my Node Js project</h1> </body>');
    res.write('/<html>');
    return res.end();
    }    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1> </body>');
    res.write('/<html>');
    res.end();
    process.exit(); 
  }).listen(4000);