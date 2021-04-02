const arrayZ = ['Goku','Vegeta','Picolo']
arrayZ2 = arrayZ.forEach((el,i) => {
  return `${el} - ${i}`
});
console.log(arrayZ2)

arrayZ3 = arrayZ.map((el,i) => {
  return `${el} - ${i}`
});
console.log(arrayZ3)

arrayZ4 = arrayZ.map((el,i) => {
  return {Name: el,  Rank: i}
});

console.log(arrayZ4)
