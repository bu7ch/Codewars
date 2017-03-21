function rot13(s) {
  return s.replace(/[a-z]/g, function(x) {
    return 'abcdefghijklmnopqrstuvwxyz'.charAt('nopqrstuvwxyzabcdefghijklm'.indexOf(x));
  });
}
