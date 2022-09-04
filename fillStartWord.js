const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let f = startWord;
  let s = word;
  
  if (word == null || word == undefined){
    return undefined;
  }else if(s.startWith(f)){
    return s;
    }
    else {
    return f+s;
  }
}

module.exports = fillStartWord

