import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "none",
    borderRadius:"10px"
  },
  media: {
    height:100,
    
  },
  role:{
    fontWeight:600,
    color:"#737373",
    fontSize:"14px"
  },
  rolevalue:{
    color:"#737373",
    fontSize:"14px"
  },

});

function MediaCard(props) {
  const classes = useStyles();
  //const [data,setData] = React.useState([]);

 // if(props.secureDetails.length>0)setData(props.se)
  
//console.log(props.secureDetails,"data inside media card")
//if(props.secureDetails.length>0) console.log(props.secureDetails[0].data[0].name,"nnn")

  return (
    
    <Card className={classes.card}>
          <Grid container>

          <Grid item xs={12} style={{display:"flex",justifyContent:"center",paddingTop:"20px",paddingBottom:"20px"}}>           
            <img  src={require('./images/athira.jpeg')} alt="profile" style={{height:"100px",borderRadius:"80px"}} />      
          </Grid>
          <Grid item xs={12}  >
           <Grid container style={{display:"flex",justifyContent:"center"}}>

            <Grid item xs={12} style={{paddingTop:"4px",paddingBottom:"16px"}} >          
            <Typography  style={{display:"flex",justifyContent:"center",fontWeight:600,color:"#737373",fontSize:"14px"}}>{(props.secureDetails.length>0)?props.secureDetails[0].data[0].name:''}</Typography>         
            <Typography  style={{display:"flex",justifyContent:"center",fontSize:"12px",color:"#737373"}}>{(props.secureDetails.length>0)?props.secureDetails[0].data[0].employeeID:''}</Typography>        
            </Grid>

            <Grid item xs={6} style={{paddingLeft:"20px",paddingTop:"4px",paddingBottom:"4px"}}>
             <Typography className={classes.role}>Designation</Typography>
            </Grid>
            <Grid item xs={6} style={{paddingTop:"4px",paddingBottom:"4px"}}>
             <Typography className={classes.rolevalue}>{(props.secureDetails.length>0)?props.secureDetails[0].data[0].designation:''}</Typography>
            </Grid>

            <Grid item xs={6} style={{paddingLeft:"20px",paddingTop:"4px",paddingBottom:"4px"}}>
             <Typography  className={classes.role}>Department</Typography>
            </Grid>
            <Grid item xs={6} style={{paddingTop:"4px",paddingBottom:"4px"}}>
             <Typography className={classes.rolevalue}>{(props.secureDetails.length>0)?props.secureDetails[0].data[0].department:''}</Typography>
            </Grid>

            <Grid item xs={6} style={{paddingLeft:"20px",paddingTop:"4px",paddingBottom:"4px"}}>
             <Typography  className={classes.role}>Reporting To</Typography>
            </Grid>
            <Grid item xs={6} style={{paddingTop:"4px",paddingBottom:"4px"}}>
             <Typography className={classes.rolevalue}>{(props.secureDetails.length>0)?props.secureDetails[0].data[0].reportingto:''}</Typography>
            </Grid>

            <Grid item xs={6} style={{paddingLeft:"20px",paddingTop:"4px",paddingBottom:"20px"}}>
             <Typography  className={classes.role}>Location</Typography>
            </Grid>
            <Grid item xs={6} style={{paddingTop:"4px",paddingBottom:"20px"}}>
            <Typography className={classes.rolevalue}>{(props.secureDetails.length>0)?props.secureDetails[0].data[0].location:''}</Typography>
            </Grid>

           </Grid>
          </Grid>

          </Grid>        
    </Card>
  );
}

const mapToStateProps=(state)=>{
 //console.log(state.secureDetails,"secure value inside postlist")
 // console.log(ownProps,"ownprops here")

  return {
    // newToken:state.newToken 
    secureDetails:state.secureDetails
 }

  
};

export default connect(mapToStateProps,{})(MediaCard);
