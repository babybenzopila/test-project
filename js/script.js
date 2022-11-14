"use strict";
// 1
const question = prompt('Сколько фильмов вы посмотрели?', '');
const numberOfFilms = [question];


const filmName = prompt('Какой фильм вы посмотрели последним?', '');
const filmRate = prompt('Какую оценку вы поставите фильму?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[filmName] = filmRate;

console.log(personalMovieDB);





