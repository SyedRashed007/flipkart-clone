import { Grid, makeStyles } from "@material-ui/core"
import { imageURL } from "../../constants/data"
import clsx from 'clsx'

const useStyle = makeStyles(theme => ({
    wrapper:{
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    image:{
        width: '100%'
    },
    help:{
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}))
const MidSection = () => {
    const classes = useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} sm={12} md={4} xs={12}>
                            <img className={classes.image} src={image} alt="Ads Display"/>
                        </Grid>
                    ))
                }
            </Grid>
            <img src={coronaURL} className={clsx(classes.wrapper, classes.help)} style={{width: '100%'}} alt="Corona warriors"/>
        </>
    )
}

export default MidSection