import React, { useState } from 'react'

import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from '../graphql/Queries';

function Home() {
    // to be able to pass the variable we want to the query
    const [citySearched, setCitySearched] = useState('')
    // we need to pass function here which is called when we want to make that query
    // for lazy query which is not needed for the userQuery 
    // happens automatically in that case 
    // loading is a boolean which can be check if data is loading or not
    const [ getWeather, {data, error} ] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: {name: citySearched},
    });

    if (error) return <h1>Error found</h1>
    if (data){
        console.log(data);
    }

  return (
    <div className="home">
        <h1> Search for Weather </h1>
        <input type="text" 
        placeholder="City name..." 
        onChange={(event) => {
            setCitySearched(event.target.value);
        }}/>
        {/* on being clicked the function getWeather is called */}
        <button onClick={() => getWeather()} >Search</button>
        <div className='weather'>
                {/* so that it loads data only when it is searched i.e. when we get some data loaded from the api */}
                {data && (
                    <>
                        <h1> City: {data.getCityByName.name} </h1>
                        <h1> Temperature: {data.getCityByName.weather.temperature.actual} </h1>
                        <h1> Description: {data.getCityByName.weather.summary.description} </h1>
                        <h1> Wind: {data.getCityByName.weather.wind.speed} </h1>
                    </>
                )}

        </div>
    </div>
  );
}

export default Home
