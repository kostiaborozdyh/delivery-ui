import React from 'react';
import Row from "./Row";

function TableRow({options,title,ind}) {
    return (
       <tr key={ind}>
           {options.map((option,id)=>
               <Row key={id} option={option} title={title}/>
           )}
       </tr>
    );
}

export default TableRow;