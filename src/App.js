import './App.css';
import ItemDetails from './itemDetails';
import Items from './items';
import React, { useState } from 'react';
import AddItem from './addItem';

function App() {
  const initData = [
    {
      id: 0,
      name: "meat",
      price: 10,
      image: "https://avatars.dzeninfra.ru/get-zen_doc/1581919/pub_5df6598034808200b1d2c94f_5df67149fe289100b094df78/scale_1200"
    },
    {
      id: 1,
      name: "bread",
      price: 5,
      image: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg"
    }
  ]
  const [items, setItems] = useState(initData)
  const [displayed, setDisplayed] = useState(items[0])
  const [hidden, setHidden] = useState(1)

  const addProduct = (product) => {
    setItems([...items, product])
  }

  const display = (id) => {
    const selectedItem = items.find(item => item.id === id);
  if (selectedItem) {
    setDisplayed(selectedItem);
  }
    //setDisplayed(items[id])
  }

  const hide = (flag) => {
    setHidden(flag)
  }

  const hiddenElement = hidden ? <div></div> : <AddItem nextID={items.length + 1} addProduct={addProduct} hide={hide}/>
  return (
    <div className="container">
      <header className='row'>
        <h1 className='text-center'>Items management</h1>
      </header>
      <div className='row'>
        <div className="col-4">
          <Items items={items} handleClick={display} className="col-4" />
        </div>
        <div className="col-4">
          <ItemDetails item={displayed} handleClick={hide} className="col-4" />
        </div>
        <div className='col-4'>
          {hiddenElement}
        </div>

      </div>

    </div>
  );
}

export default App;
