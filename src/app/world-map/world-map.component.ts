import { Component, Output, EventEmitter } from '@angular/core';
import { CountryApiService } from '../country-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetails } from '../../models/models';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css',
})
export class WorldMapComponent {
  // create an event emitter to send the selected country details to the parent component so we can display them
  @Output() selectedCountry = new EventEmitter<any>();

  // create an instance of the country API service
  api = new CountryApiService();

  // handle the click event on the map
  onMapClick(event: MouseEvent) {
    // create an object to store the details of the selected country (this also returns empty for off-map clicks)
    let countryDetails: CountryDetails = {
      name: '',
      capital: '',
      region: '',
      incomeLevel: '',
      latitude: '',
      longitude: '',
    };

    // get the element that was clicked
    const group = event.target as SVGElement;

    // if there was a previous click, remove the fill color
    const filledElements = document.querySelectorAll('[style="fill: #0070f0"]');

    filledElements.forEach((element) => {
      element.setAttribute('style', 'fill: "";');
    });

    // add the fill color white to the clicked element
    group.setAttribute('style', 'fill: #0070f0');

    // if the user clicks off the map, just emit an empty object and return
    if (!group.id) {
      this.selectedCountry.emit(countryDetails);
      return;
    }

    // fetch and emit the country details
    this.api.getCountryDetails(group.id).then((data) => {
      countryDetails = {
        name: data.name,
        capital: data.capitalCity,
        region: data.region.value,
        incomeLevel: data.incomeLevel.value,
        latitude: data.latitude,
        longitude: data.longitude,
      };
      this.selectedCountry.emit(countryDetails);
    });
  }
}
