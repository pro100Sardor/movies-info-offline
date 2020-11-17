var elPageMain = document.querySelector('#pageMain');

// for (var i = 0; i < 10; i++) {
//   // console.log(kinolar[0].cast);
//   var newTitle = createElement('div', 'text-center', kinolar[i].title);
//   elPageMain.appendChild(newTitle);
// }

kinolar.splice(0, 10).forEach(function(kino) {
  var newTitle = createElement('div', 'text-center', kino.title);
  var newYear = createElement('div', 'text-center', kino.year);
  var newCast = createElement('div', 'text-center', kino.cast);
  var newGenres = createElement('div', 'text-center', kino.genres);
  elPageMain.appendChild(newTitle);
  elPageMain.appendChild(newYear);
  elPageMain.appendChild(newCast);
  elPageMain.appendChild(newGenres);
});

