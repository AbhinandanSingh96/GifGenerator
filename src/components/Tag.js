import React from 'react'
import { useState } from 'react';
// import axios from 'axios';
import { useEffect } from 'react';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
 const [tag, setTag] = useState("");
  const [gif, setGif] = useState("");

  async function fetchData(){ 
   const url = await fetch(`https://api.giphy.com/v1/gifs/random/?api_key=JMskVvTj5EJqvCaX2j39ctg8M2XbeXFD&tag=${tag}`);
  //  const url = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
  //  const url = await fetch(`https://api.giphy.com/v1/gifs/random/api_key="JMskVvTj5EJqvCaX2j39ctg8M2XbeXFD"`);
  //  const output = await axios.get(url);
  //  console.log(output);
  const {data} = await url.json();
  const gifurl=data.images.downsized_medium.url;
  setGif(gifurl);

  }

  useEffect( () => {
    fetchData();
  },[] )
  

  function clickHandler(){
    fetchData();
  }

  

  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
     
      <h1 className='text-2xl underline font-bold'> Random {tag} Gif</h1>
       
        <img src={gif}/> {/* <img alt='GIF' href="https://www.google./search?q=img&sca_esv=581125403&tbm=isch&sxsrf=AM9HkKkukYxZbf3n3VvCPy2vY_u_E_DNAQ:1699603148304&source=lnms&sa=X&ved=2ahUKEwjJo6eP-7iCAxXQSWwGHV4ZCpAQ_AUoAXoECAIQAw&biw=1536&bih=750&dpr=1.25#imgrc=HAktMeDXfp2ucM"/> */}
        
        <input className=' w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event)=> setTag(event.target.value)}
        value={tag} />
        
        <button onClick={clickHandler} className=' w-10/12 bg-yellow text-lg py-2 rounded-lg bg-orange-400'>Generate</button>
    </div>
  )
}

export default Tag;
