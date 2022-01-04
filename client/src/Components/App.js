import React, {useState, useEffect} from 'react'
import Router from "./Router";
import { Routes, Redirect,Route } from 'react-router-dom';
import Home from "../Routes/Home/index.js"
function App() {
  return (
    <>
      <Router/>
    </>
  );
}

export default App;