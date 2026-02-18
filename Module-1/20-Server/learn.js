import http from "http"
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("ye hai mera home page")
    }
    else if (req.url === "/about") {
        res.end("ye hai mera  about page")

    } else if (req.url === "/contact") {
        res.end("Ye hai mera  contact page")

    } else {
        res.end("Page he nhi hai ")
    }
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
