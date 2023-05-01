import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import Home from "./components/screens/home/Home.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <Home/>
        </DevSupport>
    </React.StrictMode>,
)
