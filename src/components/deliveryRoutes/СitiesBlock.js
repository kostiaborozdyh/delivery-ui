import React, {useState} from 'react';

function CitiesBlock({editClassName}) {
    const [editArray, setEditArray] = useState([{id:Date.now(), value:''}])

    const addCity = () => {
        if(editArray.length<5){
            setEditArray([...editArray,{id:Date.now(), value:''}])
        }
    }

    const deleteCity = (index) => {
        if(editArray.length>1){
            const newArr = editArray.filter(edt=>edt.id!==index)
            setEditArray([...newArr])
        }
    }

    function setEditValue(value, id) {
        const index = editArray.findIndex((edt)=>edt.id===id)
        editArray[index] = {id:id,value:value}
        setEditArray([...editArray])
    }
    return (
        <div className="col-6 text-center">
            {
                editArray.map((edt) =>
                    <div key={edt.id}>
                        <label className="mb-1">
                            <input
                                type="text"
                                className={editClassName}
                                value={edt.value}
                                onChange={event => setEditValue(event.target.value,edt.id)}
                            />
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={()=>deleteCity(edt.id)}
                            />
                        </label>
                        <br/>
                    </div>
                )
            }
            {
                (editArray.length < 5) &&
                <div className="mt-1">
                    <div className="col-md-auto">
                        <button className="btn btn-success" id="textCityFrom"
                                onClick={addCity}>addCity &raquo;</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default CitiesBlock;