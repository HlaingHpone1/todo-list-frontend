import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./components/router/Router";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div className="h-screen flex items-center">
                    {/* <Link to="/">Home</Link>
                <Link to="/category">Category</Link>
                <Link to="/task">Task</Link> */}

                    <div className="w-[500px] mx-auto">
                        <Router />
                    </div>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
