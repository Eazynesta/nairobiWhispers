import image from '../src/x.jpg';
function Post(){
    return(
        <div className='post'>
        <div className="image">
          <img src={image} alt="" />
        </div>                
        <div className="texts">  
         <h2>EU looking into Apples decision to kill Epic Games developer account</h2>
         <p className="info">
          <a href="" className='author'>Nesta</a>
          <time> 2024-03-07 17:55</time>
         </p>
         <p className="summary">Epic had planned to launch its own app store, the Epic Games Stores, on iOS in Europe, as well as relaunching Fortnight on Apple’s platform. And it accused Apple of breaching the bloc’s Digital Markets Act (DMA) by killing its developer account.</p>
        </div>
      </div>
    );
}

export default Post