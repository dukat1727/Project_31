'use strict';

let numberOfFilms = null;
function start() {
  numberOfFilms = +prompt('Сколько фильмов ві уже посмотрели', '');
  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов ві уже посмотрели', '');
  }
}
// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотреніх фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
  
    if(a !=null && b!= null && a != '' && b!= '' && a.length < 50){
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  };
}
// rememberMyFilms();

function detectPersonalLevel() {
  if(personalMovieDB.count < 10){
    console.log('просмотрено довольно мало фіильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Ві класический зритель');
  } else if(personalMovieDB.count > 30) {
    console.log('Ві киноман')
  } else {
    console.log('Произошла ошибка');
  }
}
// detectPersonalLevel();

function showMyDB(hiden) {
  if(!hiden) {
    console.log(personalMovieDB)
  }
}
// showMyDB(personalMovieDB.privat);
function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let answer = prompt(`Ваш любимій жанр под номером ${i+1}`, '')
    personalMovieDB.genres[i] = answer;
  }
}
writeYourGenres();

console.log(personalMovieDB);
console.log(personalMovieDB.genres);


