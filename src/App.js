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
import Reviews from './About/Reviews';
import Appointment from './Appointment/Appointment';
import SellYourCar from './SellYourCar/SellYourCar';

/*

  Repo:   https://github.com/jmarkl3/Auto-Repair-Site
  Hosted: https://jmarkl3.github.io/Auto-Repair-Site/
  Domain: OcalaAutoCare.com
          https://dcc.godaddy.com/control/portfolio

  sample sites
  https://autowaveinc.com/parts-service/
http://www.dallascarcare.com/

  Ocala one from Ready Power Market


  https://www.ionos.co.uk/domaincheckresult
  name-edu.uk
  
  https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains
  .academy
  .de
  .uk
  .org.uk
  .degree
  .education	
  .institute
  .school
  .software
  .engineering
  .study
  .tech
  .technology
  .university

  .education cost
  $30
  https://domains.squarespace.com/?channel=bd&subchannel=google-domain&campaign=&subcampaign=&source=google_domain_referral&utm_term=&utm_campaign=
  $35
  https://www.godaddy.com/en-uk/domainsearch/find?checkAvail=1&tmskey=&key=dpp_leaf_de&domainToCheck=appleapplease.education&tld=.de
  $15
  https://www.ionos.co.uk/domaincheckresult

  List of inspiration sites
  https://en.wikipedia.org/wiki/Lists_of_American_universities_and_colleges
  https://en.wikipedia.org/wiki/List_of_universities_in_the_United_Kingdom

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
            <Route path='/reviews' element={<Reviews ></Reviews>}></Route>                    
            <Route path='/sell' element={<SellYourCar ></SellYourCar>}></Route>                    
            <Route path='/appointment' element={<Appointment title="Schedule An Appointment" title2="Fill out the form and we will contact you asap to schedule an appointment."></Appointment>}></Route>                    
          </Routes>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
