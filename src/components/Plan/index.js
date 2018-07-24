import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Title from '../Title';
import './PlanItem.css';
import './Plan.css';
import PlanItem from './PlanItem';

const Plan = (props) => {
  let doneDate = [];
  let waitDate = [];
  //workDate is one process always
  let workDate;
  const planList = props.plan.map((p, index) => {
    let splitDate = p.date.split('.');
    let dateForPicker = new Date(splitDate[2], splitDate[1]-1, splitDate[0]);
    switch(p.status) {
      case 'выполнено':
        doneDate.push(dateForPicker);
        break;
      case 'ожидается':
        waitDate.push(dateForPicker);
        break;
      case 'в процессе':
        workDate.push(dateForPicker);
        break;
      default: break;
    }
    return (
      <PlanItem
        key={index}
        planItem={p}
      />
    )
  });

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
    ready: doneDate,
    wait: waitDate,
    work: workDate
  };

  const modifiersStyles = {
    ready: {
      backgroundColor: '#00ff00'
    },
    wait: {
      backgroundColor: '#ff0000'
    },
    work: {
      backgroundColor: '#0000ff'
    }
  };

  return (

    <div className='Container ComponentBlock'>
      <Title>План работ</Title>
      <div className='flexblock'>
        <div>
          {/*<p><span>C</span> <span>24.04.2018</span> <span>Just do it 1</span></p>
          <p><span>C</span> <span>25.04.2018</span> <span>Just do it 2</span></p>
          <p><span>N</span> <span>26.04.2018</span> <span>Just do it 3</span></p>
          <p><span>N</span> <span>27.04.2018</span> <span>Just do it 4</span></p>
          <p><span>N</span> <span>28.04.2018</span> <span>Just do it 5</span></p>*/}
          {planList}
        </div>
        <DayPicker
          locale={'ru'}
          months={MONTHS['ru']}
          weekdaysLong={WEEKDAYS_LONG['ru']}
          weekdaysShort={WEEKDAYS_SHORT['ru']}
          firstDayOfWeek={FIRST_DAY_OF_WEEK['ru']}
          labels={LABELS['ru']}
          month={new Date(2018, 8)}
          fromMonth={new Date(2018, 3)}
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
      <div className='Plan-Legend flexblock flexblock_center'>
        <div className="Plan-Exp">
          <span className="PlanItem_Complete"><i className='fas fa-check'></i></span>
          <span>Выполнено</span>
        </div>
        <div className="Plan-Exp">
          <span className="PlanItem_Work"><i className="far fa-hourglass"></i></span>
          <span>В процессе</span>
        </div>
        <div className="Plan-Exp">
          <span className="PlanItem_Wait"><i className="fas fa-cog"></i></span>
          <span>Ожидается</span>
        </div>
      </div>
    </div>
  );
}

export default Plan;