import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'impressum',
    title: 'Marcus Loosen | Impressum',
    component: ImpressumComponent,
  },
  {
    path: 'datenschutz',
    title: 'Marcus Loosen | Datenschutz',
    component: DatenschutzComponent,
  },
];
