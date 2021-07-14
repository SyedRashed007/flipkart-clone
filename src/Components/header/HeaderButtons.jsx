import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core"
import {ShoppingCart} from '@material-ui/icons'

const useStyle = makeStyles({
    login:{
        background: '#FFFFFF',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px'
    },
    wrapper: {
        margin: '0 5% 0',
        display: 'flex',
        '& > *':{
            marginRight: 50,
            fontSize: 12,

        }
    }
})
const HeaderButtons = () => {
    const classes = useStyle();
    return(
        <Box className={classes.wrapper}>
            <Button variant="contained" className={classes.login}>Login</Button>
            <Typography>More</Typography>
            <Box>
                <Badge badgeContent={2} color="primary">
                    <ShoppingCart/>
                </Badge>
                    <Typography>Cart</Typography>
            </Box>
        </Box>
    )
}
export default HeaderButtons