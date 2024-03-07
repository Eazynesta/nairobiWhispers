import './App.css';
import image from '../src/x.jpg';

function App() {
  return (
   <main>
      <header>
        <a href='' className='logo'>MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className='post'>
        <div className="image">
          <img src={image} alt="" />
        </div>        
        <div className="texts">  
         <h2>EU looking into Apples decision to kill Epic Games developer account</h2>
         <p>Epic had planned to launch its own app store, the Epic Games Stores, on iOS in Europe, as well as relaunching Fortnight on Apple’s platform. And it accused Apple of breaching the bloc’s Digital Markets Act (DMA) by killing its developer account.</p>
        </div>
      </div>

      <div className='post'>
        <div className="image">
          <img src={image} alt="" />
        </div>        
        <div className="texts">  
         <h2>EU looking into Apples decision to kill Epic Games developer account</h2>
         <p>Epic had planned to launch its own app store, the Epic Games Stores, on iOS in Europe, as well as relaunching Fortnight on Apple’s platform. And it accused Apple of breaching the bloc’s Digital Markets Act (DMA) by killing its developer account.</p>
        </div>
      </div>

      <div className='post'>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="texts">  
         <h2>EU looking into Apples decision to kill Epic Games developer account</h2>
         <p>Epic had planned to launch its own app store, the Epic Games Stores, on iOS in Europe, as well as relaunching Fortnight on Apple’s platform. And it accused Apple of breaching the bloc’s Digital Markets Act (DMA) by killing its developer account.</p>
        </div>
      </div>
      
   </main>
  );
}

export default App;
