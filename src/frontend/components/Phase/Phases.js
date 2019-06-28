import React, { Component } from 'react';
import PhaseList from './PhaseList';

export default class Phases extends Component {
  constructor() {
    super();
    this.state = {
      module: null,
    };
  }

  componentDidMount() {
    this.getAllPhases();
  }

  getAllPhases = () => {
    fetch('/api/phases')
      .then(res => res.json())
      .then((module) => {
        this.setState({ module });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { module } = this.state;
    if (module) {
      return (
        <div className="App">
          {/* <h1>
            {`Module: ${module.titleEng}`}
          </h1> */}

          <PhaseList phases={module.Phases} />
        </div>
      );
    }
    return '';
  }
}
