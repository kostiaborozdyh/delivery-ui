import React from 'react';
import FormGroup from "./FormGroup";

function FormGroupList({options,loginErr,user,setUser}) {
    return (
        options.map((option,ind)=>
           <FormGroup user={user} setUser={setUser} loginErr={loginErr} key={ind} option={option}/>
        )
    );
}

export default FormGroupList;