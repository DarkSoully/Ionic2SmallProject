import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var CameraPreview:any;
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController, private zone:NgZone) {
  }


}
