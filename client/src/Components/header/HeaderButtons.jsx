import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core"
import {ShoppingCart} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { useContext, useState } from "react"
import {useSelector} from 'react-redux'

import LoginDialog from '../login/Login'
import { LoginContext } from "../../context/ContextProvider"
import Profile from './Profile'

const useStyle = makeStyles(theme => ({
    login:{
        background: '#FFFFFF',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }  
    },
    wrapper: {
        margin: '0 7% 0',
        display: 'flex',
        '& > *':{
            marginRight: 50,
            fontSize: 13,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#FFFFFF',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            } 
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }  
    },
    container:{
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }
}))
const HeaderButtons = () => {
    const [open, setOpen] = useState(false)
    const {account, setAccount} = useContext(LoginContext) 
    
    const cartDetails = useSelector(state=> state.cart);
    const { cartItems } = cartDetails;
    
    const openLoginDialog = () => {
        setOpen(true)
    }

    const classes = useStyle();
    return(
        <Box className={classes.wrapper}>
        {
            account ? <Profile account={account} setAccount={setAccount}/> : 
            <Link>
                <Button variant="contained" onClick={() => openLoginDialog()} className={classes.login}>Login</Button>
            </Link>
        }
            <Link>
                <Typography style={{marginTop: 5}}>More</Typography>
            </Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart/>
                </Badge>
                    <Typography style={{marginLeft: '10px'}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
    )
}
export default HeaderButtons