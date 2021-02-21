import React from 'react'
import './SidebarOption.css'
import Fire from './Firebase';
import {useHistory} from 'react-router-dom';
const SidebarOption=({active,text,Icon})=> {

    const history = useHistory();
    const LogOut =()=>{
         
         Fire.auth().signOut().then(() => {
            // Signed in 
            // alert("Logout successfully")
            history.push("/");
        })
            .catch((error) => {
                alert("this error intiated");
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode);
                alert(errorMessage);
                // ..
            });
    }


    return (
        <div className={`sidebaroption ${active && 'sidebaroption--active'}`} onClick={LogOut} >
            <Icon/>
            <h2>{text}.</h2>

        </div>
    )
}

export default SidebarOption;
