import React from 'react'
import Silder from './Silder'
import Services from './Services'
import About_sec from './About_sec'
import Food from './Food'
import Reservation from './Reservation'
import Team from './Team'
import Client from './Client'




function Home(props) {
  
  return (
    <>
        <Silder/> 
        <Services sec={props}/>
        <About_sec/>
        <Food foodsec={props}/>
        <Reservation/>
        <Team teamsec={props}/>
        <Client clientsec={props}/>
  
    </>
  )
}

export default Home
