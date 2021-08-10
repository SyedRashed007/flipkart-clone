import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import {removeFromCart} from '../../redux/actions/cartActions'
import EmptyCart from './EmptyCart'
import TotalView from './TotalView'
import { post } from '../../utils/paytm'
import { payUsingPaytm } from '../../service/api'

const useStyles = makeStyles(theme => ({
    component:{
        marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
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
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
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

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'syedrasheduddin07@gmail.com'})
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information)
    }
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
                        <Box className={classes.bottom}>
                            <Button onClick={() => buyNow()} className={classes.placeOrder} variant="contained">Place Order</Button>
                        </Box>
                    </Box>
                        <TotalView cartItems={cartItems}/>
                </Box> 
                    : <EmptyCart/>
        }
        </>
    )
}
export default Cart