import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Body from "./components/Body";
import Footer from "./components/Footer";


function App() {
  
  return (
    <div>
      <div className='container'>
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default App;