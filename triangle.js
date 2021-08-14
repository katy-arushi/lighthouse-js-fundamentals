const makeLine = function(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
};

const buildTriangle = function(num) {
  let output = "";
  for (let i = 1; i <= num; i++) {
    output += makeLine(i);
  }
  return output;
};

console.log(buildTriangle(10));
