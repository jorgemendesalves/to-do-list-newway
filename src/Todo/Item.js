import React from 'react';



const Item = (props)=> {
    return (
        <div>
            <span>{props.name}</span>
            <span>
                <button
                 onClick={props.click}>Edit
                </button>
            </span>
            <span>
                <input 
                 type="text"
                 onChange={props.Changed}
                 value={props.name}/>
            </span>
         
        </div>


    )
}

export default Item;