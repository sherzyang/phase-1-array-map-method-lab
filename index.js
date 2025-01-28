const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){

  let words = tutorials.map(function(item){return item.split(" ")});
  
  let result = words.map(function(sentence){
    let capitalizedWords = []
    for (word of sentence) {
      capitalizedWords.push(word[0][0].toUpperCase() + word.slice(1));
    }
    return capitalizedWords.join(" ");})
  return result;
  }




