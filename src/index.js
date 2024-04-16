import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Message message="Hola 1"></Message>
        <Message message="Hola 2"></Message>
        <Message></Message>
        <Message message="ayoh 1"></Message>
    </StrictMode>
)