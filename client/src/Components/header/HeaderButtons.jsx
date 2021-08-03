import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core"
import {ShoppingCart} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { useState } from "react"

import LoginDialog from '../login/Login'
const useStyle = makeStyles({
    login:{
        background: '#FFFFFF',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    },
    wrapper: {
        margin: '0 7% 0',
        display: 'flex',
        '& > *':{
            marginRight: 50,
            fontSize: 13,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff'
        }
    },
    container:{
        display: 'flex'
    }
})
const HeaderButtons = () => {
    const [open, setOpen] = useState(false)

    const openLoginDialog = () => {
        setOpen(true)
    }

    const classes = useStyle();
    return(
        <Box className={classes.wrapper}>
            <Link><Button variant="contained" onClick={() => openLoginDialog()} className={classes.login}>Login</Button></Link>
            <Link><Typography style={{marginTop: 5}}>More</Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart/>
                </Badge>
                    <Typography style={{marginLeft: '10px'}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Box>
    )
}
export default HeaderButtons