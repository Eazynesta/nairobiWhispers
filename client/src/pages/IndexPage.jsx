import React, { useEffect } from 'react'
import Post from '../Post'


function IndexPage(){
  useEffect(()=> {
    fetch('/post').then(response => {
      response.json().then(posts =>{

      });
    });
  },[]);
  return(
    <>
    <Post/>
    <Post/>
    <Post/>
    </>  
  );
}

 export default IndexPage;
