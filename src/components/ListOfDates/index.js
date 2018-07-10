import * as React from 'react';
import OneDate from '../../blocks/OneDate';

const ListOfDates = () => {
  return (
    <React.Fragment>
    <OneDate 
      dateStage="01.02.2018"
      nameStage="Вася купил велосипед"
    />
    <OneDate 
      dateStage="03.02.2018"
      nameStage="Вася пропил велосипед"
    />
    <OneDate 
      dateStage="07.02.2018"
      nameStage="Петя сломал велосипед"
    />
    </React.Fragment>
  );
};

export default ListOfDates;