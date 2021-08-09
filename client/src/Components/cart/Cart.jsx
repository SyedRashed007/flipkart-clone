import { Box, makeStyles, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import {removeFromCart} from '../../redux/actions/cartActions'
import EmptyCart from './EmptyCart'

const useStyles = makeStyles(theme => ({
    component:{
        marginTop: 55,
        padding: '30px 135px',
        // display: 'flex',
        // [theme.breakpoints.down('sm')]: {
        //     padding: '15px 0'
        // }
    },
    leftComponent: {
        width: '67%',
        // paddingRight: 15,
        // [theme.breakpoints.down('sm')]: {
        //     marginBottom: 15
        // }
    },
    header: {
        padding: '15px 25px',
        background: '#fff'
    },
}))
const Cart = () => {

    const { cartItems } = useSelector(state => state.cart)
    const classes = useStyles();

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    useEffect(() => {
        console.log(cartItems)
    })
    return(
        <>
        {
            cartItems.length ?
                <Box className={classes.component}>
                    <Box className={classes.leftComponent}>
                        <Box className={classes.header}>
                            <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>
                        </Box>
                        {
                            cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    </Box>
                    <Box className={classes.rightComponent}>

                    </Box>
                </Box> 
                    : <EmptyCart/>
        }
        </>
    )
}
export default Cart