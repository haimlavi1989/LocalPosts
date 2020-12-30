import { Component, OnInit, ViewChild  } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { PostsService } from './../../services/posts/posts.service';
import { Post } from '../../shared/Posts/Post';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-postsonmap',
  templateUrl: './postsonmap.component.html',
  styleUrls: ['./postsonmap.component.css']
})
export class PostsonmapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  posts: Post[] = [];
  markers: any[];
  infoContent: string;
  zoom: number;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions;
  defulPhoto: string;
  backEndUrl: string;


  constructor(private postServece: PostsService) {
    this.backEndUrl = environment.backEndUrl;
    this.defulPhoto = "/assets/images/icon_only_150.png";
  }

  ngOnInit() {

    this.initGoogleMapsParms();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.getNearbyPosts();
      })
    }  

  }

  getNearbyPosts() {
    this.postServece.getPosts(1000, [this.center.lat, this.center.lng], 'km').subscribe(
      response => {
        this.posts = response.data.data;
        this.addMarkers(); 
      })
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

