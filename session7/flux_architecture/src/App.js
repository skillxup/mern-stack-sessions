import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Home from './pages/Home';
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";

function App() {
    return(
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact="true" path="/posts" element={<Posts />} />
                <Route element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;