const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let firstword = startWord;
  let secondword = word;
  
  if (word == null || word == undefined){
    return undefined;
  }else if(secondword.startWith(firstword)){
    return secondword;
  }else {
    return firstword + secondword;
  }
}
module.exports = fillStartWord

