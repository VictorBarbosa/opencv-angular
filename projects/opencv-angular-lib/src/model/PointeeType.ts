import { RegisteredClass } from "./RegisteredClass";


export interface PointeeType {
  name: string;
  registeredClass: RegisteredClass;
  isReference: boolean;
  isConst: boolean;
  isSmartPointer: boolean;
}
