const express = require("express");
const app = express();

require("./startup/config")(app);

const getParameters = require("./util/getParameters");



app.get("/", (req, res)=>{
	res.send("send a post request of the form(JSON) \n{\"url\": \"https://example.com\"}");
});


app.post("/", async (req, res)=>{
	const url = req.body["url"];
	if(!url) return res.sendStatus(400);

	const result = await getParameters(url);
	if(!result) return res.status(404).send("Page not found");

	res.send(result);
});


app.listen(process.env.PORT || 3000, ()=>console.log("listening"));

module.exports = app;