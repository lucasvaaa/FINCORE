import { Route, Routes } from "react-router";

import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound/NotFound";



export function AppRoutes ( ) {
    return (
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<NotFound/>}/>
            
        </Routes>
    )
}