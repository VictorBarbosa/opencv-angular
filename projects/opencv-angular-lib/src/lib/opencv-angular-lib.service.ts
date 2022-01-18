import { Injectable } from '@angular/core';
import { OpencvProperties, Mat, CLAHE } from './opencv-angular';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
declare const cv: any;
declare const Utils: any;

@Injectable({
  providedIn: 'root'
}

)
export class OpencvAngularService extends OpencvProperties {
  /**
   * constructor
   */
  constructor() { super(cv); }


  /**
  * Mat
  * @returns Return a new Instance from Mat
  * @param args
  * @returns
  */
  public Mat(...args: [rows: number, cols: number, type: number] | []): Mat {
    if (args) {
      const rows = args[0]
      const cols = args[1]
      const type = args[2]
      return new cv.Mat(rows, cols, type);
    } else {
      return new cv.Mat();
    }
  }


  public HoughCircles(): any {
    return cv.HoughCircles()
  }

  public GaussianBlur(): any {
    return cv.GaussianBlur()
  }

  public HoughLines(): any {
    return cv.HoughLines()
  }

  public HoughLinesP(): any {
    return cv.HoughLinesP()
  }

  public Laplacian(): any {
    return cv.Laplacian()
  }

  public Scharr(): any {
    return cv.Scharr()
  }
  public Sobel(): any {
    return cv.Sobel()
  }

  public add(): any {
    return cv.add()
  }

  public addWeighted(): any {
    return cv.addWeighted()
  }

  public Canny(): any {
    return cv.Canny()
  }

  public Canny1(): any {
    return cv.Canny1()
  }

  public bilateralFilter(): any {
    return cv.bilateralFilter()
  }

  public bitwise_and(): any {
    return cv.bitwise_and()
  }

  public bitwise_not(): any {
    return cv.bitwise_not()
  }

  public bitwise_or(): any {
    return cv.bitwise_or()
  }

  public bitwise_xor(): any {
    return cv.bitwise_xor()
  }

  public blobFromImage(): any {
    return cv.blobFromImage()
  }

  public blur(): any {
    return cv.blur()
  }

  public boxFilter(): any {
    return cv.boxFilter()
  }

  public calcOpticalFlowPyrLK(): any {
    return cv.calcOpticalFlowPyrLK()
  }

  public calcHist(): any {
    return cv.calcHist()
  }

  public cartToPolar(): any {
    return cv.cartToPolar()
  }

  public circle(): any {
    return cv.circle()
  }

  public connectedComponents(): any {
    return cv.connectedComponents()
  }

  public connectedComponentsWithStats(): any {
    return cv.connectedComponentsWithStats()
  }

  public contourArea(): any {
    return cv.contourArea()
  }

  public convertScaleAbs(): any {
    return cv.convertScaleAbs()
  }

  public convexHull(): any {
    return cv.convexHull()
  }

  public copyMakeBorder(): any {
    return cv.copyMakeBorder()
  }

  public cornerHarris(): any {
    return cv.cornerHarris()
  }

  public cornerMinEigenVal(): any {
    return cv.cornerMinEigenVal()
  }

  public cvtColor(src: Mat, dst: Mat, color: number) {
    cv.cvtColor(src, dst, color)
  }

  public demosaicing(): any {
    return cv.demosaicing()
  }

  public dft(): any {
    return cv.dft()
  }

  public dilate(): any {
    return cv.dilate()
  }

  public distanceTransform(): any {
    return cv.distanceTransform()
  }

  public distanceTransformWithLabels(): any {
    return cv.distanceTransformWithLabels()
  }

  public divide(): any {
    return cv.divide()
  }

  public divide1(): any {
    return cv.divide1()
  }

  public drawContours(): any {
    return cv.drawContours()
  }

  public dynCall_di(): any {
    return cv.dynCall_di()
  }

  public dynCall_dii(): any {
    return cv.dynCall_dii()
  }

  public dynCall_diiddi(): any {
    return cv.dynCall_diiddi()
  }

  public dynCall_diii(): any {
    return cv.dynCall_diii()
  }

  public dynCall_diiid(): any {
    return cv.dynCall_diiid()
  }

  public dynCall_diiiddi(): any {
    return cv.dynCall_diiiddi()
  }

  public dynCall_diiii(): any {
    return cv.dynCall_diiii()
  }

  public dynCall_diiiid(): any {
    return cv.dynCall_diiiid()
  }

  public dynCall_diiiii(): any {
    return cv.dynCall_diiiii()
  }

  public dynCall_diiiiii(): any {
    return cv.dynCall_diiiiii()
  }

  public dynCall_diiiiiii(): any {
    return cv.dynCall_diiiiiii()
  }

  public dynCall_diiiiiiii(): any {
    return cv.dynCall_diiiiiiii()
  }

  public dynCall_fii(): any {
    return cv.dynCall_fii()
  }

  public dynCall_fiii(): any {
    return cv.dynCall_fiii()
  }

  public dynCall_fiiii(): any {
    return cv.dynCall_fiiii()
  }

  public dynCall_fiiiii(): any {
    return cv.dynCall_fiiiii()
  }

  public dynCall_i(): any {
    return cv.dynCall_i()
  }

  public dynCall_ii(): any {
    return cv.dynCall_ii()
  }

  public dynCall_iid(): any {
    return cv.dynCall_iid()
  }

  public dynCall_iidi(): any {
    return cv.dynCall_iidi()
  }

  public dynCall_iii(): any {
    return cv.dynCall_iii()
  }

  public dynCall_iiid(): any {
    return cv.dynCall_iiid()
  }

