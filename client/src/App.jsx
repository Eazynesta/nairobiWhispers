import './App.css';
import image from '../src/x.jpg';
import Post from "./Post";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Layout from './Layout';
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import { UserContextProvider } from './UserContext.jsx';
function App() {
  return (
    <>
    <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<IndexPage/>} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Route>        
        </Routes>
    </UserContextProvider>

    </>


  );
}

export default App;
