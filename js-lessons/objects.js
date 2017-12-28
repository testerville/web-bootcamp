var movies = [
{title: "In Bruges",
rating: "5",
hasWatched: true},

{title: "Frozen",
rating: "4.5",
hasWatched: false},

{title: "Mad Max Fury Road",
rating: "5",
hasWatched: true},

{title: "Les Miserables",
rating: "3.5",
hasWatched: false}
];

movies.forEach(printMovie);

function printMovie(movie){
	if (movie.hasWatched){
		console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
	}
	else {
		console.log("You have not watched \"" + movie.title + "\" - " + movie.rating + " stars");
	}
}