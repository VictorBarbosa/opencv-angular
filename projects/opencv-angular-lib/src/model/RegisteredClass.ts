import { BaseClass } from "./BaseClass";
import { InstancePrototype } from "./InstancePrototype";


export interface RegisteredClass {
  name: string;
  instancePrototype: InstancePrototype;
  baseClass: BaseClass;
  pureVirtualFunctions: string[];
  constructor_body: any[];
}
