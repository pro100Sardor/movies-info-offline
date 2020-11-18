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

