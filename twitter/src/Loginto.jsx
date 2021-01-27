import React from 'react';
import Button from '@material-ui/core/Button';
const Loginto = () => {
     
      return (
        <>
            <div id="Login" className="container-fluid col-md-10 col-10">
               
                <h1  className="header2">Login</h1>
                <form className="form-login">
                    <div className="mb-3">
                        <label for="loginEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" /> 
                    </div>
                    <div className="mb-3">
                        <label for="loginPwd" className="form-label">Password</label>
                        <input type="password" className="form-control" id="loginPwd" />
                    </div>

                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </form>
            </div>

        </>
    );
};
export default Loginto;