export const hashtags = (text) => {
  let splitText = text.split(' ');
  //console.log(splitText);

  let doubleSplit = [];
  for(let i = 0; i< splitText.length; i++) {
    doubleSplit.push(splitText[i].split(''));
  }
  //console.log(doubleSplit);

  let onlyHash = [];
  doubleSplit.forEach((word) => {
    if(word[0] === '#') {
      onlyHash.push(word.join(''));
    }
  });
  return onlyHash;
};