  public dynCall_iiidd(): any {
    return cv.dynCall_iiidd()
  }

  public dynCall_iiidi(): any {
    return cv.dynCall_iiidi()
  }

  public dynCall_iiidii(): any {
    return cv.dynCall_iiidii()
  }

  public dynCall_iiidiii(): any {
    return cv.dynCall_iiidiii()
  }

  public dynCall_iiidiiii(): any {
    return cv.dynCall_iiidiiii()
  }

  public dynCall_iiii(): any {
    return cv.dynCall_iiii()
  }

  public dynCall_iiiid(): any {
    return cv.dynCall_iiiid()
  }

  public dynCall_iiiif(): any {
    return cv.dynCall_iiiif()
  }

  public dynCall_iiiii(): any {
    return cv.dynCall_iiiii()
  }

  public dynCall_iiiiid(): any {
    return cv.dynCall_iiiiid()
  }

  public dynCall_iiiiii(): any {
    return cv.dynCall_iiiiii()
  }

  public dynCall_iiiiiid(): any {
    return cv.dynCall_iiiiiid()
  }

  public dynCall_iiiiiii(): any {
    return cv.dynCall_iiiiiii()
  }

  public dynCall_iiiiiiii(): any {
    return cv.dynCall_iiiiiiii()
  }

  public dynCall_iiiiiiiididiii(): any {
    return cv.dynCall_iiiiiiiididiii()
  }

  public dynCall_iiiiiiiii(): any {
    return cv.dynCall_iiiiiiiii()
  }

  public dynCall_iiiiiiiiiiiii(): any {
    return cv.dynCall_iiiiiiiiiiiii()
  }

  public dynCall_iiiiij(): any {
    return cv.dynCall_iiiiij()
  }

  public dynCall_ji(): any {
    return cv.dynCall_ji()
  }

  public dynCall_jii(): any {
    return cv.dynCall_jii()
  }

  public dynCall_jiii(): any {
    return cv.dynCall_jiii()
  }

  public dynCall_jiiii(): any {
    return cv.dynCall_jiiii()
  }

  public dynCall_v(): any {
    return cv.dynCall_v()
  }

  public dynCall_vdii(): any {
    return cv.dynCall_vdii()
  }

  public dynCall_vdiii(): any {
    return cv.dynCall_vdiii()
  }

  public dynCall_vi(): any {
    return cv.dynCall_vi()
  }

  public dynCall_vid(): any {
    return cv.dynCall_vid()
  }

  public dynCall_vidi(): any {
    return cv.dynCall_vidi()
  }

  public dynCall_vididdi(): any {
    return cv.dynCall_vididdi()
  }

  public dynCall_vididdii(): any {
    return cv.dynCall_vididdii()
  }

  public dynCall_vidii(): any {
    return cv.dynCall_vidii()
  }

  public dynCall_vidiii(): any {
    return cv.dynCall_vidiii()
  }

  public dynCall_vifi(): any {
    return cv.dynCall_vifi()
  }

  public dynCall_vii(): any {
    return cv.dynCall_vii()
  }

  public dynCall_viid(): any {
    return cv.dynCall_viid()
  }

  public dynCall_viidd(): any {
    return cv.dynCall_viidd()
  }

  public dynCall_viiddi(): any {
    return cv.dynCall_viiddi()
  }

  public dynCall_viiddid(): any {
    return cv.dynCall_viiddid()
  }

  public dynCall_viiddidd(): any {
    return cv.dynCall_viiddidd()
  }

  public dynCall_viiddiddd(): any {
    return cv.dynCall_viiddiddd()
  }

  public dynCall_viiddidddd(): any {
    return cv.dynCall_viiddidddd()
  }

  public dynCall_viiddii(): any {
    return cv.dynCall_viiddii()
  }

  public dynCall_viiddiii(): any {
    return cv.dynCall_viiddiii()
  }

  public dynCall_viidi(): any {
    return cv.dynCall_viidi()
  }

  public dynCall_viididdi(): any {
    return cv.dynCall_viididdi()
  }

  public dynCall_viididdii(): any {
    return cv.dynCall_viididdii()
  }

  public dynCall_viididi(): any {
    return cv.dynCall_viididi()
  }

  public dynCall_viididii(): any {
    return cv.dynCall_viididii()
  }

  public dynCall_viidii(): any {
    return cv.dynCall_viidii()
  }

  public dynCall_viidiii(): any {
    return cv.dynCall_viidiii()
  }

  public dynCall_viidiiid(): any {
    return cv.dynCall_viidiiid()
  }

  public dynCall_viidiiii(): any {
    return cv.dynCall_viidiiii()
  }

  public dynCall_viif(): any {
    return cv.dynCall_viif()
  }

  public dynCall_viii(): any {
    return cv.dynCall_viii()
  }

  public dynCall_viiid(): any {
    return cv.dynCall_viiid()
  }

  public dynCall_viiidd(): any {
    return cv.dynCall_viiidd()
  }

  public dynCall_viiiddd(): any {
    return cv.dynCall_viiiddd()
  }

  public dynCall_viiidddd(): any {
    return cv.dynCall_viiidddd()
  }

  public dynCall_viiiddddi(): any {
    return cv.dynCall_viiiddddi()
  }

  public dynCall_viiiddddii(): any {
    return cv.dynCall_viiiddddii()
  }

  public dynCall_viiidddi(): any {
    return cv.dynCall_viiidddi()
  }

  public dynCall_viiidddii(): any {
    return cv.dynCall_viiidddii()
  }

  public dynCall_viiidddiii(): any {
    return cv.dynCall_viiidddiii()
  }

  public dynCall_viiidddiiii(): any {
    return cv.dynCall_viiidddiiii()
  }

  public dynCall_viiiddi(): any {
    return cv.dynCall_viiiddi()
  }

  public dynCall_viiiddid(): any {
    return cv.dynCall_viiiddid()
  }

  public dynCall_viiiddidd(): any {
    return cv.dynCall_viiiddidd()
  }

  public dynCall_viiiddiddd(): any {
    return cv.dynCall_viiiddiddd()
  }

  public dynCall_viiiddidddd(): any {
    return cv.dynCall_viiiddidddd()
  }

  public dynCall_viiiddii(): any {
    return cv.dynCall_viiiddii()
  }

  public dynCall_viiiddiii(): any {
    return cv.dynCall_viiiddiii()
  }

  public dynCall_viiiddiiid(): any {
    return cv.dynCall_viiiddiiid()
  }

  public dynCall_viiiddiiii(): any {
    return cv.dynCall_viiiddiiii()
  }

  public dynCall_viiiddiiiid(): any {
    return cv.dynCall_viiiddiiiid()
  }

  public dynCall_viiidi(): any {
    return cv.dynCall_viiidi()
  }

  public dynCall_viiididi(): any {
    return cv.dynCall_viiididi()
  }

  public dynCall_viiididii(): any {
    return cv.dynCall_viiididii()
  }

  public dynCall_viiidii(): any {
    return cv.dynCall_viiidii()
  }

  public dynCall_viiidiiddi(): any {
    return cv.dynCall_viiidiiddi()
  }

  public dynCall_viiidiii(): any {
    return cv.dynCall_viiidiii()
  }

  public dynCall_viiidiiid(): any {
    return cv.dynCall_viiidiiid()
  }

  public dynCall_viiidiiii(): any {
    return cv.dynCall_viiidiiii()
  }

  public dynCall_viiidiiiidi(): any {
    return cv.dynCall_viiidiiiidi()
  }

  public dynCall_viiif(): any {
    return cv.dynCall_viiif()
  }

  public dynCall_viiii(): any {
    return cv.dynCall_viiii()
  }

  public dynCall_viiiid(): any {
    return cv.dynCall_viiiid()
  }

  public dynCall_viiiidd(): any {
    return cv.dynCall_viiiidd()
  }

  public dynCall_viiiiddd(): any {
    return cv.dynCall_viiiiddd()
  }

  public dynCall_viiiidddd(): any {
    return cv.dynCall_viiiidddd()
  }

  public dynCall_viiiiddddi(): any {
    return cv.dynCall_viiiiddddi()
  }

  public dynCall_viiiiddddii(): any {
    return cv.dynCall_viiiiddddii()
  }

  public dynCall_viiiidddi(): any {
    return cv.dynCall_viiiidddi()
  }

  public dynCall_viiiidddii(): any {
    return cv.dynCall_viiiidddii()
  }

  public dynCall_viiiidddiii(): any {
    return cv.dynCall_viiiidddiii()
  }

  public dynCall_viiiidddiiii(): any {
    return cv.dynCall_viiiidddiiii()
  }

  public dynCall_viiiiddi(): any {
    return cv.dynCall_viiiiddi()
  }

  public dynCall_viiiiddii(): any {
    return cv.dynCall_viiiiddii()
  }

  public dynCall_viiiiddiii(): any {
    return cv.dynCall_viiiiddiii()
  }

  public dynCall_viiiiddiiid(): any {
    return cv.dynCall_viiiiddiiid()
  }

  public dynCall_viiiiddiiii(): any {
    return cv.dynCall_viiiiddiiii()
  }

  public dynCall_viiiiddiiiid(): any {
    return cv.dynCall_viiiiddiiiid()
  }

  public dynCall_viiiidi(): any {
    return cv.dynCall_viiiidi()
  }

  public dynCall_viiiidii(): any {
    return cv.dynCall_viiiidii()
  }

  public dynCall_viiiidiid(): any {
    return cv.dynCall_viiiidiid()
  }

  public dynCall_viiiidiidd(): any {
    return cv.dynCall_viiiidiidd()
  }

  public dynCall_viiiidiiddi(): any {
    return cv.dynCall_viiiidiiddi()
  }

  public dynCall_viiiidiii(): any {
    return cv.dynCall_viiiidiii()
  }

  public dynCall_viiiidiiii(): any {
    return cv.dynCall_viiiidiiii()
  }

  public dynCall_viiiidiiiidi(): any {
    return cv.dynCall_viiiidiiiidi()
  }

  public dynCall_viiiif(): any {
    return cv.dynCall_viiiif()
  }

  public dynCall_viiiii(): any {
    return cv.dynCall_viiiii()
  }

  public dynCall_viiiiid(): any {
    return cv.dynCall_viiiiid()
  }

  public dynCall_viiiiidd(): any {
    return cv.dynCall_viiiiidd()
  }

  public dynCall_viiiiiddi(): any {
    return cv.dynCall_viiiiiddi()
  }

  public dynCall_viiiiidi(): any {
    return cv.dynCall_viiiiidi()
  }

  public dynCall_viiiiidii(): any {
    return cv.dynCall_viiiiidii()
  }

  public dynCall_viiiiidiid(): any {
    return cv.dynCall_viiiiidiid()
  }

  public dynCall_viiiiidiidd(): any {
    return cv.dynCall_viiiiidiidd()
  }

  public dynCall_viiiiidiiddi(): any {
    return cv.dynCall_viiiiidiiddi()
  }

  public dynCall_viiiiidiii(): any {
    return cv.dynCall_viiiiidiii()
  }

  public dynCall_viiiiidiiii(): any {
    return cv.dynCall_viiiiidiiii()
  }

