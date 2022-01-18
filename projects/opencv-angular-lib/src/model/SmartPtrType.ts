import { PointeeType } from "./PointeeType";
import { RegisteredClass } from "./RegisteredClass";


export interface SmartPtrType {
  name: string;
  registeredClass: RegisteredClass;
  isReference: boolean;
  isConst: boolean;
  isSmartPointer: boolean;
  pointeeType: PointeeType;
  sharingPolicy: number;
}
