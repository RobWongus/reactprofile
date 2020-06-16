import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Utils/Header";
import Footer from "./Utils/Footer";
import Project from "./component/Project";

// "homepage": "http://robwongus.githup.io/deploy-reactprofile",

class App extends React.Component {
  state = {
    homework: []
  }

render() {
  // function App() {
    return (
      <div className="App">
        <>
          <Header/>
          <Project/>
          <Footer/>
        </>
      </div>
      );
    }
  } 


export default App;