  public dynCall_viiiiidiiiii(): any {
    return cv.dynCall_viiiiidiiiii()
  }

  public dynCall_viiiiii(): any {
    return cv.dynCall_viiiiii()
  }

  public dynCall_viiiiiid(): any {
    return cv.dynCall_viiiiiid()
  }

  public dynCall_viiiiiidd(): any {
    return cv.dynCall_viiiiiidd()
  }

  public dynCall_viiiiiiddi(): any {
    return cv.dynCall_viiiiiiddi()
  }

  public dynCall_viiiiiidi(): any {
    return cv.dynCall_viiiiiidi()
  }

  public dynCall_viiiiiidii(): any {
    return cv.dynCall_viiiiiidii()
  }

  public dynCall_viiiiiidiii(): any {
    return cv.dynCall_viiiiiidiii()
  }

  public dynCall_viiiiiidiiii(): any {
    return cv.dynCall_viiiiiidiiii()
  }

  public dynCall_viiiiiidiiiii(): any {
    return cv.dynCall_viiiiiidiiiii()
  }

  public dynCall_viiiiiii(): any {
    return cv.dynCall_viiiiiii()
  }

  public dynCall_viiiiiiid(): any {
    return cv.dynCall_viiiiiiid()
  }

  public dynCall_viiiiiiidd(): any {
    return cv.dynCall_viiiiiiidd()
  }

  public dynCall_viiiiiiiddi(): any {
    return cv.dynCall_viiiiiiiddi()
  }

  public dynCall_viiiiiiidi(): any {
    return cv.dynCall_viiiiiiidi()
  }

  public dynCall_viiiiiiii(): any {
    return cv.dynCall_viiiiiiii()
  }

  public dynCall_viiiiiiiii(): any {
    return cv.dynCall_viiiiiiiii()
  }

  public dynCall_viiiiiiiiidd(): any {
    return cv.dynCall_viiiiiiiiidd()
  }

  public dynCall_viiiiiiiiii(): any {
    return cv.dynCall_viiiiiiiiii()
  }

  public dynCall_viiiiiiiiiid(): any {
    return cv.dynCall_viiiiiiiiiid()
  }

  public dynCall_viiiiiiiiiiddi(): any {
    return cv.dynCall_viiiiiiiiiiddi()
  }

  public dynCall_viiiiiiiiiii(): any {
    return cv.dynCall_viiiiiiiiiii()
  }

  public dynCall_viiiiiiiiiiid(): any {
    return cv.dynCall_viiiiiiiiiiid()
  }

  public dynCall_viiiij(): any {
    return cv.dynCall_viiiij()
  }

  public dynCall_viiij(): any {
    return cv.dynCall_viiij()
  }

  public dynCall_viijii(): any {
    return cv.dynCall_viijii()
  }

  public dynCall_viji(): any {
    return cv.dynCall_viji()
  }

  public eigen(): any {
    return cv.eigen()
  }

  public ellipse(): any {
    return cv.ellipse()
  }

  public ellipse1(): any {
    return cv.ellipse1()
  }

  public erode(): any {
    return cv.erode()
  }

  public establishStackSpace(): any {
    return cv.establishStackSpace()
  }

  public filter2D(): any {
    return cv.filter2D()
  }

  public findContours(): any {
    return cv.findContours()
  }

  public findTransformECC(): any {
    return cv.findTransformECC()
  }

  public gemm(): any {
    return cv.gemm()
  }

  public getStructuringElement(): any {
    return cv.getStructuringElement()
  }

  public getTempRet0(): any {
    return cv.getTempRet0()
  }

  public goodFeaturesToTrack(): any {
    return cv.goodFeaturesToTrack()
  }

  public goodFeaturesToTrack1(): any {
    return cv.goodFeaturesToTrack1()
  }

  public grabCut(): any {
    return cv.grabCut()
  }

  public groupRectangles(): any {
    return cv.groupRectangles()
  }

  public integral(): any {
    return cv.integral()
  }

  public integral2(): any {
    return cv.integral2()
  }

  public invert(): any {
    return cv.invert()
  }

  public kmeans(): any {
    return cv.kmeans()
  }

  public resize(): any {
    return cv.resize()
  }

  public runPostSets(): any {
    return cv.runPostSets()
  }

  public sepFilter2D(): any {
    return cv.sepFilter2D()
  }

  public setIdentity(): any {
    return cv.setIdentity()
  }

  public setTempRet0(): any {
    return cv.setTempRet0()
  }

  public setThrew(): any {
    return cv.setThrew()
  }

  public solve(): any {
    return cv.solve()
  }

  public solvePoly(): any {
    return cv.solvePoly()
  }

  public stackAlloc(): any {
    return cv.stackAlloc()
  }

  public stackRestore(): any {
    return cv.stackRestore()
  }

  public stackSave(): any {
    return cv.stackSave()
  }

  public subtract(): any {
    return cv.subtract()
  }

  public matchTemplate(): any {
    return cv.matchTemplate()
  }

  public mean(): any {
    return cv.mean()
  }

  public meanStdDev(): any {
    return cv.meanStdDev()
  }

  public minMaxLoc(): any {
    return cv.minMaxLoc()
  }

  public moments(): any {
    return cv.moments()
  }

  public morphologyEx(): any {
    return cv.morphologyEx()
  }

  public multiply(): any {
    return cv.multiply()
  }

  public norm(): any {
    return cv.norm()
  }

  public norm1(): any {
    return cv.norm1()
  }

  public normalize(): any {
    return cv.normalize()
  }

  public polarToCart(): any {
    return cv.polarToCart()
  }

