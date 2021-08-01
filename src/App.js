import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import FavoriteTech from './Components/FavoriteTech';
import {resumeData} from './resumeData.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: resumeData
    };

  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <FavoriteTech data={this.state.resumeData.skills}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
