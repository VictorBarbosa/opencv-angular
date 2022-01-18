export interface Mat {
  $$: {
    count: number
    value: number
    ptr: number
    ptrType: any
    destructorFunction: null | any;
    isConst: boolean;
    isReference: boolean;
    isSmartPointer: boolean;
    name: "Mat*"
    pointeeType: undefined | any;
    rawConstructor: undefined | any;
    rawGetPointee: undefined | any;
    rawShare: undefined | any;
    registeredClass: any;
    baseClass: undefined | any;
    downcast: number;
    instancePrototype: {
      channels: () => any,
      charAt: () => any,
      charPtr: () => any,
      clone: () => any,
      col: (arg0: any) => any,
      colRange: () => any,
      cols: number
      convertTo: () => any,
      copyTo: () => any,
      create: () => any,

      data: Uint8Array;
      data8S: Int8Array;
      data16S: Int16Array;
      data16U: Uint16Array;
      data32F: Float32Array;
      data32S: Int32Array;
      data64F: Float64Array;
      depth: () => any,
      diag: () => any,
      dot: (arg0: any) => any,
      doubleAt: () => any,
      doublePtr: () => any,
      elemSize: () => any,
      elemSize1: () => any,
      empty: () => any,
      floatAt: () => any,
      floatPtr: () => any,
      intAt: () => any,
      intPtr: () => any,
      inv: (arg0: any) => any,
      isContinuous: () => any,
      matSize: number;
      mul: (arg0: any, arg1: any) => any;
      ptr: () => any,
      roi: (arg0: any) => any
      row: (arg0: any) => any
      rowRange: () => any,
      rows: number;
      setTo: () => any,
      shortAt: () => any,
      shortPtr: () => any,
      size: () => any,
      step: number;
      step1: (arg0: any) => any,
      t: () => any,
      total: () => any,
      type: () => any,
      ucharAt: () => any,
      ucharPtr: () => any,
      ushortAt: () => any,
      ushortPtr: () => any,
    }
    pureVirtualFunctions: []
    upcast: 0
    sharingPolicy: undefined
  };
  cols: number;
  data: Uint8Array;
  data8S: Int8Array;
  data16S: Int16Array;
  data16U: Uint16Array;
  data32F: Float32Array;
  data32S: Int32Array;
  data64F: Float64Array;
  matSize: Array<number>;
  rows: number;
  step: Array<number>;
}
