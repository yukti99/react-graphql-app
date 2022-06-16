import React from 'react'

import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from '../graphql/Queries';

function Home() {
    // we need to pass function here which is called when we want to make that query
    // for lazy query which is not needed for the userQuery 
    // happens automatically in that case 
    // loading is a boolean which can be check if data is loading or not
    const [ getWeather, {loading, data, error} ] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: {name: "Vancouver"},
    });

    if (error) return <h1>Error found</h1>
    if (data){
        console.log(data);
    }

  return (
    <div className="home">
        <h1> Search for Weather </h1>
        <input type="text" placeholder="City name..."/>
        {/* on being clicked the function getWeather is called */}
        <button onClick={() => getWeather()} >Search</button>
    </div>
  );
}

export default Home
