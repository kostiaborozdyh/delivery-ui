import React from 'react';

function Row({title, option,id}) {
    return (
        title
            ?
            <th key={id} className="bg-light">
                {option.text}
            </th>
            :
            <td key={id} className="bg-light">
                {option.typeText
                    ? option.text
                    : <button className="btn btn-outline-primary" onClick={()=>option.func(option.args)}>{option.text}</button>
                }
            </td>
    );
}

export default Row;