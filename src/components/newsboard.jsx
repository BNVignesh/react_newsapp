import React, { useEffect, useState } from 'react'
import './news.css'
import Newsitem from './newsitem';
const Newsboard = () => {
  const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=131b3ca76f424ced9a99b5ed4efe06b5'
   let [article,setArticle]=useState([]);
   useEffect(()=>{
    fetch(url).then(response=>response.json()).then(data=>{setArticle(data.articles); });
    console.log(article);
   },[])
     return (
    <>
    <h2>Latest <span className="badge bg-secondary">News</span></h2>
    <div className="arti">
      {article.map((data,index)=>{return <Newsitem key={index} title={data.title} desc={data.description} url={data.url} src={data.urlToImage}/>})}
    </div>
    
    
    </>
  )
}

export default Newsboard
