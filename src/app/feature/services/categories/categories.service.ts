import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../../shared/Posts/Categorie';
import categories from '../../shared/data/posts/categories.json';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url: string = "";
  private categories: Categorie[];

  constructor(private http: HttpClient) { 
    this.categories = categories;
  }

  getCategories() {
     return categories.slice();
  }

}
