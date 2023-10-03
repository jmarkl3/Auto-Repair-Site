import logo from './logo.svg';
import './App.css';
import './Components/Components.css';
import Header from './Components/Header';
import Home from './Home/Home';
import Footer from './Components/Footer';

/*
  sample sites
  https://autowaveinc.com/parts-service/
  http://www.Ocalacarcare.com/

  Ocala one from Ready Power Market
*/

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
