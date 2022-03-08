import { useState } from "react"

export const Detail = ()=>{
  let [data, setData] = useState({})
  let [status, setStatus] = useState(false)
 const handleChange = ({name, value})=>{
   setData({
       ...data,
       [name]:value
   })
 }
 const handleSubmit = (e)=>{
     e.preventDefault()
     console.log(data)
     if (data.name == undefined || data.phone == undefined || data.address == undefined || data.mail == undefined){
       return alert("Write Correct Details")
     }
 if (data.name.length < 1)return alert("Write Correct details")
let c = false

for (let i = 0; i < data.mail.length; i++){
  let dd = data.mail[i]
  if (dd == "@"){
    c = true
  }
}
if (c == false) return alert("Write Correct Details")
let phoneno = data.phone.toString()
if (phoneno.length != 10) return alert("Write Correct Details");


    fetch("http://localhost:4500/customer", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log("res: ", res);
        setStatus(true)
      })
      .catch((err) => {
        console.log(err);
      });
  
 }

  return status ? <div>Thank you for shopping</div>: ( 
    <div>
      <h1>BASIC INFORMATION</h1>
      <form action="">
        <input
          onChange={(e) => {
            handleChange(e.target);
          }}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          onChange={(e) => {
            handleChange(e.target);
          }}
          type="text"
          name="mail"
          placeholder="Email"
          id=""
        />
        <input
          onChange={(e) => {
            handleChange(e.target);
          }}
          type="number"
          placeholder="Phone Number"
          name="phone"
          id=""
        />
        <input
          onChange={(e) => {
            handleChange(e.target);
          }}
          type="text"
          placeholder="address"
          name="address"
        />
        <input onClick={(e)=>{
            handleSubmit(e)
        }} type="submit" value="Submit" />
      </form>
    </div>
  );
}