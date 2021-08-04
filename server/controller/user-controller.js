import User from "../modal/userSchema.js"

export const userSignup = async ({request, response}) => {
    
    try{
        const exist = User.findOne({ username: request.body.username })
        if(exist){
            return response.status(401).response('Username already exist')
        }
        const user = request.body
        const newUser = new User(user)
        await newUser.save();

        response.status(200).json('User is successfully registered')
    } catch(error){
        console.log("Error is:", error.message)
    }
    return 'hello'
}