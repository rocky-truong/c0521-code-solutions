/* exported titleCase */
function titleCase(title) {
  let currentWord = '';
  let newString = '';
  for (let i = 0; i < title.length; i++) {
    if (title[i] !== ' ') {
      currentWord += title[i].toLowerCase();
    }
    if (title[i] === ' ' || i === title.length - 1) {
      if (currentWord === 'and' || currentWord === 'or' || currentWord === 'nor' ||
      currentWord === 'but' || currentWord === 'a' || currentWord === 'an' ||
        currentWord === 'the' || currentWord === 'as' || currentWord === 'at' ||
        currentWord === 'by' || currentWord === 'for' || currentWord === 'in' ||
        currentWord === 'of' || currentWord === 'on' || currentWord === 'per' ||
        currentWord === 'to') {
        if (newString[newString.length - 2] === ':') {
          for (let l = 0; l < currentWord.length; l++) {
            if (l === 0) {
              newString += currentWord[l].toUpperCase();
              continue;
            }
            newString += currentWord[l];
          }
          currentWord = '';
        }
        newString += currentWord;
        currentWord = '';
      }
      if (currentWord.includes('javascript')) {
        for (let k = 0; k < currentWord.length; k++) {
          if (k === 0) {
            newString += 'J';
            continue;
          }
          if (k === 4) {
            newString += 'S';
            continue;
          }
          newString += currentWord[k];
        }
        currentWord = '';
      }
      if (currentWord === 'api') {
        newString += 'API';
        currentWord = '';
      }
      for (let j = 0; j < currentWord.length; j++) {
        if (j === 0) {
          newString += currentWord[j].toUpperCase();
          continue;
        }
        if (currentWord[j - 1] === '-') {
          newString += currentWord[j].toUpperCase();
          continue;
        }
        newString += currentWord[j];
      }
      currentWord = '';
      if (title[i] === ' ') {
        newString += ' ';
      }
    }
  }
  return newString;
}
