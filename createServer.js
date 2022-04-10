const http=require('http') 
http.createServer(function (req, res) {
    console.log('sangeeta');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('sangeeta');
    res.end();
  }).listen(4000);