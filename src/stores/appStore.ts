import { observable, computed, action, reaction } from 'mobx';
import i18n from 'i18next';

export const LANGUAGES = Object.freeze({
  en: 'en',
  ru: 'ru',
  cn: 'cn',
});

export class AppStore {
  @observable private _lang: string = LANGUAGES.en;

  constructor() {
    reaction(
      () => this._lang,
      (lang) => {
        i18n.changeLanguage(lang);
      }
    );
  }

  @computed public get lang(): string {
    return this._lang;
  }

  @action public setLang(lang: string): void {
    this._lang = lang;
  }
}

export default AppStore;
