import React, { useEffect, useState } from 'react';

function UserList() {
    let [data,setData]=useState();

 const result=()=>{fetch('https://jsonplaceholder.typicode.com/users')
  .then((Response)=>Response.json())
  .then((json)=>
  {console.log(json);
    setData(json);
    
})}
useEffect(()=>{result()},[])
    return (
    
         <div>
         <button onClick={result}>result</button>

         <div><ul>{data.map((item)=><li>{item.name}</li>)}</ul></div>

</div>

         
        
    
          
    )
}

export default UserList;