import React, { useState } from 'react';
import './Modal.css';
import Fire from './Firebase';
import Button from '@material-ui/core/Button';
const Modal = ({ show, close }) => {

    const [fullName, setFullName] = useState({

        userName: "",
        email: "",
        fName: "",
        pHno: "",
        PWD: "",
        ImageUrl: "",
        ImagName: "",
        file: [],


    });

    const onFileChange = (e) => {
        // event.preventDefault();
        const file = e.target.files;
        // alert("IMage select ongo")
        // alert(fullName.file)
        //    const storageRef = Fire.storage.ref()
        //    const fileRef = storageRef.child(file.name)
        //    fileRef.put(file).then(()=>{
        //        alert("file uploaded.......",file.name)
        //    })
    };

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
    const submit = (event, userName,
        email,
        fName,
        pHno,
        PWD,
        file,
    ) => {

        event.preventDefault();
        // email=useState(email);
        // PWD=useState(PWD);

        // alert(fullName.PWD);
        // alert(fullName.email);
        //   alert( fullName.fName,);
        //   alert( fullName.pHno);
        //   alert( fullName.userName); 

        Fire.auth().createUserWithEmailAndPassword(fullName.email, fullName.PWD).then(() => {
            // Signed in 

            alert("login submitted")
            var id = Fire.auth().currentUser.uid;

            const UPD = Fire.storage().ref('User/AvatarImage.png').put(fullName.file[0]).then(data => {
                data.ref.getDownloadURL().then(url => {
                    // alert(url)
                    Fire.database().ref('User/' + id).update({
                        Link: url,
                    });
                    alert("Image added successfully");
                })
            })


            Fire.database().ref('User/' + id).set({
                userName: fullName.userName,
                email: fullName.email,
                fName: fullName.fName,
                pHno: fullName.pHno,
                PWD: fullName.PWD,
            });
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

    return (
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modal-header">
                <p>Tweety</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Signup</h4>
                    <input name="userName" onChange={inputEvent} value={fullName.userName} placeholder="Username" type="text" required />
                    <input name="email" onChange={inputEvent} value={fullName.email} placeholder="Email" type="text" required />
                    <input name="PWD" onChange={inputEvent} value={fullName.PWD} placeholder="Password" type="password" required />
                    <input name="fName" onChange={inputEvent} value={fullName.fName} placeholder="FullName" type="text" required />
                    <input name="pHno" onChange={inputEvent} value={fullName.pHno} placeholder="ContactNo" type="text" />
                    {/* <form onSubmit={submit}> */}
                    <input type="file" onChange={onFileChange} name="filename" />
                    {/* <input type="submit" /></form> */}
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">Close</button>
                    <button onClick={submit} className="btn-Submit">Submit</button>

                </div>
            </div>
        </div>
    )
};
export default Modal;