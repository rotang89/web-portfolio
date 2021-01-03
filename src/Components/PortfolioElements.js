import styled from 'styled-components';


export const Card = styled.div `
  display: inline-block;
  margin: 20px 25px;
  height: 400px;
  width: 400px;
  text-align: center;
  overflow: hidden;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`

export const Thumbnail = styled.img `
  height: 360px;
  object-fit: cover;
  cursor: pointer;
  overflow: hidden;
  transition: transform .5s;
  &:hover {
      transform: scale(1.1);
    }
`

export const ImgContainer = styled.div `
  height: 360px;
  overflow: hidden;
`

export const Container = styled.div `
  width: 1000px;
  margin: 0px auto;
`

export const Wrapper = styled.section `
  background-color: #ebeeee;
  text-align: center;
`