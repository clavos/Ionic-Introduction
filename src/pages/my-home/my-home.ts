import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MoviesListPage} from "../movies-list/movies-list";

/**
 * Generated class for the MyHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-home',
  templateUrl: 'my-home.html',
})
export class MyHomePage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyHomePage');
  }

  findMovie() {
    this.navCtrl.push(MoviesListPage);
  }

}
