const instructorsName = function(data) {
  let name = data[0].name;
  let nameIndex = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.length > name.length) {
      name = data[i].name.length;
      nameIndex = i;
    }
  }
  return data[nameIndex];
};


console.log(instructorsName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorsName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));