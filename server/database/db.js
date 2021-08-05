import mongoose from 'mongoose'


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.uvpmh.mongodb.net:27017,ecommerceweb-shard-00-01.uvpmh.mongodb.net:27017,ecommerceweb-shard-00-02.uvpmh.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-zpqr73-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        console.log(`Database connected successfully`)
    } catch(error){
        console.log('Error:', error.message)
    }
}
export default Connection

// `mongodb://${username}:${password}@ecommerceweb-shard-00-00.uvpmh.mongodb.net:27017,ecommerceweb-shard-00-01.uvpmh.mongodb.net:27017,ecommerceweb-shard-00-02.uvpmh.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-zpqr73-shard-0&authSource=admin&retryWrites=true&w=majority`