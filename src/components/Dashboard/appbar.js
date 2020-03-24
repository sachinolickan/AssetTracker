import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:"#737373"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    flexGrow:1
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));



 function ButtonAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  

  const handleMenuClose = () => {
    setAnchorEl(null);
    //window.location.href = "/";
    //handleMobileMenuClose();
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const signout =()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("timeout");
    window.location.href = "/";
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={signout}>Sign Out</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"white", boxShadow: "none",borderRadius:"6px"}}>
        <Toolbar>
          <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          {/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography> */}
          <div>
          <Typography style={{paddingRight:"15px",color:"#737373",fontWeight:600}}>{(props.secureDetails.length>0)?props.secureDetails[0].data[0].name:''}</Typography>
          <Typography style={{paddingRight:"15px",fontSize:"12px",color:"#737373"}}>{(props.secureDetails.length>0)?props.secureDetails[0].data[0].designation:''}</Typography>
          </div>
          <img  src={require('./images/athira.jpeg')} style={{height:"46px",width:"48px",borderRadius:"120px",cursor:"pointer"}} alt="profile"  onClick={handleProfileMenuOpen} />
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
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
 
 export default connect(mapToStateProps,{})(ButtonAppBar);
 