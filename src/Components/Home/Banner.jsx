import Carousel from 'react-material-ui-carousel'
import {bannerData} from '../../constants/data.js'
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
    image:{
        width: '100%',
        height: 280
    },
    carousel:{
        marginTop: 10
    }
})
const Banner = () => {
    const classes= useStyle();
    return(
         <Carousel
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            className={classes.carousel}
            navButtonsProps={{
                style:{
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50
                }
            }}>
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} alt="Banner"/>
                ))
            }
        </Carousel>
    )
}

export default Banner