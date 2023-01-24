import React from 'react';

function DirectionMap({citiesOnMap}) {
    const apiKey = 'AIzaSyDZ_4ASyzLdt1d16-mekZg5W4X24P0zIR4'
    const url = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${citiesOnMap.cityFrom}&destination=${citiesOnMap.cityTo}&mode=driving&language=uk&avoid=tolls|highways`
    return (
        Object.keys(citiesOnMap).length !== 0
            ?
            <div className="row justify-content-center mb-3">
                <iframe
                    title="map"
                    width="600"
                    height="450"
                    style={{border: 0}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={url}
                />
                <br/>
            </div>
            :
            <div></div>
    );
}

export default DirectionMap;