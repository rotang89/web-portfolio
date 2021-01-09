import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return (
          <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
        )
      })
      var work = this.props.data.work.map(function(work){
        return (
          <div key={work.company}><h3>{work.company}</h3>
              <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
              <p>{work.description}</p>
          </div>
        )

      })
      var educationLogo = this.props.data.education.map(education => {
        return (
            <img src = {'./images/resume/' + education.logo} alt={education.school} width='120px' style={{marginLeft: '70px', marginBottom: '70px', marginTop: '20px'}} height='120px'/>
        )
      })
      var workLogo = this.props.data.work.map((work)=>{
        return (
            <img src = {'./images/resume/' + work.logo} alt={work.school} width='120px' height='120px' style={{marginLeft: '70px', marginBottom: '70px', marginTop: '20px'}}/>
        )
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
            {educationLogo}
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
            {workLogo}
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

   </section>
    );
  }
}

export default Resume;
