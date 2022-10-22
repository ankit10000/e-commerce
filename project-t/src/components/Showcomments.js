import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


export default function Showcomments() {
const [comments, setComments] = useState([{
    comment:''
}])
useEffect(()=>{
    fetch("/commentid").then(res =>{
        if(res.ok){
            return res.json()
        }
    }).then(jsonRes => setComments(jsonRes));
})
  return (
    <div className='note'>
        
        {
            comments.map(note=>
                <div className='notes'>
                    <span><Link to="/comment">{note.comment}</Link></span>
                </div>
                )
        }
    </div>
  )
}
