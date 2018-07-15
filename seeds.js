var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");
var data = [
{
	name: "SAN FRANCISCO", 
	image:"https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a59a8d7851b59c0182bc557594d52b73&auto=format&fit=crop&w=500&q=60",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	name: "BRAZIL", 
	image:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec23000300013938b7094a2e14398585&auto=format&fit=crop&w=500&q=60",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	name: "LADAKH", 
 	image:"https://images.unsplash.com/photo-1475754358526-bad7b4b8eb05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afd7f563ded92889e0f176c33596bb96&auto=format&fit=crop&w=500&q=60",
 	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	name: "SAN FRANCISCO", 
	image:"https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a59a8d7851b59c0182bc557594d52b73&auto=format&fit=crop&w=500&q=60",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	name: "BRAZIL", 
	image:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec23000300013938b7094a2e14398585&auto=format&fit=crop&w=500&q=60",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	name: "LADAKH", 
 	image:"https://images.unsplash.com/photo-1475754358526-bad7b4b8eb05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afd7f563ded92889e0f176c33596bb96&auto=format&fit=crop&w=500&q=60",
 	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	name: "SAN FRANCISCO", 
	image:"https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a59a8d7851b59c0182bc557594d52b73&auto=format&fit=crop&w=500&q=60",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	name: "BRAZIL", 
	image:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec23000300013938b7094a2e14398585&auto=format&fit=crop&w=500&q=60",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	name: "LADAKH", 
 	image:"https://images.unsplash.com/photo-1475754358526-bad7b4b8eb05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afd7f563ded92889e0f176c33596bb96&auto=format&fit=crop&w=500&q=60",
 	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
];

function seeddb(){
	mongoose.connect('mongodb://localhost/yelp_camp');
	Campground.remove({},function(err){
		if (err) {
			console.log(err);
		}
			console.log("Deleted all Campgounds!!");
			//add a few campgrounds
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if (err) {console.log(err);}
					else {
						console.log("Campground added");
						//create a comment
		Comment.create({
					author: "Pulkit",
					text: "Gibbersih"
				},function(err,comment){
					if(err){
						console.log(err);
					}else{
						campground.comments.push(comment);
						campground.save();
						console.log("comment created");
						}	
				});
					}
				})
			})
				
	})

		

		


};

module.exports = seeddb;