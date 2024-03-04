import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./components/router/Router";

function App() {
    return (
        <BrowserRouter>
            <div className="">
                {/* <Link to="/">Home</Link>
                <Link to="/category">Category</Link>
                <Link to="/task">Task</Link> */}

                <div className="max-w-500px mx-auto">
                    <Router />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
