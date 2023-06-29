import React from "react";

function ItemDetails(props){
    const item = props.item
    return(
        <div className="col">
            Item Details:
            <img className="foodImg" src={item.image}></img>
            {item.name}
            ${item.price}
            <button onClick={()=>{props.handleClick(0)}}>Add new item</button>
        </div>
    )
}
export default ItemDetails