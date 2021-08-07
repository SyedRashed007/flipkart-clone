import Product from '../modal/productSchema.js'

const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    } catch(error) {
        console.log("Error is:", error.message)
    }
}

export default getProducts