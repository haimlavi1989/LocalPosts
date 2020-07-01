import { Component, OnInit } from '@angular/core';
import { Categories } from './../../../shared/Posts/Categories';
import { CategoriesService } from './../../../services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[];

  constructor(private _categoriesService: CategoriesService) { 
    this.categories = [];
  }

  ngOnInit(): void {
    this.categories = this._categoriesService.getCategories();
  }

}
