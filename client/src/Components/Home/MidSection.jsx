import { Box, makeStyles } from "@material-ui/core"
import { imageURL } from "../../constants/data"

const useStyle = makeStyles({
    wrapper:{
        display: 'flex',
        marginTop: 15,
        justifyContent: 'space-between'
    }
})
const MidSection = () => {
    const classes = useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Box className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <img src={image} style={{width: '33%'}} alt="Ads Display"/>
                    ))
                }
            </Box>
            <img src={coronaURL} style={{width: '100%', marginTop: 15}} alt="Corona warriors"/>
        </>
    )
}

export default MidSection