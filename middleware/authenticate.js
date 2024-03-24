const Users = require('../db.json')

function authenticate(req, res, next) {
  const { username, password } = req.headers

  console.log(`user : ${username}, password: ${password}`)

  const foundUser = Users.find((user) => user.username === username)

  if (!foundUser) {
    res.statusCode = 401
    res.end()
    return
  }

  if (foundUser.username !== username || foundUser.password !== password) {
    res.statusCode = 401
    res.end()
    return
  }
  next(req, res)
}

module.exports = authenticate
