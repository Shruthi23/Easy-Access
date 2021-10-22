import React from 'react'
import { Link,useHistory } from 'react-router-dom'

import '../../App.css'
import Button from 'react-bootstrap/Button'

export default function LandingPage() {
    const history=useHistory()
    return (
       <div style={{height:'100vh',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
<h3>
    Login to access Easy Flow
   
</h3>
<Button 
onClick={()=>{
    history.push("login")
}}
style={{backgroundColor:'#f0483e',fontWeight:'bold',fontFamily:'inherit',borderColor:'transparent'}}>
        SIGN IN
    </Button>
    <div style={{marginTop:10}}>
    Don't have a Zoho account? 
    <a style={{marginLeft:4}} href='/register'>
    Sign up now

    </a>
   

    </div>
  
        

       </div>
    )
}

