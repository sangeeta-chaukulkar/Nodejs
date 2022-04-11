const http=require('http') 
const fs=require('fs');

http.createServer(function (req, res) {
    const url=req.url;
    const method=req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body>');
        const fileData = fs.readFileSync('message1.txt', 'utf-8');
        fileData.split('\n').forEach(line =>  {
            res.write(`<h1>${line}</h1>`); 
        });
        res.write('<form action="/message" method="POST"><input type="text"  name="message"> <button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('/<html>');
        return res.end();
    } 
    if(url=== '/message' && method==='POST') {
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        }); 
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            const message=parsedBody.split('=')[1];
            fs.appendFile("message1.txt", message+"\n", (err) => {
                if (err) {
                  console.log(err);
                }  
              });
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        }) 
    }            
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1> </body>');
    res.write('/<html>');
    res.end();
  }).listen(4000);