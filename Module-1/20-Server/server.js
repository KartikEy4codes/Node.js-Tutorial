import http from "http";

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Ye hai mera Home Page");
    }

    else if (req.url === "/about") {
        res.end("Ye hai mera About Page");
    }

    else if (req.url === "/contact") {
        res.end("Ye hai mera Contact Page");
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page nahi mila (404)");
    }

});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});