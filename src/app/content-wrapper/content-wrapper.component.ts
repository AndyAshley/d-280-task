import { Component } from '@angular/core';
import { WorldMapComponent } from '../world-map/world-map.component';
import { DataCardComponent } from '../data-card/data-card.component';
import { CountryDetails } from '../../models/models';

@Component({
  selector: 'app-content-wrapper',
  standalone: true,
  imports: [WorldMapComponent, DataCardComponent],
  templateUrl: './content-wrapper.component.html',
  styleUrl: './content-wrapper.component.css',
})
export class ContentWrapperComponent {
  // Create an object to store the details of the selected country
  countryDetails: CountryDetails = {
    name: '',
    capital: '',
    region: '',
    incomeLevel: '',
    latitude: '',
    longitude: '',
  };

  // Handle the selected country details from the world map component and store them in the countryDetails object
  handleSelectedCountry(details: any) {
    this.countryDetails = details;
  }
}
