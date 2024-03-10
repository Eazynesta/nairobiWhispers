import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <main>
            <Header/>
            <Outlet></Outlet>
        </main>
    );
}

export default Layout