import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux';
import {signIn} from '../../actions';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';





const Login =(props)=> {

  console.log()
    
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordError,setPasswordError]=React.useState(false);
    const [usernameError,setUsernameError]=React.useState(false);
    const [values, setValues] = React.useState({showPassword: false});
  
    const handleChangeUsername = event => {
      setUsername(event.target.value);
    };
  
    const handleChangePassword = event => {
      setPassword(event.target.value);
    };

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = event => {
      event.preventDefault();
    };

    const user = {
      "username": username,
      "password": password
     };
  
  
    useEffect(() => {
      //alert("props")
      if(props.Data.length>0){
       // alert("hai props length greatr")
        sessionStorage.setItem("username",user.username);
        sessionStorage.setItem("token",props.Data[0].token);
        sessionStorage.setItem("refreshToken",props.Data[0].refreshToken);
        sessionStorage.setItem("timeout",props.Data[0].timeout);
        window.location.href = "/dashboard"; 
       //window.location.hash+='dashboard';
     }
    }, [props.Data,user]);
  
   
    const signedIn =(e) => {
  
        e.preventDefault();
        if(user.username !=="" && user.password !==""){
          props.signIn(user);
  
        }
       
       else{
          // alert("Invalid username and password");
           (user.password ==="")?setPasswordError(true):setPasswordError(false);
           (user.username==="")?setUsernameError(true):setUsernameError(false);
       }
  
       
    }
        return (
            <div style={{display:"flex",justifyContent:"center",paddingTop:"165px"}}>
                <Paper style={{width:"65%",boxShadow:"none"}}>
                <Grid container spacing={2}>
                  
                  <Grid item xs={12} sm={6} >
                  <img  src={require('../Dashboard/images/login.jpg')} alt="logo" style={{width:"100%",height:"100%"}}/>
                  </Grid>
                  <Grid item xs={12} sm={6} style={{display:"flex",alignItems:"center"}}>
                  <Grid container spacing={3}>
                  <Grid item xs={12} style={{display:"flex",justifyContent:"center",paddingBottom:"44px",paddingTop:"30px"}}>
                  <img  src={require('../Dashboard/images/Asset Tracker.png')} alt="title"/>
                  </Grid>
                  <Grid item xs={12} style={{paddingBottom:"0px"}} >
                  <Typography style={{paddingLeft:"38px"}}>
                      Username
                  </Typography>
                  </Grid>
                  <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
                  
                  <TextField
                    style={{width:"86%"}}
                    error={usernameError}
                    id="standard-error-helper-text"
                   // label="Error"
                   // defaultValue="Hello World"
                    helperText={(usernameError)?"Incorrect entry":""}
                    onChange={handleChangeUsername}
                    variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12} style={{paddingBottom:"0px"}}  >
                  <Typography style={{paddingLeft:"38px"}}>
                      Password
                  </Typography>
                  </Grid>
                  <Grid item xs={12} style={{display:"flex",justifyContent:"center"}} >
                  
                  <TextField
                   style={{width:"86%"}}
                    error={passwordError}
                    id="standard-error-helper-text2"
                    //label="Error"
                    //defaultValue="Hello World"
                    helperText={(passwordError)?"Incorrect entry":""}
                    onChange={handleChangePassword}
                    type={values.showPassword ? 'text' : 'password'}
                     autoComplete="current-password"
                    variant="outlined"
                    InputProps={{
                      endAdornment:
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      
                    }}
                    />
                  </Grid>
                  <Grid item xs={12} style={{display:"flex",justifyContent:"flex-end",paddingRight:"50px",paddingBottom:"30px"}}>
                  <Button variant="contained" color="primary" onClick={signedIn} style={{color:"white"}}>
                        Login
                    </Button>
                  </Grid>
                  </Grid>                  
                  </Grid>
                           
                </Grid>
                </Paper>
            </div>
        )
    }

const mapToStateProps=(state)=>{
    
    return {Data:state.signDetails};
};

export default connect(mapToStateProps,{signIn})(Login);