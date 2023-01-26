import React, {useState} from 'react';
import FormGroupList from "../components/registrationForm/FormGroupList";
import LoginService from "../API/LoginService";

function Login(props) {
    const [loginErr,setLoginErr] = useState({})
    const [user,setUser] = useState({})

    const login = () =>{
        LoginService.loginUser(user,setLoginErr)
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{borderRadius: '15px'}}>
                        <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5">Sign in</h2>
                            <FormGroupList user={user} setUser={setUser} loginErr={loginErr}  options={[
                                {labelText:'Login', inputId:'username', inputType:'text'},
                                {labelText:'Password', inputId:'password', inputType:'password'},
                            ]}/>
                            <div className="text-center mt-2 mb-2">
                                <button type="submit" className="btn btn-primary" onClick={login}>Sign in</button>
                            </div>
                            <div className="text-center">
                                <span>Not registered?  </span>
                                <a href="/registration">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;