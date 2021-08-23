import React from 'react';
import {proyects} from '../../assets/utils/proyects';
import { v4 as uuidv4 } from 'uuid';
import Proyect from '../layout/Proyect';

const Generative = () => {

  const generatives = proyects.filter( proyect => proyect.category === "generative");

  return (
    <>
      {
        generatives.map( proyect => (
          <Proyect
            key={uuidv4()}
            header={proyect.header}
            title={proyect.title}
            description={proyect.description}
            assets={proyect.assets}
          />
        ))
      }
    </>
  )
};


export default Generative;