  public print(): any {
    return cv.print()
  }

  public printErr(): any {
    return cv.printErr()
  }

  public putText(): any {
    return cv.putText()
  }

  public pyrDown(): any {
    return cv.pyrDown()
  }

  public pyrUp(): any {
    return cv.pyrUp()
  }

  public readNetFromCaffe(): any {
    return cv.readNetFromCaffe()
  }

  public readNetFromDarknet(): any {
    return cv.readNetFromDarknet()
  }

  public readNetFromTensorflow(): any {
    return cv.readNetFromTensorflow()
  }

  public readNetFromTorch(): any {
    return cv.readNetFromTorch()
  }

  public rectangle(): any {
    return cv.rectangle()
  }

  public reduce(): any {
    return cv.reduce()
  }

  public undistort(): any {
    return cv.undistort()
  }

  public warpAffine(): any {
    return cv.warpAffine()
  }

  public warpPerspective(): any {
    return cv.warpPerspective()
  }

  public __GLOBAL__I_000101(): any {
    return cv.__GLOBAL__I_000101()
  }

  public __GLOBAL__sub_I_attr_value_pb_cc(): any {
    return cv.__GLOBAL__sub_I_attr_value_pb_cc()
  }

  public __GLOBAL__sub_I_bind_cpp(): any {
    return cv.__GLOBAL__sub_I_bind_cpp()
  }

  public __GLOBAL__sub_I_bindings_cpp(): any {
    return cv.__GLOBAL__sub_I_bindings_cpp()
  }

  public __GLOBAL__sub_I_color_lab_cpp(): any {
    return cv.__GLOBAL__sub_I_color_lab_cpp()
  }

  public __GLOBAL__sub_I_descriptor_pb_cc(): any {
    return cv.__GLOBAL__sub_I_descriptor_pb_cc()
  }

  public __GLOBAL__sub_I_detection_output_la(): any {
    return cv.__GLOBAL__sub_I_detection_output_la()
  }

  public __GLOBAL__sub_I_dnn_cpp(): any {
    return cv.__GLOBAL__sub_I_dnn_cpp()
  }

  public __GLOBAL__sub_I_function_pb_cc(): any {
    return cv.__GLOBAL__sub_I_function_pb_cc()
  }

  public __GLOBAL__sub_I_graph_pb_cc(): any {
    return cv.__GLOBAL__sub_I_graph_pb_cc()
  }

  public __GLOBAL__sub_I_haar_cpp(): any {
    return cv.__GLOBAL__sub_I_haar_cpp()
  }

  public __GLOBAL__sub_I_histogram_cpp(): any {
    return cv.__GLOBAL__sub_I_histogram_cpp()
  }

  public __GLOBAL__sub_I_hog_cpp(): any {
    return cv.__GLOBAL__sub_I_hog_cpp()
  }

  public __GLOBAL__sub_I_imgwarp_cpp(): any {
    return cv.__GLOBAL__sub_I_imgwarp_cpp()
  }

  public __GLOBAL__sub_I_init_cpp(): any {
    return cv.__GLOBAL__sub_I_init_cpp()
  }

  public __GLOBAL__sub_I_iostream_cpp(): any {
    return cv.__GLOBAL__sub_I_iostream_cpp()
  }

  public __GLOBAL__sub_I_kmeans_cpp(): any {
    return cv.__GLOBAL__sub_I_kmeans_cpp()
  }

  public __GLOBAL__sub_I_message_cc(): any {
    return cv.__GLOBAL__sub_I_message_cc()
  }

  public __GLOBAL__sub_I_op_def_pb_cc(): any {
    return cv.__GLOBAL__sub_I_op_def_pb_cc()
  }

  public __GLOBAL__sub_I_opencv_caffe_pb_cc(): any {
    return cv.__GLOBAL__sub_I_opencv_caffe_pb_cc()
  }

  public __GLOBAL__sub_I_persistence_types_c(): any {
    return cv.__GLOBAL__sub_I_persistence_types_c()
  }

  public __GLOBAL__sub_I_prior_box_layer_cpp(): any {
    return cv.__GLOBAL__sub_I_prior_box_layer_cpp()
  }

  public __GLOBAL__sub_I_status_cc(): any {
    return cv.__GLOBAL__sub_I_status_cc()
  }

  public __GLOBAL__sub_I_system_cpp(): any {
    return cv.__GLOBAL__sub_I_system_cpp()
  }

  public __GLOBAL__sub_I_tensor_pb_cc(): any {
    return cv.__GLOBAL__sub_I_tensor_pb_cc()
  }

  public __GLOBAL__sub_I_tensor_shape_pb_cc(): any {
    return cv.__GLOBAL__sub_I_tensor_shape_pb_cc()
  }

  public __GLOBAL__sub_I_types_pb_cc(): any {
    return cv.__GLOBAL__sub_I_types_pb_cc()
  }

  public __GLOBAL__sub_I_umatrix_cpp(): any {
    return cv.__GLOBAL__sub_I_umatrix_cpp()
  }

  public __GLOBAL__sub_I_versions_pb_cc(): any {
    return cv.__GLOBAL__sub_I_versions_pb_cc()
  }

  public ___cxa_can_catch(): any {
    return cv.___cxa_can_catch()
  }

  public ___cxa_demangle(): any {
    return cv.___cxa_demangle()
  }

  public ___cxa_is_pointer_type(): any {
    return cv.___cxa_is_pointer_type()
  }

  public ___errno_location(): any {
    return cv.___errno_location()
  }

  public ___getTypeName(): any {
    return cv.___getTypeName()
  }

