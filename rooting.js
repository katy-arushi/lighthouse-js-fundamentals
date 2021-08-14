const judgeVegetable = function(vegetables, metric) {
  for (let i = 0; i < vegetables.length; i++) {
    let quality = vegetables[0].metric;
    let name = vegetables[0].submitter;
    if (vegetables[i].metric > vegetables[0].metric) {
      quality = vegetables[i].metric;
      name = vegetables[i].submitter;
    }
    return name;
  }
};

/*
const judgeVegetable = function(vegetables, metric) {
  if (metric === 'redness') {
    for (let i = 0; i < vegetables.length; i++) {
      let quality = vegetables[0].redness
      let name = vegetables[0].submitter
      if (vegetables[i].redness > vegetables[0].redness) {
        quality = vegetables[i].redness
        name = vegetables[i].submitter
      }
    }
    return name
  } else if (metric === 'plumpness') {
    for (let i = 0; i < vegetables.length; i++) {
      let quality = vegetables[0].plumpness
      let name_2 = vegetables[0].submitter
      if (vegetables[i].plumpness > vegetables[0].plumpness) {
        quality = vegetables[i].plumpness
        name_2 = vegetables[i].submitter
      }
    }
    return name_2
  }
}
*/
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));