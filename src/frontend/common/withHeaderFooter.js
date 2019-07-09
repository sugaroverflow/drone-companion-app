import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function withHeaderAndFooter(WrappedComponent, pageName) {
  // ...and returns another component...
  class WithHeaderAndFooter extends React.Component {
    constructor() {
      super();
      this.changeLanguage = this.changeLanguage.bind(this);
      this.state = {
        backRoute: '',
      };
    }

    componentDidMount() {
      if (this.callbacks) {
        console.log();
        this.setState({ backRoute: this.callbacks.backRoute });
      }
    }

    changeLanguage() {
      const { i18n } = this.props;
      if (i18n.language === 'en') {
        i18n.changeLanguage('fr');
      } else {
        i18n.changeLanguage('en');
      }
      if (this.callbacks) {
        this.callbacks.changeLang(i18n.language);
      }
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      const { t, i18n } = this.props;
      const { backRoute } = this.state;
      return (
        <>
          <Header
            title={t(pageName)}
            backRoute={backRoute}
            i18n={i18n}
            changeLanguage={this.changeLanguage}
          />

          <div className="app-body">
            <WrappedComponent
              {...this.props}
              lang={i18n.language}
              onMounted={(callbacks) => { (this.callbacks = callbacks); }}
            />
          </div>
          <Footer />
        </>
      );
    }
  }
  WithHeaderAndFooter.propTypes = {
    i18n: PropTypes.shape({
      language: PropTypes.string.isRequired,
      changeLanguage: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired
  };
  return WithHeaderAndFooter;
}
export default withHeaderAndFooter;
