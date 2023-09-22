import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
import StopWatch from './components/StopWatch/stopWatch';
import Celebration from './components/congratulation/Celebration';
        

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/stopwatch' element={<StopWatch />}/>
        <Route path='/Celebration' element={<Celebration />}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
