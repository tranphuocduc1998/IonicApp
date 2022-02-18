import { Component, ViewEncapsulation } from '@angular/core';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@awesome-cordova-plugins/camera-preview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  selectedFileVideo;
  selectedFileImage;

  intervallRef;
  count = 0;
  cameraPickture;
  showCamera = false;


  constructor(
    private cameraPreview: CameraPreview,
  ) {
  }

  /**
   * importFileVideo: Hàm lấy file video
   */
  importFileVideo(event) {
    this.selectedFileImage = null;
    this.selectedFileVideo = null;
    const reader = new FileReader();

    if (event.target.files.length === 0) {
      console.log('Không có file được chọn');
      return;
    }
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = ((r) => {
      this.selectedFileVideo = r.target.result;
    });
  }

  /**
   * importFileImage: Hàm lấy file hình ảnh
   */
  importFileImage(event) {
    this.selectedFileImage = null;
    this.selectedFileVideo = null;
    const reader = new FileReader();

    if (event.target.files.length === 0) {
      console.log('Không có file được chọn');
      return;
    }
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = ((r) => {
      this.selectedFileImage = r.target.result;
    });
  }

  /**
   * openCamera: Mở camera trên thiết bị
   */
  openCamera() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 10,
      y: 10,
      width: window.screen.width,
      height: window.screen.height,
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
        this.showCamera = true;
        this.count = 0;
        this.setInterval();
      },
      (err) => {
        console.log(err);
      });
  }

  /**
   * stopCamera: Ngừng camera
   */
  stopCamera() {
    this.cameraPreview.stopCamera().then(data => {
      clearInterval(this.intervallRef);
      this.showCamera = false;
      this.count = 0;
    }).catch(error => {
      console.log(error);
    });
  }

  /**
   * takePicture: Chụp hình ảnh
   */
  takePicture() {
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    };

    // // takeSnapshot
    // this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
    //   this.cameraPickture = 'data:image/jpeg;base64,' + imageData;


    //   this.count += 1;
    //   console.log(this.count);
    // }, (err) => {
    //   console.log(err);
    // });

    // take a snap shot
    this.cameraPreview.takeSnapshot(pictureOpts).then((imageData) => {
      this.cameraPickture = 'data:image/jpeg;base64,' + imageData;


      this.count += 1;
      console.log(this.count);
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * takePicture: Chụp hình ảnh
   */
  setInterval() {
    this.intervallRef = setInterval(() => {
      this.takePicture();
    }, 1000);
  }
}
