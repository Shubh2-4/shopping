import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import Canvas from './Component/Canvas';
import Footer from './Component/Footer/Footer';
import ContactButton from './Component/ContactButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shirt from './Component/Shirt/Shirt';
import Home from './Component/Home';
import TShirt from './Component/T-shirt/tShirt';
import Jeans from './Component/jeans';
import Shoes from './Component/shoes';
import ProductDetails from './Component/Product/ProductDetails';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/shirt' element={<Shirt />}></Route>
          <Route path='/tshirt' element={<TShirt />}></Route>
          <Route path='/jeans' element={<Jeans />}></Route>
          <Route path='/shoes' element={<Shoes />}></Route>
          <Route path='/product' element={<ProductDetails/>}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>





      {/* <div style={styles.container}>
      <h1>Contact Us</h1>
      <ContactButton phoneNumber="+91-7895240724"/>
    </div> */}



    </>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default App;
