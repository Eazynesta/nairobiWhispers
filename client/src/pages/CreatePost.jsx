import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function CreatePost(){
    const[title,setTitle] = useState('');
    const[summary,setSummary] = useState('');
    return(
        <form>
          <input type="title" placeholder="Title" /> 
          <input type="summary" placeholder="Summary" /> 
          <input type="file"/>
          <ReactQuill/>
          <button style={{marginTop:'5px'}}>Create Post</button>
        </form>
    );

}

export default CreatePost