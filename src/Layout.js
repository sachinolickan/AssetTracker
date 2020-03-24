import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IdleTimer from 'react-idle-timer';
import DashboardPage  from './components/Dashboard/dashboard';
import { IdleTimeOutModal } from './modal/IdleModal'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
//import decode from 'jwt-decode';
import {getNewToken} from './actions';
import { connect } from 'react-redux';
import decode from 'jwt-decode';









//import './App.css'

class Layout extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            timeout:1000 * sessionStorage.getItem("timeout") * 1,
            showModal: false,
            userLoggedIn: false,
            isTimedOut: false
        }

        this.idleTimer = null
        this.onAction = this._onAction.bind(this)
        this.onActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    //const decodedToken= decode(token);

    _onAction(e) {
      //console.log('user did something', e)
      this.setState({isTimedOut: false})
    }
   
    _onActive(e) {
      //console.log('user is active', e)
      this.setState({isTimedOut: false})
    }
   
    _onIdle(e) {
     // console.log('user is idle', e)
      const isTimedOut = this.state.isTimedOut
      if (isTimedOut) {
          
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("refreshToken");
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("timeout");
          this.props.history.push('/');

      } else {
        this.setState({showModal: true})
        this.idleTimer.reset();
        this.setState({isTimedOut: true})
      }
      
    }

    handleClose() {

    //   const user ={
    //     "username":sessionStorage.getItem("username"),
    //     "refreshToken":sessionStorage.getItem("refreshToken")          
    // };

     
      
      const token = sessionStorage.getItem("token");
      const decodedToken= decode(token);
      const currentTime = new Date().getTime()/1000;

      if (currentTime > decodedToken.exp){
          //alert("session expired")
          const user ={
              "username":sessionStorage.getItem("username"),
              "refreshToken":sessionStorage.getItem("refreshToken")          
          };
          this.props.getNewToken(user);

      }
      this.setState({showModal: false});
      //this.props.getNewToken(user);
      //console.log(this.props.newToken,"newToken")
      
    }

    handleLogout() {
      this.setState({showModal: false})
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("timeout");
      this.props.history.push('/')
    }

    componentDidUpdate() {
              
      if (this.props.newToken.length !== 0 && this.props.newToken[0].token !== sessionStorage.getItem("token") ) {
          //console.log(this.props.newToken[0].token,"token");

          sessionStorage.removeItem("token");
          sessionStorage.setItem("token",this.props.newToken[0].token)
      } 
      
  }

    render(){
     const { match } = this.props
     // console.log("hi")
      return(
        <>
          <IdleTimer
            ref={ref => { this.idleTimer = ref }}
            element={document}
            onActive={this.onActive}
            onIdle={this.onIdle}
            onAction={this.onAction}
            debounce={250}
            timeout={this.state.timeout} />

            <div className="">
                <Switch>
                   
                    <Route 
                        exact path={`${match.path}dashboard`}
                        render={(props) => <DashboardPage {...props} /> }/>
                    />
                </Switch>
                
                <IdleTimeOutModal 
                    showModal={this.state.showModal} 
                    handleClose={this.handleClose}
                    handleLogout={this.handleLogout}
                />
            </div>
        </>
      )
   }

 }

 Layout.propTypes = {
    match: PropTypes.any.isRequired,
    history: PropTypes.any.isRequired
 }

 const mapToStateProps=(state,ownProps)=>{
  // console.log(state.newToken,"newtoken inside layout")
  //console.log(ownProps,"ownprops here")
 
   return {
      newToken:state.newToken 
      //secureDetails:state.secureDetails
   }
   
 };
 
 export default connect(mapToStateProps,{getNewToken})(Layout);
 
//export default Layout