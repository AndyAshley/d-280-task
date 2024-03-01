import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  url = 'https://api.worldbank.org/v2/country/';

  constructor() {}

  async fetchCountryDetails(ID: string) {
    const response = await fetch(`${this.url}${ID}?format=json`);
    return response;
  }

  async getCountryDetails(ID: string) {
    const response = await this.fetchCountryDetails(ID);
    const data = await response.json();
    
    // select the right index for the country details (index 0 is just metadata)
    const details = data[1][0];

    return details;
  }
}
