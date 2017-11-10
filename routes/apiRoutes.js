const axios = require("axios");
const router = require("express").Router();
const articleController = require("./articleController");
const Article = require("../models/Article.js");

router.get("/search", (req, res) => {
  axios
  axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=${req.query.q}&begin_date=20170101&end_date=20171231`)
  .then(response => res.json(response.data))
  .catch(error => res.status(500).end());
});

router.post("/api/save/")
  .get(articleController.findAll)
  .post(articleController.create);
  console.log("routes/apiRoutes");

// router.post('/save/', function(req, res){
//   console.log(req.body);
// 	console.log("body title: "+ req.body.title);
// 	console.log("body url: "+ req.body.href);
// 	var newArticle = new Article(
// 	{
// 		title: req.body.title,
// 		url: req.body.href,
//     date: req.body.date
// 	});
// 	console.log("object: "+ newArticle);
// 	newArticle.save(function(err, saved){
// 		if (err) res.send(err);
// 			console.log(saved);
// 			res.send(saved);
// 	})
// });

module.exports = router;
