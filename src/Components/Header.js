import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";

const Description = styled.div `
   text-transform: uppercase;
   color: white;
   font-size: 36px;
   line-height: 150%;
   font-family: Andale Mono, monospace;
   font-weight: bold;
`

class Header extends Component {
  render() {

    if(this.props.data){

      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h2 style={{color: "gray"}}>————— Hello, I'm —————</h2>
            <h1 className="responsive-headline" >Johnny Tang</h1>
            <h2 style={{color: "gray"}}>I AM</h2>
            <div style={{height: "60px"}}>
               <Carousel
                  responsive={{
                     all: {
                        breakpoint: {max: 4000, min: 0 },
                        items: 1
                     }
                  }}
                  infinite={true}
                  additionalTransfrom={0}
                  arrows={false}
                  autoPlay
                  autoPlaySpeed={2500}
                  centerMode={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  showDots={false}
                  containerClass="carousel-container"
                  >
                  <Description>A michigan native</Description>
                  <Description>Living in Kansas City</Description>
                  <Description>A Fullstack Software Engineer</Description>
                  <Description>An outdoor enthusiast</Description>
               </Carousel>;
            </div>
            <ul className="social" >
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
