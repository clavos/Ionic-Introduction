import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IMovie} from "../../Models/IMovie";

/**
 * Generated class for the MoviesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-details',
  templateUrl: 'movies-details.html',
})
export class MoviesDetailsPage {

  movie: IMovie;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.movie = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesDetailsPage');
  }

}
