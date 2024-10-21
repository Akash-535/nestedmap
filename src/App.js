import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import First from './views/First';
import Second from './views/Second';

function App() {
  return (
    <div>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<First/>} />
  <Route path='all' element={<Second/>}/>
 </Routes>
 </BrowserRouter>
      </div>
  );
}

export default App;
