const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')

const authUser = async (req, res) => {

    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            console.log('this error')
            res.status(401).json({ message: "Invalid password or email" })
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "Authentication Failed", error })
    }


}

const registerUser = async (req, res) => {

    console.log('register user', req.body)

    try {
        const { email, password, name } = req.body
         
        const userExists = await User.findOne({ email })
        console.log(userExists)
        if (userExists) return res.status(400).json({ msg: "User already exists" })

        const user = new User({
            name,
            email,
            password
        })

        await user.save()

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(400).msg({msg: "Invalid User Data"})
        }

    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "Authentication Failed", error })
    }


}

const getUserProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user._id)

        if (user) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            })
        } else {
            res.status(401).json({ message: "User not found" })
        }



    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "Authentication Failed", error })
    }


}

module.exports = {
    authUser,
    getUserProfile,
    registerUser
}