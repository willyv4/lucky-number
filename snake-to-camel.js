const snake = "snake_to_camel";
const man = "a_man_a_plan";
const outer = "HOW_BOUT_NOW";

// My answer
const snakeToCamel = (str) => {
  //  define an arr of words split by the underscore
  //  return the arr with the first letter Capitilized
  const wordsArr = str.split("_").map((word) => {
    return `${word.split("")[0].toUpperCase()}${word
      .split("")
      .splice(1)
      .join("")}`;
  });

  // if the first word is all caps and greater than 1 character return else remove caps on the first word
  return wordsArr[0] === wordsArr[0].toUpperCase() && wordsArr[0].length > 1
    ? wordsArr.join("")
    : wordsArr[0].toLowerCase() + wordsArr.splice(1).join("");
};

// a better answer to look over
function snakeToCamelBetter(str) {
  // split words by underscore
  let words = str.split("_");
  let camelCase = words[0];

  // Loop through each word, capitalize the first letter, and concatenate the rest of the word to it."
  for (let i = 1; i < words.length; i++) {
    camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return camelCase;
}

console.log(snakeToCamel(snake));
console.log(snakeToCamelBetter(snake));
