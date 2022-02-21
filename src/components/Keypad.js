// Code Keypad Component Here
import React from "react";

function Keypad(){
    function handleChange(){
        console.log('Entering password...')
    }
    return(
        <div>
            <input 
                type='password'
                name="search"
                onChange={handleChange}
                placeholder="Enter Password"
            />
        </div>
    )
}
export default Keypad