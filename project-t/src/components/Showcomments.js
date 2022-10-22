import React,{useEffect, useState} from 'react'


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
                <div className='comms'>
                    <span id='comment'>{note.comment}</span>
                    <hr />
                </div>
                )
        }
    </div>
  )
}
