import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesDetailsPage } from './movies-details';

@NgModule({
  declarations: [
    MoviesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesDetailsPage),
  ],
})
export class MoviesDetailsPageModule {}
