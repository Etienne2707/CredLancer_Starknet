import React from "react";
import Header from "../../Commun/Header/header";
import Footer from "../../Commun/Footer/footer";
import Cards from "../Cards/Cards";
import "./LandingPage.css"

const   LandingPage = () => {
    return (
        <>
        <Header/>
        <div className='hero' >
        <div className='container_main'> 
        <div className="Sub_main_container" style={{width: 'fit-content', margin: '30px 30px 0px 30px'}} >
        <button className='btn1' style={{ padding: '10px 15px' }}>
                  Create a Quest
            </button>
            <button className='btn1' style={{ padding: '10px 15px' }}>
                  Find Quest
            </button>
        </div>
        <div className="Sub_main_container">
        <h2><span style={{color: 'rgba(156, 30, 243, 1)'}}>a</span> <span style={{color: 'rgba(50, 25, 117, 1)'}}>Freelancer</span> <span style={{color: 'rgba(156, 30, 243, 1)'}}> network built on trust and verifiable</span> <span style={{color: 'rgba(50, 25, 117, 1)'}} >credentials</span></h2>
        </div>
        <div className="container3">
          <div className="block1">
            <img src="./Images/imageL.svg"/>
            <p><span style={{color: '#3B2095'}}>On-Chain</span></p>
          </div>
          <div className="block2">
          <img src="./Images/imageL2.svg"/>
          <p><span style={{color: '#3B2095'}}>Verified</span></p>
          </div>
          <div className="block3">
          <img src="./Images/imageL3.svg"/>
          <p><span style={{color: '#3B2095'}}>Interoperable</span></p>
          </div>
        </div>
        <Cards/>
        </div>
  
      </div>
      <Footer/>
      </>
    )
}

export default LandingPage