import React,{useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import {makeStyles, Typography, AppBar, Tab, Tabs} from '@material-ui/core'
import TabPanel from '@material-ui/lab/TabPanel';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import OneMiniSquare from "./OneMiniSquare";
import Header from '../Header/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { light } from '@material-ui/core/styles/createPalette';


const useStyles = makeStyles({

bar:{
  background:'#ffffff',
  fontFamily:'poppins',
  color:'black',
  fontSize:'14px',
  border:0,
  display:'flex',

},
image:{
  position:'absolute',
  top:'160px',
  left:'35px',
  height:'91px'

},
write:{
  display:'grid',
  position:'relative',
  top:'17px',
  left:'33.33%',
  fontWeight:500,
  lineHeight:'18px'
},
card:{
  minWidth: 275,
  height:'400px',
  borderRadius:'9px',
},
solid:{
  borderTop:'3px solid #bbb',
},
paper: {
  padding: '3px',
  textAlign: 'center',

},
});


const Rectangle = ({src, placeholder, alt =""}) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(placeholder);
    const classes = useStyles()

    useEffect(() => {
        // start loading original image
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
          // When image is loaded replace the src and set loading to false
          setLoading(false);
          updateSrc(src);
        }
      }, [src])

    return (
       <div>
       <h3 className='color-black justify'>Bookings</h3>
        <AppBar className={classes.bar} position="static">
  <Tabs aria-label="simple tabs example">
    <Tab label="Confirmed"  />
    <Tab label="Completed" />
  </Tabs>
</AppBar>
<Card className={classes.card} variant='outlined'>
       <CardContent>

<img className={classes.image} src='/images/SearchLocation/item1.png'></img>
<div className={classes.write}> 
<Typography style={{fontWeight: 'bold'}}>Loft Mackanzie Building </Typography>
<Typography>Booking ID 494950</Typography>
<Typography><i className='fa fa-map-marker'></i>Burgis,Singapore</Typography>
<Typography><i className='fas fa-check'></i>Completed
<hr className={classes.solid}></hr>
<Grid container spacing={4}>
<Grid item xs={4}>
          <Paper className={classes.paper}>Move In  
          <span className='bg-dark'>10 Jan 2020</span>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Move Out
          <span className='bg-primary'>Monthly Going</span>
          </Paper>
        </Grid>
</Grid>
</Typography>
</div>
</CardContent>
     </Card>
     
      </div>
    

    )
}

export default Rectangle