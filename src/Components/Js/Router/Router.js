import { Route,Routes,useLocation } from "react-router-dom";
import {routes} from "./RouterConfig";
export const AppRouter =()=>{
    const location = useLocation();
    return(
        <Routes location={location} key={location.pathname}>
            {routes.map((route,index)=>(
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}