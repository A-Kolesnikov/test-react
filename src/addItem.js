import React from "react";
import { useState } from "react";

function AddItem({ nextID, addProduct, hide }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    function clearFields(){
        setName("")
        setPrice("")
        setImage("")
    }

    function createProduct() {
        const newProduct = {
            id: nextID,
            name: name,
            price: price,
            image: image
        }
        console.log(newProduct)
        addProduct(newProduct)
        clearFields()
        hide(1)
    }
    return (
        <div className="col">
            Add New Item:
            <div className="inputForm">
                <div>
                    <label htmlFor="itemName">
                        Name: <input id="itemName" value={name} onChange={handleNameChange} required />
                    </label>
                </div>
                <div>
                    <label htmlFor="itemPrice">
                        Price: <input id="itemPrice" value={price} onChange={handlePriceChange} required />
                    </label>
                </div>
                <div>
                    <label htmlFor="itemImage">
                        Image: <input id="itemImage" value={image} onChange={handleImageChange} required />
                    </label>
                </div>
                <button onClick={() => createProduct()}>Add</button>
            </div>


        </div>
    )
}
export default AddItem