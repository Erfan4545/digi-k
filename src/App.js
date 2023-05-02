import React, { Component } from 'react';
import Components from './components/components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductPage from './Routes/productpage';
import StorCart from './Routes/storecart';

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Components />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<StorCart />} />
        </Routes>
      </BrowserRouter>


    );
  }
}

export default App;