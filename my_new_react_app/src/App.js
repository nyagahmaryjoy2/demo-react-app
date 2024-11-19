import {useEffect} from 'react';
//e1e4bb97 API key
/*how to call this api to get all th data about the movies */
//create a standard variable
const API_URL ='http://www.omdbapi.com?apikey=e1e4bb97';

/*creation of the app itself*/
const App = () =>{

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);//this will call the api
        const data = await response.json();

        //iside the data object we should have the data of the movies
        console.log(data.Search);
    }

    useEffect(() =>{
        searchMovies('Spiderman');

    },[]);

    return (
        /* what to display in the website*/
        <h1>MY First app in react</h1>
      
        
    );
   
}

/*this is the usse of hooks
export default function MyApp() {
    return (
      <div>
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
      </div>
    );
  }

  
function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }
  */

/*you have to export every single component so as to call it from somewhere else */
 export default App;

