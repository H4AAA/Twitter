import React,{useState,setShow} from 'react'
import Button from '@material-ui/core/Button';
import Modal from './Modal';
import './Login.css'
function Login() {
    const [show, setShow] = useState(false);

    const closeModalHandler = () => setShow(false);
    return (
        <div className="Login_con">
            <div>
                <h2 className="Login_header">Login to continue</h2>
                <div className="Login_div">

                    <input placeholder="email or username" type="text" />

                </div>
                <input className="Login_Input" placeholder="Password" type="password" />
            </div>

            <Button className="Login_btn" variant="contained" color="primary" disableElevation>Login</Button>
            {/* <Button className="Login_btn" variant="contained" color="primary" disableElevation>Signup</Button> */}
            
   
            <div>
    { show?<div onClick = { closeModalHandler } className = "back-drop"></div> : null }
      <button onClick={() => setShow(true)} className="btn-openModal">SignUp</button>
      <Modal show={show} close={closeModalHandler} />
    </div>

        </div>
    )
}

export default Login




