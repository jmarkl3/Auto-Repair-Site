import logo from './logo.svg';
import './App.css';
import './Components/Components.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Home/Home';
import Footer from './Components/Footer';
import About from './About/About';
import Services from './About/Services';
import Specials from './Specials/Specials';

/*
  sample sites
  https://autowaveinc.com/parts-service/
http://www.dallascarcare.com/

  Ocala one from Ready Power Market
*/

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>                    
            <Route path='/home' element={<Home></Home>}></Route>                    
            <Route path='/about' element={<About></About>}></Route>                    
            <Route path='/services' element={<Services ></Services>}></Route>                    
            <Route path='/specials' element={<Specials ></Specials>}></Route>                    
          </Routes>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
