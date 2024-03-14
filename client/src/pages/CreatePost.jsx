import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ],
};
const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'script', 'indent', 'direction',
    'color', 'background',
    'align',
    'link', 'image', 'video'
  ];

function CreatePost(){
    const[title,setTitle] = useState('');
    const[summary,setSummary] = useState('');
    const[content,setContent] = useState('');
    const[file,setFile] = useState('');
    function createNewPost(e){
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', file[0]);
        e.prevent.Default();
        fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
        })
    }
    return(
        <form onSubmit={createNewPost}>
          <input type="title" placeholder="Title" value={title} onChange={e=> setTitle(e.target.value)}/> 
          <input type="summary" placeholder="Summary" value={summary} onChange={e=>setSummary(e.target.value)} /> 
          <input type="file" onChange={e=> setFile(e.target.files)}/>
          <ReactQuill value={content} onChange={newValue=> setContent(newValue)} modules={modules} formats={formats}/>
          <button style={{marginTop:'5px'}}>Create Post</button>
        </form>
    );

}

export default CreatePost