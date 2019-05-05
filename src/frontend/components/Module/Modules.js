import React, { Component } from 'react';
import ModuleList from './ModuleList';

export default class Modules extends Component {
  constructor() {
    super();

    this.state = {
      modules: []
    };
  }

  componentDidMount() {
    fetch('/api/modules')
      .then(res => res.json())
      .then((modules) => {
        this.setState({ modules });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { modules } = this.state;
    return <ModuleList modules={modules} />;
  }
}
