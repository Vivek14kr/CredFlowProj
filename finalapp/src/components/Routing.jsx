import React from "react"
import {Route, Routes} from "react-router-dom"
import {Home} from "./Home"
import {Admin} from "./Admin"
import { StationDetails } from "./StationDetails"
export const Routing = ()=>{
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:cityname" element={<StationDetails/>}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </div>
    );
}