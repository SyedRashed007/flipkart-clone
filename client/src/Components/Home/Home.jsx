import Navbar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import MidSection from './MidSection'
import { Box, makeStyles } from '@material-ui/core'

const useStyle= makeStyles({
    component:{
        padding: 10,
        background: '#F2F2F2'
    },
    rightWrapper:{
        background: '#FFFFFF',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '16%'
    }
})

const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <div>
            <Navbar/>
            <Box className={classes.component}>
                <Banner/>
                <Box style={{display: 'flex'}}>
                    <Box style={{width: '83%'}}>
                        <Slide 
                            timer={true}
                            title="Deal of the day"
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
                />
                <Slide 
                    timer={false}
                    title="Suggested Items"
                />
                <Slide 
                    timer={false}
                    title="Top Selection"
                />
                <Slide 
                    timer={false}
                    title="Recommended Items"
                />
                <Slide 
                    timer={false}
                    title="Bestsellers"
                />
            </Box>
        </div>
    )
}
export default Home