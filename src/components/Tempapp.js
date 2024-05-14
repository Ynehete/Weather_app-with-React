import React, { useEffect, useState } from 'react';
import "./css/style.css";

function Tempapp() {
    const [city, setcity] = useState(null);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=12fb7e7f9043bdcc6eb96159b8fb8967`
            const responce = await fetch(url);
            const resjson = await responce.json();
            //console.log(resjson);
            setcity(resjson.main)
        }
        fetchApi();
    }, [search])

    return (
        <div className='container'>
            <div className='box'>
                <div className='inputData'>
                    <input type='search' placeholder='Enter City Name' className='inputField' onChange={(event) => {
                        setSearch(event.target.value)
                    }}>

                    </input>
                </div>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div>
                            <div className='info'>
                                <h2 className='location'>
                                City : {search}
                                </h2>
                                <h1 className='temp'>
                                    {city.temp}°Cel
                                </h1>
                                <h3 className='min-max'>
                                    Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                                </h3 >
                                <h3 className='humidity'>
                                    Humidity : {city.humidity}%
                                </h3>
                            </div>
                            <div className='wave-one'></div>
                            <div className='wave-two'></div>
                            <div className='wave-three'></div>
                        </div>
                    )
                }

            </div>
        </div>
    );
}
export default Tempapp;