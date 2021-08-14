const urlEncode = function(text) {
  // let textString2 = ""
  let textString = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      textString += '%20';
    } else if (text[i] !== " ") {
      textString += text[i];
    }
  }
  return textString;
  // if (textString[0] === '%' && textString2[-1] === '%') {
  //   for (let i = 1; i < textString.length - 1; i++) {
  //     textString2 += textString[i]
  //   }
  // } else if (textString[0] === '%' && textString2[-1] !== '%') {
  //   for (let i = 1; i < textString.length; i++) {
  //     textString2 += textString[i]
  //   }
  // }
  // if (textString2 < textString) {
  //   return textString2
  // } else {
  //   return textString
  // }
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

