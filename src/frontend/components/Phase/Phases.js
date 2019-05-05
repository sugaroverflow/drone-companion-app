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
    fetch('/api/phases/{moduleId}')
      .then((res) => {
        res.json();
      })
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
      <PhaseList Phases={phases} />
    );
  }
}
