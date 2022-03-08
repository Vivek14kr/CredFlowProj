import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css"
export const ProductCart=()=>{

 let [prod, SetProd] = useState([])
 let [saveData, setSaveData] = useState([])

    useEffect(()=>{
        getData()
    }, [])
    const getData = ()=>{
fetch("http://localhost:4500/cart")
  .then((d) => d.json())
  .then((res) => {
   console.log(res, " res")
   SetProd(res.register)
  })
  .catch((err) => {
    console.log(err);
  }); 
  fetch("http://localhost:4500/save")
    .then((d) => d.json())
    .then((res) => {
      console.log(res, " res");
      setSaveData(res.register);
    })
    .catch((err) => {
      console.log(err);
    }); 
    }
const handleSave = (id)=>{

    let prodd = prod.filter((item) => item._id == id);

    fetch("http://localhost:4500/save", {
      method: "POST",
      body: JSON.stringify(prodd),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log("res: ", res);
        handleDelete(id)
          })
      .catch((err) => {
        console.log(err);
      });
  
}
  const handleDelete = (id) => {
    fetch(`http://localhost:4500/cart/${id}`, {
      method: "DELETE",
    })
      .then((r) => {
        return r.json();
      })
      .then((res) => {
        getData();
      });
  };
    const handleDeletes = (id) => {
      fetch(`http://localhost:4500/save/${id}`, {
        method: "DELETE",
      })
        .then((r) => {
          return r.json();
        })
        .then((res) => {
          getData();
        });
    };
    console.log(prod)
    const handlemoveCart = (id) =>{
        
  
 let prodd = saveData.filter((item) => item._id== id);

console.log(prodd, "dfdfdfdfdfd")
  fetch("http://localhost:4500/cart", {
   method: "POST",
   body: JSON.stringify(prodd),
   headers: {
     "Content-Type": "application/json",
   },
 })
   .then((d) => d.json())
   .then((res) => {
     console.log("res: ", res);
     handleDeletes(id)
     getData()
   })
   .catch((err) => {
     console.log(err);
   }); 
    }
     return (
       <div>
         <h1>Cart</h1>
         <div id="gridview">
           {prod.map((item) => (
             <div key={item._id} className="order">
               <div>
                 <div>
                   <img src={item.image} alt="" className="imagee" />
                 </div>
                 <div>
                   <p>Name: {item.wine}</p>
                   <p>Location: {item.location}</p>
                   <p>Rating: {item.rating.average}</p>
                   <button
                     onClick={() => {
                       handleDelete(item._id);
                     }}
                   >
                     Delete
                   </button>
                   <button
                     onClick={() => {
                       handleSave(item._id);
                     }}
                   >
                     Save to buy later
                   </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
         <div id="checkout">
           <Link to="/details">
             <button>Checkout</button>
           </Link>
         </div>
         <h1>Save to buy Later</h1>
         <div id="gridvieww">
           {saveData.map((items) => (
             <div key={items._id} className="order">
               <div>
                 <div>
                   <img src={items.image} alt="" className="imagee" />
                 </div>
                 <div>
                   <p>Name: {items.wine}</p>
                   <p>Location: {items.location}</p>
                   <p>Rating: {items.rating.average}</p>
                   <button
                     onClick={() => {
                       handleDeletes(items._id);
                     }}
                   >
                     Delete
                   </button>
                   <button
                     onClick={() => {
                       handlemoveCart(items._id);
                     }}
                   >
                     Move to Cart
                   </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     );
}