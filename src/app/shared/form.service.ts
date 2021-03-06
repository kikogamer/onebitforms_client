import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService, A2tUiModule} from 'angular2-token';
import { map } from 'rxjs/operators';

@Injectable()
export class FormService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  getForms() {
    return this._tokenService.get('forms').pipe(map(res => res.json()));
  }

  getForm(form_id) {
    return this._tokenService.get('forms/' + form_id).pipe(map(res => res.json()));
  }

  createForm(form_params) {
    return this._tokenService.post('forms', form_params).pipe(map(res => res.json()));
  }

  updateForm(form_id, form_params) {
    return this._tokenService.put('forms/' + form_id, form_params).pipe(map(res => res.json()));
  }

  destroyForm(form_id) {
    return this._tokenService.delete('forms/' + form_id).pipe(map(res => res.json()));
  }
}