import "./Home.css"


export const Prods = ({products, loading})=>{


  const AddtoCart = (id)=>{


 let prod = products.filter(item => item.id == id)

    fetch("http://localhost:4500/cart", {
      method: "POST",
      body: JSON.stringify(prod),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log("res: ", res)
      })
      .catch((err) => {
        console.log(err)
      }); 
  }
    if (loading){
        return <h2>Loading...</h2>
    }
    return (
      <div id="gridview">
        {products.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" className="imagee" />
            <h2>{item.wine}</h2>
            <p>{item.winery}</p>
            <p>Rating : {item.rating.average}</p>
            <div className="adbtn">
              <button onClick={()=>{
                AddtoCart(item.id)}}>Add to Cart</button>
              <button>Delete from Cart</button>
            </div>
          </div>
        ))}
      </div>
    );
}