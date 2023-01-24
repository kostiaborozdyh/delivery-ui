import React from 'react';

function MyButton({functionOnClick,text}) {
    return (
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-md-auto">
                <button type="submit" className="btn btn-success" onClick={functionOnClick}>
                    {text}
                </button>
            </div>
        </div>
    );
}

export default MyButton;