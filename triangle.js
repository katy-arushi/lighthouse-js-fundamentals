function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(num) {
    let output = ""
    for (let i = 1; i <= num; i++) {
        output += makeLine(i);
    }
  return output
}

console.log(buildTriangle(10));
