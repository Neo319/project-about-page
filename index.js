import http from "http";

console.log("hello world");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/" && req.method === "GET") {
      res.end("Homepage success");
    } else {
      console.log("Root: " + req.url);
      throw new Error("incorrect root");
    }
  })
  .listen(8080);
