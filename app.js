const http=require("http")
const url=require("url")
const fs=require("fs")
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))
app.use('/img', express.static(__dirname + 'public/img'))


http.createServer((req,res)=>
{
   const path=req.url;
   if(path=='/')
   {
    res.writeHead(200,{'Content-Type':'text/html'})
    const fs1= fs.readFileSync("./view/home.html");
    res.write(fs1);
    res.end();
   }
   else if(path=='/html_basic')
   {
    res.writeHead(200,{'Content-Type':'text/html'})
    const fs1= fs.readFileSync("./view/html_basic.html");
    res.write(fs1);
    res.end();
   }
   else if(path=='/html_editor')
   {
    res.writeHead(200,{'Content-Type':'text/html'})
    const fs1= fs.readFileSync("./view/html_editor.html");
    res.write(fs1);
    res.end();
   }
   else if(path=='/html_home')
   {
    res.writeHead(200,{'Content-Type':'text/html'})
    const fs1= fs.readFileSync("./view/html_home.html");
    res.write(fs1);
    res.end();
   }
   else if(path=='/html_tags')
   {
    res.writeHead(200,{'Content-Type':'text/html'})
    const fs1= fs.readFileSync("./view/html_tags.html");
    res.write(fs1);
    res.end();
   }
   else if(path=='/html_text')
   {
    res.writeHead(200,{'Content-Type':'text/html'})
    const fs1= fs.readFileSync("./view/html_text.html");
    res.write(fs1);
    res.end();
   }
   else if(path=='/404')
   {
    res.writeHead(200,{'Content-Type':'text/html'})
    const fs1= fs.readFileSync("./view/404.html");
    res.write(fs1);
    res.end();
   }
   
   else{
    console.log(`Page Not Found`)
   }
  
}).listen(3500)