export const hackerSpeak = (words) => { 
  let splitWords = words.split('');
  
  for (let i = 0; i < splitWords.length; i++) {
    if(splitWords[i] === 'a' || splitWords[i] === 'A') {
        splitWords[i] = '4';
    } 
    if(splitWords[i] === 'e' || splitWords[i] === 'E') {
        splitWords[i] = '3';
    }
    if(splitWords[i] === 'i' || splitWords[i] === 'I') {
        splitWords[i] = '1';
    }
    if(splitWords[i] === 'o' || splitWords[i] === 'O') {
        splitWords[i] = '0';
    }
    if(splitWords[i] === 's' || splitWords[i] === 'S') {
        splitWords[i] = '5';
    };
  };
  return splitWords.join('');
};