import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/ru';
import './InputDate.css';

const InputDate = (props) => {
  return (
    <div className="InputDate">
      <p className="InputDate-Text">Дата</p>
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        value={props.eventDate}
        format="L"
        placeholder={`${formatDate(new Date(), 'L', 'ru')}`}
        dayPickerProps={{
          locale: 'ru',
          localeUtils: MomentLocaleUtils,
        }}
      />
    </div>
  );
};

export default InputDate;