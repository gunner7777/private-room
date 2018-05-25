import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TypesOfDocs from './TypesOfDocs';
import ChooseDocs from './ChooseDocs';
import Title from '../Title';
import './DocsFromProject.css';

class DocsFromProject extends Component {
  constructor() {
    super();

    this.state = {
      typesDocs: ['Договор', 'Приложение', 'Дополнительное соглашение'],
      docs: [],
      chooseDocs: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.getChoosenDocs = this.getChoosenDocs.bind(this);
  }

  getChoosenDocs(docs, type) {
    const chDocs = docs.filter(doc => {
      if(doc.type === type) {
        return doc;
      }
    });
    return chDocs;
  }

  handleClick(e) {
    
    //const docType = e.target.dataset.type;
    const chooseDocs = this.getChoosenDocs(this.state.docs, e.target.dataset.type);
    /*const chooseDocs = this.state.docs.filter(doc => {
      if(doc.type === docType) {
        return doc;
      }
    });*/
    this.setState({
      chooseDocs: chooseDocs
    });
  }

  componentDidMount() {
    const docs = [
      {
        id_doc: "24",
        type: "Договор",
        link: "/contracts/null/34563.pdf"
      },
      {
        id_doc: "25",
        type: "Приложение",
        link: "/contracts/null/345635.pdf"
      },
      {
        id_doc: "26",
        type: "Приложение",
        link: "/contracts/null/34563ss5.pdf"
      }
      
    ];

    const typesDocs = ['Договор'];
    //const docs = [];

    for(let doc of docs) {
      if(typesDocs.indexOf(doc.type) === -1) {
        typesDocs.push(doc.type);
      }
    }

    console.log(typesDocs[0]);
    const chooseDocs = this.getChoosenDocs(docs, typesDocs[0]);

    this.setState({
      typesDocs: typesDocs,
      docs: docs,
      chooseDocs: chooseDocs
    })
  }

  render() {
    return (
      <div className="DocsFromProject">
        <Title>
          Документы
        </Title>
        <div className="flexblock">
          
          <TypesOfDocs 
            types={this.state.typesDocs} 
            clickDoc={this.handleClick} />
          
          <ChooseDocs 
            choosenDocs={this.state.chooseDocs}
          />

        </div>
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