import React, { Component } from 'react';
import ModuleList from './ModuleList';

export default class ModuleHome extends Component {
  constructor() {
    super();
    this.state = {
      modules: []
    };
  }

  componentDidMount() {
    this.getAllModules();
  }

  getAllModules = () => {
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

    return (
      <div className="App">
        <h1>Welcome to the Drone Companion App</h1>
        <p>This app will help you to fly safe!</p>
        <ModuleList modules={modules} />
      </div>

    );
  }
}
