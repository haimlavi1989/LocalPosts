import { Component, OnInit } from '@angular/core';
import { IconDefinition, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  fauser: IconDefinition;
  falock: IconDefinition;

  constructor() { }

  ngOnInit(): void {
    this.initFontIcons();
  }

  initFontIcons() { 
    this.fauser = faUser;
    this.falock = faLock;
  }

}
