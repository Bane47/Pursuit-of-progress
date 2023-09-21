import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
import StopWatch from './components/StopWatch/stopWatch';
        

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/stopwatch' element={<StopWatch />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
