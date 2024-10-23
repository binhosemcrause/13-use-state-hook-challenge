import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Challenge (App.jsx):
//1. Given that you can get the current time using:
//let time = new Date().toLocaleTimeString();
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setTimeout method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setTimeout(sayHi, 1000);