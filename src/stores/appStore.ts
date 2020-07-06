import { observable, computed, action, reaction } from 'mobx';
import i18n from 'i18next';

interface INavItem {
  label: string;
  link: string;
  icon: any;
}

export const LANGUAGES = Object.freeze({
  en: 'en',
  ru: 'ru',
  cn: 'cn',
});

export class AppStore {
  @observable private _lang: string = LANGUAGES.en;
  @observable NAV_ITEMS: INavItem[] = [];

  constructor() {
    reaction(
      () => this._lang,
      (lang) => {
        i18n.changeLanguage(lang);
      }
    );

    i18n.on('languageChanged', this.handleLanguageChange);
    i18n.on('loaded', () => {
      this.setLang(i18n.language);
      this.handleLanguageChange();
    });
  }

  @computed public get lang(): string {
    return this._lang;
  }

  @action public setLang(lang: string): void {
    this._lang = lang;
  }

  @action private handleLanguageChange = () => {
    this.NAV_ITEMS = [
      {
        label: i18n.t('common:header.home'),
        link: '/',
        icon: '',
      },
      {
        label: i18n.t('common:header.exhibitions'),
        link: '/exhibitions',
        icon: '',
      },
      {
        label: i18n.t('common:header.about'),
        link: '/about',
        icon: '',
      },
      {
        label: i18n.t('common:header.service'),
        link: '/services',
        icon: '',
      },
    ];
  };
}

export default AppStore;
