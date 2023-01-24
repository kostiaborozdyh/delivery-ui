import React from 'react';
import {sortDirectionsList} from "../../../utils/sorting";
import InputRadio from "./InputRadio";
import MyButton from "../MyButton";

function SortingBlock({directions, setDirections}) {
    const sortDirectionTable = () => {
        const sortList = document.querySelectorAll('.sortDirectionTable')
        const radioBox = Array.from(sortList)
            .find(edt => edt.checked === true)
        if (radioBox !== undefined) {
            const sortedDirectionsList = sortDirectionsList(radioBox.value, directions)
            setDirections(sortedDirectionsList)
        }
    }
    return (
        <div className="row justify-content-center">
            {directions.length !== 0 &&
                <div className="col-md-auto">
                    <h5 className="text-center mb-0 mt-3">sorting</h5><br/>
                    <InputRadio className='sortDirectionTable' options={[
                        {value: 'MinPrice', text: 'byPrice↑'},
                        {value: 'MaxPrice', text: 'byPrice↓'},
                        {value: 'MinCityFrom', text: 'byCityOfDeparture(A-Z)'},
                        {value: 'MaxCityFrom', text: 'byCityOfDeparture(Z-A)'},
                        {value: 'MinCityTo', text: 'byCityOfArrival(A-Z)'},
                        {value: 'MaxCityTo', text: 'byCityOfArrival(Z-A)'},
                    ]}/>
                    <MyButton text='Sort' functionOnClick={sortDirectionTable}/>
                </div>
            }
        </div>
    )
}

export default SortingBlock;