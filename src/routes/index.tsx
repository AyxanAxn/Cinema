import React from "react";
import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import { Login } from "../pages/Login";
import { MainPage } from "../pages/MainPage";
import { Register } from "../pages/Register";

export const AppRoutes = () => {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <p>alalal</p> */}
            </Routes>
        // </BrowserRouter>
    );
};