/* eslint-disable react/jsx-no-target-blank */
import React, {useState, useEffect} from 'react' ;
import Modal from 'react-modal';
import { resumeData } from '../resumeData.js';
import {
  Icon,
  Description
} from './ProjectModalElements.js'


Modal.setAppElement('#root')

const ProjectModal = (props) => {

  const [showModal, setShowModal] = useState(props.showModal)

  useEffect(() => {
    console.log(props.data)
    setShowModal(props.showModal)
  }, [props.data, props.showModal])

  const tech = props.data.tech ? props.data.tech.map(tech=>{
    let image = 'images/tech/'+resumeData.skills.find(skill=>skill.name === tech).image;
    return (
        <Icon src={image} alt={tech}></Icon>
    )
}) : null

  return (
    <div>
      <Modal
          isOpen={showModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,.8)'
            },
            content: {
              margin: '150px auto',
              padding: '50px',
              borderRadius: '10px',
              width: '676px',
              height: '590px'
            }
          }}
          onRequestClose={props.closeModal}
      >
        <h1>{props.data.title}</h1>
        <Description>{props.data.category}</Description>
        {props.data.url !== '' ? <h3>Source Code <a href={props.data.url} target="_blank">HERE</a></h3> : <div></div>}
        <h5>Tech Used</h5>
        {tech}
      </Modal>
    </div>
    );
}

export default ProjectModal