import { createServer, Model, Response } from "miragejs";

export interface IUser {
    displayName: string;
    email: string;
    password: string;
}


createServer({
    models: {
        user: Model,
    },
    routes() {
        this.namespace = "api";

        this.get("/users", (schema) => schema.all("user"));

        this.post("/register", (schema, request) => {
            const attrs = JSON.parse(request.requestBody);

            schema.create("user", attrs);
            console.log("Regiser", attrs);

            return new Response(201);
        });
    },
    seeds(server) {
        server.create("user", {
            displayName: "admin",
            email: "admin@gmail.com",
            password: "admin2001",
        } as object);
    },
});