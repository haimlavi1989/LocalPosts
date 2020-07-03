import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../shared/Posts/Categorie';
import { CategoriesService } from './../../../services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categorie[];

  constructor(private _categoriesService: CategoriesService) { 
    this.categories = [];
  }

  ngOnInit(): void {
    this.categories = this._categoriesService.getCategories();
  }

}
