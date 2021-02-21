import React, { useState, setShow } from 'react'
import Button from '@material-ui/core/Button';
import Modal from './Modal';
import Home from './Home'
import Fire from './Firebase';
import './Login.css'
import {Route,NavLink,Redirect,useHistory} from 'react-router-dom';
function Login(props) {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const [fullName, setFullName] = useState({
        email: "",
        PWD: "",
    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setFullName((preValue) => {
            // console.log(preValue);
            return {
                ...preValue,
                [name]: value,
            };
        })
    }


    const submit = (event, email, PWD,) => {
        // alert("submit intiated")
        event.preventDefault();
        Fire.auth().signInWithEmailAndPassword(fullName.email, fullName.PWD).then(() => {
            // Signed in 
            // alert("login successfully")
            var id = Fire.auth().currentUser.uid;
           const idCard =id;
            // alert(idCard);
            
        //    <NavLink activeClassName="active_class" to="/Home">
      
            /* <Home idCard={id}/> */
            // <Redirect to="/Home"/>
           
            history.push("/Home");
            
          

            
              {/* </NavLink> */}
        })
            .catch((error) => {
                alert("this error intiated");
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode);
                alert(errorMessage);
                // ..
            });
    };

    const closeModalHandler = () => setShow(false);
    return (
        <div className="Login_con">
            <div>
                <h2 className="Login_header">Login to continue</h2>
                <div className="Login_div">

                    <input onChange={inputEvent} name="email" value={fullName.email} placeholder="email or username" type="text" />

                </div>
                <input onChange={inputEvent} name="PWD" value={fullName.PWD} className="Login_Input" placeholder="Password" type="password" />
            </div>

            <Button onClick={submit} className="Login_btn" variant="contained" color="primary" disableElevation>Login</Button>
            {/* <Button className="Login_btn" variant="contained" color="primary" disableElevation>Signup</Button> */}


            <div>
                {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
                <button onClick={() => setShow(true)} className="btn-openModal">SignUp</button>
                <Modal show={show} close={closeModalHandler} />
            </div>

        </div>
    )
}

export default Login

// export {idCard}
 

 