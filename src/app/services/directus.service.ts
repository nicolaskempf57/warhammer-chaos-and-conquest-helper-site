import { Injectable } from '@angular/core';
import DirectusSDK from '@directus/sdk-js';
import Article from '../classes/Article';
import Image from '../classes/Image';

const client = new DirectusSDK({
  url: 'https://data.warhammer-chaos-and-conquest.com',
  project: '_',
});

@Injectable({
  providedIn: 'root'
})
export class DirectusService {
  private directus: DirectusSDK;
  constructor() {
    this.directus = new DirectusSDK({
      url: 'https://data.warhammer-chaos-and-conquest.com',
      project: '_',
    });
  }
  async getArticles(): Promise<Array<Article>> {
    const data = await this.directus.getItems('articles', {
      fields: '*, created_by.*, featured_image.data',
      sort: '-created_on'
    });
    const articles = data.data;
    return articles.map(article => {
      console.log(article.featured_image.data);
      return new Article(
          article.excerpt,
          article.content,
          article.created_by,
          article.created_on,
          new Image(article.featured_image.data.full_url, article.featured_image.data.thumbnails),
          article.id,
          article.title
      );
    });
  }
}
