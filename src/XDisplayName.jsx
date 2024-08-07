import React, { useState } from "react";

export default function DisplayName()
{
    const [header,SetHeader]= useState(' ');
    const handleSubmit=(e)=>{
        debugger;
        SetHeader(e.target.elements.Firstname.value+" "+e.target.elements.Lastname.value)
    e.preventDefault();
    }
    return(
        <div>
      <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit} style={{
            display:"flex",
            flexDirection:"column",
            gap:"10px"
            }}>
            <label>
                First Name :
                <input type="text" name="Firstname" required/>
            </label>
            <label>
                Last Name :
                <input type="text" name="Lastname" required/>
            </label>
            <button type="submit" style={{width:"50px"}}>Submit</button>
        </form>
        <p>Full Name: {header}</p>
        </div>
    )
}