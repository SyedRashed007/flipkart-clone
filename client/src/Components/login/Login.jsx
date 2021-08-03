import {Box, Dialog, DialogContent, Typography, TextField, Button, makeStyles} from '@material-ui/core'
import {useState} from 'react'

const useStyle = makeStyles({
    component:{
        height: '71vh',
        width: '90vh',
        maxWidth: 'unset !important'
    }, 
    image:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '71vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '&>*':{
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login:{
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '&>*':{
            marginTop: 20
        }
    },
    signup:{
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '&>*':{
            marginTop: 6
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#FFFFFF',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
})

const initialValue = {
    login:{
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendation'
    },
    signup:{
        view: 'signup',
        heading: "Looks like you're new here" ,
        subheading: 'Signup to get started'

    }
}
const LoginDialog = ({open, setOpen}) => {

    const classes = useStyle();
    const [account, setAccount] = useState(initialValue.login)
    const handleClose = () => {
        setOpen(false)
        setAccount(initialValue.login)
    }
    const toggleAccount = () => {
        setAccount(initialValue.signup)
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
               <Box style={{display: 'flex'}}>    
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subheading}</Typography>
                    </Box>
                    {
                        account.view === "login" ?
                        <Box className={classes.login}>
                            <TextField name="username" label="Enter Email/Mobile Number"/>
                            <TextField name="password" label="Enter Password"/>
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant="contained" className={classes.loginbtn}>Login</Button>
                            <Typography className={classes.text} style={{textAlign: 'center'}}>Or</Typography>
                            <Button variant="contained" className={classes.requestbtn}>Request OTP</Button>
                            <Typography onClick={() => toggleAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                        </Box> : 
                        <Box className={classes.signup}>
                            <TextField name="firstname" label="Enter Firstname"/>
                            <TextField name="lastname" label="Enter Lastname"/>
                            <TextField name="username" label="Enter Username"/>
                            <TextField name="email" label="Enter Email"/>
                            <TextField name="password" label="Enter Password"/>
                            <TextField name="phone" label="Enter Phone"/>
                            <Button variant="contained" className={classes.loginbtn}>Sign up</Button>                
                        </Box>
                    } 
               </Box> 
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog;