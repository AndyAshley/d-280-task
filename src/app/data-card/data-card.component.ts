import { Component, Input } from '@angular/core';
import { CountryDetails } from '../../models/models';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.css',
})
export class DataCardComponent {
  // get the country details from the parent
  @Input() countryDetails?: CountryDetails;
}
