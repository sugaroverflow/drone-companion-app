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
    const { lang, onMounted } = this.props;
    this.loadData(lang);
    if (onMounted) {
      onMounted({
        changeLang: newlang => this.changeLang(newlang),
        backRoute: '/intro'
      });
    }
  }

  loadData = (lang) => {
    fetch(`/api/phases/?lang=${lang}`)
      .then(res => res.json())
      .then((module) => {
        this.setState({ module });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  changeLang(lang) {
    this.loadData(lang);
  }


  render() {
    const { module } = this.state;
    const { t } = this.props;
    if (module) {
      return (
        <div className="App">
          <h1 className="h4">{t('Skill #1 - Site Survey')}</h1>

          <PhaseList phases={module.Phases} />
        </div>
      );
    }
    return '';
  }
}

Phases.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  onMounted: PropTypes.func.isRequired
};
// console.log(Phases.backRoute());
export default withTranslation('phase')(withHeaderFooter(Phases, 'Skill #1 - Site Survey', '/intro'));
