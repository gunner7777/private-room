import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TypesOfDocs from './TypesOfDocs';

class DocsFromProject extends Component {
  constructor() {
    super();

    this.state = {
      typesDocs: ['Договор', 'Приложения', 'Дополнительные соглашения'],
      //docs: this.props.docs
    };
  }

  handleClick(e) {

  }

  render() {
    return (
      <div>
        <TypesOfDocs 
          types={this.state.typesDocs} 
          clickDoc={this.handleClick} />
        <p>Договор</p>
        <p>Договор №укукук скачать</p>
        <p>Приложения</p>
        <p>Дополнительные соглашения</p>
      </div>
    );
  }
}

/*
const DocsFromProject = props => {
  const typesDocs = ['Договор', 'Приложения', 'Дополнительные соглашения'];
  return (
    <div>
      <TypesOfDocs 
        types={typesDocs} />
      <p>Договор</p>
      <p>Договор №укукук скачать</p>
      <p>Приложения</p>
      <p>Дополнительные соглашения</p>
    </div>
  );
}

DocsFromProject.propTypes = {
  
}*/

export default DocsFromProject;