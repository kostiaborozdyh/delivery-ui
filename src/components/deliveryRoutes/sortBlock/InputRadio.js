import React from 'react';

function InputRadio({options,className}) {
    return (
        <div className="rounded bg-light p-3 mb-3">
            {options.map(option =>
                <div key={option.value} className="input-group-text mb-1">
                    <label>
                        <input type="radio" name="sort" className={className} value={option.value}/>
                        {option.text}
                    </label><br/>
                </div>
            )}
        </div>
    );
}

export default InputRadio;