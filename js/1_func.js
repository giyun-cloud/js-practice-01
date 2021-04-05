//화살표 함수
const arw = 10

const arw1 = function (arw) {
  return arw+1
}
const arw2 = (arw) => {
  return arw+2
}
const arw3 = (arw) => arw+3
const arw4 = arw => arw+4

console.log(arw1(arw),arw2(arw),arw3(arw),arw4(arw));

//즉시실행함수

function ai() {
  console.log(21)
};

(function () {
  console.log(22)
})();

(function () {
  console.log(23)
}())



//타이머함수
const timeout = setTimeout(() => console.log('타이머함수'),1000)
const interout = setInterval(() => console.log('interval타이머함수'), 1500);
const randomT = Math.random()
const timeRandom = randomT >= 0.5 ? 1000 : 999
console.log(`타이머함수 랜덤 : ${randomT}`)
setTimeout(() => clearTimeout(timeout), timeRandom)
setTimeout(() => clearInterval(interout), 4500);



//콜백
const cb1 = function () {
  console.log('녕')
}
function cb2(cb) {
  console.log('안')
  cb()
}
cb2(cb1)
cb2(() => console.log('녕'))



//생성자 함수,prototype
//생성자 함수는 파스칼 케이스로 해야한다
const Fighter = function (name,rank) {
  this.name = name
  this.rank = rank
}

const gohan = new Fighter('gohan',1)
const goku = new Fighter('gohan',3)
const majin_boo = new Fighter('boo',2)
console.log(gohan)
console.log(goku)
console.log(majin_boo)

Fighter.prototype.getPower = function () {
  console.log(`${this.name}'s Power : ${100 * (101 - this.rank)}`)
}
gohan.getPower()
majin_boo.getPower()
goku.getPower()

//화살표와 일반 함수의 this차이

const vegeta = {
  name: 'vegeta',
  rank: 4,
  getPower2() {
    console.log(`${this.name}'s Power : ${80 * (101 - this.rank)}`)
  },
  getPower2Arrow() {setTimeout(() => console.log(`${this.name}'s Power : ${80 * (101 - this.rank)}`), 0)}
  
}

console.log(vegeta)
vegeta.getPower2()
vegeta.getPower2Arrow()

//class
class Fighter3 {
  constructor(name,rank){
    this.name = name
    this.rank = rank
  }
  getPower() {
    console.log(`${this.name}'s Power : ${50 * (101 - this.rank)}`)
  }
}

const picolo = new Fighter3('picolo',5)
picolo.getPower()

//class 상속
class Fighter4 extends Fighter3{
  constructor(name,rank,fusion){
    super(name,rank)
    this.fusion = fusion
    this.rank = this.fusion ? this.rank -6 : this.rank
    this.name = this.fusion ? 'gotenks' : name
  }
  getPower() {
    console.log(`${this.name}'s Power : ${(this.fusion ? 100 : 50) * (101 - this.rank)}`)
  }
}
// const goten = new Fighter4('goten',6,true)
const goten = new Fighter4('goten',6,false)
console.log(goten)
goten.getPower();