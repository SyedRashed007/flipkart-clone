import User from "../modal/userSchema.js"

export const userSignup = async (request, response) => {
    
    try{
        const exist = await User.findOne({ username: request.body.username })
        if(exist){
            return response.status(401).json('Username already exist')
        }
        const user = request.body
        const newUser = new user(user)
        await newUser.save();
        response.status(200).json('User is successfully registered')
    } catch(error){
        response.json('Error is:', error.message)
    }
}