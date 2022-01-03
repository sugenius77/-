import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from "../Routes/Home";
import Worldcup from "../Routes/Worldcup";

const router = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/worldcup" component={Worldcup} />
                <Route path="/worldcup/:id" component={Worldcup} />
                <Redirect from="*" to="/" />
            </Routes>
        </Router>
    );
};

export default router;