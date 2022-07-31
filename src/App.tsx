import React from "react";
import { AppRoutes } from "./routes";

import { HTTP } from "./core/services/http";

HTTP.createClient("http://localhost:5165/api/");


function App() {
    return (
        <AppRoutes />
    );
}

export default App;
