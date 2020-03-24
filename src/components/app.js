import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
//import SignIn from './signin';
import Login from './Login/login'
//import Dashboard from './Dashboard/dashboard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
//import Auth from './Login/jwtAuthentication';
import Layout from '../Layout'
//import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


const theme = createMuiTheme({
  palette: {
      primary: { main: '#9999ff' },
      secondary: { main: '#4d4d4d' },
  },
  typography: {
      
      useNextVariants:true,
      fontFamily: 'Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif',
  },
})



class App extends React.Component {

  // constructor(props){
  //     super(props)
  // }

  render(){
  return (
    <div>
    <MuiThemeProvider theme={theme}>
    <BrowserRouter>
     <Switch>
     <Route path="/" component={Login} exact/> 
     <Route path='/' render={(props) => <Layout {...props} /> } />   
     {/* <Route path="/dashboard" component={Dashboard}/>  */}
    
    </Switch>
    </BrowserRouter>
    </MuiThemeProvider>
    </div>
  );
}
}


export default App;