const movies = [
  { title: "Spirited Away", year: 2001, genre: "Animation", status: "want" },
  { title: "Parasite", year: 2019, genre: "Thriller", status: "watched" },
  { title: "Inception", year: 2010, genre: "Sci-Fi", status: "watching" },
  { title: "The Godfather", year: 1972, genre: "Drama", status: "watched" },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", status: "want" },
];

// console.log("total movies:", movies.length);
// // returns total number of movies
// console.log("first movie:", movies[0]);
// // return the first movie details
// console.log("first movie title:", movies[0].title);
// // return the first movie title
// console.log("first movie year:", movies[0].year);
// // returns the first movie year
// console.log("second movie status:", movies[1].status);
// // returns the second movie status

// let isWatched = true;
// let movieRating = null;

// console.log(isWatched);
// // should return a boolean value
// console.log(movieRating);
// // should return null
// console.log(typeof movies[0].title);
// // should return the datatype for title
// console.log(typeof movies[0].year);
// // should return the datatype for movie year

// const currentYear = 2026;
// let yearsAgo = currentYear - movies[0].year;
// let isOldfilm = movies[0].year < 2000;
// let isClassic = movies[0].year <= 2010;
// let isExact = movies[0].year === 2001;
// console.log(yearsAgo);
// console.log(isOldfilm);
// console.log(isClassic);
// console.log(isExact);

// let firstMovie = movies[0];
// let badgeClass = "";
// let badgeText = "";

// if (firstMovie.status === "want") {
//   badgeClass = "badge-want";
//   badgeText = "want to watch";
// } else if (firstMovie.status === "watching") {
//   badgeClass = "badge-watching";
//   badgeText = "watching";
// } else if (firstMovie.status === "watched") {
//   badgeClass = "badge-watched";
//   badgeText = "watched";
// } else {
//   badgeClass = "badge-want";
//   badgeText = "unknown";
// }

// console.log(`${firstMovie.title} > class: ${badgeClass} text:${badgeText}`);

// now learning operators for search and filters

// let movieYear = movies[0].year;
// let movieGenre = movies[0].genre;

// let isAnimatedOld = movieGenre === "Animation" && movieYear < 2010;
// console.log(isAnimatedOld);

// let isScifiOrThriller = movieGenre === "sci-fi" || movieGenre === "thriller";
// console.log(isScifiOrThriller);

// let isNotWatched = !(firstMovie.status === "watched");
// console.log(isNotWatched);

// now we use switch for badge logic for checking multiple values against one

// let secondMovie = movies[1];
// switch (secondMovie.status) {
//   case "want":
//     console.log(`${secondMovie.title}:want to watch`);
//     break;
//   case "watching":
//     console.log(`${secondMovie.title}:watching`);
//     break;
//   case "watched":
//     console.log(`${secondMovie.title}:watched`);
//     break;
//   default:
//     console.log(`${secondMovie.title}:status unknown`);
// }
