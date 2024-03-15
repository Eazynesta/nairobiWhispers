import image from '../src/x.jpg';
import {formatISO9075} from "date-fns";
function Post({title,summary,cover,content,createdAt}){
    return(
        <div className='post'>
        <div className="image">
          <img src={image} alt="" />
        </div>                
        <div className="texts">  
         <h2>{title}</h2>
         <p className="info">
          <a href="" className='author'>Nesta</a>
          <time>{formatISO9075(new Date (createdAt))}</time>
         </p>
         <p className="summary">{summary}</p>
        </div>
      </div>
    );
}

export default Post