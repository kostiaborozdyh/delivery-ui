import React, {useState} from 'react';
import FormGroupList from "./FormGroupList";
import * as validationUser from "../../utils/validationUser";
import RegistrationService from "../../API/RegistrationService";

function FormRegister() {
    const [loginErr,setLoginErr] = useState({})
    const [user,setUser] = useState({})

    const validate = ()=>{
        if(user.notify===undefined){
            user.notify = false
        }
       let logErr = validationUser.validate(user)
        setLoginErr(logErr)
        if(Object.keys(logErr).length === 0){
            console.log('go to api')
            console.log(user)
            RegistrationService.registerUser(user,setLoginErr)
        }
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{borderRadius: '15px'}}>
                        <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                <FormGroupList user={user} setUser={setUser} loginErr={loginErr}  options={[
                                    {labelText:'Login', inputId:'login', inputType:'text'},
                                    {labelText:'First name', inputId:'firstName', inputType:'text'},
                                    {labelText:'Last name', inputId:'lastName', inputType:'text'},
                                    {labelText:'Password', inputId:'password', inputType:'password'},
                                    {labelText:'Confirm Password', inputId:'confirmPassword', inputType:'password'},
                                    {labelText:'Email', inputId:'email', inputType:'email'},
                                    {labelText:'Phone number', inputId:'phoneNumber', inputType:'text'},
                                    {labelText:'Receive emails', inputId:'notify', inputType:'checkBox'}
                                ]}/>
                            <div className="text-center mt-2 mb-2">
                                <button type="submit" className="btn btn-primary" onClick={validate}>Registration</button>
                            </div>
                            <div className="text-center">
                                <span>already registered  </span>
                                <a href="/login">sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormRegister;