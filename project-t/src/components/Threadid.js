import React,{useEffect, useState} from 'react'
import logo1 from "../img/images.png";
import { Link } from 'react-router-dom';


export default function Threadid() {
const [threads, setThreads] = useState([{
    title:'',
    desc:''
}])
useEffect(()=>{
    fetch("/threadid").then(res =>{
        if(res.ok){
            return res.json()
        }
    }).then(jsonRes => setThreads(jsonRes));
})
  return (
    <div className='note'>
        
        {
            threads.map(note=>
                <div className='notes'>
                    <img id="userdiscuss" height="28px" width="30px" src={logo1} alt="" />
                    <span><Link to="/comment">{note.title}</Link></span>
                    <span>{note.desc}</span>
                </div>
                )
        }
    </div>
  )
}
