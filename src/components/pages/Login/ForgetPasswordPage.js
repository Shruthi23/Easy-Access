import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import background from '../../../assets/images/login-bg.jpeg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//import '../../App.css'

export default function ForgetPasswordPage() {
    const [email,setEmail]=useState("")
    return (
        <div style={{height:'100vh',flexDirection:'column',display:'flex',justifyContent:'center',backgroundImage: `url(${background})`,alignItems:'center'}}>
            <div style={{height:'60%',width:'60%',justifyContent:'center',alignItems:'center',backgroundColor:'white',display:'flex',flexDirection:'column'}}>
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <Form.Group style={{marginTop:10,marginBottom:10}} controlId="form.Email">
                <Form.Control
                onChange={(e)=>{
                    setEmail(e.target.value)

                }}
                type="email" placeholder={"Email address"} style={{width:'100%'}}/>

            </Form.Group>
            <Button style={{fontWeight:'bold',alignSelf:'center',width:'20%'}}>NEXT</Button>

            </div>
           
            
            
        </div>
    )
}
