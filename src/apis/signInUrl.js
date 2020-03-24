import axios from 'axios';
import decode from 'jwt-decode';

const signInURL = axios.create({
    baseURL:'http://localhost:3000/api'
});





signInURL.interceptors.request.use(
     
    async config => {
    // log a message before any HTTP request is sent
    let token = sessionStorage.getItem("token");
   
    if(token){        
        const decodedToken= decode(token);
        const currentTime = new Date().getTime()/1000;
        if (currentTime > decodedToken.exp){
            
            const user ={
                "username":sessionStorage.getItem("username"),
                "refreshToken":sessionStorage.getItem("refreshToken")          
            };
            
            async function fetchData () {
            return axios.post('http://localhost:3000/api/token',user)
               .then( response => {
                  sessionStorage.removeItem("token");
                  sessionStorage.setItem("token",response.data.token);
                   
                })
            }
            await fetchData();        
        }   
        config.headers["x-access-token"] = sessionStorage.getItem("token");   
    } 
    return config;
  });

  export{signInURL};