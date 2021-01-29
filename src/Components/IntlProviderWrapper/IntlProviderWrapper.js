import React from "react";
import { IntlProvider } from "react-intl";
import arTranslation from "../../Locales/ar.json";
import enTranslation from "../../Locales/en.json";

const Context = React.createContext();

class IntlProviderWrapper extends React.Component {
  constructor(...args) {
    super(...args);

    this.switchToEnglish = () =>
      this.setState({ locale: "en", messages: enTranslation });

    this.switchToArabic = () =>
      this.setState({ locale: "ar", messages: arTranslation });

    this.switchLanguage = () => {
      this.state.locale === "en"
        ? this.switchToArabic()
        : this.switchToEnglish();
    };

    this.state = {
      locale: "en",
      messages: enTranslation,
      switchLanguage: this.switchLanguage,
    };
  }

  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (
      <Context.Provider value={this.state}>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale="en"
        >
          {children}
        </IntlProvider>
      </Context.Provider>
    );
  }
}
export { Context as IntlContext };
export default IntlProviderWrapper;
