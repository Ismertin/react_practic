import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/home/Home.jsx";
import CarDetail from "./screens/car-detail/CarDetail.jsx";

const Roter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path='/' />

                <Route element={<CarDetail/>} path='/car/:id' />


                <Route path={"*"} element={<div>No found</div>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Roter