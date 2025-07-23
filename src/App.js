// import logo from './logo.svg';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const removeBodyClasses = ()=> {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
  }
  const [mode, setMode] = useState('light'); // wheather dark mode is enabled or not

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)

    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.title = 'Textutils - Dark Mode';

      // pop like things

      // setInterval(() => {
      //   document.title = 'Textutils is amazing';

      // },2000);
      // setInterval(() => {
      //   document.title = 'Textutils is amazing';

      // },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = 'Textutils - Light Mode';

    }
  }
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="aboutTextutils" mode={mode} toggleMode={toggleMode}/> 
      <Navbar />  */}
   <div className="container my-2">
        <Router>
          <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />

          <Routes>
            <Route exact path="/" element={<Textform heading="TEXTUTILS-Play with text: Uppercase , Lowercase,word counter, character counter" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} /> 
          </Routes>
        </Router>
        {/* <Textform heading="Enter the text to analyze below"  mode={mode} />  */}

       {/* <About/>  */}
      </div> 
     

      {/* <div className="container my-2">
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Textform heading="Enter the text to analyze below" mode={mode} />
        <About/> 
      </div> */}
    </>
  );
}

export default App;