  public _emscripten_replace_memory(): any {
    return cv._emscripten_replace_memory()
  }

  public _free(): any {
    return cv._free()
  }

  public _llvm_bswap_i32(): any {
    return cv._llvm_bswap_i32()
  }

  public _llvm_ctlz_i64(): any {
    return cv._llvm_ctlz_i64()
  }

  public _malloc(): any {
    return cv._malloc()
  }

  public _memcpy(): any {
    return cv._memcpy()
  }

  public _memmove(): any {
    return cv._memmove()
  }

  public _memset(): any {
    return cv._memset()
  }

  public _pthread_cond_broadcast(): any {
    return cv._pthread_cond_broadcast()
  }

  public _pthread_mutex_lock(): any {
    return cv._pthread_mutex_lock()
  }

  public _pthread_mutex_unlock(): any {
    return cv._pthread_mutex_unlock()
  }

  public _rintf(): any {
    return cv._rintf()
  }

  public _sbrk(): any {
    return cv._sbrk()
  }

  public remap(): any {
    return cv.remap()
  }

  public line(): any {
    return cv.line()
  }

  /**
   *
   * @param size
   * @returns  ArrayBuffer
   */
  public reallocBuffer(size: number): ArrayBuffer {
    return cv.reallocBuffer(size);
  }

  /**
   *
   * @param imageSource string | HTMLImageElement | HTMLCanvasElement
   * @returns Mat
   */
  public imread(imageSource: string | HTMLImageElement | HTMLCanvasElement): Mat {
    return cv.imread(imageSource);
  }

  /**
   *
   * @param canvasSource string | HTMLCanvasElement
   * @param mat Mat
   */
  public imshow(canvasSource: string | HTMLCanvasElement, mat: Mat) {
    cv.imshow(canvasSource, mat);
  }

  public dingError() {
    return cv.dingError();
  }

  /**
   * CLAHE
   * @returns CLAHE
   */
  public CLAHE(): CLAHE { return new cv.CLAHE() }

  /**
   * ellipse2Poly
   * @param arg0 any
   * @param arg1 any
   * @param arg2 any
   * @param arg3 any
   * @param arg4 any
   * @param arg5 any
   * @param arg6 any
   * @returns  ellipse2Poly
   */
  public ellipse2Poly(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any): any {
    return cv.ellipse2Poly(arg0, arg1, arg2, arg3, arg4, arg5, arg6)
  }

  /**
   * equalizeHist
   * @param arg0
   * @param arg1
   * @returns equalizeHist
   */
  public equalizeHist(arg0: Mat, arg1: Mat) {
    return cv.equalizeHist(arg0, arg1);
  }

  /**
   *  dnn_Net
   */
  public dnn_Net(): void {
    cv.dnn_Net();
  }
  /**
   * determinant
   * @param arg0
   * @returns
   */
  public determinant(arg0: Mat): any {
    return cv.determinant(arg0);
  }

  /**
   * estimateRigidTransform
   * @param arg0
   * @param arg1
   * @param arg2
   * @returns
   */
  estimateRigidTransform(arg0: Mat, arg1: Mat, arg2: Mat): any {
    return cv.estimateRigidTransform(arg0, arg1, arg2);
  }

  /**
   * exceptionFromPtr
   * @param arg0
   * @returns
   */
  exceptionFromPtr(arg0: number) {
    return cv.exceptionFromPtr(arg0);
  }

  /**
   * exit
   * @param status
   * @param implicit
   */
  public exit(status: any, implicit: any) {
    cv.exit(status, implicit);
  }

  /**
   * exp
   * @param arg0 Mat
   * @param arg1 Mat
   */
  public exp(arg0: Mat, arg1: Mat) {
    cv.exp(arg0, arg1)
  }

  /**
   * fitEllipse
   * @param arg0
   */
  public fitEllipse(arg0: Mat) {
    return cv.fitEllipse(arg0);
  }

  /**
   * fitLine
   * @param arg0
   * @param arg1
   * @param arg2
   * @param arg3
   * @param arg4
   * @param arg5
   */
  public fitLine(arg0: Mat, arg1: Mat, arg2: number, arg3: number, arg4: number, arg5: number) {
    cv.fitLine(arg0, arg1, arg2, arg3, arg4, arg5);
  }

  /**
   *
   * @param arg0
   * @param arg1
   * @param arg2
   */
  public flip(arg0: Mat, arg1: Mat, arg2: number) {
    cv.flip(arg0, arg1, arg2);
  }

  /**
   *
   */
  public flushPendingDeletes() {
    cv.flushPendingDeletes();
  }

  /**
   * getAffineTransform
   * @param arg0
   * @param arg1
   */
  public getAffineTransform(arg0: Mat, arg1: Mat) {
    return cv.getAffineTransform(arg0, arg1);
  }

  /**
   * getBuildInformation
   * @returns
   */
  public getBuildInformation() {
    return cv.getBuildInformation();
  }

  /**
   * getInheritedInstanceCount
   * @returns
   */
  public getInheritedInstanceCount() {
    return cv.getInheritedInstanceCount();
  }

  /**
   * getLiveInheritedInstances
   */
  public getLiveInheritedInstances() {
    return cv.getLiveInheritedInstances();
  }

  /**
   * getMemory
   * @param size
   * @returns
   */
  public getMemory(size: number) {
    return cv.getMemory(size);
  }

  /**
   * getOptimalDFTSize
   * @param arg0
   * @returns
   */
  public getOptimalDFTSize(arg0: number) {
    return cv.getOptimalDFTSize(arg0);
  }

