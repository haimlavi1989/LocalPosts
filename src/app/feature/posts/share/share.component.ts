import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../shared/models/Categorie';
import { CategoriesService } from './../../../feature/shared/services/categories/categories.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { photoType } from "../../shared/validators/photo-type.validator"
import { PostsService } from './../../../feature/shared/services/posts/posts.service';
import { shareData } from './share-data.model';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  categories: Categorie[];
  sharePostFormGroup: FormGroup;
  postMessage: FormControl;
  postImage: FormControl;
  postCategorie: FormControl;
  errorEmptyFields: string;
  minlength12: string;
  center: google.maps.LatLngLiteral;
  public isLoadingShare: boolean = false;
  selectedSubject: string;
  fileToUpload: File = null;

  constructor(private _categoriesService: CategoriesService,
    private postsService: PostsService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute ) { 
    this.categories = [];
  }

  ngOnInit(): void {
    this.getUserLocation();
    this.selectedSubject = this.activatedRoute.snapshot.params.subjectName;
    this.categories = this._categoriesService.getCategories();    
    this.initForm();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }

  createFormControls() {
    this.postMessage = new FormControl(null, [Validators.required, Validators.minLength(12)]);
    this.postCategorie = new FormControl( this.selectedSubject ? this.selectedSubject : this.categories[0].title, []);;
  }

  initForm() {
    this.createFormControls();
    this.errorEmptyFields = "Can not be empty!";
    this.minlength12 = "Min length is 12.";
    this.sharePostFormGroup = new FormGroup({
      postMessage: this.postMessage,
      postCategorie: this.postCategorie
    });
  }

  uploadFile(files: FileList) {
    this.fileToUpload = files.item(0) as File;
  }

  onSubmit() {

    this.isLoadingShare = true;
    const data: shareData = {subject: '', description: '', location: { "type": "Point", "coordinates": [0, 0] }, file: null};
    data.subject = this.sharePostFormGroup.get('postCategorie').value;
    data.description = this.sharePostFormGroup.get('postMessage').value;
    data.location = { "type": "Point", "coordinates": [this.center.lat, this.center.lng] };
    data.file = this.fileToUpload;

    const postData = new FormData(); 
    postData.append("subject", data.subject);
    postData.append("description", data.description);
    postData.append("location", JSON.stringify(data.location));
    postData.append("file", data.file);

    this.postsService.addNewPost(postData).subscribe(
      response => {
        this.isLoadingShare = false;
    }, error => {
        this.isLoadingShare = false;
    });
  }

}