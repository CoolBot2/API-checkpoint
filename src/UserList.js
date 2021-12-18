import React, { useState } from 'react'
import './App.css'
const UserList = ({data}) => {
  console.log(data);
 
  
  return (
    <div>
      
      {data.map(el=>
        <div>
          <h1> {el.name} </h1>
        </div>
        )}
    </div>
  )
}

export default UserList