  /**
   * getPerspectiveTransform
   * @param arg0
   * @param arg1
   */
  public getPerspectiveTransform(arg0: Mat, arg1: Mat) {
    return cv.getPerspectiveTransform(arg0, arg1);
  }

  /**
   * getRotationMatrix2D
   * @param arg0
   * @param arg1
   * @param arg2
   * @returns
   */
  public getRotationMatrix2D(arg0: any, arg1: number, arg2: number) {
    return cv.getRotationMatrix2D(arg0, arg1, arg2);
  }

  /**
   * get_first_emval
   * @returns
   */
  public get_first_emval(): null | [{}

    , { value: undefined }

    , { value: null }

    , { value: true }

    , { value: false }

  ] {
    return cv.get_first_emval();
  }


  /**
   *
   * @param arg0
   * @param arg1
   */
  public hconcat(arg0: Mat, arg1: Mat): void {
    cv.hconcat(arg0, arg1)
  }

  /**
   * inRange
   * @param arg0
   * @param arg1
   * @param arg2
   * @param arg3
   */
  public inRange(arg0: Mat, arg1: Mat, arg2: Mat, arg3: Mat): void {
    cv.inRange(arg0, arg1, arg2, arg3);
  }

  /**
   * initUndistortRectifyMap
   * @param arg0
   * @param arg1
   * @param arg2
   * @param arg3
   * @param arg4
   * @param arg5
   * @param arg6
   * @param arg7
   */
  public initUndistortRectifyMap(arg0: Mat, arg1: Mat, arg2: Mat, arg3: Mat, arg4: any, arg5: Mat, arg6: Mat, arg7: Mat): void {
    cv.initUndistortRectifyMap(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
  }

  /**
   * isContourConvex
   * @param arg0
   * @returns
   */
  public isContourConvex(arg0: Mat): boolean {
    return cv.isContourConvex(arg0);
  }
  /**
   * log
   * @param arg0
   * @param arg1
   */
  public log(arg0: Mat, arg1: Mat): void {
    cv.log(arg0, arg1);
  }

  /**
   * magnitude
   * @param arg0
   * @param arg1
   * @param arg2
   */
  public magnitude(arg0: Mat, arg1: Mat, arg2: Mat): void {
    cv.magnitude(arg0, arg1, arg2);
  }

  /**
   * matFromArray
   * @param rows
   * @param cols
   * @param type
   * @param array
   * @returns Mat
   */
  public matFromArray(rows: number, cols: number, type: any, array: any): Mat {
    return cv.matFromArray(rows, cols, type, array)
  }

  /**
   * matFromImageData
   * @param imageData
   * @returns Mat
   */
  public matFromImageData(imageData: ImageData): Mat {
    return cv.matFromImageData(imageData)
  }

  /**
   * matchShapes
   * @param arg0
   * @param arg1
   * @param arg2
   * @param arg3
   */
  public matchShapes(arg0: Mat, arg1: Mat, arg2: Mat, arg3: number): number {
    return cv.matchShapes(arg0, arg1, arg2, arg3)
  }

  /**
   * max
   * @param arg0
   * @param arg1
   * @param arg2
   */
  public max(arg0: Mat, arg1: Mat, arg2: Mat) {
    cv.max(arg0, arg1, arg2)
  }

  /**
   * medianBlur
   * @param arg0
   * @param arg1
   * @param arg2
   */
  public medianBlur(arg0: Mat, arg1: Mat, arg2: Mat) {
    cv.medianBlur(arg0, arg1, arg2)
  }

  /**
   * merge
   * @param arg0
   * @param arg1
   */
  public merge(arg0: Mat, arg1: Mat) {
    cv.merge(arg0, arg1)
  }

  /**
   * min
   * @param arg0
   * @param arg1
   * @param arg2
   */
  public min(arg0: Mat, arg1: Mat, arg2: Mat): void {
    cv.min(arg0, arg1, arg2)
  }

  /**
   * minAreaRect
   * @param arg0
   */
  public minAreaRect(arg0: Mat): any {
    return cv.minAreaRect(arg0)
  }

  /**
   * minEnclosingCircle
   * @param arg0
   */
  public minEnclosingCircle(arg0: Mat): void {
    cv.minEnclosingCircle(arg0)
  }

  /**
   * mixChannels
   * @param arg0
   * @param arg1
   * @param arg2
   */
  public mixChannels(arg0: Mat, arg1: Mat, arg2: Mat): void { cv.mixChannels(arg0, arg1, arg2) }

  /**
   * morphologyDefaultBorderValue
   * @returns
   */
  public morphologyDefaultBorderValue(): any { return cv.morphologyDefaultBorderValue() }

  /**
   * InternalError
   */

  public InternalError(): any { return cv.InternalError() }

  /**
   * Algorithm
   */
  public Algorithm(): void { cv.Algorithm() }

  /**
   * IntVector
   */
  public IntVector(): void {
    cv.IntVector()
  }

  /**
   * BackgroundSubtractor
   */
  public BackgroundSubtractor(): void {
    cv.BackgroundSubtractor()
  }

  /**
   *BackgroundSubtractorMOG2
   */
  public BackgroundSubtractorMOG2(): void {
    cv.BackgroundSubtractorMOG2()
  }

  public CV_MAT_DEPTH(arg0: number): any {
    return cv.CV_MAT_DEPTH(arg0)
  }

  public CamShift(arg0: Mat, arg1: Mat, arg2: any): any {
    return cv.CamShift(arg0, arg1, arg2)
  }

  public Circle() {
    cv.Circle()
  }

  public DoubleVector() {
    cv.DoubleVector()
  }

  FS_createDataFile(parent: any, name: any, data: any, canRead: any, canWrite: any, canOwn: any): any {
    return cv.FS_createDataFile(parent, name, data, canRead, canWrite, canOwn)
  }

  FS_createDevice(parent: any, name: any, input: any, output: any): any {
    return cv.FS_createDevice(parent, name, input, output)
  }

  FS_createFolder(parent: any, name: any, canRead: any, canWrite: any): any {
    return cv.FS_createFolder(parent, name, canRead, canWrite)
  }

  FS_createLazyFile(parent: any, name: any, url: any, canRead: any, canWrite: any): any {
    return cv.FS_createLazyFile(parent, name, url, canRead, canWrite)
  }

  FS_createLink(parent: any, name: any, target: any, canRead: any, canWrite: any): any {
    return cv.FS_createLink(parent, name, target, canRead, canWrite)
  }

  FS_createPath(parent: any, path: any, canRead: any, canWrite: any): any {
    return cv.FS_createPath(parent, path, canRead, canWrite)
  }

  FS_createPreloadedFile(parent: any, name: any, url: any, canRead: any, canWrite: any, onload: any, onerror: any, dontCreateFile: any, canOwn: any, preFinish: any): any {
    return cv.FS_createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish)
  }

