var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");


router.get("/", function(req, res){
	res.render("landing");
});




// ============
// AUTH ROUTES
// ============

//show register form
router.get("/register", function(req, res){
	res.render("register");
});

router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if (err) {
			req.flash("error", err.message);
			// return res.render("register");
			return res.redirect("/register"); 
		}
		passport.authenticate("local")(req, res, function(){
			req.flash("success", "Welcome to YelpCamp" + user.username);
			res.redirect("/campgrounds");
		})
	})
})

//LOGIN
router.get("/login", function(req, res){
	res.render("login");
});
//REQUEST MIDDLEWARE CALLBACK BELOW TYPE
router.post("/login", passport.authenticate("local",
{
	successRedirect: "/campgrounds",
	failureRedirect: "/login"
}) , function(err, res){
	if (err) {

	}

});

//LOGOUT
router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "Successfully Logged Out");
	res.redirect("/campgrounds");
})

module.exports = router;