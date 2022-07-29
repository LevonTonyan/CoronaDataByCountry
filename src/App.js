
import './App.css';
import {useState, useEffect} from 'react';

function App() {


let [title, setState] = useState("");
let [data, setData] = useState();

useEffect(() => {
  let handle = setTimeout(() => {
    if(title.length === 2){
      fetch(`https://corona-api.com/countries/${title}`)
      .then(stream => stream.json())
      .then(results => setData(results.data));
    }
  }, 2000);
  
  return () => {
    clearTimeout(handle);
  }

}, [title]);

let counrty = "";
let number = "";
if(data !== undefined){
  number = data.latest_data.confirmed;
  counrty = data.name
  console.log(data);
}


  return (
    <div className="App">
      <h1>{counrty}</h1>
      <h1>{`Confirmed covid cases :${number}`}</h1>
      
      <input type="text" value = {title} onChange={(e) => {
        setState(e.target.value)
      }}
      
      />
      
    </div>
    
  );

}

export default App;
