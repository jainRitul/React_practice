import { useState } from "react";

export default function Form(){
    let [formData,setFormData] = useState({
      fullName : "",
      username :""
    });

    let handleInputChange = (event)=>{
        setFormData((currData)=>{
           return { ...currData , [event.target.name] : event.target.value }
        })
    }
    let handleSubmit = (event)=>{
      event.preventDefault();
      
      setFormData({
        fullName : "",
        username : ""
      });
    }
    return(
      <form >
        <label htmlFor="fullName">Full Name</label>
        <input 
        type="text"
        id="fullName"
        onChange={handleInputChange} 
        placeholder="enter your name" 
        value={formData.fullName} 
        name="fullName"/>
        <br /><br />
        <label htmlFor="username">enter user name</label>
        <input 
        type="text"
        id="username"
        name="username"
        onChange={handleInputChange} 
        placeholder="enter your username" 
        value={formData.username} />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
}