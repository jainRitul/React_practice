import { useState } from "react";

export default function CommentsForm(){
    let [formData ,setFormData] = useState({
        username :"",
        remarks :"",
        rating : 5
      
    })
    let handleInputChange = (event)=>{
        setFormData((currData)=>{
            return {...currData , [event.target.name] : event.target.value};
        })
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        setFormData({
            username :"",
            remarks :"",
            rating : ""
        })
        console.log(formData);
    }
    return (
      <div>
        <h4>Give a comment!</h4>
        <form>
            <label htmlFor="username">Username</label>&nbsp;&nbsp;
           <input onChange={handleInputChange} type="text" placeholder="username" value={formData.username} name="username" id="username" /><br /><br />
           <label htmlFor="remarks">Remarks</label>&nbsp;&nbsp;
           <textarea onChange={handleInputChange} name="remarks" id="" placeholder="add few remarks" value={formData.remarks}></textarea><br /><br />
           <label htmlFor="rating">Rating</label>&nbsp;&nbsp;
           <input onChange={handleInputChange} type="number"  placeholder="rating" min={1} value={formData.rating} max={5} name="rating" id="rating" /><br /><br />
           <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
}