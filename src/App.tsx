import React from "react";
import { AppRoutes } from "./routes";

import { HTTP } from "./core/services/http";

HTTP.createClient("api");


function App() {
    return (
        <AppRoutes />
    );
}

export default App;
