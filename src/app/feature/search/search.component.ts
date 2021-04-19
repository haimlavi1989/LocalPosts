import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchPostFormGroup: FormGroup;
  search: FormControl;
  isLoadingSearch: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  createFormControls() {
    this.search = new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
  }

  initForm() {
    this.createFormControls();

    this.searchPostFormGroup = new FormGroup({
      search: this.search,
    });
  }

  onSubmit(form: FormGroup) {
  }

}
