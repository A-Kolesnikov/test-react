import React from "react";

function Items(props){
    const list = props.items.map(element => <li key={element.id} onClick={() => props.handleClick(element.id)}>{element.name} - ${element.price}</li>)
    return(
        <div>
            <h2>Items:</h2>
            <ul>
            {list}
            </ul>
        </div>
    )
}
export default Items