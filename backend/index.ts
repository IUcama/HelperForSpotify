import { getAuthCodeFlow } from "./login/login";
import express from "express";

const app = express();

//// Middleware

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.iucama.de:11180');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

//// END Middleware


app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/authLink", (req, res) => {
	getAuthCodeFlow()
	.then(returnObject => {
		// res.redirect(link);
		res.json(returnObject)
	})
	.catch((error) => {
		res.json(error);
	});
});

// app.get("/callback", (req, res) => {
// 	res.send("Callback reached");
// });

app.listen(51730, () => console.log("Server is listening to port 51730"));
