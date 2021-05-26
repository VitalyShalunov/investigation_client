import { observable, action } from 'mobx';
import { IClients } from '../../../../interfaces/interface';
import { fetchFunctionApi } from '../helpers';

export class AboutDataStore {
  @observable
  public about: any = {}

  @observable
  public state: 'loading' | 'loaded' | 'error' = 'loading';

  constructor() {
    this.loadAbout();
  }

  @action
  public async loadAbout() {
    this.state = 'loading';

    try {
      const about = await fetchFunctionApi<any>('/about');

      if (about) {
        this.about = about;
        this.state = 'loaded';
      } else {
        console.error('Could not get about from the response payload.');
        this.state = 'error';
      }
    } catch (error) {
      console.error('Unexpected error has occurred when loading about.', error);
      this.state = 'error';
    }
  }
}
