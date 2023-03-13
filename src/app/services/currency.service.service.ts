import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  constructor(private http: HttpClient) { }

  public getExchangeRate(from: string, to: string, amont: number): Observable<any> {
    return this.http.get<any>("http://localhost:4200/backend/api/v1/exchange/get?from=" + from + "&to=" + to + "&amount=" + amont);
  }

  public getAll(page: Number): Observable<any>{
    return this.http.get<any>("http://localhost:4200/backend/api/v1/exchange/getall?page="+page+"&size=10");
  }
}
