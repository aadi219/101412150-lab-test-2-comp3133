import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Mission from '../../types/Mission';

@Injectable({
  providedIn: 'root'
})
export class HttpMissionClientService {

  baseUrl = "https://api.spacexdata.com/v3/launches";

  constructor(private http: HttpClient) { }

  getMissionList(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }
  getFilteredMission(launch_year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl, {
      params:  {
        launch_year
      }
    })
  }
  getMissionDetails(flight_number: number): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl, {
      params: {
        flight_number
      }
    })
  }
}
