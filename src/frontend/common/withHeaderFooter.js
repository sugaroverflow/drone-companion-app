/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function withHeaderAndFooter(WrappedComponent, pageName) {
  // ...and returns another component...
  class WithHeaderAndFooter extends React.Component {
    constructor() {
      super();
      this.state = {
        lang: "eng"
      };
      this.changeLanguage = this.changeLanguage.bind(this);
      // this.bodyElement = React.createRef();
    }

    getLang = () => {
      const { i18n } = this.props;
      let lang = "eng";
      if (i18n.language === "fr-CA") {
        lang = "fra";
      }
      return lang;
    };

    changeLanguage() {
      const { i18n } = this.props;
      let lang;
      if (i18n.language === "en-CA") {
        i18n.changeLanguage("fr-CA");
        lang = "fra";
      } else {
        i18n.changeLanguage("en-CA");
        lang = "eng";
      }
      if (this.callbacks) {
        this.callbacks.changeLang(lang);
      }
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      const { t, i18n } = this.props;
      return (
        <>
          <Header
            title={t(pageName)}
            i18n={i18n}
            changeLanguage={this.changeLanguage}
          />

          <div className="app-body">
            <WrappedComponent
              {...this.props}
              // ref={this.bodyElement}
              lang={this.getLang()}
              onMounted={callbacks => (this.callbacks = callbacks)}
            />
          </div>
          <Footer />
        </>
      );
    }
  }
  WithHeaderAndFooter.propTypes = {
    i18n: PropTypes.shape({
      language: PropTypes.string.isRequired
    }).isRequired,
    t: PropTypes.func.isRequired
  };
  return WithHeaderAndFooter;
}
export default withHeaderAndFooter;
