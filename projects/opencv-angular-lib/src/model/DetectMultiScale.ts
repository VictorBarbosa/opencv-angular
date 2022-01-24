import { Mat } from "./mat"
import { RectVector } from "./RectVector"
import { Size } from "./Size"


export interface DetectMultiScale {
  /**
   * detectMultiScale
   * @param image Mat of the type CV_8U containing an image where objects are detected.
   * @param objects Vector of rectangles where each rectangle contains the detected object, the rectangles may be partially outside the original image.
   * @param scaleFactor Parameter specifying how much the image size is reduced at each image scale.
   * @param minNeighbor  Parameter specifying how many neighbors each candidate  rectangle should have to retain it.
   * @param flags  Parameter with the same meaning for an old cascade as in the function cvHaarDetectObjects. It is not used for a new cascade.
   * @param minSize Minimum possible object size. Objects smaller than that are ignored.
   * @param maxSize  Maximum possible object size. Objects larger than that are ignored. If maxSize == minSize model is evaluated  on single scale.
   */
  detectMultiScale(image: Mat, objects: RectVector, scaleFactor: number, minNeighbor: number, flags: number, minSize: Size, maxSize: Size): any
}
