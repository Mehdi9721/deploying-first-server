const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("hello world")
})
server.listen(3000,console.log("server is running only on port 3000"));