import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Title from '../Title';
import './PlanItem';
import './Plan.css';
import PlanItem from './PlanItem';

const Plan = (props) => {
  /*const planList = props.plan.map((p, index) => {
    return (
      <PlanItem 
        keyNum={index}
        planItem={p}
      />
    )
  });*/
  const WEEKDAYS_SHORT = {
    ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  };
  const MONTHS = {
    ru: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ]
  };
  
  const WEEKDAYS_LONG = {
    ru: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ]
  };
  
  const FIRST_DAY_OF_WEEK = {
    ru: 1
  };
  // Translate aria-labels
  const LABELS = {
    ru: { nextMonth: 'следующий месяц', previousMonth: 'предыдущий месяц' }
  };
  
  const modifiers = {
    ready: [new Date(2018, 8, 14),
      new Date(2018, 8, 16),]
  };

  const modifiersStyles = {
    ready: {
      backgroundColor: '#ff0000'
    }
  };

  return (

    <div className='Container ComponentBlock'>
      <Title>План работ</Title>
      <div className='flexblock'>
        <div>
          <p><span>C</span> <span>24.04.2018</span> <span>Just do it 1</span></p>
          <p><span>C</span> <span>25.04.2018</span> <span>Just do it 2</span></p>
          <p><span>N</span> <span>26.04.2018</span> <span>Just do it 3</span></p>
          <p><span>N</span> <span>27.04.2018</span> <span>Just do it 4</span></p>
          <p><span>N</span> <span>28.04.2018</span> <span>Just do it 5</span></p>
          {/*{planList}*/}
        </div>
        <DayPicker
          locale={'ru'}
          months={MONTHS['ru']}
          weekdaysLong={WEEKDAYS_LONG['ru']}
          weekdaysShort={WEEKDAYS_SHORT['ru']}
          firstDayOfWeek={FIRST_DAY_OF_WEEK['ru']}
          labels={LABELS['ru']}
          month={new Date(2018, 8)}
          fromMonth={new Date(2018, 8)}
          toMonth={new Date(2018, 11)}
          fixedWeeks
          numberOfMonths={2}
          //selectedDays={[
            //new Date(2018, 8, 12),
            //new Date(2018, 9, 2),
          //]}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}/>
      </div>
    </div>
  );
}

export default Plan;