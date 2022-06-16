import './App.css';
import Home from './Pages/Home'

// importing some packages so that we can use graphql
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from "@apollo/client"; 


// for using apollo provider, we have to wrap everything up in the apollo client
function App() {
  const client  = new ApolloClient({
    // info passed to be able to create the client
    cache: new InMemoryCache(), // as this is a small application
    // uri is the link of the api that we are using which in this case will be the weather api url
    uri:"https://graphql-weather-api.herokuapp.com/" // this where we will be fetching the data from 
  });

  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
    
  );
}

export default App;
