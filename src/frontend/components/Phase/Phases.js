import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import PhaseList from './PhaseList';
import withHeaderFooter from '../../common/withHeaderFooter';

class Phases extends Component {
  constructor() {
    super();
    this.state = {
      module: null,
    };
  }

  componentDidMount() {
    const { lang } = this.props;
    this.loadData(lang);
  }

  loadData = (lang) => {
    console.log(lang);
    fetch(`/api/phases?lang=${lang}`)
      .then(res => res.json())
      .then((module) => {
        this.setState({ module });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeLang(lang) {
    this.loadData(lang);
  }

  render() {
    const { module } = this.state;
    if (module) {
      return (
        <div className="App">
          <h1 className="h4">
            {`Module: ${module.title}`}
          </h1>

          <PhaseList phases={module.Phases} />
        </div>
      );
    }
    return '';
  }
}

Phases.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default withTranslation('translation')(withHeaderFooter(Phases, 'Conducting Site Surveys'));
