import React from 'react';
import {proyects} from '../../assets/utils/proyects';
import { v4 as uuidv4 } from 'uuid';
import Proyect from '../layout/Proyect';

const Motion = () => {

  const motions = proyects.filter( proyect => proyect.category === "motion");

  return (
    <>
      {
        motions.map( proyect => (
          <Proyect
            key={uuidv4()}
            header={proyect.header}
            title={proyect.title}
            description={proyect.description}
            assets={proyect.assets}
            category={proyect.category}
          />
        ))
      }
    </>
  )
};
export default Motion;
