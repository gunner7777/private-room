import React from 'react';
import Header from './components/Header';
import Main from './components/Main';


import DatePicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import InputDate from './blocks/InputDate';
import DatesOfBuilding from './components/DatesOfBuilding';
import InputFile from './blocks/InputFile';

import './App.css';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />        
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

/*
/.+@.+\..+/i mail checker
/^[a-zа-я -']+$/i  fio checker
^[a-zа-я-?'? ?]+$
*/