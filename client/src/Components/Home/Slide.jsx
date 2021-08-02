import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {products} from '../../constants/data.js'
import { Box, makeStyles, Typography, Button, Divider } from '@material-ui/core'
import Countdown from 'react-countdown'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const useStyle = makeStyles({
    component:{
        marginTop: 12,
        background: '#FFFFFF'
    },
    deal:{
        display: 'flex',
        padding: '15px 20px'
    },
    image: {
        height: 150,

    },
    timer:{
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    text:{
        fontSize: 14,
        marginTop: 5
    },
    wrapper:{
        padding: '35px 15px'
    }
})
const Slide = ( { timer, title }) => {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds}  Left</span>;
    };

    return (
        <Box className={classes.component}>
        <Box className={classes.deal}>
            <Typography className={classes.dealText}>{title}</Typography>
            {
                timer && 
                <>
                    <img src={timerURL} alt="Timer" style={{width: 25}}/>
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    <Button variant="contained" color="primary" className={classes.button} >View All</Button>
                </>
            }
        </Box>
        <Divider/>
            <Carousel 
                responsive={responsive}
                infinite= {true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
            {
                products.map(product => (
                    <Box textAlign="center" className={classes.wrapper}>
                        <img className={classes.image} src={product.url} alt="Images"/>
                        <Typography className={classes.text} style={{fontWeight: 600, color: '#212121'}}>{product.title.shortTitle}</Typography>
                        <Typography className={classes.text} style={{color: 'green'}}>{product.discount}</Typography>
                        <Typography className={classes.text} style={{color: '#212121', opacity: '.6'}}>{product.tagline}</Typography>
                    </Box>
                ))
            }
            </Carousel>
        </Box>
    )
}

export default Slide