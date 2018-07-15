var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var middleware = require("../middleware");



router.get("/", function(req, res){
	//get all campgrounds from db
	Campground.find({}, function(err, allCampground){
		if (err) {
			console.log(err);
		}
		else{
			res.render("campgrounds/index.ejs",{campgrounds:allCampground, currentUser: req.user});
		}
	})
});

router.post("/", middleware.isLoggedIn, function(req, res){
	//get data from form and add to campgrounds array
	//redirect back to campgrounds page
		var name= req.body.name;
		var price = req.body.price;
		var image=req.body.image;
		var desc=req.body.description;
		var author = {
		id: req.user._id,
		username: req.user.username
	};
	var object = {
		name:name,
		price: price,
		image:image,
		description: desc,
		author:author
	};
	Campground.create(object,function(err){
		if(err){
			console.log(err);
		}else{
			res.redirect("/campgrounds");
		}
	});
});

	

router.get("/new", middleware.isLoggedIn, function(req, res){
	res.render("campgrounds/new.ejs");
});

router.get("/:id",function(req,res){
	Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/show", {campground:foundCampground});
			console.log(foundCampground);
		}

			});
		});


//EDIT AND UPDATE ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if (err) {
			res.redirect("/campgrounds");
		}
		else{
			res.render("campgrounds/edit", {campground: foundCampground});

		}
	})
});

router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if (err) {
			res.redirect("/campgrounds");
		}
		else {
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
})

//destroy
router.delete("/:id",middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds");

		}
	})
})



module.exports = router;