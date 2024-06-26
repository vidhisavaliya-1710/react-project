import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Media.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Services_sec from './Components/Services_sec';
import Menu from './Components/Menu';
import Booking from './Components/Booking';
import Team_page from './Components/Team_page';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import { FaUserTie,FaUtensils,FaCartPlus,FaHeadset } from "react-icons/fa";
import { FaFacebookF, FaTwitter,FaInstagram } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { RiCupFill } from "react-icons/ri";
// import { FaHamburger, FaUtensils } from "react-icons/fa";


function App() {

  // const menu=['Booking','Our Team','Testimoniall']
  const sericve=[
    {
      icon:<FaUserTie/>,
      name:'Master Chefs',
      content:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
      icon:<FaUtensils/>,
      name:'Quality Food',
      content:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
      icon:<FaCartPlus/>,
      name:'Online Order',
      content:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
      icon:<FaHeadset/>,
      name:'24/7 Service',
      content:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    }
  ]
  const food=[
    {
      img:require('./images/asset 5.jpeg'),
      menu:'Chicken Burger',
      price:'$115',
      content:'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      img:require('./images/asset 6.jpeg'),
      menu:'Chicken Burger',
      price:'$115',
      content:'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      img:require('./images/asset 7.jpeg'),
      menu:'Chicken Burger',
      price:'$115',
      content:'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      img:require('./images/asset 8.jpeg'),
      menu:'Chicken Burger',
      price:'$115',
      content:'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      
        img:require('./images/asset 9.jpeg'),
        menu:'Chicken Burger',
        price:'$115',
        content:'Ipsum ipsum clita erat amet dolor justo diam'
      
    },
    {
      img:require('./images/asset 10.jpeg'),
      menu:'Chicken Burger',
      price:'$115',
      content:'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      img:require('./images/asset 11.jpeg'),
      menu:'Chicken Burger',
      price:'$115',
      content:'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      img:require('./images/asset 12.jpeg'),
      menu:'Chicken Burger',
      price:'$115',
      content:'Ipsum ipsum clita erat amet dolor justo diam'
    }
  ]
  const team=[
    {
      teamimg:require('./images/asset 13.jpeg'),
      name:'Full Name',
      des:'Designation',
      icon1:<FaFacebookF/>,
      icon2:<FaTwitter/>,
      icon3:<FaInstagram/>
    },
    {
      teamimg:require('./images/asset 14.jpeg'),
      name:'Full Name',
      des:'Designation',
      icon1:<FaFacebookF/>,
      icon2:<FaTwitter/>,
      icon3:<FaInstagram/>
    },
    {
      teamimg:require('./images/asset 15.jpeg'),
      name:'Full Name',
      des:'Designation',
      icon1:<FaFacebookF/>,
      icon2:<FaTwitter/>,
      icon3:<FaInstagram/>
    },
    {
      teamimg:require('./images/asset 16.jpeg'),
      name:'Full Name',
      des:'Designation',
      icon1:<FaFacebookF/>,
      icon2:<FaTwitter/>,
      icon3:<FaInstagram/>
    }
  ]
  const silder=[
    {
      icon:<FaQuoteLeft/>,
      detail:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      cimg:require('./images/asset 17.jpeg'),
      cname:'Client Name',
      cwork:'Profession'
    },
    {
      icon:<FaQuoteLeft/>,
      detail:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      cimg:require('./images/asset 18.jpeg'),
      cname:'Client Name',
      cwork:'Profession'
    },
    {
      icon:<FaQuoteLeft/>,
      detail:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      cimg:require('./images/asset 19.jpeg'),
      cname:'Client Name',
      cwork:'Profession'
    },
    {
      icon:<FaQuoteLeft/>,
      detail:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      cimg:require('./images/asset 20.jpeg'),
      cname:'Client Name',
      cwork:'Profession'
    }
  ]
  return (
    <>
      
      <Header/>
     
          <Routes>
              <Route path='/' element={<Home sericves={sericve} foods={food} teams={team} clients={silder}/>}/>
              <Route path='/about' element={<AboutUs teams={team}/>}/>
              <Route path='/services' element={<Services_sec sericves={sericve}/>}/>
              <Route path='/menu' element={<Menu foods={food}/>}/>
              <Route path='/booking' element={<Booking/>}/>
              <Route path='/team' element={<Team_page teams={team}/>}/>
              <Route path='/test' element={<Testimonial clients={silder}/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
