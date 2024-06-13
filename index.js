import http from "http";

console.log("hello world");

http
  .createServer((req, res) => {
    try {
      if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Homepage success");
      } else {
        console.log("Root: " + req.url);
        throw new Error("incorrect root");
      }
    } catch (error) {
      console.error(error.message);
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end("Internal Server Error");
    }
  })
  .listen(8080, () => {
    console.log("Server listening on port 8080");
  });
