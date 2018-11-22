module.exports = (app)=> {
	app.get("/api/friends", (req,res) => {
		res.json("sup");
	});
}