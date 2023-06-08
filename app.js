'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов ві уже посмотрели', '');
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt('Сколько фильмов ві уже посмотрели', '');
    }
  },
  rememberMyFilmsL: function() {
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
  },
  detectPersonalLevel: function() {
    if(personalMovieDB.count < 10){
      console.log('просмотрено довольно мало фіильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log('Ві класический зритель');
    } else if(personalMovieDB.count > 30) {
      console.log('Ві киноман')
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function(hiden) {
    if(!hiden) {
      console.log(personalMovieDB)
    }
  },
  toggleVisibleMyDB: function(){
    if(personalMovieDB.privat){
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимій жанр под номером ${i}`, '');
      if(genre === '' || genre === null){
        console.log('Ві ввели некоректніе данніе или не ввели их совсем');
        i--
      } else {
        personalMovieDB.genres[i-1] = genre;
      }
      
    }
  personalMovieDB.genres.forEach((item, i) => {
    console.log('любимій жанр ${i +1} - єто ${item}')
  });

  }

}






