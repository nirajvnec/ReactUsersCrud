import Axios from "axios";
import React, {useState,useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const [user, setUserState] = useState({
      name:"",
      username:"",
      email:"",
      phone:"",
      website:""
    });
    const{name, username, email, phone, website} = user;
    const {id} = useParams();
    
    
    const onInputChange = e=>{
      setUserState({...user,[e.target.name]:e.target.value})
    };
    
    useEffect(()=>{
        loadUser()
    },[]);
    const loadUser = async ()=>{
        const result = await Axios.get(`http://localhost:3003/users/${id}`);
        console.log(result.data);
        setUserState(result.data);
    };
    const onFormSubmit = async (e)=>{
      e.preventDefault();
      await Axios.put(`http://localhost:3003/users/${id}`, user);
      history.push("/");
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form onSubmit={e => onFormSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditUser;
  