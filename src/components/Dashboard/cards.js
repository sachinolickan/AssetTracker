import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DesktopIcon from '@material-ui/icons/DesktopMac';
//import { CardActions } from '@material-ui/core';



const useStyles = makeStyles({
  card: {
    width:"100%",
    boxShadow: "none",
    height:160,
    borderRadius:"10px",
    cursor:"pointer",

  },
  
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [cardColor, setCardColor] = React.useState("white");


  const cardSelect=()=>{
    setCardColor("#9999ff")
  }
  
  return (
    <Card onClick={cardSelect} style={{backgroundColor:cardColor}} className={classes.card}>
    
          <Grid container style={{paddingTop:"25px"}}>

          <Grid item xs={6} style={{display:"flex",justifyContent:"center",paddingLeft:"10px",paddingTop:"10px"}}>           
            {/* <img  src={require('./images/deviceimage.png')} style={{height:"80px"}} />       */}
            <div style={{backgroundColor:"#b6b6ff",width:"65px",borderRadius:"36px",display:"flex",justifyContent:"center"}}>
            <DesktopIcon style={{height:"65px",width:"38px"}}/>
            </div>
          </Grid>

          <Grid item xs={6} style={{}}>
          <Typography style={{fontSize:"14px",fontWeight:600,paddingTop:"12px",paddingBottom:"12px"}}>
            {props.cardtype}
          </Typography>
          <Typography style={{fontSize:"12px"}}>
             {(props.cardtype==="Asset Request")?props.question:"#12"} 
          </Typography>
          </Grid>

          </Grid> 
                
    </Card>
  );
}