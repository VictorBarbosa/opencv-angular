import { InstancePrototype } from "./InstancePrototype";


export interface BaseClass {
  name: string;
  instancePrototype: InstancePrototype;
  upcast: number;
  downcast: number;
  pureVirtualFunctions: any[];
}
