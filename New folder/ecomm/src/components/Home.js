import React from 'react'
import { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top"
import Imageslider from './Imageslider';
import styled from "styled-components"
import Data from "../database.json"

export default function Home() {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    setPosts(Data)
  };
  useEffect(() => {
    getData();
  }, []);
  const WRAPPER = styled.section`
  *{
  padding: 0%;
  margin: 0%;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
    word-wrap: break-word;
    padding: 15px;
  }
  
  .price {
    color: grey;
    font-size: 22px;
  }
  
  .card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    margin-top: 10px;
    border-radius: 5px;
  }
  
  .card button:hover {
    opacity: 0.7;
  }
  .card-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4.8rem;
    margin-top: 70px;
  }
  .cards{
    
  }
  .post-title{
    /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  height: 100px;
  }
  `;
  return (
    <WRAPPER>
    <Imageslider />
      <div className='card-list'>
        {posts.map((post) => (
          <div key={post.id} className='cards'>
            <div className="card">
              <img src={post.images_list} alt="Denim Jeans" height={"200px"} width={"300px"} />
              <h3>{post.brand}</h3>
              <p className="price">{post.price}</p>
              <div className='post-title'>{post.title}</div>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTop />
    </WRAPPER>
  )
}
