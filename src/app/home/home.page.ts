import { Component } from '@angular/core';
import {DirectusService} from '../services/directus.service';
import {Article} from '../interfaces/articles';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private articles: Array<Article>;
  constructor(private directusService: DirectusService) {}

  ionViewWillEnter() {
     this.directusService.getArticles().then(articles => {
       this.articles = articles;
       console.log(this.articles);
    });
  }

}
