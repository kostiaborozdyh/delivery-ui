import React from 'react';

function FormGroup({option, ind, loginErr, user, setUser}) {
    const setUserValue = (inputId, inputValue) => {
        user[inputId] = inputValue
        setUser(user)
    }

    return (
        option.inputType !== 'checkBox'
            ?
            <div key={ind} className="form-group mb-3">
                <label htmlFor={option.inputId}>{option.labelText}</label>
                <input type={option.inputType}
                       className="form-control"
                       id={option.inputId}
                       placeholder={'Enter ' + option.labelText}
                       onChange={event => setUserValue(event.target.id, event.target.value)}
                />
                <span style={{color: 'red'}}>{loginErr[option.inputId]}</span>
            </div>
            :
            <div key={ind} className="form-group form-check">
                <input type="checkbox"
                       className="form-check-input"
                       id={option.inputId}
                       onChange={event => setUserValue(event.target.id, event.target.checked)}
                />
                <label className="form-check-label" htmlFor={option.inputId}>{option.labelText}</label>
            </div>
    );
}

export default FormGroup;