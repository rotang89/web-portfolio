import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import ProjectModal from './ProjectModal.js';
import 'react-multi-carousel/lib/styles.css';
import {
  Card,
  Thumbnail,
  Container,
  Wrapper,
  ImgContainer
} from './PortfolioElements.js'

const Portfolio = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({})

  const handleModal = (e) => {
    setShowModal(true)
    let clicked = props.data.projects.find(element => element.title === e.target.alt)
    setModalData(clicked)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  if(props.data){
    var projects = props.data.projects.map(function(projects){
      var projectImage = 'images/portfolio/'+projects.image;
      return  (<Card key={projects.title}>
          <div className="item-wrap">
            <ImgContainer>
              <Thumbnail alt={projects.title} src={projectImage} onClick={handleModal}/>
            </ImgContainer>
            <div className="overlay">
              <div className="portfolio-item-meta">
              <h2 className="portfolio-item">{projects.title}</h2>
              </div>
            </div>
        </div>
      </Card>
      )})
  }

  return (
    <Wrapper>
      <Container id="portfolio">
        <h1>Check Out Some of My Projects</h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={5000}
          centerMode={false}
          className=""
          containerClass="container"
          customDot={false}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 2,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {projects}
        </Carousel>
      </Container>
      <ProjectModal  data={modalData} closeModal={closeModal} showModal={showModal}></ProjectModal>
    </Wrapper>
  );

}

export default Portfolio;
