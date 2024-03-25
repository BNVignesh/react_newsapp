import React from 'react'
import './news.css'
const Newsitem = ({key,title,desc,url,src}) => {
  return (
    <>
    
<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 " style={{width: 18+'rem',height:'500px'}}>
  <img src={src} style= {{height:"200px",width:18+'rem'}}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href={url} className="btn btn-primary">click</a>
  </div>
</div>
    </>
  )
}

export default Newsitem
