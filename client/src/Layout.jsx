import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

function Layout(){
    return(
        <main>
            <Header/>
            <Outlet></Outlet>
        </main>
    );
}

export default Layout