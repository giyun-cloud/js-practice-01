const user = {
  name: "gy",
  age: 77,
  emails: ['gy@naver.com']
}

const copyUser = Object.assign({},user)
copyUser.age = 33
console.log(copyUser,user, user === copyUser)

user.emails.push('yg@gmail.com')
console.log(copyUser.emails === user.emails)