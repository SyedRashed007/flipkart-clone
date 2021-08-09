import { Box, Button, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    leftContainer:{
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage:{
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
}))

const ActionItem = ({product}) => {

    const classes = useStyles()
    const dispatch = useDispatch();
    const history = useHistory();

    const addItemToCart = () => {
        dispatch(addToCart(product.id))
        history.push('/cart')
    }
    return (
        <Box className={classes.leftContainer}>
           <img src={product.detailUrl} className={classes.productImage} alt="Product Img"></img> 
            <Button variant="contained" onClick={() => addItemToCart()} style={{marginRight: 10}} className={clsx(classes.button, classes.addToCart)}><Cart/>Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.button, classes.buyNow)}><Flash/>Buy Now</Button>
        </Box>
    )
}

export default ActionItem