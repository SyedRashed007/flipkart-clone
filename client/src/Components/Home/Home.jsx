import Navbar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import MidSection from './MidSection'
// import { products } from '../../constants/data'

import {useDispatch, useSelector} from 'react-redux'
import { Box, makeStyles } from '@material-ui/core'
import { useEffect } from 'react'
import { getProducts as listProducts } from '../../redux/actions/productActions'

const useStyle= makeStyles(theme => ({
    component:{
        padding: 10,
        background: '#F2F2F2'
    },
    rightWrapper:{
        background: '#FFFFFF',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '16%',
        [theme.breakpoints.down('md')]: {
            display:'none'
        }
    },
    leftWrapper:{
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    }
}))

const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    
    const { products} = useSelector(state => state.getProducts)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    return(
        <div>
            <Navbar/>
            <Box className={classes.component}>
                <Banner/>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.leftWrapper}>
                        <Slide 
                            timer={true}
                            title="Deal of the day"
                            products={products}
                        />
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} style={{width: 212, height: 376}} alt="Ad displayed"/>
                    </Box>
                </Box>
                <MidSection/>
                <Slide 
                    timer={false}
                    title="Discounts for you"
                    products={products}
                />
                <Slide 
                    timer={false}
                    title="Suggested Items"
                    products={products}
                />
                <Slide 
                    timer={false}
                    title="Top Selection"
                    products={products}
                />
                <Slide 
                    timer={false}
                    title="Recommended Items"
                   products={products}
                />
                <Slide 
                    timer={false}
                    title="Bestsellers"
                    products={products}
                />
            </Box>
        </div>
    )
}
export default Home