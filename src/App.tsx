import React from "react";
import { AppRoutes } from "./routes";

import { HTTP } from "./core/services/http";
import Nav from './nav';

HTTP.createClient("api");


function App() {
    return (
        <div>
            <Nav />
            <AppRoutes />
        </div>
    );
}

export default App;
