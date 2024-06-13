import { Routes, Route } from "react-router-dom";
import { Landing } from "../pages";

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    );
}

export default RoutesConfig;
