import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProductDetails } from  '../../redux/actions/productActions'
import clsx from 'clsx'


import ActionItem from './ActionItem';
import ProductDetail from './ProductDetails';

const useStyles = makeStyles(theme => ({
    component:{
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        textAlign: 'left',
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}));

const DetailView = ({ match }) => {

    const { product } = useSelector(state => state.getProductDetails)
    const dispatch = useDispatch();
    
    const classes = useStyles();    
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    
    return(
        <Box className={classes.component}>
        <Box></Box>
        { product && Object.keys(product).length && 
            <Grid container className={classes.container}>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product}/>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                   <Typography>{product.title.longTitle}</Typography>
                   <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{marginTop: 5}}>
                    8 Ratings & 1 review
                        <span><img src={fassured} alt="Flipkart assured" style={{width: 77, marginLeft: 20}} /></span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                        <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                        <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                    </Typography>
                    <ProductDetail product={product}/>
                </Grid>
            </Grid>
        }
        </Box>
    )
}

export default DetailView