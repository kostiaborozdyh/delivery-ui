import React from 'react';
import TableRow from "./TableRow";
import {getSubArrayByCurrentPageAndLimit} from "../../../utils/pages";

function TableBlock({directions, page, limit,setCitiesOnMap}) {
    const directionOnPage = getSubArrayByCurrentPageAndLimit(directions, page, limit)
    return (
        directions.length !== 0
            ?
            <div className="row tableParent">
                <table className="table table-borderless">
                    <tbody>
                    <TableRow title={true} options={[
                        {typeText: true, text: 'cityOfDeparture'},
                        {typeText: true, text: 'cityOfReceipt'},
                        {typeText: true, text: 'deliveryDistance'},
                        {typeText: true, text: 'averagePrice'},
                        {typeText: true, text: 'map'},
                    ]}/>
                    {directionOnPage.map((direction,id) =>
                        <TableRow key={id} title={false} options={[
                            {typeText: true, text: direction.cityFrom},
                            {typeText: true, text: direction.cityTo},
                            {typeText: true, text: direction.distance},
                            {typeText: true, text: direction.price},
                            {typeText: false, text: 'map', func: setCitiesOnMap, args: {cityFrom:direction.cityFrom, cityTo:direction.cityTo}}
                        ]}/>
                    )}
                    </tbody>
                </table>
            </div>
            :
            <div></div>
    );
}

export default TableBlock;