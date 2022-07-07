import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { Login } from "../pages/Login";
import { MainPage } from "../pages/MainPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    ); 
};