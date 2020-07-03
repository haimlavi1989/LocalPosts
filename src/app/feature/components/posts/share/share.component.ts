import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../shared/Posts/Categorie';
import { CategoriesService } from './../../../services/categories/categories.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  categories: Categorie[];
  selectedCatId: number;

  constructor(private _categoriesService: CategoriesService,
    private route: ActivatedRoute ) { 
    this.categories = [];
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.selectedCatId = +params['id'];
    });

    this.categories = this._categoriesService.getCategories();    
  }

}
