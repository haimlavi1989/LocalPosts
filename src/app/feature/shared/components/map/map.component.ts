import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { Post } from '../../../shared/models/Post';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  @Input() posts: Post[];

  markers: any[];
  infoContent: string;
  zoom: number;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions;
  defulPhoto: string;
  backEndUrl: string;

  constructor() { 
    this.backEndUrl = environment.backEndUrl;
    this.defulPhoto = environment.appDefulPhoto;
  }

  ngOnInit() {

    this.initGoogleMapsParms();
    this.addMarkers();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }  

  }

  addMarkers() {
    this.posts.forEach(post => {
      this.addMarker(post);
    });
  }

  click(event: google.maps.MouseEvent) {}

  initGoogleMapsParms() {
    this.markers = [];
    this.infoContent = '';
    this.zoom = 12;
    this.options = {
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      mapTypeId: 'roadmap',
      maxZoom: 30,
      minZoom: 8
    };
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  customIcon(photo: string) {
    let photoUrl: string;
    photoUrl = photo ? this.backEndUrl+photo : this.defulPhoto

    return {
      url: photoUrl,
      scaledSize: {height: 30, width: 30},
    };
  }
 
  addMarker(post: Post) {
    this.markers.push({
      position: {
        lat: post.location.coordinates[0]*1, 
        lng: post.location.coordinates[1]*1,
      },
      label: {
        color: 'red',
        text: post.subject,
      },
      info: post.description,
      options: {
        animation: google.maps.Animation.BOUNCE,
        icon: this.customIcon(post.imageCover)
      },
    })
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }

}
