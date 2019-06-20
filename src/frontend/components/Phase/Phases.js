import React, { Component } from 'react';
import PhaseList from './PhaseList';

export default class Phases extends Component {
  constructor() {
    super();
    this.state = {
      phases: []
    };
  }

  componentDidMount() {
    this.getAllPhases();
  }

  getAllPhases = () => {
    fetch('/api/phases')
      .then(res => res.json())
      .then((phases) => {
        this.setState({ phases });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { phases } = this.state;
    return (
      <div className="App">
        <PhaseList phases={phases} />
      </div>
    );
  }
}
