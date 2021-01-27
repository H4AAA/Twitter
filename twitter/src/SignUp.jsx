import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Button from '@material-ui/core/Button';

const SignUp = () => {
    return (

        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form id="popUp">
                            <p id="signUpHeader" className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text ">
                                <label id="SignLabel" for="Name" class="col-form-label">FullName:</label>
                                <MDBInput id="MDBInput" icon="user" group type="text" validate error="wrong"
                                    success="right" />
                                <label id="SignLabel" for="email" class="col-form-label">Email:</label>
                                <MDBInput id="MDBInput" icon="envelope" group type="email" validate error="wrong"
                                    success="right" />

                                <label id="SignLabel" for="Number" class="col-form-label">Phone Number:</label>
                                <MDBInput id="MDBInput" icon="exclamation-triangle" group type="text" validate
                                    error="wrong" success="right" />
                                <label id="SignLabel" for="User" class="col-form-label">User Name:</label>
                                <MDBInput id="MDBInput" icon="exclamation-triangle" group type="text" validate
                                    error="wrong" success="right" />
                                <label id="SignLabel" for="Password" class="col-form-label">Password:</label>
                                <MDBInput id="MDBInput" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <Button id="btnSignUp" variant="contained" color="primary">
                                    Register
                               </Button>

                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default SignUp;