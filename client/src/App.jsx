import './App.css';
import image from '../src/x.jpg';
import Post from "./Post";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
        <Routes>
          <Route index element={
               <Post/>
          } />

          <Route path={'/login'} element={
            
              <div>login</div>
          }/>
        </Routes>
    

    </>

  );
}

export default App;
