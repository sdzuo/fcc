//Convert any word to Pig Latin
function translatePigLatin(str) {
  let regex1 = /^[aeiou]/g
  let vowels = /[aeiou]/g
  //capture group for words that start with a consonant
  // or consonant cluster
  let regex2 = /^([^aeiou]+)(\w+)/
  //if str doesn't include any vowels
  if (!str.match(vowels)) {
    return str + "ay";
  //if str includes vowels and it's at the start
  } else if (str.match(vowels) && str.match(regex1)) {
    return str + "way";
  //if str doesn't start with vowels but includes vowels
  } else if (!str.match(regex1) && str.match(regex2)) {
    return str.replace(regex2, "$2$1") + "ay"
  }
}
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("glove"));
