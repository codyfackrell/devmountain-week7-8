const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      
      const {username, password} = req.body;
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          let existing = bcrypt.compareSync(password, users[i].passwordHash)
          if(existing) {
            let returnUser = {...users[i]}
            delete returnUser.passwordHash
            res.status(200).send(returnUser)
            return
          }
        }
      }
      res.status(400).send("User not found.")
    },

    register: (req, res) => {
        console.log('Registering User')
        
        const {username, email, firstName, lastName, password} = req.body;

        let salt = bcrypt.genSaltSync(5);
        let passwordHash = bcrypt.hashSync(password, salt)

        const userInfo = {
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          passwordHash: passwordHash
        }

        users.push(userInfo)
        let returnUser = {...userInfo}
        delete returnUser.passwordHash
        res.status(200).send(returnUser)
    }
}