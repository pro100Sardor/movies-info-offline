var elPageMain = $_ ('#pageMain');

function createCinemaItem (itemFeatureTitle, itemFeatureText) {
    var item = document.createElement('li');
    item.setAttribute('class', 'mb-4');

    var cinemaItemFeatureTitle = document.createElement('span');
    cinemaItemFeatureTitle.setAttribute('class', 'font-weight-bold');
    cinemaItemFeatureTitle.textContent = itemFeatureTitle;

    item.appendChild(cinemaItemFeatureTitle);
    item.innerHTML += itemFeatureText;
    return item;
  }

kinolar.forEach(function(kino) {
  var cinemaList = document.createElement('ul');
  cinemaList.setAttribute('class', 'list-unstyled w-50 mb-4');

  var keys = Object.keys(kino);
  cinemaList.appendChild(createCinemaItem(`${keys[0]}: `, kino.title));
  cinemaList.appendChild(createCinemaItem(`${keys[1]}: `, kino.year));
  cinemaList.appendChild(createCinemaItem(`${keys[2]}: `, kino.cast));
  cinemaList.appendChild(createCinemaItem(`${keys[3]}: `, kino.genres));

  elPageMain.appendChild(cinemaList);
});

// normalizedMovies.splice(0, 10).forEach(function(movie) {
//   var cinemaList = createElement('ul', 'movies-list list-unstyled mb-4 bg-white rounded pt-3 shadow');

//   cinemaList.appendChild(createCinemaItem('№: ', movie.id));
//   cinemaList.appendChild(createCinemaItem('Title: ', movie.title));
//   cinemaList.appendChild(createCinemaItem('Year: ', movie.year));
//   cinemaList.appendChild(createCinemaItem('Category: ', movie.categories));
//   cinemaList.appendChild(createCinemaItem('Summary: ', movie.summary));
//   cinemaList.appendChild(createCinemaItem('IMDB id: ', movie.imdbId));
//   cinemaList.appendChild(createCinemaItem('IMDB Reiting: ', movie.imdbRating));
//   cinemaList.appendChild(createCinemaItem('Runtime: ', movie.runtime));
//   cinemaList.appendChild(createCinemaItem('Language: ', movie.language));
//   var cinemaTriller = document.createElement('a');
//   cinemaTriller.href = `http://youtube.com/watch?v=${movie.youtubeId}`;
//   cinemaTriller.target = '_blank';
//   cinemaTriller.textContent = movie.youtubeId;
//   cinemaList.appendChild(createCinemaItem('Triller: ', cinemaTriller));

//   elPageMain.appendChild(cinemaList);
// });

