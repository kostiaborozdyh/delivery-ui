import React, {useState} from 'react';
import {getCitiesByClassName} from "../utils/cities";
import DirectionsInfoService from "../API/DirectionsInfoService";
import CitiesBlock from "../components/deliveryRoutes/СitiesBlock";
import MyButton from "../components/deliveryRoutes/MyButton";
import SortingBlock from "../components/deliveryRoutes/sortBlock/SortingBlock";
import TableBlock from "../components/deliveryRoutes/tableBlock/TableBlock";
import Pagination from "../components/deliveryRoutes/Pagination";
import DirectionMap from "../components/deliveryRoutes/DirectionMap";

function Directions(props) {
    const [directions, setDirections] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const limitOnPage = 5
    const [citiesOnMap,setCitiesOnMap] = useState({})
    const  calculate = () => {
        const cityFrom = getCitiesByClassName('cityFrom')
        const cityTo = getCitiesByClassName('cityTo')
        DirectionsInfoService.getDirections(cityFrom, cityTo,setDirections,setTotalPages,limitOnPage)
    }
    return (
        <div className="container">
            <div className="text-center">
                <h1>Delivery cargo</h1>
                <div className="row text-center mt-5">
                    <CitiesBlock editClassName="cityFrom"/>
                    <CitiesBlock editClassName="cityTo"/>
                    <MyButton functionOnClick={calculate} text='Send'/>
                    <SortingBlock directions={directions} setDirections={setDirections}/>
                    <TableBlock directions={directions} page={page} limit={limitOnPage} setCitiesOnMap={setCitiesOnMap}/>
                    <Pagination setPage={setPage} page={page} totalPages={totalPages}/>
                    <DirectionMap citiesOnMap={citiesOnMap}/>
                </div>
            </div>
        </div>
    );
}

export default Directions;