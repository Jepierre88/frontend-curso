import { Route, Routes } from "react-router";
import DataFetchingPage from "./page";

export default function DataFetchingRoutes(){
    return (
        <Routes>
            <Route path="/data-fetching" element={<DataFetchingPage/>}/>
        </Routes>
    )
}