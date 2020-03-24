import React,{useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
//import Box from '@material-ui/core/Box';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
//import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
//import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Link from '@material-ui/core/Link';
//import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems} from './listitems';
//import Chart from './charts';
//import Deposits from './deposits';
//import Orders from './orders';
import Cards from './cards';
//import Button from '@material-ui/core/Button';
//import MenuItem from '@material-ui/core/MenuItem';
//import Menu from '@material-ui/core/Menu';
import ProfileWidget from './profilecard';
import Appbar from './appbar';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//import InputLabel from '@material-ui/core/InputLabel';
//import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import {secure} from '../../actions'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
   
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 8px 10px 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    fontWeight:600,
    color:"white",
    textShadow:".5px .5px black"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '96vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

 function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [imageOn, setImageOn] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  //const [anchorEl, setAnchorEl] = React.useState(null);
  //const [age, setAge] = React.useState('');
 // const isMenuOpen = Boolean(anchorEl);
  

  //useEffect
  useEffect(() => {
    const user ={
      "username":sessionStorage.getItem("username"),
      "refreshToken":sessionStorage.getItem("refreshToken")          
  };
  // alert("inside");
  //  console.log(props.secureDetails.length)

if(props.secureDetails.length===0)  props.secure(sessionStorage.getItem("token"),user);

    setTimeout(() => { 
     setLoading(false)
    },2000)

    
},[props]);


  const handleDrawerOpen = () => {
    setOpen(true);
    setImageOn("");
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setImageOn("none");
  };
  // const handleProfileMenuOpen = event => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleMenuClose = () => {
  //   setAnchorEl(null);
    //window.location.href = "/";
    //handleMobileMenuClose();
  //};

  // const handleChange = event => {
  //   setAge(event.target.value);
  // };

  
  // const fetchData =()=> {
  //   const user ={
  //     "username":sessionStorage.getItem("username"),
  //     "refreshToken":sessionStorage.getItem("refreshToken")          
  // };
  //  //alert("inside");
  //   props.secure(sessionStorage.getItem("token"),user);
  // }


  // const signout =()=>{
  //   window.location.href = "/";
  // };
  

  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={signout}>Sign Out</MenuItem>
  //   </Menu>
  // );
  return (
    <div>
    
         <div style={{zIndex:2,position:"absolute",width:"100%",height:"100%",display:(loading)?"flex":"none",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(135, 126, 241, .1)" }}>
         <Loader
          type="Triangle"
          color="#9999ff"
          height={100}
          width={100}
          //timeout={3000} //7 secs
     
       />
       </div>
    
    
    
    <div style={{zIndex:1}} className={classes.root}>
      <CssBaseline />
      
      {/* <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <div>
          <Typography style={{paddingRight:"15px",color:"white"}}>Dabison KR</Typography>
          <Typography style={{paddingRight:"15px",fontSize:"12px",color:"white"}}>Sr.UX/UI Designer</Typography>
          </div>
          <img  src={require('./images/user.jpg')} style={{height:"46px",width:"48px",borderRadius:"120px"}}  onClick={handleProfileMenuOpen} />
        </Toolbar>
      </AppBar>
      {renderMenu} */}

       <Drawer
        variant="permanent"
        style={{zIndex:1}}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >

        <div className={classes.toolbarIcon}>
          
          <img  src={require('./images/Asset Tracker.png')} alt="icon" style={{display:imageOn}}/>
          <IconButton style={{outline:"none"}} onClick={(imageOn ==="")?handleDrawerClose:handleDrawerOpen}>
            {(imageOn === "")?<ChevronLeftIcon style={{outline:"none"}} />:<ChevronRightIcon style={{outline:"none"}}/>}
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={3}>

          <Grid item xs={12}>
           <Appbar  history={props.history}/>
          </Grid>

          <Grid item xs={12} sm={3} style={{display:"flex",justifyContent:"center"}}>
            <ProfileWidget/>         
          </Grid>

          <Grid item xs={12} sm={3} style={{display:"flex",justifyContent:"center"}}>
            <Cards cardtype={"My Assests"}/>          
          </Grid>

          <Grid item xs={12} sm={3} style={{display:"flex",justifyContent:"center"}}>
            <Cards cardtype={"Allocated Devices"}/>          
          </Grid>

          <Grid item xs={12} sm={3} style={{display:"flex",justifyContent:"center"}}>
            <Cards cardtype={"Asset Request"} question={"You need a device?"}/>          
          </Grid>


          {/* sample testing */}
           {/* <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={fetchData}>
              Click
            </Button>
          </Grid> */}



          </Grid>
         
        </Container>
      </main>
    </div>
    </div>
  );
}

const mapToStateProps=(state,ownProps)=>{
 // console.log(state.secureDetails,"secure value inside postlist")
 //console.log(ownProps,"ownprops here")

  return {
     // newToken:state.newToken 
     secureDetails:state.secureDetails
  }
  
};

export default connect(mapToStateProps,{secure})(Dashboard);
