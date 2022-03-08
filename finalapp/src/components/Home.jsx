import React, {useState, useEffect}from "react"
import {Link} from "react-router-dom"
import { Prods } from "./Prods";
import "./Home.css"

export const Home = ()=>{


  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [curr, setCurr] = useState(1);
const [pageNumber, setpagenum] = useState(1)
  const [prodperPage, setPage] = useState(12)

  useEffect(() => {
  
    fetchPost()
  }, []);

  const SortHtoLR = async ()=>{
  const baseURL = "https://api.sampleapis.com/wines/reds";
  await fetch(baseURL)
    .then((resp) => resp.json())
    .then((data) => setProducts(data.sort((a, b)=>{
      return b.rating.average - a.rating.average
    })));
  setLoading(false);
  }
  const SortLtoHR = async ()=>{
     const baseURL = "https://api.sampleapis.com/wines/reds";
     await fetch(baseURL)
       .then((resp) => resp.json())
       .then((data) =>
         setProducts(
           data.sort((a, b) => {
             return a.rating.average - b.rating.average;
           })
         )
       );
     setLoading(false);
  }

  
  
  const fetchPost = async () => {
      const baseURL = "https://api.sampleapis.com/wines/reds";
      await fetch(baseURL)
        .then((resp) => resp.json())
        .then((data) => setProducts(data));
      setLoading(false);
    };

  const indexOfLastPost = curr * prodperPage;
  const indexOffirst = indexOfLastPost - prodperPage
  const currprod = products.slice(indexOffirst, indexOfLastPost)
 console.log(products)

const handlePrev = ()=>{
  if (pageNumber == 1) return
  setpagenum(pageNumber - 1)
  paginate(pageNumber)
 }
 const handleNext = () => {

   setpagenum(pageNumber + 1);
    paginate(pageNumber);
 };
 const paginate = (pageNumber) => setCurr(pageNumber);
 let [search, setSearch] = useState("")

 const handleSearch = async ()=>{
    const baseURL = "https://api.sampleapis.com/wines/reds";
    await fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) =>
        setProducts(
          data.filter(item => item.wine == search)
        )
      );
    setLoading(false);
 }
  return (
    <div>
      <div>
        <div>
          <input onChange={(e)=>{
            setSearch(e.target.value)
          }} type="text" placeholder="Search"/>
        <button onClick={handleSearch}>Search</button>
        </div>
        <Link to="/cart">
          <button>Go to Cart</button>
        </Link>
        <button onClick={SortHtoLR}>Sort: Ratings (High To Low)</button>
        <button onClick={SortLtoHR}>Sort: Ratings ( Low To HIGH)</button>
       </div>
      <div>
        <Prods products={currprod} loading={loading} />
      </div>

      <div id="btns">
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
}