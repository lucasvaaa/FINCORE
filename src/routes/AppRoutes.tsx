import { Route, Routes } from "react-router";

import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";


export function AppRoutes ( ) {
    return (
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            
        </Routes>
    )
}