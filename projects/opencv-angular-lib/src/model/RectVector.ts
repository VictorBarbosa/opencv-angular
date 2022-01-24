import { InstancePrototype } from "./InstancePrototype";


export interface RegisteredClass {
  name: string;
  instancePrototype: InstancePrototype;
  upcast: number;
  downcast: number;
  pureVirtualFunctions: any[];
  constructor_body: any[];
}

export interface PtrType {
  name: string;
  registeredClass: RegisteredClass;
  isReference: boolean;
  isConst: boolean;
  isSmartPointer: boolean;
  destructorFunction?: any;
}

export interface Count {
  value: number;
}

export interface RectVector {
  ptrType: PtrType;
  ptr: number;
  count: Count;
  size(): number;
}



