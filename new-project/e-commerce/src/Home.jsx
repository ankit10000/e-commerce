import React, { useState, useEffect } from 'react';
// import Data from '../database.json';
const home = () => {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    fetch("../database.json", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };
  
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className='card-list'>
{posts.map((post) => (
        <div key={post.id} className='cards'>
            <div className="card">
              <img src={post.images_list} alt="Denim Jeans" height={"200px"} width={"300px"}/>
              <h3>{post.brand}</h3>
              <p className="price">{post.price}</p>
              <div className='post-title'>{post.title}</div>
              <button>Add to Cart</button>
            </div>
        </div>
      ))}
  </div>
  )
}

export default home