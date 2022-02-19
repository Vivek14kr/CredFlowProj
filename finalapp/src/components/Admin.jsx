import React from "react"
import { useState } from "react";

export const Admin = ()=>{
    
   const [form, setForm] = useState({})
   
function handleChange({name, value}){
    setForm({
        ...form,
        [name]:value
    })

}
console.log(form)

const handleSubmit = (e)=>{
    e.preventDefault()
      fetch("http://localhost:4500/register", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((d) => d.json())
        .then((res) => {
          console.log(res, "dfdfd");
        })
        .catch((err) => {
          console.log(err);
        });
}
    return (
      <div>
        <h1>City and Polling Station Form</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">City Name:</label>
            <input
              onChange={(event) => {
                handleChange(event.target);
              }}
              type="text"
              name="cityname"
              placeholder="City name"
            />
            <br />
            <label htmlFor="">City Type</label>
            <select
              onChange={(event) => {
                handleChange(event.target);
              }}
              name="citytype"
              id=""
            >
              <option value="">Type</option>
              <option value="Metro">Metro</option>
              <option value="Town">Town</option>
              <option value="Village">Village</option>
            </select>
            <br />

            <label htmlFor="">Polling Stations</label>
            <input
              type="number"
              onChange={(event) => {
                handleChange(event.target);
              }}
              placeholder="Stations"
              name="pollingstations"
            />
            <br />
            <label htmlFor="">Population</label>
            <input
              onChange={(event) => {
                handleChange(event.target);
              }}
              type="number"
              name="citypopulation"
              id=""
              placeholder="Population"
            />

            <br />

            <h2>Polling Station Info</h2>
            <br />
            <label htmlFor="">Polling Station:</label>
            <input
              onChange={(event) => {
                handleChange(event.target);
              }}
              type="text"
              name="stationname"
              id=""
              placeholder="Station name"
            />
            <br />
            <label htmlFor="">Address</label>
            <input
              onChange={(event) => {
                handleChange(event.target);
              }}
              type="text"
              name="address"
              id=""
              placeholder="Station Address"
            />
            <br />
            <label htmlFor="">Pincode</label>
            <input
              onChange={(event) => {
                handleChange(event.target);
              }}
              type="number"
              name="pincode"
              id=""
              placeholder="Pin"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
}