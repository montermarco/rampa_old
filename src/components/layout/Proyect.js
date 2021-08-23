import React from 'react';
import styled from 'styled-components';
import ReactPlayer from "react-player"
import { v4 as uuidv4 } from 'uuid';

const Proyect = ({header, title, description, assets, category}) => {
  return (
    <Wrapper>
      <h3>{header}</h3>
      <p>{title}</p>
      <span>{description}</span>
      <div className="assets_box">
        {
          category !== "motion" ? 

          assets.map( (asset,idx) => (
            <img 
              className={`${category}_${idx}`} 
              key={uuidv4()} 
              src={asset} 
              alt={`image for ${category} proyect`}/>
          )) : 

          assets.map( asset => (
            <ReactPlayer
              className="video"
              key={uuidv4()}
              url={asset}
              width="100%"
              height="70vh"
            />
          ))
        }
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: 90%;
  margin: 4rem auto;
  border: solid 1px red;

  .video{
    width: 100%;
  }
`;

export default Proyect
