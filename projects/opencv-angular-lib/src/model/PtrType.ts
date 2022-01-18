import { RegisteredClass } from "./RegisteredClass";


export interface PtrType {
  name: string;
  registeredClass: RegisteredClass;
  isReference: boolean;
  isConst: boolean;
  isSmartPointer: boolean;
}
