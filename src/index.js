import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Footer from "./footer";
import Main from "./main";
import Header from "./header";
import Aside from "./aside";
const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header></Header>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8"> 
                <Main subtittle="Carrusle"></Main>
            </div>
            <div className="col-md-4">
                <Aside></Aside>
            </div>
        </div>

        <Footer></Footer>
    </StrictMode>
);