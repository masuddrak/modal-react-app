import './App.css';
import Header from './componet/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './componet/Products/Products';
import { useState } from 'react';
function App() {
  const [add,setAdd]=useState(0)
  const addedProduct=()=>{
    setAdd(add+1)
  }
  return (
    <div className="App">
      <Header add={add}></Header>
      <Products addedProduct={addedProduct}></Products>
    </div>
  );
}

export default App;
