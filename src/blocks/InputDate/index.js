import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/ru';

const InputDate = (props) => {
  return (
    <div>
      <p>Please type a day:</p>
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