const { User } = require('../models');

const userData = [
    {
        username: "Steve_Wilkos",
        twitter: "Wilkos",
        github: "wilkos",
        email: "wilkos@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Ricky_Lake",
        twitter: "rickyL",
        github: "rickyL",
        email: "rickyL @gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Jenny_Jones",
        twitter: "JJ",
        github: "JJ",
        email: "jj@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Jerry_Springer",
        twitter: "JSprin",
        github: "JSprin",
        email: "springer@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Maury",
        twitter: "maury",
        github: "maury",
        email: "maury@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "Montell_Williams",
        twitter: "Montell",
        github: "Montell",
        email: "montell@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;