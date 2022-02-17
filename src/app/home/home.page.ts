import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@awesome-cordova-plugins/camera-preview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private cameraPreview: CameraPreview,
  ) {
  }

  openCamera() {
    console.log('openCamera');

    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1,
      storeToFile: false
    };

    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }
}
