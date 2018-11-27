const friends = require("../data/friends.js");
module.exports = (app)=> {
	app.get("/api/friends", (req,res) => {
		res.json(friends);
	});
	app.post("/api/friends", (req,res) => {
		const currentProf = req.body;
		const differences = [];

		console.log(currentProf);

		for(let i = 0; i < friends.length ; i++) {
			let total = 0;
			for(let j=0; j < friends[i].scores.length; j++) {
				total+=Math.abs(parseInt(friends[i].scores[j])-parseInt(req.body.scores[j]));
			}
			differences.push(total);
		}
		let index = 0;
		let bestFriend = differences[0];
		for(let k = 0; k<differences.length; k++) {
			if(differences[k]<bestFriend) {
				bestFriend=differences[k];
				index=k;
			}
		}
		res.json(friends[index]);
		friends.push(req.body);
	});
}