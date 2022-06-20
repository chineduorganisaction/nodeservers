import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
const server = http.createServer(
    (req, res) => {
        console.log('Request made to ' + req.url );
        var contentType = "";
        if (req.url === "/127.0.0.1:8000") {
            fetch("http://127.0.0.1:8000")
            .then(data => data.text())
            .then(response => {
                contentType = "text/html";
                res.writeHead(200, {"Content-Type": contentType});
                res.write(response);
                res.end();
            })
            
        } else {
            fs.readFile(path.join(
                    __dirname, 
                    req.url === "/" ? "index.html": req.url
                ), 
                (error, data) => {
                    var e = "";        
                    var extName = path.extname(data.toString('utf8')); 
        
                    switch (extName) {
                        case ".css":
                            contentType = "text/css";
                            break;
                        case ".js":
                            contentType = "text/javascript";
                            break;
                        case ".json":
                            contentType = "application/json";
                            break;
                        case (".jpg"||".png"):
                            contentType = join("image/", e ? "jpg":"png");
                            break;    
                        case ".html":
                            contentType = "text/html";
                            break;
                    }
        
                    if (error) {
                        res.writeHead(404, {"Content-Type": "text/html"});
                        res.write("File not Found...");
                    } else {
                        res.writeHead(200, {"Content-Type": contentType});
                        res.write(data);
                    }
                    res.end();
                }
            );
        }

    }
);
const PORT = 5000;
server.listen(PORT, "127.0.0.1");
console.log(`App, Listening on PORT: ${PORT}; HOSTNAME: 127.0.0.1...`);