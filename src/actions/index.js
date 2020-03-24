import {signInURL} from '../apis/signInUrl';


export const signIn = (user) => async dispatch =>{
    const response = await signInURL.post('/login',{user});
    dispatch({ type:'FETCH_SIGN',payload:response.data })
 };

 export const secure = () => async dispatch =>{ 
    const response = await signInURL.get('/secure');
   dispatch({ type:'FETCH_SECURE',payload:response.data})             
 };

 export const getNewToken = (user) => async dispatch =>{
     //console.log(user,"user inside getNewToken")
    const newToken = await signInURL.post('/token',user);
    dispatch({ type:'FETCH_TOKEN',payload:newToken.data })
 };


//  const formData = new FormData();
//   formData.append("username", "");
//   formData.append("password", "");
//   formData.append("user_type", 1);

//   axios.post("http://demo.com/api/v1/end-user/login", formData).then(res => {
//     console.log(res);
//     console.log(res.data);
//   });
// };