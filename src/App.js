import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Main from './components/main/Main';
import Volunteeer from './components/volunteer/Volunteeer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/volunteer' element={<Volunteeer></Volunteeer>}></Route>
      </Routes>

    </div>
  );
}

export default App;
