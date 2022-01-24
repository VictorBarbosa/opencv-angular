import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OpencvAngularService } from '../../../../projects/opencv-angular-lib/src/public-api';


@Component({
  selector: 'app-opencvideos',
  templateUrl: './opencvideos.component.html',
  styleUrls: ['./opencvideos.component.scss']
})
export class OpencvideosComponent implements OnInit {



  @ViewChild('hiddenVideo', { static: true }) hiddenVideo: ElementRef<HTMLVideoElement> | null = null;
  @ViewChild('canvasOutPut', { static: true }) canvasOutPut: ElementRef<HTMLCanvasElement> | null = null;


  constructor(private cv: OpencvAngularService) { }

  ngOnInit(): void { }


  private _colorSelected: number | null = null;
  public get colorSelected(): number | null {
    return this._colorSelected;
  }
  public set colorSelected(v: number | null) {
    this._colorSelected = v;
  }


  private _mediaStream: MediaStream | null = null;
  public get mediaStream(): MediaStream | null {
    return this._mediaStream;
  }
  public set mediaStream(v: MediaStream | null) {
    this._mediaStream = v;
  }



  private _stopFace: any | null = null;
  public get stopFace(): any | null {
    return this._stopFace;
  }
  public set stopFace(v: any | null) {
    this._stopFace = v;
  }



  startVideo() {
    this.cv.getStreamCamera(false, true).subscribe(mediaStream => {
      this.mediaStream = mediaStream
    })
  }

  camOn() {
    this.startVideo()
  }
  /**
   * detectFace
   */
  detectFace() {

    if (this.mediaStream && this.hiddenVideo?.nativeElement && this.canvasOutPut?.nativeElement) {

      this.hiddenVideo.nativeElement.srcObject = this.mediaStream;
      const faceCascadeFile = 'haarcascade_frontalface_default.xml';
      const faceCascadePath = 'assets/';

      this.hiddenVideo.nativeElement.width = 550;
      this.hiddenVideo.nativeElement.height = 550;

      const colorRGBAFace = {
        r: 255,
        g: 0,
        b: 0,
        a: 150
      }

      // this.faceStopId =
      this.stopFace = this.cv.detectDefaultInVideo(this.hiddenVideo.nativeElement, this.canvasOutPut.nativeElement, faceCascadeFile, faceCascadePath, colorRGBAFace);


    }
  }

  detectEyes() {

    if (this.mediaStream && this.hiddenVideo?.nativeElement && this.canvasOutPut?.nativeElement) {
      this.hiddenVideo.nativeElement.srcObject = this.mediaStream;

      const eyeCascadeFile = 'haarcascade_eye.xml';
      const eyeCascadePath = 'assets/';

      this.hiddenVideo.nativeElement.width = 550;
      this.hiddenVideo.nativeElement.height = 550;

      const colorRGBAEyes = {
        r: 255,
        g: 255,
        b: 0,
        a: 255
      }

      // this.eyeStopId =
      this.stopFace = this.cv.detectDefaultInVideo(this.hiddenVideo.nativeElement, this.canvasOutPut.nativeElement, eyeCascadeFile, eyeCascadePath, colorRGBAEyes);

    }

  }

  /**
   *
   */
  stopEyes() {
    if (this.mediaStream && this.hiddenVideo?.nativeElement && this.canvasOutPut?.nativeElement) {
      this.stopFace.stopVideo()
    }
  }

  /**
   *
   */
  stopFaces() {
    if (this.mediaStream && this.hiddenVideo?.nativeElement && this.canvasOutPut?.nativeElement) {
      this.stopFace.stopVideo()
    }
  }
}
