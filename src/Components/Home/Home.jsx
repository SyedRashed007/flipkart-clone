import Navbar from './NavBar'
import Banner from './Banner'
import { Box, makeStyles } from '@material-ui/core'

const useStyle= makeStyles({
    component:{
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();
    return(
        <div>
            <Navbar/>
            <Box className={classes.component}>
                <Banner/>
            </Box>
        </div>
    )
}
export default Home