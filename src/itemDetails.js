import React from "react";

function ItemDetails(props) {
    const item = props.item
    return (
        <div>
            <h2>Item Details:</h2>
            <div className="row">
                <img className="foodImg" src={item.image}></img>
            </div>
            <div>
                {item.name}
            </div>
            <div>
                ${item.price}
            </div>
            <button onClick={() => { props.handleClick(0) }}>Add new item</button>
        </div>
    )
}
export default ItemDetails