  FS_unlink(path: any): any {
    return cv.FS_unlink(path)
  }

  HOGDescriptor(): any {
    return cv.HOGDescriptor()
  }

  CascadeClassifier(): any {
    return cv.CascadeClassifier()
  }

  Scalar(v0: any, v1: any, v2: any, v3: any): any {
    return cv.Scalar(v0, v1, v2, v3)
  }

  Point(x: any, y: any): any {
    return cv.Point(x, y)
  }

  PointVector(): any {
    return cv.PointVector()
  }

  Range(start: any, end: any): any {
    return cv.Range(start, end)
  }

  Rect(): any {
    return cv.Rect()
  }

  RectVector(): any {
    return cv.RectVector()
  }

  RotatedRect(): any {
    return cv.RotatedRect()
  }

  Size(width: any, height: any): any {
    return cv.Size(width, height)
  }

  TermCriteria(): any {
    return cv.TermCriteria()
  }

  UnboundTypeError(): any {
    return cv.UnboundTypeError()
  }

  VideoCapture(videoSource: string | HTMLVideoElement): any {
    return new cv.VideoCapture(videoSource)
  }

  abort(what: any): any {
    return cv.abort(what)
  }

  absdiff(arg0: any, arg1: any, arg2: any): any {
    return cv.absdiff(arg0, arg1, arg2)
  }

  adaptiveThreshold(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any): any {
    return cv.adaptiveThreshold(arg0, arg1, arg2, arg3, arg4, arg5, arg6)
  }

  addRunDependency(id: any): any {
    return cv.addRunDependency(id)
  }

  approxPolyDP(arg0: any, arg1: any, arg2: any, arg3: any): any {
    return cv.approxPolyDP(arg0, arg1, arg2, arg3)
  }

  arcLength(arg0: any, arg1: any): any {
    return cv.arcLength(arg0, arg1)
  }

  boundingRect(arg0: any): any {
    return cv.boundingRect(arg0)
  }

  calcOpticalFlowFarneback(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any): any {
    return cv.calcOpticalFlowFarneback(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
  }

  calcBackProject(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): any {
    return cv.calcBackProject(arg0, arg1, arg2, arg3, arg4, arg5)
  }

  convexityDefects(arg0: any, arg1: any): any {
    return cv.convexityDefects(arg0, arg1)
  }

  rotatedRectPoints(arg0: any): any {
    return cv.rotatedRectPoints(arg0)
  }

  run(args: any): any {
    return cv.run(args)
  }

  setDelayFunction(fn: any): any {
    return cv.setDelayFunction(fn)
  }

  setCanvasSize(width: number, height: number, noUpdates: any) {
    return cv.setCanvasSize(width, height, noUpdates)
  }

  setRNGSeed(arg0: any): any {
    return cv.setRNGSeed(arg0)
  }

  setWindowTitle(title: any): any {
    return cv.setWindowTitle(title)
  }

  split(arg0: any, arg1: any): any {
    return cv.split(arg0, arg1)
  }

  sqrt(arg0: any, arg1: any): any {
    return cv.sqrt(arg0, arg1)
  }

  then(func: any): any {
    return cv.then(func)
  }

  threshold(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any): any {
    return cv.threshold(arg0, arg1, arg2, arg3, arg4)
  }

  trace(arg0: any): any {
    return cv.trace(arg0)
  }

  transform(arg0: any, arg1: any, arg2: any): any {
    return cv.transform(arg0, arg1, arg2)
  }

  vconcat(arg0: any, arg1: any): any {
    return cv.vconcat(arg0, arg1)
  }

  transpose(arg0: any, arg1: any): any {
    return cv.transpose(arg0, arg1)
  }

  watershed(arg0: any, arg1: any): any {
    return cv.watershed(arg0, arg1)
  }

  /**
   *
   * @param audio
   * @param video
   * @param peerIdentity
   * @param preferCurrentTab
   * @returns Return a Stream video from camera
   */
  getStreamCamera(audio: boolean, video: boolean, peerIdentity?: string): Observable<MediaStream | null> {
    const ret = new BehaviorSubject<MediaStream | null>(null);
    navigator.mediaDevices.getUserMedia({ audio: audio, video: video, peerIdentity: peerIdentity }).then(stream => ret.next(stream))
    return ret.asObservable();
  }

  /**
   *
   * @param mat
   */
  matDelete(mat: Mat): void {
    const m = cv.Mat;
    const del = (mat as typeof m)
    del.delete();
  }
}
