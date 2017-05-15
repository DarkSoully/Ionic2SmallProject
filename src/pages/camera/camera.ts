import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Camera page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var CameraPreview:any;
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class Camera {
  public getWidth: number;
  public getHeight : number;
  public calcWidth : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private zone:NgZone) {
    this.zone.run(() => {
      this.getWidth = window.innerWidth;

      this.getHeight = window.innerHeight - 57;

    });
    console.log('width',this.getWidth);

    this.calcWidth = this.getWidth - 80;  // Calculate the width of device and substract 80 from device width;

    console.log('calc width',this.calcWidth);

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.startCamera();
  }

  ionViewWillLeave() {
    this.stopCamera();
  }
  startCamera(){
    // let react = {x: 40, y: 100, width: this.calcWidth ,height: 220}   //Decrepted due to previous code
    CameraPreview.startCamera({x: 0, y: 0, width: this.getWidth, height: this.getHeight, toBack: false, previewDrag: true, tapPhoto: true});
    //.startCamera(react, defaultCamera:'back',tapEnabled: true, dragEnabled: true, toBack:true, alpha:1);  //Decrepeted
  }

  stopCamera(){
    CameraPreview.stopCamera();
  }


  SwitchCamera(){
    CameraPreview.switchCamera();
  }
  showCamera(){
    CameraPreview.show();
  }
  hideCamera(){
    CameraPreview.hide();
  }

}
