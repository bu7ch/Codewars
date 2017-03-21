function mineColor(line, number) {
  var aceg = ['white', 'black'];
  var bdfh = ['black', 'white'];
  if (['a', 'c', 'e', 'g'].indexOf(line) !== -1) return aceg[number % 2];
  else return bdfh[number % 2];
}
