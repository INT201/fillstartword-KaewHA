//const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let f = startWord;
  let s = word;
  
  if (s.startsWith(f)){
    return s ;
  }else if (word == null || word == undefined){
      return undefined;
    }
    else {
    return f+s;
  }
}

console.log(fillStartWord("first","firstname"));
//module.exports = fillStartWord

