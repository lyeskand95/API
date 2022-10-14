import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {

  let [data, setData] = useState([]);


    function result(){
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
        result();
      }, []);

      
  return (
    <div>
      <button onClick={result}>result</button>

      <div>
        <ul>
          {data.map((item,key) => (
            <li key={key}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
