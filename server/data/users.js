const bcrypt = require('bcryptjs')

const users = [
    {
      name: "Admin User",
      email: "admin@example.com", 
      password: bcrypt.hashSync('111111', 10),
      isAdmin: true
    },
    {
        name: "tim",
        email: "t@t.com",
        password: bcrypt.hashSync('111111', 10),
      },
      {
        name: "Susan",
        email: "s@s.com",
        password: bcrypt.hashSync('111111', 10),
      },
]

module.exports = users