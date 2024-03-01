import { Routes } from '@angular/router';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { SourcesComponent } from './sources/sources.component';

export const routes: Routes = [
  { path: '', component: ContentWrapperComponent },
  { path: 'sources', component: SourcesComponent },
];
