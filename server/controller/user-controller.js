import User from "../modal/userSchema.js"

export const userSignup = async (request, response) => {
    
    try{
        const exist = await User.findOne({ username: request.body.username })
        if(exist){
            return response.status(401).messagejson({ message: 'Username already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json(`${user.firstName} has been successfully registered`)
    } catch(error){
        response.json('Error is:', error.message)
    }
}

export const userLogin = async (request, response) => {
    try{
        let user = await User.findOne({ username: request.body.username, password: request.body.password }); 
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`)
        } else {
            return response.status(401).json('Invalid login')
        }
    } catch(error){
        response.json('Error is:', error.message)
    }
}
