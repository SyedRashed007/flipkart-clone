import { Box, Typography, makeStyles } from '@material-ui/core'
// import clsx from 'clsx'
import { useEffect, useState } from 'react'

const useStyles = makeStyles({
    component: {
        width: '30%',
        marginLeft: 15,
        background: '#fff',
        textAlign: 'left'
    },
    header: {
        padding: '16px 24px',
        borderBottom: '1px solid #f0f0f0'
    },
    container:{
        padding: '15px 24px',
        '& > *': {
             marginTop: 20,
             fontSize: 14
         }
    },
    greyTextColor: {
        color: '#878787'
    },
    // container: {
    //     '& > *': {
    //         marginBottom: 20,
    //         fontSize: 14
    //     }
    // },
    price: {
        float: 'right'
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: '1px dashed #e0e0e0',
        padding: '20px 0',
        borderBottom: '1px dashed #e0e0e0'
    }
})
const TotalView = ({cartItems}) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);


    useEffect(() => {
        totalAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems])

    const totalAmount = () => {
        let price = 0, discount = 0;
       // eslint-disable-next-line array-callback-return
       cartItems.map(item => {
           price += item.price.mrp
           discount += (item.price.mrp - item.price.cost)
       }) 
       setPrice(price);
       setDiscount(discount);
    }

    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.header}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>
            <Box className={classes.container}>
                <Typography>Price ({cartItems.length} item) <span className={classes.price}>₹{price}</span></Typography>
                <Typography>Discount<span className={classes.price}>₹{discount}</span></Typography>
                <Typography>Delivery Charges <span className={classes.price}>₹40</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹{price - discount + 40}</span></Typography>
                <Typography style={{fontSize: 16, color: 'green'}}>You will save ₹{discount - 40} on this order</Typography>
            </Box>
        </Box>
    )
}

export default TotalView