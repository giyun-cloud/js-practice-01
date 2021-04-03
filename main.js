//String: indexof, length, slice, replace, match, trim
const str1 = 'JavaScript is fun'
console.log(str1.indexOf('is'))
console.log(str1.length)
console.log(str1.slice(1,-10))
console.log(str1.replace("JavaScript ",""))
console.log(str1.match(/.+(?=is)/))
const str2 = '  JavaScript is fun  '
console.log(str2)
console.log(str2.trim())

//Number: toFixed, parseInt, parseFloat
const num1 = 10.555555
console.log(num1)
console.log(num1.toFixed(3))
console.log(typeof num1.toFixed(3))
const num1Str = num1.toFixed(3)
console.log(num1Str)
console.log(parseInt(num1Str))
console.log(parseFloat(num1Str))

//Array: find, length, concat, forEach, map, filter, find,findIndex
// includes, push, unshift, reverse, splice
const array1 = ['Naruto','Saske','Gara','Rok-lee']
const array1Find = array1.find((el,i) => el === 'Saske')
console.log(array1Find)
console.log(array1.length)
const array2 = [3,7,1004,10000]
console.log(array2.concat(array1))
console.log(array1, array2)
array2.forEach((el,i,infor) => {
  console.log(el,`index : ${i}`,infor)
})
// array1Map = array1.map((el,i) => `No.${i+1} - ${el}`)
array1Map = array1.map((el,i) => i >1)
console.log(array1Map)
array1Filter = array1.filter((el,i) => i >1)
console.log(array1Filter)
const array1FindIndex = array1.findIndex((el,i) => /^R/.test(el)) // R로시작하는거 찾기
const rock = 'Rock'
console.log(/^R/.test(rock))
console.log(array1FindIndex)
console.log(array2.includes(1004))
console.log(array2.includes('1004'))
array2.push(54)
console.log(array2)
array2.unshift(78)
console.log(array2)
array1.reverse()
console.log(array1)
const array1Splice = array1.splice(2,1,'ab')
console.log(array1, array1Splice)

//Object: 스태틱: assign, keys
const obj1 = {
  bronze: 10,
  silver: 40,
  gold: 80,
  platinum: 100,
}
const obj1_ver2 = {
  bronze: 10,
  silver: 40,
  gold: 80,
  platinum: 95,
  dia: 100
}
const obj1Assign2 = Object.assign({}, obj1,obj1_ver2)
console.log(obj1Assign2, obj1)

console.log(Object.assign(obj1,obj1_ver2),obj1)
const obj1Assign = Object.assign(obj1,obj1_ver2)
console.log(obj1Assign === obj1) // 같은 메모리주소를 가지고있음.

const obj1KeysArray = Object.keys(obj1_ver2)
console.log(obj1KeysArray)
const obj1Values = obj1KeysArray.map((el) => obj1_ver2[el])
console.log(obj1Values)
//구조분해할당

const {silver, gold, dia: dia1, master = 100} = obj1_ver2
console.log(silver, gold, dia1, master)

const array3 = ['Naruto','Saske','Gara','Rok-lee']
const [a,,as,g,e = 'Gai'] = array3
console.log(a,as,g,e)