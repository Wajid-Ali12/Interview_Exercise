import classes from "*.module.css";
import {Box, makeStyles, Typography , Tabs, Paper, Tab} from "@material-ui/core";


const useStyles = makeStyles({
    heading:{
     
        width: '103px',
        height: '30px',
   
    },
   
})


const Header = () => {
const classes = useStyles()
    return (
        <Box>
            <Typography className={classes.heading}  variant="h3"  >
                Booking
            </Typography>
        </Box>

    )
}

export default Header