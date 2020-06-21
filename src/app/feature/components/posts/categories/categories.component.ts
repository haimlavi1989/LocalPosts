import { Component, OnInit } from '@angular/core';
import { Categories } from './../../../shared/Posts/Categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[];

  constructor() { 
    this.categories = [];
  }

  ngOnInit(): void {
    this.categories.push(new Categories("Rent", "rent.png"))
    this.categories.push(new Categories("Sale", "sale.png"))
    this.categories.push(new Categories("Share knolage", "share_knowledge_icon.png"))
    this.categories.push(new Categories("Handing", "handing_icon.png"))
    this.categories.push(new Categories("Dating", "dating.png"))
    this.categories.push(new Categories("Lost", "lost.png"))
    this.categories.push(new Categories("Partners", "partners.png"))
    this.categories.push(new Categories("Sale", "sale_icon.png")) 
    
  }

}
