import './App.css';
import React from 'react';
import Slider from './components/header/Bannerslide';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
    <div className="Apps">
      <header className="header">
       
       <Slider/>
      </header>
    </div>
    </>
  );
}

export default App;


// Find the container where you want to insert the button
const targetContainer = document.getElementById('container-id');

if (targetContainer) {
  console.log("container visible   ");
  // Render the button component into the target container
  ReactDOM.render(<Slider />, targetContainer);
} else {
  console.error('Target container not found.');
}