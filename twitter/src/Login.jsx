import React from 'react';
import './Scripts/scriptLogin';
// import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import useModal from './useModal';
const Login = () => {
    const { isShowing, toggle } = useModal();
    return (
        <>

            <div id="Login" className="container-fluid col-md-10 col-10">
                <h1 className="header">welcome sign up or login <br /> to see whats happening in the world</h1>

                <div id="btnLog" className="container-overflow-hidden">
                    <div className="row gx-5">
                        <div className="col-md-12 d-lg-flex">
                            <div className="p-3 border bg-light">
                                <Button onClick={toggle} id="logbtn" variant="contained">Sign Up</Button>
                                <Modal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
                            </div>
                        </div>


                        <div className="col">
                            <div className="p-3 border bg-light">
                                <NavLink exact to="/loginto">
                                    <Button id="logbtn" variant="contained">Login</Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Login;