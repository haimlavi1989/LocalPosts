import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../shared/Posts/Categorie';
import { CategoriesService } from './../../services/categories/categories.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { photoType } from "../../shared/Posts/validators/photo-type.validator"

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  categories: Categorie[];
  selectedCatId: number;
  sharePostFormGroup: FormGroup;
  postMessage: FormControl;
  PostImage: FormControl;
  PostCategorie: FormControl;
  errorEmptyFields: string;
  minlength12: string;

  constructor(private _categoriesService: CategoriesService,
    private route: ActivatedRoute ) { 
    this.categories = [];
    this.selectedCatId = -1;
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
       this.selectedCatId = +params['id'];
    });

    this.categories = this._categoriesService.getCategories();    
    this.initForm();
  }

  createFormControls() {
    this.postMessage = new FormControl(null, [Validators.required, Validators.minLength(12)]);
    this.PostImage = new FormControl(null, []);
    this.PostCategorie = new FormControl( (this.selectedCatId > 0) ? this.selectedCatId : 1, []);
  }

  initForm() {
    this.createFormControls();
    this.errorEmptyFields = "Can not be empty!";
    this.minlength12 = "Min length is 12.";
    this.sharePostFormGroup = new FormGroup({
      postMessage: this.postMessage,
      PostImage: this.PostImage,
      PostCategorie: this.PostCategorie
    });
  }

  onSubmit() {
  }

}
