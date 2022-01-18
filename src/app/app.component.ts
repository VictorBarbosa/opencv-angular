import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OpencvAngularService } from '../../projects/opencv-angular-lib/src/public-api';
const constraints = {
  'qvga': { width: { exact: 320 }, height: { exact: 240 } },
  'vga': { width: { exact: 640 }, height: { exact: 480 } }
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'opencv-angular';
  /**
   *
   */
  @ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement> | null = null;
  @ViewChild('canvasOutput', { static: true }) canvasOutput: ElementRef<HTMLCanvasElement> | null = null;
  constructor(private cv: OpencvAngularService) { }

  ngOnInit(): void { }

  start() {
    if (this.video) {
      const camera = this.cv.getStreamCamera(false, true);
      camera.subscribe(stream => {
        if (this.video && stream) {
          this.video.nativeElement.srcObject = stream
          this.video.nativeElement.play();
          this.video.nativeElement.addEventListener('canplay', () => this.newVideo(), false)
        }

      })
    }
    // const HEAP8:Mat = this.ser.ellipse2Poly();
  }
  stop() {
    if (this.video) {
      this.video.nativeElement.pause()

    }
  }
  private newVideo(): void {

    if (this.video?.nativeElement) {
      const width = constraints.vga.width.exact
      const height = constraints.vga.height.exact

      this.video.nativeElement.setAttribute('width', width.toString())
      this.video.nativeElement.setAttribute('height', height.toString())

      let src = this.cv.Mat(height, width, this.cv.CV_8UC4);
      let dst = this.cv.Mat(height, width, this.cv.CV_8UC1);
      let cap = this.cv.VideoCapture(this.video?.nativeElement);
      const _cv = this.cv;
      const FPS = 30;
      function processVideo() {
        try {

          let begin = Date.now();
          // start processing.
          cap.read(src);

          const col: number = 37
          _cv.cvtColor(src, dst, col);
          // //  cv.cvtColor(src, dst, 0);

          try {
            _cv.imshow('canvasOutput', dst);
          } catch (error) {
            // divLog.innerHTML = error
          }
          // // schedule the next one.
          let delay = 1000 / FPS - (Date.now() - begin);
          // console.clear()
          // VideoExemple.prototype.AddColorDontWorks(seletectColor)
          setTimeout(processVideo, delay);
        } catch (err) {
          debugger
          console.error(err)
          console.log(err)
          console.error(err)
          // src.delete();
          // dst.delete();
          // divLog.innerHTML = err
          // startAndStop.click()

        }
      };

      // // schedule the first one.
      setTimeout(processVideo, 0);
    }
  }

}
