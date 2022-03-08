import React from "react"
import {Route, Routes} from "react-router-dom"
import { Detail } from "./Details";
import {Home} from "./Home"
import { ProductCart} from "./ProductDetails";

export const Routing = ()=>{
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details" element={<Detail />}></Route>

          <Route path="/cart" element={<ProductCart />}></Route>
        </Routes>
      </div>
    );
}