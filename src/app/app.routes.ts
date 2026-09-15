import { Routes } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'rolunk', component: AboutPageComponent },
  { path: 'kepek', component: GalleryPageComponent },
  { path: 'rendeles', component: OrderPageComponent },
  { path: '**', redirectTo: '' },
];
