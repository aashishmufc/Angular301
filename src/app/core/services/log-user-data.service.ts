import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular//common/http';
import { environment } from '../../../environments/environment';
import { TMDB_URLS, JSON_SERVER_URLS, BASE_URL } from '../../shared/config';

const LOG_URL = environment.JSONSERVER + '/userLogDetails';

@Injectable({
  providedIn: 'root'
})
export class LogUserDataService {
  constructor(private http: HttpClient) {}
  logUserData(data) {
    let newObject, newLogs;
    this.http.get(LOG_URL).subscribe(
      value => {
        console.log('value', value);
        newObject = value;
        newLogs = newObject['LogDetails'];
        newLogs.push(data);

        this.http.put(LOG_URL, newObject).subscribe(
          res => {
            console.log('Sucess', res);
          },
          e => console.log(e, 'while updating data')
        );
      },
      e => {
        console.log(e, 'while fetching data');
      },
      () => {
        console.log(newObject);
      }
    );
  }
}
