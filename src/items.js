import React from "react";

function Items(props){
    const list = props.items.map(element => <div key={element.id} onClick={() => props.handleClick(element.id)}>{element.name} - ${element.price}</div>)
    return(
        <div>
            Items:
            {list}
        </div>
    )
}
export default Items