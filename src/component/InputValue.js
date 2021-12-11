import React, {useState} from "react";
export default function InputValue () {
      const [value, setValue] = useState("Sam")
    return (
        <>
            <p> Value: {value} </p>
            <input 
            type="text" 
            className="form-control input" 
            value={value}
            onChange={event => setValue(event.target.value) }
            />  
        </>
    )
}