import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CoronaService {
  constructor(private http: HttpClient) {}

  public url = "https://thevirustracker.com/free-api?global=stats";
  public countryUrl = "https://thevirustracker.com/free-api?countryTotal=";

  public getStats() {
    return this.http.get(this.url);
  }
  public getByCountry(code) {
    return this.http.get(this.countryUrl + code);
  }
}
