import React from 'react'

class FavoriteTech extends React.Component {
  render() {

    if(this.props.data){
      var skills = this.props.data.map(function(skills){
      var projectImage = 'images/tech/'+skills.image;
        return <div key={skills.name} className="feature-item skills">
                  <img alt={skills.name} src={projectImage} />
                  <h5>{skills.name}</h5>
               </div>
      })
    }

    return (
      <section id="resume">
        <div className="row skill-message">

          <div className="three columns header-col">
              <h1><span>Tech Skills</span></h1>
          </div>

          <div>
            <div className="nine columns main-col"><p className="lead center">Growing day by day</p></div>
            <ul className="bgrid-quarters s-bgrid-thirds cf">
              {skills}
            </ul>
          </div>
        </div>
    </section>
    );
  }
}

export default FavoriteTech