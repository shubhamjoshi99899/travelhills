import React from 'react';
import Home from './home';
import { Router, Route, Switch } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Booking';
import Service from './service';
import Error from './pages/Error';
import Holiday from './pages/Holiday';
import Hotel from './pages/Hotel';
import Destination from './pages/Destination';
import Review from './pages/Review';
import ScrollToTop from './components/ScrollToTop';
import SpiritualTours from './pages/places/others/Spiritual';
import Hillstation from './pages/places/Hillstation/Hillstation';
import Auli from './pages/places/auli';
import Almora from './pages/places/almora'; 
import Dhanaulti from './pages/places/dhanaulti';
import Lansdwone from './pages/places/landswone';
import Mussoorie from './pages/places/mussoorie';
import Nainital from './pages/places/nainital';
import Pithoragarh from './pages/places/pithoragarh';
import Ranikhet from './pages/places/ranikhet';
import NatureTours from './pages/places/others/Nature';
import WeekendTrips from './pages/places/others/Weekend';
import WildlifeTours from './pages/places/others/Wildlife';
import Carhome from './pages/Carhome';
import Login from './pages/Login';
import Bookingcar from './pages/Bookingcar';
import Signup from './pages/Registeration';
import Kausani from './pages/places/Kausani';




const App = () => {
  return (
    <div>

      <ScrollToTop />
      <Switch>
      <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/cars" component={Carhome}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Signup}></Route>
        <Route path="/bookingcar" component={Bookingcar}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/holiday" component={Holiday}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/book" component={Book}></Route>
        <Route path="/hotel" component={Hotel}></Route>
        <Route path="/destination" component={Destination}></Route>
        <Route path="/reviews" component={Review}></Route>
        <Route exact path="/auli" component={Auli}></Route>
        <Route exact path="/almora" component={Almora}></Route>
        <Route exact path="/kausani" component={Kausani}></Route>
        <Route exact path="/dhanaulti" component={Dhanaulti}></Route>
        <Route exact path="/lansdowne" component={Lansdwone}></Route>
        <Route exact path="/mussoorie" component={Mussoorie}></Route>
        <Route exact path="/nainital" component={Nainital}></Route>
        <Route exact path="/pithoragarh" component={Pithoragarh}></Route>
        <Route exact path="/ranikhet" component={Ranikhet}></Route>
        <Route exact path="/hillstation" component={Hillstation}></Route>
        <Route path="/spiritual" component={SpiritualTours}></Route>
        <Route path="/nature" component={NatureTours}></Route>
        <Route path="/weekend" component={WeekendTrips}></Route>
        <Route path="/wildlife" component={WildlifeTours}></Route>
        <Route component={Error}></Route>







      </Switch>
    </div>
  )
}

export default App;
