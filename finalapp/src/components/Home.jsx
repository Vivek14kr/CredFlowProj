import {useState, useEffect} from "react"
import "./Home.css"
export const Home = ()=>{


 const [polls, setPolls] = useState([])
const [page, setPage] = useState(0)
const [total, setTotal] = useState(0)

const [citytype, setCitytype] = useState("")
const [citypopulation, setNum ] = useState("")

const [citysearch, setCitysearch]  = useState("")

 useEffect(()=>{
     getData()
 }, [page])

 const getData = async ()=>{
     try {
           await fetch(`http://localhost:4500/register?page=${page}`)
      .then((response) => response.json())
      .then((data) => {

        setTotal(data.totalPages)
        setPolls(data.register);
       
      })
     } catch (error) {
        
        console.log(error);
      
     }
     
  
   
 }
 console.log(polls, "d")

 const handleFilter =async ()=>{
     try {
       await fetch(`http://localhost:4500/register/${citytype}`)
         .then((response) => response.json())
         .then((data) => {
           console.log(data,"yhi h")
           setTotal(data.totalPages);
           setPolls(data.register);
         });
     } catch (error) {
       console.log(error);
     }
     
  
 }
  const handleSearch=async ()=>{
     try {
       await fetch(`http://localhost:4500/register/cityname/${citysearch}`)
         .then((response) => response.json())
         .then((data) => {
           console.log(data,"yhi h")
           setTotal(data.totalPages);
           setPolls(data.register);
         });
     } catch (error) {
       console.log(error);
     }
     
  
 }
 const handleNum = async()=>{
      try {
        await fetch(`http://localhost:4500/register/num/${citypopulation}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data, "yhi h");
            setTotal(data.totalPages);
            setPolls(data.register);
          });
      } catch (error) {
        console.log(error);
      }
     
 }

 const goPrev = () =>{
  setPage(Math.max(0, page - 1))
 }
const goNext = ()=>{
 setPage(Math.min(total-1, page + 1))
}
    return (
      <div>
        <div>
          <h1>Filter</h1>
          <label htmlFor="">Sort By </label>
          <label htmlFor="">City Type</label>
          <select
            onChange={(event) => {
              setCitytype(event.target.value);
            }}
            name="citynametype"
            id=""
          >
            <option value="">Type</option>
            <option value="Metro">Metro</option>
            <option value="Town">Town</option>
            <option value="Village">Village</option>
          </select>
          <button
            onClick={() => {
              handleFilter();
            }}
          >
            Apply Changes
          </button>
          <label htmlFor="">Population less than</label>
          <input
            onChange={(event) => {
              setNum(event.target.value);
            }}
            type="number"
            placeholder="Number"
          />
          <button onClick={()=>{
            handleNum()
          }}>Apply Changes</button>
        </div>

        <div>
          <input onChange={(e)=>{
            setCitysearch(e.target.value)
          }} type="text" name="search" />
          <button onClick={handleSearch}> Search</button>
        </div>
        <h2>Election Details</h2>

        {polls.map((item) => (
          <div className="boxes" key={item._id}>
            <label htmlFor="">
              {" "}
              <h2> City: </h2>
              {item.cityname}
            </label>
            <label htmlFor="">
              {" "}
              <h1>Station: </h1> {item.pollingstations}
            </label>
          </div>
        ))}

        <div id="btns">
          <button onClick={goPrev}>Prev</button>
          <p id="page">{page + 1}</p>
          <button onClick={goNext}>Next</button>
        </div>
      </div>
    );
}