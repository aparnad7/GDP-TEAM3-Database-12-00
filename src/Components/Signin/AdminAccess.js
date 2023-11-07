import React, { useState,useEffect } from 'react'
import '../Signin/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const AdminAccess = ({user,isLogin,setLogins,admind}) => {

  const [users, setUsers] = useState([]);

  

  useEffect(() => {
    loadUsers();
  }, [users]);

  const loadUsers = async () => {
    const result = await axios.get("https://app-qc1f.onrender.com/allusers");
    setUsers(result.data);
    console.log(result.data)
  };

  const addAdmin=(em)=>{
    console.log(em)
     axios.get("https://app-qc1f.onrender.com/add",{
      params:{
        email:em
        
       } 
    }).then(res=>{
      loadUsers()
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
    
  }

  const delAdmin=(email)=>{
    axios.delete(`https://app-miok.onrender.com/${email}`)
    .then(res=>{
      alert("Disabled access successfully")
      loadUsers()
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  

    
  return (
    
    <div className="container" id="view">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                 {!user.admin ?<Link
                    className="btn btn-success mx-2"
                    onClick={() =>{addAdmin(user.email)}}
                  >
                    Add Admin
                  </Link>
                 : 
                  <Link
                    className="btn btn-danger mx-2"
                    onClick={() =>{delAdmin(user.email)}}
                  >
                    Del Admin
                  </Link>
}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminAccess

