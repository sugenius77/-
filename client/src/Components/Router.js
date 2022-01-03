import React from "react";
import { BrowserRouter as Router, Routes, Redirect,Route } from 'react-router-dom';
import Home from "../Routes/Home/index";
import Worldcup from "../Routes/Worldcup/index";

const router = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Worldcup} />
                <Route path="/worldcup" component={Worldcup} />
                <Route path="/worldcup/:id" component={Worldcup} />
                
            </Routes>
        </Router>
    );
};

export default router;