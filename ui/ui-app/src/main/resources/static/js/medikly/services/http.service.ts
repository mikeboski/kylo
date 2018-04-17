/**
 * Created by development on 12/7/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//import {AuthModel} from '../models/auth.model';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpService {

  protected url: string;

  /**
   * Main constructor
   */
  constructor(private http: Http) {

  }

  getJsonCalDataMap(): Observable<any> {
    return this.http.get("assets/medikly_theme/highcharts/mapdata/us-cal-all.geo.json")
      .map((res:any) => res.json());
  }

  getJsonUsaDataMap(): Observable<any> {
    return this.http.get("assets/medikly_theme/highcharts/mapdata/us-all-all.geo.json")
      .map((res:any) => res.json());
  }
  getJsonUsaData(): Observable<any> {
    /*return this.http.get("https://www.highcharts.com/samples/data/jsonp.php?filename=us-counties-unemployment.json&callback=?")*/
    return this.http.get("assets/medikly_theme/highcharts/mapdata/data.json")
      .map((res:any) => res.json());
  }

}

