const UserService = require("../services/index")
const { v4: uuidv4 } = require('uuid');
this.UserService = new UserService()
const create = async(req, res) => {
    try {
        const user = await this.UserService.create({
            id: uuidv4(),
            username: "Shubham",
            password: "yettobehashed",
            profilePicture: "mycloudinaryurl",
        })
        res.send({
            data: user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Error"
        })
    }
}
module.exports = {
    create
}