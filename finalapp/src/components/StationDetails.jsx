import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export const StationDetails = ()=>{
     const [polls, setPolls] = useState([]);
     let count = 1
        const { cityname } = useParams();
     useEffect(() => {
       citySearch();
     }, []);





     const citySearch = async () => {
       try {
         await fetch(`http://localhost:4500/register/city/${cityname}`)
           .then((response) => response.json())
           .then((data) => {
             console.log(data)
             setPolls(data.register);
           });
       } catch (error) {
         console.log(error);
       }
     };
     console.log("polls:", polls)

    return (
      <div>
        <h2>Hello, Welcome</h2>
        <h1>Polling Info</h1>
        {polls.map((item) => (
          <div>
           <p>{count++}</p>
            <p>City: {item.cityname}</p>

            <p>Station Name: {item.stationname}</p>
            <hr />
          </div>
        ))}
      </div>
    );
}