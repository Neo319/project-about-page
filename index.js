// ------------------------------------- EXPRESS VERSION

import express from "express";

const app = express();
const port = 8080;

// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));

// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry, we couldn't find that!");
});

// Middleware to handle other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

//

//

//

// ------------------------------------- HTTP / STANDARD VERSION

// import http from "http";
// import fs from "node:fs";

// console.log("hello world");

// http
//   .createServer((req, res) => {
//     try {
//       if (req.url === "/" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/html" });

//         try {
//           const data = fs.readFileSync("./public/index.html", "utf8");
//           res.write(data);
//         } catch (err) {
//           console.error(err);
//         }
//         res.end();
//       } else if (req.url === "/about" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/html" });

//         try {
//           const data = fs.readFileSync("./public/about.html", "utf8");
//           res.write(data);
//         } catch (err) {
//           console.error(err);
//         }
//         res.end();
//       } else if (req.url === "/contact-me" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/html" });

//         try {
//           const data = fs.readFileSync("./public/contact-me.html", "utf8");
//           res.write(data);
//         } catch (err) {
//           console.error(err);
//         }
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });

//         try {
//           const data = fs.readFileSync("./public/404.html", "utf8");
//           res.write(data);
//         } catch (err) {
//           console.error(err);
//         }
//         res.end();
//       }
//     } catch (error) {
//       console.error(error.message);
//       res.writeHead(500, { "Content-type": "text/plain" });
//       res.end("Internal Server Error");
//     }
//   })
//   .listen(8080, () => {
//     console.log("Server listening on port 8080");
//   });
