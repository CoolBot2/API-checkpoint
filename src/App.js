import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './UserList'
import './App.css'
const App = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{

    const fetchData = () => {

      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>setData(res.data))
      .then(loading=>setLoading(false))
    }
    fetchData()
  }
  ,[]
  )
  return (
    <div>


     {
       loading ? <h1>loading...</h1>
     :

      
      <UserList data={data}/>
     }
    </div>

  )
}

export default App


// Use axios to Get data from Link inside useEffect hooks
// Use UseState hooks to save data into listOfUSer state 
// Map listOfUser to display list of user into screen 
// Style your App as you wish













// import { useState } from "react";

// const App = () => {
//   const [user, setUser] = useState();
//   const handleSubmit = e => {
//     e.preventDefault();
//     fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => res.json())
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };
 
//   const handleChange = e =>
//     setUser({ id: Date.now(), [e.target.name]: e.target.value });
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Person Name:
//           <input type="text" name="name" onChange={handleChange} />
//         </label>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
//  };
//  export default App;