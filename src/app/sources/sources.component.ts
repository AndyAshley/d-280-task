import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sources',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sources.component.html',
  styleUrl: './sources.component.css',
})
export class SourcesComponent {
  toolsUsed = [
    {
      name: 'Angular Framwork',
      url: 'https://angular.io/',
    },
    {
      name: 'World Bank API',
      url: 'https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures',
    },
    {
      name: 'World Map SVG',
      url: 'https://mapsvg.com/maps/world',
    },
  ];
}
