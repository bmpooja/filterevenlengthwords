function filterEvenLengthWords(words) {
  // your code here
  /* START SOLUTION */
  let result = words.filter(str => str.length % 2 === 0)
  return result 

  /* END SOLUTION */
}
var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']