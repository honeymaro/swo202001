import { action, observable, set } from 'mobx';
import autoSave from 'utils/storeAutoSave';
import api from 'utils/api';

export class AuthStore {
  @observable userInformation = {};

  @action signout() {
    this.userInformation = {};
  }

  constructor() {
    this.load();
    autoSave(this, this.save.bind(this));
  }

  load() {
    if (localStorage.getItem('userInformation') !== null) {
      const data = localStorage.getItem('userInformation');
      set(this, JSON.parse(data));
      console.log(this.userInformation);
    }
  }

  save(json) {
    localStorage.setItem('userInformation', json);
  }
}

export default AuthStore;
