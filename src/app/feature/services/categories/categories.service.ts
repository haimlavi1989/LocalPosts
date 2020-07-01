import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from './../../shared/Posts/Categories';
import categories from '../../shared/data/posts/categories.json';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private _url: string = "";

  constructor(private http: HttpClient) { }

  getCategories() {
     return categories;
  }

}
