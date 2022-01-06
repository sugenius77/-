import React from "react";
import { Routes, Redirect, Route } from 'react-router-dom';
import Home from "../Routes/Home";
import Worldcup from "../Routes/Worldcup";
import WorldcupPresenter2 from "../Routes/Worldcup/WorldcupPresenter2";
import Random from "../Routes/Random";
const router = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/worldcup" element={<Worldcup/>} />
            <Route path="/worldcup/rank" element={<WorldcupPresenter2/>} />
            <Route path="/random" element={<Random/>} />
            
        </Routes>
        </>
    );
};

export default router;