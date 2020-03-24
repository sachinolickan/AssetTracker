import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {getNewToken,secure} from '../../actions'
import decode from 'jwt-decode';





class AuthenticatedComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
   
    componentWillMount()  {
       
        const token = sessionStorage.getItem("token");
        const refresh = sessionStorage.getItem("refreshToken");
        const decodedToken= decode(token);
        //const decodedRefresh= decode(refresh);
        const currentTime = new Date().getTime()/1000;

        if (currentTime > decodedToken.exp){
            // alert("session expired")
            const user ={
                "username":sessionStorage.getItem("username"),
                "refreshToken":sessionStorage.getItem("refreshToken")          
            };
            this.props.getNewToken(user);

        }
    
       // this.props.secure(sessionStorage.getItem("token"),user);
        
    };
        
        componentDidUpdate() {
              
            if (this.props.newToken.length !== 0) {
                alert("got new token");
                sessionStorage.removeItem("token");
                sessionStorage.setItem("token",this.props.newToken[0].token)
            } 
            
        }
         
    render() {
        return(
            <div>
                {this.props.children}
            </div>  
        );
    }
}


const mapToStateProps=(state)=>{
    //console.log(state.newToken,"secure value inside postlist")
   // console.log(ownProps,"ownprops here")
  
    return {
        newToken:state.newToken 
    }
    
};

export default connect(mapToStateProps,{getNewToken,secure})(AuthenticatedComponent);
