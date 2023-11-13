import React,{useState,useEffect} from 'react';
import axios from 'axios';

const User = () => {
    const [post,setPost]= useState([]);
    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then((data)=>{
           console.log(data)
           setPost(data?.data)
       })
    },[])
  return (
    <div>User
        {
            post.map((item, id)=>{
                return (
                    <div key={id}>
                       <p>{item.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default User