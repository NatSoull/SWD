import React from 'react'
import { Navigate } from 'react-router-dom'

const Admin = () => {

    if(localStorage.getItem("token")){
        return (
            <div>
              <h2>Admin</h2>
            </div>
          )
    }else{
        Navigate(-1)
    }
  
}

export default Admin
