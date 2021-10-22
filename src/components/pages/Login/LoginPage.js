import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import background from '../../../assets/images/login-bg.jpeg'
import google from '../../../assets/images/google.png'
import leave from '../../../assets/images/leave.jpeg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


// import '../../App.css'
// import '../'

export default function SignInPage() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    console.log("email-->",password)
    
    return (
        <div style={{height:'100vh',display:'flex',flexDirection:'column',backgroundImage: `url(${background})`,justifyContent:'center',alignItems:'center'}}>
          <div style={{height:'70%',backgroundColor:'white',width:'60%',display:'flex',flexDirection:'row'}}>
              <div style={{flex:0.6,justifyContent:'center',display:'flex',flexDirection:'column',border:'1px solid white',borderRightColor:'gray',paddingLeft:'5%',paddingRight:'5%'}}>
              <h2 style={{fontFamily:'serif'}}>Sign in </h2>
              <h4 style={{fontFamily:'serif'}}>to access Easy Flow</h4>
              <div style={{display:'flex',flexDirection:'column'}}>
            <Form.Group style={{marginTop:10,marginBottom:10}} controlId="form.Email">
                <Form.Control
                onChange={(e)=>{
                    setEmail(e.target.value)

                }}
                type="email" placeholder={"Email address"} style={{width:'60%'}}/>

            </Form.Group>
            <Form.Group
            style={{marginTop:10,marginBottom:10}} 
            className="mb-3" style={{width:'60%'}} controlId="formBasicPassword">
   
    <Form.Control 
    onChange={(e)=>{
        setPassword(e.target.value)
    }}
    
    type="password" placeholder="Password" />
  </Form.Group>
 <Button style={{fontWeight:'bold',width:'60%',alignSelf:'center'}}>LOGIN</Button>
            </div>
            <div style={{backgroundColor:'gray',height:2,marginTop:20,marginBottom:7}}/>
            <div style={{flexDirection:'column',display:'flex'}}>
                Sign in using
                <img src={google} height='40' width='40'/>
            </div>

              
                  </div> 
                  <div style={{flex:0.4,display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <img src={leave} style={{borderRadius:'40%'}} height='70%' width='70%'/>
                  </div> 
              </div> 
            

        </div>
      
    )
}
