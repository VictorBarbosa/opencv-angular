import { BehaviorSubject } from 'rxjs';

declare const cv: any;
export class OpencvProperties {
  constructor(private cv: any) { }
  public get _InputArray_CUDA_GPU_MAT(): number { return this.cv._InputArray_CUDA_GPU_MAT }
  public get _InputArray_CUDA_HOST_MEM(): number { return this.cv._InputArray_CUDA_HOST_MEM }
  public get _InputArray_EXPR(): number { return this.cv._InputArray_EXPR }
  public get _InputArray_FIXED_SIZE(): number { return this.cv._InputArray_FIXED_SIZE }
  public get _InputArray_FIXED_TYPE(): number { return this.cv._InputArray_FIXED_TYPE }
  public get _InputArray_KIND_MASK(): number { return this.cv._InputArray_KIND_MASK }
  public get _InputArray_KIND_SHIFT(): number { return this.cv._InputArray_KIND_SHIFT }
  public get _InputArray_MAT(): number { return this.cv._InputArray_MAT }
  public get _InputArray_MATX(): number { return this.cv._InputArray_MATX }
  public get _InputArray_NONE(): number { return this.cv._InputArray_NONE }
  public get _InputArray_OPENGL_BUFFER(): number { return this.cv._InputArray_OPENGL_BUFFER }
  public get _InputArray_STD_ARRAY_MAT(): number { return this.cv._InputArray_STD_ARRAY_MAT }
  public get _InputArray_STD_ARRAY(): number { return this.cv._InputArray_STD_ARRAY }
  public get _InputArray_STD_BOOL_VECTOR(): number { return this.cv._InputArray_STD_BOOL_VECTOR }
  public get _InputArray_STD_VECTOR_CUDA_GPU_MAT(): number { return this.cv._InputArray_STD_VECTOR_CUDA_GPU_MAT }
  public get _InputArray_STD_VECTOR_MAT(): number { return this.cv._InputArray_STD_VECTOR_MAT }
  public get _InputArray_STD_VECTOR_UMAT(): number { return this.cv._InputArray_STD_VECTOR_UMAT }
  public get _InputArray_STD_VECTOR_VECTOR(): number { return this.cv._InputArray_STD_VECTOR_VECTOR }
  public get _InputArray_STD_VECTOR(): number { return this.cv._InputArray_STD_VECTOR }
  public get _InputArray_UMAT(): number { return this.cv._InputArray_UMAT }
  public get _OutputArray_DEPTH_MASK_16S(): number { return this.cv._OutputArray_DEPTH_MASK_16S }
  public get _OutputArray_DEPTH_MASK_16U(): number { return this.cv._OutputArray_DEPTH_MASK_16U }
  public get _OutputArray_DEPTH_MASK_32F(): number { return this.cv._OutputArray_DEPTH_MASK_32F }
  public get _OutputArray_DEPTH_MASK_32S(): number { return this.cv._OutputArray_DEPTH_MASK_32S }
  public get _OutputArray_DEPTH_MASK_64F(): number { return this.cv._OutputArray_DEPTH_MASK_64F }
  public get _OutputArray_DEPTH_MASK_8S(): number { return this.cv._OutputArray_DEPTH_MASK_8S }
  public get _OutputArray_DEPTH_MASK_8U(): number { return this.cv._OutputArray_DEPTH_MASK_8U }
  public get _OutputArray_DEPTH_MASK_ALL_BUT_8S(): number { return this.cv._OutputArray_DEPTH_MASK_ALL_BUT_8S }
  public get _OutputArray_DEPTH_MASK_ALL(): number { return this.cv._OutputArray_DEPTH_MASK_ALL }
  public get _OutputArray_DEPTH_MASK_FLT(): number { return this.cv._OutputArray_DEPTH_MASK_FLT }
  public get ACCESS_FAST(): number { return this.cv.ACCESS_FAST; }
  public get ACCESS_FAST7108864(): number { return this.cv.ACCESS_FAST7108864 }
  public get ACCESS_MASK(): number { return this.cv.ACCESS_MASK; }
  public get ACCESS_MASK0331648(): number { return this.cv.ACCESS_MASK0331648 }
  public get ACCESS_READ(): number { return this.cv.ACCESS_READ; }
  public get ACCESS_READ6777216(): number { return this.cv.ACCESS_READ6777216 }
  public get ACCESS_RW(): number { return this.cv.ACCESS_RW; }
  public get ACCESS_RW0331648(): number { return this.cv.ACCESS_RW0331648 }
  public get ACCESS_WRITE(): number { return this.cv.ACCESS_WRITE; }
  public get ACCESS_WRITE3554432(): number { return this.cv.ACCESS_WRITE3554432 }
  public get ADAPTIVE_THRESH_GAUSSIAN_C(): number { return this.cv.ADAPTIVE_THRESH_GAUSSIAN_C; }
  public get ADAPTIVE_THRESH_MEAN_C(): number { return this.cv.ADAPTIVE_THRESH_MEAN_C; }
  public get BadAlign(): number { return this.cv.BadAlign; }
  public get BadAlign1(): number { return this.cv.BadAlign1 }
  public get BadAlphaChannel(): number { return this.cv.BadAlphaChannel; }
  public get BadAlphaChannel8(): number { return this.cv.BadAlphaChannel8 }
  public get BadCallBack(): number { return this.cv.BadCallBack; }
  public get BadCallBack2(): number { return this.cv.BadCallBack2 }
  public get BadCOI(): number { return this.cv.BadCOI; }
  public get BadCOI4(): number { return this.cv.BadCOI4 }
  public get BadDataPtr(): number { return this.cv.BadDataPtr; }
  public get BadDataPtr2(): number { return this.cv.BadDataPtr2 }
  public get BadDepth(): number { return this.cv.BadDepth; }
  public get BadDepth7(): number { return this.cv.BadDepth7 }
  public get BadImageSize(): number { return this.cv.BadImageSize; }
  public get BadImageSize0(): number { return this.cv.BadImageSize0 }
  public get BadModelOrChSeq(): number { return this.cv.BadModelOrChSeq; }
  public get BadModelOrChSeq4(): number { return this.cv.BadModelOrChSeq4 }
  public get BadNumChannel1U(): number { return this.cv.BadNumChannel1U; }
  public get BadNumChannel1U6(): number { return this.cv.BadNumChannel1U6 }
  public get BadNumChannels(): number { return this.cv.BadNumChannels; }
  public get BadNumChannels5(): number { return this.cv.BadNumChannels5 }
  public get BadOffset(): number { return this.cv.BadOffset; }
  public get BadOffset1(): number { return this.cv.BadOffset1 }
  public get BadOrder(): number { return this.cv.BadOrder; }
  public get BadOrder9(): number { return this.cv.BadOrder9 }
  public get BadOrigin(): number { return this.cv.BadOrigin; }
  public get BadOrigin0(): number { return this.cv.BadOrigin0 }
  public get BadROISize(): number { return this.cv.BadROISize; }
  public get BadROISize5(): number { return this.cv.BadROISize5 }
  public get BadStep(): number { return this.cv.BadStep; }
  public get BadStep3(): number { return this.cv.BadStep3 }
  public get BadTileSize(): number { return this.cv.BadTileSize; }
  public get BadTileSize3(): number { return this.cv.BadTileSize3 }
  public get BORDER_CONSTANT(): number { return this.cv.BORDER_CONSTANT; }
  public get BORDER_DEFAULT(): number { return this.cv.BORDER_DEFAULT; }
  public get BORDER_ISOLATED(): number { return this.cv.BORDER_ISOLATED; }
  public get BORDER_REFLECT_101(): number { return this.cv.BORDER_REFLECT_101; }
  public get BORDER_REFLECT(): number { return this.cv.BORDER_REFLECT; }
  public get BORDER_REFLECT101(): number { return this.cv.BORDER_REFLECT101; }
  public get BORDER_REPLICATE(): number { return this.cv.BORDER_REPLICATE; }
  public get BORDER_TRANSPARENT(): number { return this.cv.BORDER_TRANSPARENT; }
  public get BORDER_WRAP(): number { return this.cv.BORDER_WRAP; }
  public get CASCADE_DO_CANNY_PRUNING(): number { return this.cv.CASCADE_DO_CANNY_PRUNING; }
  public get CASCADE_DO_ROUGH_SEARCH(): number { return this.cv.CASCADE_DO_ROUGH_SEARCH; }
  public get CASCADE_FIND_BIGGEST_OBJECT(): number { return this.cv.CASCADE_FIND_BIGGEST_OBJECT; }
  public get CASCADE_SCALE_IMAGE(): number { return this.cv.CASCADE_SCALE_IMAGE; }
  public get CC_STAT_AREA(): number { return this.cv.CC_STAT_AREA; }
  public get CC_STAT_HEIGHT(): number { return this.cv.CC_STAT_HEIGHT; }
  public get CC_STAT_LEFT(): number { return this.cv.CC_STAT_LEFT; }
  public get CC_STAT_MAX(): number { return this.cv.CC_STAT_MAX; }
  public get CC_STAT_TOP(): number { return this.cv.CC_STAT_TOP; }
  public get CC_STAT_WIDTH(): number { return this.cv.CC_STAT_WIDTH; }
  public get CCL_DEFAULT(): number { return this.cv.CCL_DEFAULT; }
  public get CCL_GRANA(): number { return this.cv.CCL_GRANA; }
  public get CCL_WU(): number { return this.cv.CCL_WU; }
  public get CHAIN_APPROX_NONE(): number { return this.cv.CHAIN_APPROX_NONE; }
  public get CHAIN_APPROX_SIMPLE(): number { return this.cv.CHAIN_APPROX_SIMPLE; }
  public get CHAIN_APPROX_TC89_KCOS(): number { return this.cv.CHAIN_APPROX_TC89_KCOS; }
  public get CHAIN_APPROX_TC89_L1(): number { return this.cv.CHAIN_APPROX_TC89_L1; }
  public get CMP_EQ(): number { return this.cv.CMP_EQ; }
  public get CMP_GE(): number { return this.cv.CMP_GE; }
  public get CMP_GT(): number { return this.cv.CMP_GT; }
  public get CMP_LE(): number { return this.cv.CMP_LE; }
  public get CMP_LT(): number { return this.cv.CMP_LT; }
  public get CMP_NE(): number { return this.cv.CMP_NE; }
  public get COLOR_BayerBG2BGR_EA(): number { return this.cv.COLOR_BayerBG2BGR_EA; }
  public get COLOR_BayerBG2BGR_EA35(): number { return this.cv.COLOR_BayerBG2BGR_EA35 }
  public get COLOR_BayerBG2BGR_VNG(): number { return this.cv.COLOR_BayerBG2BGR_VNG; }
  public get COLOR_BayerBG2BGR_VNG2(): number { return this.cv.COLOR_BayerBG2BGR_VNG2 }
  public get COLOR_BayerBG2BGR(): number { return this.cv.COLOR_BayerBG2BGR; }
  public get COLOR_BayerBG2BGR6(): number { return this.cv.COLOR_BayerBG2BGR6 }
  public get COLOR_BayerBG2BGRA(): number { return this.cv.COLOR_BayerBG2BGRA; }
  public get COLOR_BayerBG2BGRA39(): number { return this.cv.COLOR_BayerBG2BGRA39 }
  public get COLOR_BayerBG2GRAY(): number { return this.cv.COLOR_BayerBG2GRAY; }
  public get COLOR_BayerBG2GRAY6(): number { return this.cv.COLOR_BayerBG2GRAY6 }
  public get COLOR_BayerBG2RGB_EA(): number { return this.cv.COLOR_BayerBG2RGB_EA; }
  public get COLOR_BayerBG2RGB_EA37(): number { return this.cv.COLOR_BayerBG2RGB_EA37 }
  public get COLOR_BayerBG2RGB_VNG(): number { return this.cv.COLOR_BayerBG2RGB_VNG; }
  public get COLOR_BayerBG2RGB_VNG4(): number { return this.cv.COLOR_BayerBG2RGB_VNG4 }
  public get COLOR_BayerBG2RGB(): number { return this.cv.COLOR_BayerBG2RGB; }
  public get COLOR_BayerBG2RGB8(): number { return this.cv.COLOR_BayerBG2RGB8 }
  public get COLOR_BayerBG2RGBA(): number { return this.cv.COLOR_BayerBG2RGBA; }
  public get COLOR_BayerBG2RGBA41(): number { return this.cv.COLOR_BayerBG2RGBA41 }
  public get COLOR_BayerGB2BGR_EA(): number { return this.cv.COLOR_BayerGB2BGR_EA; }
  public get COLOR_BayerGB2BGR_EA36(): number { return this.cv.COLOR_BayerGB2BGR_EA36 }
  public get COLOR_BayerGB2BGR_VNG(): number { return this.cv.COLOR_BayerGB2BGR_VNG; }
  public get COLOR_BayerGB2BGR_VNG3(): number { return this.cv.COLOR_BayerGB2BGR_VNG3 }
  public get COLOR_BayerGB2BGR(): number { return this.cv.COLOR_BayerGB2BGR; }
  public get COLOR_BayerGB2BGR7(): number { return this.cv.COLOR_BayerGB2BGR7 }
  public get COLOR_BayerGB2BGRA(): number { return this.cv.COLOR_BayerGB2BGRA; }
  public get COLOR_BayerGB2BGRA40(): number { return this.cv.COLOR_BayerGB2BGRA40 }
  public get COLOR_BayerGB2GRAY(): number { return this.cv.COLOR_BayerGB2GRAY; }
  public get COLOR_BayerGB2GRAY7(): number { return this.cv.COLOR_BayerGB2GRAY7 }
  public get COLOR_BayerGB2RGB_EA(): number { return this.cv.COLOR_BayerGB2RGB_EA; }
  public get COLOR_BayerGB2RGB_EA38(): number { return this.cv.COLOR_BayerGB2RGB_EA38 }
  public get COLOR_BayerGB2RGB_VNG(): number { return this.cv.COLOR_BayerGB2RGB_VNG; }
  public get COLOR_BayerGB2RGB_VNG5(): number { return this.cv.COLOR_BayerGB2RGB_VNG5 }
  public get COLOR_BayerGB2RGB(): number { return this.cv.COLOR_BayerGB2RGB; }
  public get COLOR_BayerGB2RGB9(): number { return this.cv.COLOR_BayerGB2RGB9 }
  public get COLOR_BayerGB2RGBA(): number { return this.cv.COLOR_BayerGB2RGBA; }
  public get COLOR_BayerGB2RGBA42(): number { return this.cv.COLOR_BayerGB2RGBA42 }
  public get COLOR_BayerGR2BGR_EA(): number { return this.cv.COLOR_BayerGR2BGR_EA; }
  public get COLOR_BayerGR2BGR_EA38(): number { return this.cv.COLOR_BayerGR2BGR_EA38 }
  public get COLOR_BayerGR2BGR_VNG(): number { return this.cv.COLOR_BayerGR2BGR_VNG; }
  public get COLOR_BayerGR2BGR_VNG5(): number { return this.cv.COLOR_BayerGR2BGR_VNG5 }
  public get COLOR_BayerGR2BGR(): number { return this.cv.COLOR_BayerGR2BGR; }
  public get COLOR_BayerGR2BGR9(): number { return this.cv.COLOR_BayerGR2BGR9 }
  public get COLOR_BayerGR2BGRA(): number { return this.cv.COLOR_BayerGR2BGRA; }
  public get COLOR_BayerGR2BGRA42(): number { return this.cv.COLOR_BayerGR2BGRA42 }
  public get COLOR_BayerGR2GRAY(): number { return this.cv.COLOR_BayerGR2GRAY; }
  public get COLOR_BayerGR2GRAY9(): number { return this.cv.COLOR_BayerGR2GRAY9 }
  public get COLOR_BayerGR2RGB_EA(): number { return this.cv.COLOR_BayerGR2RGB_EA; }
  public get COLOR_BayerGR2RGB_EA36(): number { return this.cv.COLOR_BayerGR2RGB_EA36 }
  public get COLOR_BayerGR2RGB_VNG(): number { return this.cv.COLOR_BayerGR2RGB_VNG; }
  public get COLOR_BayerGR2RGB_VNG3(): number { return this.cv.COLOR_BayerGR2RGB_VNG3 }
  public get COLOR_BayerGR2RGB(): number { return this.cv.COLOR_BayerGR2RGB; }
  public get COLOR_BayerGR2RGB7(): number { return this.cv.COLOR_BayerGR2RGB7 }
  public get COLOR_BayerGR2RGBA(): number { return this.cv.COLOR_BayerGR2RGBA; }
  public get COLOR_BayerGR2RGBA40(): number { return this.cv.COLOR_BayerGR2RGBA40 }
  public get COLOR_BayerRG2BGR_EA(): number { return this.cv.COLOR_BayerRG2BGR_EA; }
  public get COLOR_BayerRG2BGR_EA37(): number { return this.cv.COLOR_BayerRG2BGR_EA37 }
  public get COLOR_BayerRG2BGR_VNG(): number { return this.cv.COLOR_BayerRG2BGR_VNG; }
  public get COLOR_BayerRG2BGR_VNG4(): number { return this.cv.COLOR_BayerRG2BGR_VNG4 }
  public get COLOR_BayerRG2BGR(): number { return this.cv.COLOR_BayerRG2BGR; }
  public get COLOR_BayerRG2BGR8(): number { return this.cv.COLOR_BayerRG2BGR8 }
  public get COLOR_BayerRG2BGRA(): number { return this.cv.COLOR_BayerRG2BGRA; }
  public get COLOR_BayerRG2BGRA41(): number { return this.cv.COLOR_BayerRG2BGRA41 }
  public get COLOR_BayerRG2GRAY(): number { return this.cv.COLOR_BayerRG2GRAY; }
  public get COLOR_BayerRG2GRAY8(): number { return this.cv.COLOR_BayerRG2GRAY8 }
  public get COLOR_BayerRG2RGB_EA(): number { return this.cv.COLOR_BayerRG2RGB_EA; }
  public get COLOR_BayerRG2RGB_EA35(): number { return this.cv.COLOR_BayerRG2RGB_EA35 }
  public get COLOR_BayerRG2RGB_VNG(): number { return this.cv.COLOR_BayerRG2RGB_VNG; }
  public get COLOR_BayerRG2RGB_VNG2(): number { return this.cv.COLOR_BayerRG2RGB_VNG2 }
  public get COLOR_BayerRG2RGB(): number { return this.cv.COLOR_BayerRG2RGB; }
  public get COLOR_BayerRG2RGB6(): number { return this.cv.COLOR_BayerRG2RGB6 }
  public get COLOR_BayerRG2RGBA(): number { return this.cv.COLOR_BayerRG2RGBA; }
  public get COLOR_BayerRG2RGBA39(): number { return this.cv.COLOR_BayerRG2RGBA39 }
  public get COLOR_BGR2BGR555(): number { return this.cv.COLOR_BGR2BGR555; }
  public get COLOR_BGR2BGR5552(): number { return this.cv.COLOR_BGR2BGR5552 }
  public get COLOR_BGR2BGR565(): number { return this.cv.COLOR_BGR2BGR565; }
  public get COLOR_BGR2BGR5652(): number { return this.cv.COLOR_BGR2BGR5652 }
  public get COLOR_BGR2BGRA(): number { return this.cv.COLOR_BGR2BGRA; }
  public get COLOR_BGR2GRAY(): number { return this.cv.COLOR_BGR2GRAY; }
  public get COLOR_BGR2HLS_FULL(): number { return this.cv.COLOR_BGR2HLS_FULL; }
  public get COLOR_BGR2HLS_FULL8(): number { return this.cv.COLOR_BGR2HLS_FULL8 }
  public get COLOR_BGR2HLS(): number { return this.cv.COLOR_BGR2HLS; }
  public get COLOR_BGR2HLS2(): number { return this.cv.COLOR_BGR2HLS2 }
  public get COLOR_BGR2HSV_FULL(): number { return this.cv.COLOR_BGR2HSV_FULL; }
  public get COLOR_BGR2HSV_FULL6(): number { return this.cv.COLOR_BGR2HSV_FULL6 }
  public get COLOR_BGR2HSV(): number { return this.cv.COLOR_BGR2HSV; }
  public get COLOR_BGR2HSV0(): number { return this.cv.COLOR_BGR2HSV0 }
  public get COLOR_BGR2Lab(): number { return this.cv.COLOR_BGR2Lab; }
  public get COLOR_BGR2Lab4(): number { return this.cv.COLOR_BGR2Lab4 }
  public get COLOR_BGR2Luv(): number { return this.cv.COLOR_BGR2Luv; }
  public get COLOR_BGR2Luv0(): number { return this.cv.COLOR_BGR2Luv0 }
  public get COLOR_BGR2RGB(): number { return this.cv.COLOR_BGR2RGB; }
  public get COLOR_BGR2RGBA(): number { return this.cv.COLOR_BGR2RGBA; }
  public get COLOR_BGR2XYZ(): number { return this.cv.COLOR_BGR2XYZ; }
  public get COLOR_BGR2XYZ2(): number { return this.cv.COLOR_BGR2XYZ2 }
  public get COLOR_BGR2YCrCb(): number { return this.cv.COLOR_BGR2YCrCb; }
  public get COLOR_BGR2YCrCb6(): number { return this.cv.COLOR_BGR2YCrCb6 }
  public get COLOR_BGR2YUV_I420(): number { return this.cv.COLOR_BGR2YUV_I420; }
  public get COLOR_BGR2YUV_I42028(): number { return this.cv.COLOR_BGR2YUV_I42028 }
  public get COLOR_BGR2YUV_IYUV(): number { return this.cv.COLOR_BGR2YUV_IYUV; }
  public get COLOR_BGR2YUV_IYUV28(): number { return this.cv.COLOR_BGR2YUV_IYUV28 }
  public get COLOR_BGR2YUV_YV12(): number { return this.cv.COLOR_BGR2YUV_YV12; }
  public get COLOR_BGR2YUV_YV1232(): number { return this.cv.COLOR_BGR2YUV_YV1232 }
  public get COLOR_BGR2YUV(): number { return this.cv.COLOR_BGR2YUV; }
  public get COLOR_BGR2YUV2(): number { return this.cv.COLOR_BGR2YUV2 }
  public get COLOR_BGR5552BGR(): number { return this.cv.COLOR_BGR5552BGR; }
  public get COLOR_BGR5552BGR4(): number { return this.cv.COLOR_BGR5552BGR4 }
  public get COLOR_BGR5552BGRA(): number { return this.cv.COLOR_BGR5552BGRA; }
  public get COLOR_BGR5552BGRA8(): number { return this.cv.COLOR_BGR5552BGRA8 }
  public get COLOR_BGR5552GRAY(): number { return this.cv.COLOR_BGR5552GRAY; }
  public get COLOR_BGR5552GRAY1(): number { return this.cv.COLOR_BGR5552GRAY1 }
  public get COLOR_BGR5552RGB(): number { return this.cv.COLOR_BGR5552RGB; }
  public get COLOR_BGR5552RGB5(): number { return this.cv.COLOR_BGR5552RGB5 }
  public get COLOR_BGR5552RGBA(): number { return this.cv.COLOR_BGR5552RGBA; }
  public get COLOR_BGR5552RGBA9(): number { return this.cv.COLOR_BGR5552RGBA9 }
  public get COLOR_BGR5652BGR(): number { return this.cv.COLOR_BGR5652BGR; }
  public get COLOR_BGR5652BGR4(): number { return this.cv.COLOR_BGR5652BGR4 }
  public get COLOR_BGR5652BGRA(): number { return this.cv.COLOR_BGR5652BGRA; }
  public get COLOR_BGR5652BGRA8(): number { return this.cv.COLOR_BGR5652BGRA8 }
  public get COLOR_BGR5652GRAY(): number { return this.cv.COLOR_BGR5652GRAY; }
  public get COLOR_BGR5652GRAY1(): number { return this.cv.COLOR_BGR5652GRAY1 }
  public get COLOR_BGR5652RGB(): number { return this.cv.COLOR_BGR5652RGB; }
  public get COLOR_BGR5652RGB5(): number { return this.cv.COLOR_BGR5652RGB5 }
  public get COLOR_BGR5652RGBA(): number { return this.cv.COLOR_BGR5652RGBA; }
  public get COLOR_BGR5652RGBA9(): number { return this.cv.COLOR_BGR5652RGBA9 }
  public get COLOR_BGRA2BGR(): number { return this.cv.COLOR_BGRA2BGR; }
  public get COLOR_BGRA2BGR555(): number { return this.cv.COLOR_BGRA2BGR555; }
  public get COLOR_BGRA2BGR5556(): number { return this.cv.COLOR_BGRA2BGR5556 }
  public get COLOR_BGRA2BGR565(): number { return this.cv.COLOR_BGRA2BGR565; }
  public get COLOR_BGRA2BGR5656(): number { return this.cv.COLOR_BGRA2BGR5656 }
  public get COLOR_BGRA2GRAY(): number { return this.cv.COLOR_BGRA2GRAY; }
  public get COLOR_BGRA2GRAY0(): number { return this.cv.COLOR_BGRA2GRAY0 }
  public get COLOR_BGRA2RGB(): number { return this.cv.COLOR_BGRA2RGB; }
  public get COLOR_BGRA2RGBA(): number { return this.cv.COLOR_BGRA2RGBA; }
  public get COLOR_BGRA2YUV_I420(): number { return this.cv.COLOR_BGRA2YUV_I420; }
  public get COLOR_BGRA2YUV_I42030(): number { return this.cv.COLOR_BGRA2YUV_I42030 }
  public get COLOR_BGRA2YUV_IYUV(): number { return this.cv.COLOR_BGRA2YUV_IYUV; }
  public get COLOR_BGRA2YUV_IYUV30(): number { return this.cv.COLOR_BGRA2YUV_IYUV30 }
  public get COLOR_BGRA2YUV_YV12(): number { return this.cv.COLOR_BGRA2YUV_YV12; }
  public get COLOR_BGRA2YUV_YV1234(): number { return this.cv.COLOR_BGRA2YUV_YV1234 }
  public get COLOR_COLORCVT_MAX(): number { return this.cv.COLOR_COLORCVT_MAX; }
  public get COLOR_COLORCVT_MAX43(): number { return this.cv.COLOR_COLORCVT_MAX43 }
  public get COLOR_GRAY2BGR(): number { return this.cv.COLOR_GRAY2BGR }
  public get COLOR_GRAY2BGR555(): number { return this.cv.COLOR_GRAY2BGR555; }
  public get COLOR_GRAY2BGR5550(): number { return this.cv.COLOR_GRAY2BGR5550 }
  public get COLOR_GRAY2BGR565(): number { return this.cv.COLOR_GRAY2BGR565; }
  public get COLOR_GRAY2BGR5650(): number { return this.cv.COLOR_GRAY2BGR5650 }
  public get COLOR_GRAY2BGRA(): number { return this.cv.COLOR_GRAY2BGRA }
  public get COLOR_GRAY2RGB(): number { return this.cv.COLOR_GRAY2RGB }
  public get COLOR_GRAY2RGBA(): number { return this.cv.COLOR_GRAY2RGBA }
  public get COLOR_HLS2BGR_FULL(): number { return this.cv.COLOR_HLS2BGR_FULL; }
  public get COLOR_HLS2BGR_FULL2(): number { return this.cv.COLOR_HLS2BGR_FULL2 }
  public get COLOR_HLS2BGR(): number { return this.cv.COLOR_HLS2BGR; }
  public get COLOR_HLS2BGR0(): number { return this.cv.COLOR_HLS2BGR0 }
  public get COLOR_HLS2RGB_FULL(): number { return this.cv.COLOR_HLS2RGB_FULL; }
  public get COLOR_HLS2RGB_FULL3(): number { return this.cv.COLOR_HLS2RGB_FULL3 }
  public get COLOR_HLS2RGB(): number { return this.cv.COLOR_HLS2RGB; }
  public get COLOR_HLS2RGB1(): number { return this.cv.COLOR_HLS2RGB1 }
  public get COLOR_HSV2BGR_FULL(): number { return this.cv.COLOR_HSV2BGR_FULL; }
  public get COLOR_HSV2BGR_FULL0(): number { return this.cv.COLOR_HSV2BGR_FULL0 }
  public get COLOR_HSV2BGR(): number { return this.cv.COLOR_HSV2BGR; }
  public get COLOR_HSV2BGR4(): number { return this.cv.COLOR_HSV2BGR4 }
  public get COLOR_HSV2RGB_FULL(): number { return this.cv.COLOR_HSV2RGB_FULL; }
  public get COLOR_HSV2RGB_FULL1(): number { return this.cv.COLOR_HSV2RGB_FULL1 }
  public get COLOR_HSV2RGB(): number { return this.cv.COLOR_HSV2RGB; }
  public get COLOR_HSV2RGB5(): number { return this.cv.COLOR_HSV2RGB5 }
  public get COLOR_Lab2BGR(): number { return this.cv.COLOR_Lab2BGR; }
  public get COLOR_Lab2BGR6(): number { return this.cv.COLOR_Lab2BGR6 }
  public get COLOR_Lab2LBGR(): number { return this.cv.COLOR_Lab2LBGR; }
  public get COLOR_Lab2LBGR8(): number { return this.cv.COLOR_Lab2LBGR8 }
  public get COLOR_Lab2LRGB(): number { return this.cv.COLOR_Lab2LRGB; }
  public get COLOR_Lab2LRGB9(): number { return this.cv.COLOR_Lab2LRGB9 }
  public get COLOR_Lab2RGB(): number { return this.cv.COLOR_Lab2RGB; }
  public get COLOR_Lab2RGB7(): number { return this.cv.COLOR_Lab2RGB7 }
  public get COLOR_LBGR2Lab(): number { return this.cv.COLOR_LBGR2Lab; }
  public get COLOR_LBGR2Lab4(): number { return this.cv.COLOR_LBGR2Lab4 }
  public get COLOR_LBGR2Luv(): number { return this.cv.COLOR_LBGR2Luv; }
  public get COLOR_LBGR2Luv6(): number { return this.cv.COLOR_LBGR2Luv6 }
  public get COLOR_LRGB2Lab(): number { return this.cv.COLOR_LRGB2Lab; }
  public get COLOR_LRGB2Lab5(): number { return this.cv.COLOR_LRGB2Lab5 }
  public get COLOR_LRGB2Luv(): number { return this.cv.COLOR_LRGB2Luv; }
  public get COLOR_LRGB2Luv7(): number { return this.cv.COLOR_LRGB2Luv7 }
  public get COLOR_Luv2BGR(): number { return this.cv.COLOR_Luv2BGR; }
  public get COLOR_Luv2BGR8(): number { return this.cv.COLOR_Luv2BGR8 }
  public get COLOR_Luv2LBGR(): number { return this.cv.COLOR_Luv2LBGR; }
  public get COLOR_Luv2LBGR0(): number { return this.cv.COLOR_Luv2LBGR0 }
  public get COLOR_Luv2LRGB(): number { return this.cv.COLOR_Luv2LRGB; }
  public get COLOR_Luv2LRGB1(): number { return this.cv.COLOR_Luv2LRGB1 }
  public get COLOR_Luv2RGB(): number { return this.cv.COLOR_Luv2RGB; }
  public get COLOR_mRGBA2RGBA(): number { return this.cv.COLOR_mRGBA2RGBA; }
  public get COLOR_mRGBA2RGBA26(): number { return this.cv.COLOR_mRGBA2RGBA26 }
  public get COLOR_RGB2BGR(): number { return this.cv.COLOR_RGB2BGR; }
  public get COLOR_RGB2BGR555(): number { return this.cv.COLOR_RGB2BGR555; }
  public get COLOR_RGB2BGR5553(): number { return this.cv.COLOR_RGB2BGR5553 }
  public get COLOR_RGB2BGR565(): number { return this.cv.COLOR_RGB2BGR565; }
  public get COLOR_RGB2BGR5653(): number { return this.cv.COLOR_RGB2BGR5653 }
  public get COLOR_RGB2BGRA(): number { return this.cv.COLOR_RGB2BGRA; }
  public get COLOR_RGB2GRAY(): number { return this.cv.COLOR_RGB2GRAY; }
  public get COLOR_RGB2HLS_FULL(): number { return this.cv.COLOR_RGB2HLS_FULL; }
  public get COLOR_RGB2HLS_FULL9(): number { return this.cv.COLOR_RGB2HLS_FULL9 }
  public get COLOR_RGB2HLS(): number { return this.cv.COLOR_RGB2HLS; }
  public get COLOR_RGB2HLS3(): number { return this.cv.COLOR_RGB2HLS3 }
  public get COLOR_RGB2HSV_FULL(): number { return this.cv.COLOR_RGB2HSV_FULL; }
  public get COLOR_RGB2HSV_FULL7(): number { return this.cv.COLOR_RGB2HSV_FULL7 }
  public get COLOR_RGB2HSV(): number { return this.cv.COLOR_RGB2HSV; }
  public get COLOR_RGB2HSV1(): number { return this.cv.COLOR_RGB2HSV1 }
  public get COLOR_RGB2Lab(): number { return this.cv.COLOR_RGB2Lab; }
  public get COLOR_RGB2Lab5(): number { return this.cv.COLOR_RGB2Lab5 }
  public get COLOR_RGB2Luv(): number { return this.cv.COLOR_RGB2Luv; }
  public get COLOR_RGB2Luv1(): number { return this.cv.COLOR_RGB2Luv1 }
  public get COLOR_RGB2RGBA(): number { return this.cv.COLOR_RGB2RGBA; }
  public get COLOR_RGB2XYZ(): number { return this.cv.COLOR_RGB2XYZ; }
  public get COLOR_RGB2XYZ3(): number { return this.cv.COLOR_RGB2XYZ3 }
  public get COLOR_RGB2YCrCb(): number { return this.cv.COLOR_RGB2YCrCb; }
  public get COLOR_RGB2YCrCb7(): number { return this.cv.COLOR_RGB2YCrCb7 }
  public get COLOR_RGB2YUV_I420(): number { return this.cv.COLOR_RGB2YUV_I420; }
  public get COLOR_RGB2YUV_I42027(): number { return this.cv.COLOR_RGB2YUV_I42027 }
  public get COLOR_RGB2YUV_IYUV(): number { return this.cv.COLOR_RGB2YUV_IYUV; }
  public get COLOR_RGB2YUV_IYUV27(): number { return this.cv.COLOR_RGB2YUV_IYUV27 }
  public get COLOR_RGB2YUV_YV12(): number { return this.cv.COLOR_RGB2YUV_YV12; }
  public get COLOR_RGB2YUV_YV1231(): number { return this.cv.COLOR_RGB2YUV_YV1231 }
  public get COLOR_RGB2YUV(): number { return this.cv.COLOR_RGB2YUV; }
  public get COLOR_RGB2YUV3(): number { return this.cv.COLOR_RGB2YUV3 }
  public get COLOR_RGBA2BGR(): number { return this.cv.COLOR_RGBA2BGR; }
  public get COLOR_RGBA2BGR555(): number { return this.cv.COLOR_RGBA2BGR555; }
  public get COLOR_RGBA2BGR5557(): number { return this.cv.COLOR_RGBA2BGR5557 }
  public get COLOR_RGBA2BGR565(): number { return this.cv.COLOR_RGBA2BGR565; }
  public get COLOR_RGBA2BGR5657(): number { return this.cv.COLOR_RGBA2BGR5657 }
  public get COLOR_RGBA2BGRA(): number { return this.cv.COLOR_RGBA2BGRA; }
  public get COLOR_RGBA2GRAY(): number { return this.cv.COLOR_RGBA2GRAY; }
  public get COLOR_RGBA2GRAY1(): number { return this.cv.COLOR_RGBA2GRAY1 }
  public get COLOR_RGBA2mRGBA(): number { return this.cv.COLOR_RGBA2mRGBA; }
  public get COLOR_RGBA2mRGBA25(): number { return this.cv.COLOR_RGBA2mRGBA25 }
  public get COLOR_RGBA2RGB(): number { return this.cv.COLOR_RGBA2RGB; }
  public get COLOR_RGBA2YUV_I420(): number { return this.cv.COLOR_RGBA2YUV_I420; }
  public get COLOR_RGBA2YUV_I42029(): number { return this.cv.COLOR_RGBA2YUV_I42029 }
  public get COLOR_RGBA2YUV_IYUV(): number { return this.cv.COLOR_RGBA2YUV_IYUV; }
  public get COLOR_RGBA2YUV_IYUV29(): number { return this.cv.COLOR_RGBA2YUV_IYUV29 }
  public get COLOR_RGBA2YUV_YV12(): number { return this.cv.COLOR_RGBA2YUV_YV12; }
  public get COLOR_RGBA2YUV_YV1233(): number { return this.cv.COLOR_RGBA2YUV_YV1233 }
  public get COLOR_XYZ2BGR(): number { return this.cv.COLOR_XYZ2BGR; }
  public get COLOR_XYZ2BGR4(): number { return this.cv.COLOR_XYZ2BGR4 }
  public get COLOR_XYZ2RGB(): number { return this.cv.COLOR_XYZ2RGB; }
  public get COLOR_XYZ2RGB5(): number { return this.cv.COLOR_XYZ2RGB5 }
  public get COLOR_YCrCb2BGR(): number { return this.cv.COLOR_YCrCb2BGR; }
  public get COLOR_YCrCb2BGR8(): number { return this.cv.COLOR_YCrCb2BGR8 }
  public get COLOR_YCrCb2RGB(): number { return this.cv.COLOR_YCrCb2RGB; }
  public get COLOR_YCrCb2RGB9(): number { return this.cv.COLOR_YCrCb2RGB9 }
  public get COLOR_YUV2BGR_I420(): number { return this.cv.COLOR_YUV2BGR_I420; }
  public get COLOR_YUV2BGR_I42001(): number { return this.cv.COLOR_YUV2BGR_I42001 }
  public get COLOR_YUV2BGR_IYUV(): number { return this.cv.COLOR_YUV2BGR_IYUV; }
  public get COLOR_YUV2BGR_IYUV01(): number { return this.cv.COLOR_YUV2BGR_IYUV01 }
  public get COLOR_YUV2BGR_NV12(): number { return this.cv.COLOR_YUV2BGR_NV12; }
  public get COLOR_YUV2BGR_NV121(): number { return this.cv.COLOR_YUV2BGR_NV121 }
  public get COLOR_YUV2BGR_NV21(): number { return this.cv.COLOR_YUV2BGR_NV21; }
  public get COLOR_YUV2BGR_NV213(): number { return this.cv.COLOR_YUV2BGR_NV213 }
  public get COLOR_YUV2BGR_UYNV(): number { return this.cv.COLOR_YUV2BGR_UYNV; }
  public get COLOR_YUV2BGR_UYNV08(): number { return this.cv.COLOR_YUV2BGR_UYNV08 }
  public get COLOR_YUV2BGR_UYVY(): number { return this.cv.COLOR_YUV2BGR_UYVY; }
  public get COLOR_YUV2BGR_UYVY08(): number { return this.cv.COLOR_YUV2BGR_UYVY08 }
  public get COLOR_YUV2BGR_Y422(): number { return this.cv.COLOR_YUV2BGR_Y422; }
  public get COLOR_YUV2BGR_Y42208(): number { return this.cv.COLOR_YUV2BGR_Y42208 }
  public get COLOR_YUV2BGR_YUNV(): number { return this.cv.COLOR_YUV2BGR_YUNV; }
  public get COLOR_YUV2BGR_YUNV16(): number { return this.cv.COLOR_YUV2BGR_YUNV16 }
  public get COLOR_YUV2BGR_YUY2(): number { return this.cv.COLOR_YUV2BGR_YUY2; }
  public get COLOR_YUV2BGR_YUY216(): number { return this.cv.COLOR_YUV2BGR_YUY216 }
  public get COLOR_YUV2BGR_YUYV(): number { return this.cv.COLOR_YUV2BGR_YUYV; }
  public get COLOR_YUV2BGR_YUYV16(): number { return this.cv.COLOR_YUV2BGR_YUYV16 }
  public get COLOR_YUV2BGR_YV12(): number { return this.cv.COLOR_YUV2BGR_YV12; }
  public get COLOR_YUV2BGR_YV129(): number { return this.cv.COLOR_YUV2BGR_YV129 }
  public get COLOR_YUV2BGR_YVYU(): number { return this.cv.COLOR_YUV2BGR_YVYU; }
  public get COLOR_YUV2BGR_YVYU18(): number { return this.cv.COLOR_YUV2BGR_YVYU18 }
  public get COLOR_YUV2BGR(): number { return this.cv.COLOR_YUV2BGR; }
  public get COLOR_YUV2BGR4(): number { return this.cv.COLOR_YUV2BGR4 }
  public get COLOR_YUV2BGRA_I420(): number { return this.cv.COLOR_YUV2BGRA_I420; }
  public get COLOR_YUV2BGRA_I42005(): number { return this.cv.COLOR_YUV2BGRA_I42005 }
  public get COLOR_YUV2BGRA_IYUV(): number { return this.cv.COLOR_YUV2BGRA_IYUV; }
  public get COLOR_YUV2BGRA_IYUV05(): number { return this.cv.COLOR_YUV2BGRA_IYUV05 }
  public get COLOR_YUV2BGRA_NV12(): number { return this.cv.COLOR_YUV2BGRA_NV12; }
  public get COLOR_YUV2BGRA_NV125(): number { return this.cv.COLOR_YUV2BGRA_NV125 }
  public get COLOR_YUV2BGRA_NV21(): number { return this.cv.COLOR_YUV2BGRA_NV21; }
  public get COLOR_YUV2BGRA_NV217(): number { return this.cv.COLOR_YUV2BGRA_NV217 }
  public get COLOR_YUV2BGRA_UYNV(): number { return this.cv.COLOR_YUV2BGRA_UYNV; }
  public get COLOR_YUV2BGRA_UYNV12(): number { return this.cv.COLOR_YUV2BGRA_UYNV12 }
  public get COLOR_YUV2BGRA_UYVY(): number { return this.cv.COLOR_YUV2BGRA_UYVY; }
  public get COLOR_YUV2BGRA_UYVY12(): number { return this.cv.COLOR_YUV2BGRA_UYVY12 }
  public get COLOR_YUV2BGRA_Y422(): number { return this.cv.COLOR_YUV2BGRA_Y422; }
  public get COLOR_YUV2BGRA_Y42212(): number { return this.cv.COLOR_YUV2BGRA_Y42212 }
  public get COLOR_YUV2BGRA_YUNV(): number { return this.cv.COLOR_YUV2BGRA_YUNV; }
  public get COLOR_YUV2BGRA_YUNV20(): number { return this.cv.COLOR_YUV2BGRA_YUNV20 }
  public get COLOR_YUV2BGRA_YUY2(): number { return this.cv.COLOR_YUV2BGRA_YUY2; }
  public get COLOR_YUV2BGRA_YUY220(): number { return this.cv.COLOR_YUV2BGRA_YUY220 }
  public get COLOR_YUV2BGRA_YUYV(): number { return this.cv.COLOR_YUV2BGRA_YUYV; }
  public get COLOR_YUV2BGRA_YUYV20(): number { return this.cv.COLOR_YUV2BGRA_YUYV20 }
  public get COLOR_YUV2BGRA_YV12(): number { return this.cv.COLOR_YUV2BGRA_YV12; }
  public get COLOR_YUV2BGRA_YV1203(): number { return this.cv.COLOR_YUV2BGRA_YV1203 }
  public get COLOR_YUV2BGRA_YVYU(): number { return this.cv.COLOR_YUV2BGRA_YVYU; }
  public get COLOR_YUV2BGRA_YVYU22(): number { return this.cv.COLOR_YUV2BGRA_YVYU22 }
  public get COLOR_YUV2GRAY_420(): number { return this.cv.COLOR_YUV2GRAY_420; }
  public get COLOR_YUV2GRAY_42006(): number { return this.cv.COLOR_YUV2GRAY_42006 }
  public get COLOR_YUV2GRAY_I420(): number { return this.cv.COLOR_YUV2GRAY_I420; }
  public get COLOR_YUV2GRAY_I42006(): number { return this.cv.COLOR_YUV2GRAY_I42006 }
  public get COLOR_YUV2GRAY_IYUV(): number { return this.cv.COLOR_YUV2GRAY_IYUV; }
  public get COLOR_YUV2GRAY_IYUV06(): number { return this.cv.COLOR_YUV2GRAY_IYUV06 }
  public get COLOR_YUV2GRAY_NV12(): number { return this.cv.COLOR_YUV2GRAY_NV12; }
  public get COLOR_YUV2GRAY_NV1206(): number { return this.cv.COLOR_YUV2GRAY_NV1206 }
  public get COLOR_YUV2GRAY_NV21(): number { return this.cv.COLOR_YUV2GRAY_NV21; }
  public get COLOR_YUV2GRAY_NV2106(): number { return this.cv.COLOR_YUV2GRAY_NV2106 }
  public get COLOR_YUV2GRAY_UYNV(): number { return this.cv.COLOR_YUV2GRAY_UYNV; }
  public get COLOR_YUV2GRAY_UYNV23(): number { return this.cv.COLOR_YUV2GRAY_UYNV23 }
  public get COLOR_YUV2GRAY_UYVY(): number { return this.cv.COLOR_YUV2GRAY_UYVY; }
  public get COLOR_YUV2GRAY_UYVY23(): number { return this.cv.COLOR_YUV2GRAY_UYVY23 }
  public get COLOR_YUV2GRAY_Y422(): number { return this.cv.COLOR_YUV2GRAY_Y422; }
  public get COLOR_YUV2GRAY_Y42223(): number { return this.cv.COLOR_YUV2GRAY_Y42223 }
  public get COLOR_YUV2GRAY_YUNV(): number { return this.cv.COLOR_YUV2GRAY_YUNV; }
  public get COLOR_YUV2GRAY_YUNV24(): number { return this.cv.COLOR_YUV2GRAY_YUNV24 }
  public get COLOR_YUV2GRAY_YUY2(): number { return this.cv.COLOR_YUV2GRAY_YUY2; }
  public get COLOR_YUV2GRAY_YUY224(): number { return this.cv.COLOR_YUV2GRAY_YUY224 }
  public get COLOR_YUV2GRAY_YUYV(): number { return this.cv.COLOR_YUV2GRAY_YUYV; }
  public get COLOR_YUV2GRAY_YUYV24(): number { return this.cv.COLOR_YUV2GRAY_YUYV24 }
  public get COLOR_YUV2GRAY_YV12(): number { return this.cv.COLOR_YUV2GRAY_YV12; }
  public get COLOR_YUV2GRAY_YV1206(): number { return this.cv.COLOR_YUV2GRAY_YV1206 }
  public get COLOR_YUV2GRAY_YVYU(): number { return this.cv.COLOR_YUV2GRAY_YVYU; }
  public get COLOR_YUV2GRAY_YVYU24(): number { return this.cv.COLOR_YUV2GRAY_YVYU24 }
  public get COLOR_YUV2RGB_I420(): number { return this.cv.COLOR_YUV2RGB_I420; }
  public get COLOR_YUV2RGB_I42000(): number { return this.cv.COLOR_YUV2RGB_I42000 }
  public get COLOR_YUV2RGB_IYUV(): number { return this.cv.COLOR_YUV2RGB_IYUV; }
  public get COLOR_YUV2RGB_IYUV00(): number { return this.cv.COLOR_YUV2RGB_IYUV00 }
  public get COLOR_YUV2RGB_NV12(): number { return this.cv.COLOR_YUV2RGB_NV12; }
  public get COLOR_YUV2RGB_NV120(): number { return this.cv.COLOR_YUV2RGB_NV120 }
  public get COLOR_YUV2RGB_NV21(): number { return this.cv.COLOR_YUV2RGB_NV21; }
  public get COLOR_YUV2RGB_NV212(): number { return this.cv.COLOR_YUV2RGB_NV212 }
  public get COLOR_YUV2RGB_UYNV(): number { return this.cv.COLOR_YUV2RGB_UYNV; }
  public get COLOR_YUV2RGB_UYNV07(): number { return this.cv.COLOR_YUV2RGB_UYNV07 }
  public get COLOR_YUV2RGB_UYVY(): number { return this.cv.COLOR_YUV2RGB_UYVY; }
  public get COLOR_YUV2RGB_UYVY07(): number { return this.cv.COLOR_YUV2RGB_UYVY07 }
  public get COLOR_YUV2RGB_Y422(): number { return this.cv.COLOR_YUV2RGB_Y422; }
  public get COLOR_YUV2RGB_Y42207(): number { return this.cv.COLOR_YUV2RGB_Y42207 }
  public get COLOR_YUV2RGB_YUNV(): number { return this.cv.COLOR_YUV2RGB_YUNV; }
  public get COLOR_YUV2RGB_YUNV15(): number { return this.cv.COLOR_YUV2RGB_YUNV15 }
  public get COLOR_YUV2RGB_YUY2(): number { return this.cv.COLOR_YUV2RGB_YUY2; }
  public get COLOR_YUV2RGB_YUY215(): number { return this.cv.COLOR_YUV2RGB_YUY215 }
  public get COLOR_YUV2RGB_YUYV(): number { return this.cv.COLOR_YUV2RGB_YUYV; }
  public get COLOR_YUV2RGB_YUYV15(): number { return this.cv.COLOR_YUV2RGB_YUYV15 }
  public get COLOR_YUV2RGB_YV12(): number { return this.cv.COLOR_YUV2RGB_YV12; }
  public get COLOR_YUV2RGB_YV128(): number { return this.cv.COLOR_YUV2RGB_YV128 }
  public get COLOR_YUV2RGB_YVYU(): number { return this.cv.COLOR_YUV2RGB_YVYU; }
  public get COLOR_YUV2RGB_YVYU17(): number { return this.cv.COLOR_YUV2RGB_YVYU17 }
  public get COLOR_YUV2RGB(): number { return this.cv.COLOR_YUV2RGB; }
  public get COLOR_YUV2RGB5(): number { return this.cv.COLOR_YUV2RGB5 }
  public get COLOR_YUV2RGBA_I420(): number { return this.cv.COLOR_YUV2RGBA_I420; }
  public get COLOR_YUV2RGBA_I42004(): number { return this.cv.COLOR_YUV2RGBA_I42004 }
  public get COLOR_YUV2RGBA_IYUV(): number { return this.cv.COLOR_YUV2RGBA_IYUV; }
  public get COLOR_YUV2RGBA_IYUV04(): number { return this.cv.COLOR_YUV2RGBA_IYUV04 }
  public get COLOR_YUV2RGBA_NV12(): number { return this.cv.COLOR_YUV2RGBA_NV12; }
  public get COLOR_YUV2RGBA_NV124(): number { return this.cv.COLOR_YUV2RGBA_NV124 }
  public get COLOR_YUV2RGBA_NV21(): number { return this.cv.COLOR_YUV2RGBA_NV21; }
  public get COLOR_YUV2RGBA_NV216(): number { return this.cv.COLOR_YUV2RGBA_NV216 }
  public get COLOR_YUV2RGBA_UYNV(): number { return this.cv.COLOR_YUV2RGBA_UYNV; }
  public get COLOR_YUV2RGBA_UYNV11(): number { return this.cv.COLOR_YUV2RGBA_UYNV11 }
  public get COLOR_YUV2RGBA_UYVY(): number { return this.cv.COLOR_YUV2RGBA_UYVY; }
  public get COLOR_YUV2RGBA_UYVY11(): number { return this.cv.COLOR_YUV2RGBA_UYVY11 }
  public get COLOR_YUV2RGBA_Y422(): number { return this.cv.COLOR_YUV2RGBA_Y422; }
  public get COLOR_YUV2RGBA_Y42211(): number { return this.cv.COLOR_YUV2RGBA_Y42211 }
  public get COLOR_YUV2RGBA_YUNV(): number { return this.cv.COLOR_YUV2RGBA_YUNV; }
  public get COLOR_YUV2RGBA_YUNV19(): number { return this.cv.COLOR_YUV2RGBA_YUNV19 }
  public get COLOR_YUV2RGBA_YUY2(): number { return this.cv.COLOR_YUV2RGBA_YUY2; }
  public get COLOR_YUV2RGBA_YUY219(): number { return this.cv.COLOR_YUV2RGBA_YUY219 }
  public get COLOR_YUV2RGBA_YUYV(): number { return this.cv.COLOR_YUV2RGBA_YUYV; }
  public get COLOR_YUV2RGBA_YUYV19(): number { return this.cv.COLOR_YUV2RGBA_YUYV19 }
  public get COLOR_YUV2RGBA_YV12(): number { return this.cv.COLOR_YUV2RGBA_YV12; }
  public get COLOR_YUV2RGBA_YV1202(): number { return this.cv.COLOR_YUV2RGBA_YV1202 }
  public get COLOR_YUV2RGBA_YVYU(): number { return this.cv.COLOR_YUV2RGBA_YVYU; }
  public get COLOR_YUV2RGBA_YVYU21(): number { return this.cv.COLOR_YUV2RGBA_YVYU21 }
  public get COLOR_YUV420p2BGR(): number { return this.cv.COLOR_YUV420p2BGR; }
  public get COLOR_YUV420p2BGR9(): number { return this.cv.COLOR_YUV420p2BGR9 }
  public get COLOR_YUV420p2BGRA(): number { return this.cv.COLOR_YUV420p2BGRA; }
  public get COLOR_YUV420p2BGRA03(): number { return this.cv.COLOR_YUV420p2BGRA03 }
  public get COLOR_YUV420p2GRAY(): number { return this.cv.COLOR_YUV420p2GRAY; }
  public get COLOR_YUV420p2GRAY06(): number { return this.cv.COLOR_YUV420p2GRAY06 }
  public get COLOR_YUV420p2RGB(): number { return this.cv.COLOR_YUV420p2RGB; }
  public get COLOR_YUV420p2RGB8(): number { return this.cv.COLOR_YUV420p2RGB8 }
  public get COLOR_YUV420p2RGBA(): number { return this.cv.COLOR_YUV420p2RGBA; }
  public get COLOR_YUV420p2RGBA02(): number { return this.cv.COLOR_YUV420p2RGBA02 }
  public get COLOR_YUV420sp2BGR(): number { return this.cv.COLOR_YUV420sp2BGR; }
  public get COLOR_YUV420sp2BGR3(): number { return this.cv.COLOR_YUV420sp2BGR3 }
  public get COLOR_YUV420sp2BGRA(): number { return this.cv.COLOR_YUV420sp2BGRA; }
  public get COLOR_YUV420sp2BGRA7(): number { return this.cv.COLOR_YUV420sp2BGRA7 }
  public get COLOR_YUV420sp2GRAY(): number { return this.cv.COLOR_YUV420sp2GRAY; }
  public get COLOR_YUV420sp2GRAY06(): number { return this.cv.COLOR_YUV420sp2GRAY06 }
  public get COLOR_YUV420sp2RGB(): number { return this.cv.COLOR_YUV420sp2RGB; }
  public get COLOR_YUV420sp2RGB2(): number { return this.cv.COLOR_YUV420sp2RGB2 }
  public get COLOR_YUV420sp2RGBA(): number { return this.cv.COLOR_YUV420sp2RGBA; }
  public get COLOR_YUV420sp2RGBA6(): number { return this.cv.COLOR_YUV420sp2RGBA6 }
  public get COLORMAP_AUTUMN(): number { return this.cv.COLORMAP_AUTUMN; }
  public get COLORMAP_BONE(): number { return this.cv.COLORMAP_BONE; }
  public get COLORMAP_COOL(): number { return this.cv.COLORMAP_COOL; }
  public get COLORMAP_HOT(): number { return this.cv.COLORMAP_HOT; }
  public get COLORMAP_HOT1(): number { return this.cv.COLORMAP_HOT1 }
  public get COLORMAP_HSV(): number { return this.cv.COLORMAP_HSV; }
  public get COLORMAP_JET(): number { return this.cv.COLORMAP_JET; }
  public get COLORMAP_OCEAN(): number { return this.cv.COLORMAP_OCEAN; }
  public get COLORMAP_PARULA(): number { return this.cv.COLORMAP_PARULA; }
  public get COLORMAP_PARULA2(): number { return this.cv.COLORMAP_PARULA2 }
  public get COLORMAP_PINK(): number { return this.cv.COLORMAP_PINK; }
  public get COLORMAP_PINK0(): number { return this.cv.COLORMAP_PINK0 }
  public get COLORMAP_RAINBOW(): number { return this.cv.COLORMAP_RAINBOW; }
  public get COLORMAP_SPRING(): number { return this.cv.COLORMAP_SPRING; }
  public get COLORMAP_SUMMER(): number { return this.cv.COLORMAP_SUMMER; }
  public get COLORMAP_WINTER(): number { return this.cv.COLORMAP_WINTER; }
  public get CONTOURS_MATCH_I1(): number { return this.cv.CONTOURS_MATCH_I1 }
  public get CONTOURS_MATCH_I2(): number { return this.cv.CONTOURS_MATCH_I2 }
  public get CONTOURS_MATCH_I3(): number { return this.cv.CONTOURS_MATCH_I3 }
  public get COVAR_COLS(): number { return this.cv.COVAR_COLS; }
  public get COVAR_COLS6(): number { return this.cv.COVAR_COLS6 }
  public get COVAR_NORMAL(): number { return this.cv.COVAR_NORMAL }
  public get COVAR_ROWS(): number { return this.cv.COVAR_ROWS }
  public get COVAR_SCALE(): number { return this.cv.COVAR_SCALE }
  public get COVAR_SCRAMBLED(): number { return this.cv.COVAR_SCRAMBLED }
  public get COVAR_USE_AVG(): number { return this.cv.COVAR_USE_AVG }
  public get CV_16S(): number { return this.cv.CV_16S }
  public get CV_16SC1(): number { return this.cv.CV_16SC1 }
  public get CV_16SC2(): number { return this.cv.CV_16SC2; }
  public get CV_16SC21(): number { return this.cv.CV_16SC21 }
  public get CV_16SC3(): number { return this.cv.CV_16SC3; }
  public get CV_16SC39(): number { return this.cv.CV_16SC39 }
  public get CV_16SC4(): number { return this.cv.CV_16SC4; }
  public get CV_16SC47(): number { return this.cv.CV_16SC47 }
  public get CV_16U(): number { return this.cv.CV_16U }
  public get CV_16UC1(): number { return this.cv.CV_16UC1 }
  public get CV_16UC2(): number { return this.cv.CV_16UC2; }
  public get CV_16UC20(): number { return this.cv.CV_16UC20 }
  public get CV_16UC3(): number { return this.cv.CV_16UC3; }
  public get CV_16UC38(): number { return this.cv.CV_16UC38 }
  public get CV_16UC4(): number { return this.cv.CV_16UC4; }
  public get CV_16UC46(): number { return this.cv.CV_16UC46 }
  public get CV_32F(): number { return this.cv.CV_32F }
  public get CV_32FC1(): number { return this.cv.CV_32FC1 }
  public get CV_32FC2(): number { return this.cv.CV_32FC2; }
  public get CV_32FC23(): number { return this.cv.CV_32FC23 }
  public get CV_32FC3(): number { return this.cv.CV_32FC3; }
  public get CV_32FC31(): number { return this.cv.CV_32FC31 }
  public get CV_32FC4(): number { return this.cv.CV_32FC4; }
  public get CV_32FC49(): number { return this.cv.CV_32FC49 }
  public get CV_32S(): number { return this.cv.CV_32S }
  public get CV_32SC1(): number { return this.cv.CV_32SC1 }
  public get CV_32SC2(): number { return this.cv.CV_32SC2; }
  public get CV_32SC22(): number { return this.cv.CV_32SC22 }
  public get CV_32SC3(): number { return this.cv.CV_32SC3; }
  public get CV_32SC30(): number { return this.cv.CV_32SC30 }
  public get CV_32SC4(): number { return this.cv.CV_32SC4; }
  public get CV_32SC48(): number { return this.cv.CV_32SC48 }
  public get CV_64F(): number { return this.cv.CV_64F }
  public get CV_64FC1(): number { return this.cv.CV_64FC1 }
  public get CV_64FC2(): number { return this.cv.CV_64FC2; }
  public get CV_64FC24(): number { return this.cv.CV_64FC24 }
  public get CV_64FC3(): number { return this.cv.CV_64FC3; }
  public get CV_64FC32(): number { return this.cv.CV_64FC32 }
  public get CV_64FC4(): number { return this.cv.CV_64FC4; }
  public get CV_64FC40(): number { return this.cv.CV_64FC40 }
  public get CV_8S(): number { return this.cv.CV_8S }
  public get CV_8SC1(): number { return this.cv.CV_8SC1 }
  public get CV_8SC2(): number { return this.cv.CV_8SC2 }
  public get CV_8SC3(): number { return this.cv.CV_8SC3; }
  public get CV_8SC37(): number { return this.cv.CV_8SC37 }
  public get CV_8SC4(): number { return this.cv.CV_8SC4; }
  public get CV_8SC45(): number { return this.cv.CV_8SC45 }
  public get CV_8U(): number { return this.cv.CV_8U }
  public get CV_8UC1(): number { return this.cv.CV_8UC1 }
  public get CV_8UC2(): number { return this.cv.CV_8UC2 }
  public get CV_8UC3(): number { return this.cv.CV_8UC3; }
  public get CV_8UC36(): number { return this.cv.CV_8UC36 }
  public get CV_8UC4(): number { return this.cv.CV_8UC4; }
  public get CV_8UC44(): number { return this.cv.CV_8UC44 }
  public get DCT_INVERSE(): number { return this.cv.DCT_INVERSE }
  public get DCT_ROWS(): number { return this.cv.DCT_ROWS }
  public get DECOMP_CHOLESKY(): number { return this.cv.DECOMP_CHOLESKY }
  public get DECOMP_EIG(): number { return this.cv.DECOMP_EIG }
  public get DECOMP_LU(): number { return this.cv.DECOMP_LU }
  public get DECOMP_NORMAL(): number { return this.cv.DECOMP_NORMAL; }
  public get DECOMP_NORMAL6(): number { return this.cv.DECOMP_NORMAL6 }
  public get DECOMP_QR(): number { return this.cv.DECOMP_QR }
  public get DECOMP_SVD(): number { return this.cv.DECOMP_SVD }
  public get DFT_COMPLEX_INPUT(): number { return this.cv.DFT_COMPLEX_INPUT; }
  public get DFT_COMPLEX_INPUT4(): number { return this.cv.DFT_COMPLEX_INPUT4 }
  public get DFT_COMPLEX_OUTPUT(): number { return this.cv.DFT_COMPLEX_OUTPUT; }
  public get DFT_COMPLEX_OUTPUT6(): number { return this.cv.DFT_COMPLEX_OUTPUT6 }
  public get DFT_INVERSE(): number { return this.cv.DFT_INVERSE }
  public get DFT_REAL_OUTPUT(): number { return this.cv.DFT_REAL_OUTPUT; }
  public get DFT_REAL_OUTPUT2(): number { return this.cv.DFT_REAL_OUTPUT2 }
  public get DFT_ROWS(): number { return this.cv.DFT_ROWS }
  public get DFT_SCALE(): number { return this.cv.DFT_SCALE }
  public get DIST_C(): number { return this.cv.DIST_C }
  public get DIST_FAIR(): number { return this.cv.DIST_FAIR }
  public get DIST_HUBER(): number { return this.cv.DIST_HUBER }
  public get DIST_L1(): number { return this.cv.DIST_L1 }
  public get DIST_L12(): number { return this.cv.DIST_L12 }
  public get DIST_L2(): number { return this.cv.DIST_L2 }
  public get DIST_LABEL_CCOMP(): number { return this.cv.DIST_LABEL_CCOMP }
  public get DIST_LABEL_PIXEL(): number { return this.cv.DIST_LABEL_PIXEL }
  public get DIST_MASK_3(): number { return this.cv.DIST_MASK_3 }
  public get DIST_MASK_5(): number { return this.cv.DIST_MASK_5 }
  public get DIST_MASK_PRECISE(): number { return this.cv.DIST_MASK_PRECISE }
  public get DIST_USER(): number { return this.cv.DIST_USER }
  public get DIST_WELSCH(): number { return this.cv.DIST_WELSCH }
  public get DNN_BACKEND_DEFAULT(): number { return this.cv.DNN_BACKEND_DEFAULT }
  public get DNN_BACKEND_HALIDE(): number { return this.cv.DNN_BACKEND_HALIDE }
  public get DNN_BACKEND_INFERENCE_ENGINE(): number { return this.cv.DNN_BACKEND_INFERENCE_ENGINE }
  public get DNN_TARGET_CPU(): number { return this.cv.DNN_TARGET_CPU }
  public get DNN_TARGET_OPENCL(): number { return this.cv.DNN_TARGET_OPENCL }
  public get FileNode_EMPTY(): number { return this.cv.FileNode_EMPTY; }
  public get FileNode_FLOAT(): number { return this.cv.FileNode_FLOAT; }
  public get FileNode_FLOW(): number { return this.cv.FileNode_FLOW; }
  public get FileNode_INT(): number { return this.cv.FileNode_INT; }
  public get FileNode_MAP(): number { return this.cv.FileNode_MAP; }
  public get FileNode_NAMED(): number { return this.cv.FileNode_NAMED; }
  public get FileNode_NONE(): number { return this.cv.FileNode_NONE; }
  public get FileNode_REAL(): number { return this.cv.FileNode_REAL; }
  public get FileNode_REF(): number { return this.cv.FileNode_REF; }
  public get FileNode_SEQ(): number { return this.cv.FileNode_SEQ; }
  public get FileNode_STR(): number { return this.cv.FileNode_STR; }
  public get FileNode_STRING(): number { return this.cv.FileNode_STRING; }
  public get FileNode_TYPE_MASK(): number { return this.cv.FileNode_TYPE_MASK; }
  public get FileNode_USER(): number { return this.cv.FileNode_USER; }
  public get FileStorage_APPEND(): number { return this.cv.FileStorage_APPEND; }
  public get FileStorage_BASE64(): number { return this.cv.FileStorage_BASE64; }
  public get FileStorage_FORMAT_AUTO(): number { return this.cv.FileStorage_FORMAT_AUTO; }
  public get FileStorage_FORMAT_JSON(): number { return this.cv.FileStorage_FORMAT_JSON; }
  public get FileStorage_FORMAT_MASK(): number { return this.cv.FileStorage_FORMAT_MASK; }
  public get FileStorage_FORMAT_XML(): number { return this.cv.FileStorage_FORMAT_XML; }
  public get FileStorage_FORMAT_YAML(): number { return this.cv.FileStorage_FORMAT_YAML; }
  public get FileStorage_INSIDE_MAP(): number { return this.cv.FileStorage_INSIDE_MAP; }
  public get FileStorage_MEMORY(): number { return this.cv.FileStorage_MEMORY; }
  public get FileStorage_NAME_EXPECTED(): number { return this.cv.FileStorage_NAME_EXPECTED; }
  public get FileStorage_READ(): number { return this.cv.FileStorage_READ; }
  public get FileStorage_UNDEFINED(): number { return this.cv.FileStorage_UNDEFINED; }
  public get FileStorage_VALUE_EXPECTED(): number { return this.cv.FileStorage_VALUE_EXPECTED; }
  public get FileStorage_WRITE_BASE64(): number { return this.cv.FileStorage_WRITE_BASE64; }
  public get FileStorage_WRITE(): number { return this.cv.FileStorage_WRITE; }
  public get FILLED(): number { return this.cv.FILLED }
  public get FLAGS_EXPAND_SAME_NAMES(): number { return this.cv.FLAGS_EXPAND_SAME_NAMES }
  public get FLAGS_MAPPING(): number { return this.cv.FLAGS_MAPPING }
  public get FLAGS_NONE(): number { return this.cv.FLAGS_NONE }
  public get FLOODFILL_FIXED_RANGE(): number { return this.cv.FLOODFILL_FIXED_RANGE }
  public get FLOODFILL_FIXED_RANGE5536(): number { return this.cv.FLOODFILL_FIXED_RANGE5536 }
  public get FLOODFILL_MASK_ONLY(): number { return this.cv.FLOODFILL_MASK_ONLY }
  public get FLOODFILL_MASK_ONLY31072(): number { return this.cv.FLOODFILL_MASK_ONLY31072 }
  public get FONT_HERSHEY_COMPLEX_SMALL(): number { return this.cv.FONT_HERSHEY_COMPLEX_SMALL }
  public get FONT_HERSHEY_COMPLEX(): number { return this.cv.FONT_HERSHEY_COMPLEX }
  public get FONT_HERSHEY_DUPLEX(): number { return this.cv.FONT_HERSHEY_DUPLEX }
  public get FONT_HERSHEY_PLAIN(): number { return this.cv.FONT_HERSHEY_PLAIN }
  public get FONT_HERSHEY_SCRIPT_COMPLEX(): number { return this.cv.FONT_HERSHEY_SCRIPT_COMPLEX }
  public get FONT_HERSHEY_SCRIPT_SIMPLEX(): number { return this.cv.FONT_HERSHEY_SCRIPT_SIMPLEX }
  public get FONT_HERSHEY_SIMPLEX(): number { return this.cv.FONT_HERSHEY_SIMPLEX }
  public get FONT_HERSHEY_TRIPLEX(): number { return this.cv.FONT_HERSHEY_TRIPLEX }
  public get FONT_ITALIC(): number { return this.cv.FONT_ITALIC }
  public get FONT_ITALIC6(): number { return this.cv.FONT_ITALIC6 }
  public get Formatter_FMT_C(): number { return this.cv.Formatter_FMT_C; }
  public get Formatter_FMT_CSV(): number { return this.cv.Formatter_FMT_CSV; }
  public get Formatter_FMT_DEFAULT(): number { return this.cv.Formatter_FMT_DEFAULT; }
  public get Formatter_FMT_MATLAB(): number { return this.cv.Formatter_FMT_MATLAB; }
  public get Formatter_FMT_NUMPY(): number { return this.cv.Formatter_FMT_NUMPY; }
  public get Formatter_FMT_PYTHON(): number { return this.cv.Formatter_FMT_PYTHON; }
  public get GC_BGD(): number { return this.cv.GC_BGD; }
  public get GC_EVAL(): number { return this.cv.GC_EVAL; }
  public get GC_FGD(): number { return this.cv.GC_FGD; }
  public get GC_INIT_WITH_MASK(): number { return this.cv.GC_INIT_WITH_MASK; }
  public get GC_INIT_WITH_RECT(): number { return this.cv.GC_INIT_WITH_RECT; }
  public get GC_PR_BGD(): number { return this.cv.GC_PR_BGD; }
  public get GC_PR_FGD(): number { return this.cv.GC_PR_FGD; }
  public get GEMM_1_T(): number { return this.cv.GEMM_1_T; }
  public get GEMM_2_T(): number { return this.cv.GEMM_2_T; }
  public get GEMM_3_T(): number { return this.cv.GEMM_3_T; }
  public get GpuApiCallError(): number { return this.cv.GpuApiCallError; }
  public get GpuNotSupported(): number { return this.cv.GpuNotSupported; }
  public get Hamming_normType(): number { return this.cv.Hamming_normType; }
  public get HeaderIsNull(): number { return this.cv.HeaderIsNull; }
  public get HEAP16(): Int16Array { return this.cv.HEAP8; }
  public get HEAP32(): Int32Array { return this.cv.HEAP32; }
  public get HEAP8(): Int8Array { return this.cv.HEAP8; }
  public get HEAPF32(): Float32Array { return this.cv.HEAPF32; }
  public get HEAPF64(): Float64Array { return this.cv.HEAPF64; }
  public get HEAPU16(): Uint16Array { return this.cv.HEAPU16; }
  public get HEAPU32(): Uint32Array { return this.cv.HEAPU32; }
  public get HEAPU8(): Uint8Array { return this.cv.HEAPU8; }
  public get HISTCMP_BHATTACHARYYA(): number { return this.cv.HISTCMP_BHATTACHARYYA; }
  public get HISTCMP_CHISQR_ALT(): number { return this.cv.HISTCMP_CHISQR_ALT; }
  public get HISTCMP_CHISQR(): number { return this.cv.HISTCMP_CHISQR; }
  public get HISTCMP_CORREL(): number { return this.cv.HISTCMP_CORREL; }
  public get HISTCMP_HELLINGER(): number { return this.cv.HISTCMP_HELLINGER; }
  public get HISTCMP_INTERSECT(): number { return this.cv.HISTCMP_INTERSECT; }
  public get HISTCMP_KL_DIV(): number { return this.cv.HISTCMP_KL_DIV; }
  public get HOGDescriptor_DEFAULT_NLEVELS(): number { return this.cv.HOGDescriptor_DEFAULT_NLEVELS; }
  public get HOGDescriptor_L2Hys(): number { return this.cv.HOGDescriptor_L2Hys; }
  public get HOUGH_GRADIENT(): number { return this.cv.HOUGH_GRADIENT; }
  public get HOUGH_MULTI_SCALE(): number { return this.cv.HOUGH_MULTI_SCALE; }
  public get HOUGH_PROBABILISTIC(): number { return this.cv.HOUGH_PROBABILISTIC; }
  public get HOUGH_STANDARD(): number { return this.cv.HOUGH_STANDARD; }
  public get IMPL_IPP(): number { return this.cv.IMPL_IPP; }
  public get IMPL_OPENCL(): number { return this.cv.IMPL_OPENCL; }
  public get IMPL_PLAIN(): number { return this.cv.IMPL_PLAIN; }
  public get INT_MAX(): number { return this.cv.INT_MAX; }
  public get INT_MIN(): number { return this.cv.INT_MIN; }
  public get INTER_AREA(): number { return this.cv.INTER_AREA; }
  public get INTER_BITS(): number { return this.cv.INTER_BITS; }
  public get INTER_CUBIC(): number { return this.cv.INTER_CUBIC; }
  public get INTER_LANCZOS(): number { return this.cv.INTER_LANCZOS; }
  public get INTER_LINEAR_EXACT(): number { return this.cv.INTER_LINEAR_EXACT; }
  public get INTER_LINEAR(): number { return this.cv.INTER_LINEAR; }
  public get INTER_MAX(): number { return this.cv.INTER_MAX; }
  public get INTER_NEAREST(): number { return this.cv.INTER_NEAREST; }
  public get INTER_TAB_SIZE(): number { return this.cv.INTER_TAB_SIZE; }
  public get INTERSECT_FULL(): number { return this.cv.INTERSECT_FULL; }
  public get INTERSECT_NONE(): number { return this.cv.INTERSECT_NONE; }
  public get INTERSECT_PARTIAL(): number { return this.cv.INTERSECT_PARTIAL; }
  public get KMEANS_PP_CENTERS(): number { return this.cv.KMEANS_PP_CENTERS; }
  public get KMEANS_RANDOM_CENTERS(): number { return this.cv.KMEANS_RANDOM_CENTERS; }
  public get KMEANS_USE_INITIAL_LABELS(): number { return this.cv.KMEANS_USE_INITIAL_LABELS; }
  public get LINE_4(): number { return this.cv.LINE_4; }
  public get LINE_8(): number { return this.cv.LINE_8; }
  public get LINE_AA(): number { return this.cv.N; }
  public get LSD_REFINE_ADV(): number { return this.cv.LSD_REFINE_ADV; }
  public get LSD_REFINE_NONE(): number { return this.cv.LSD_REFINE_NONE; }
  public get LSD_REFINE_STD(): number { return this.cv.LSD_REFINE_NONE; }
  public get MARKER_CROSS(): number { return this.cv.MARKER_CROSS; }
  public get MARKER_DIAMOND(): number { return this.cv.MARKER_DIAMOND; }
  public get MARKER_SQUARE(): number { return this.cv.MARKER_SQUARE; }
  public get MARKER_STAR(): number { return this.cv.MARKER_STAR; }
  public get MARKER_TILTED_CROSS(): number { return this.cv.MARKER_TILTED_CROSS; }
  public get MARKER_TRIANGLE_DOWN(): number { return this.cv.MARKER_TRIANGLE_DOWN; }
  public get MARKER_TRIANGLE_UP(): number { return this.cv.MARKER_TRIANGLE_UP; }
  public get MaskIsTiled(): number { return this.cv.MaskIsTiled; }
  public get Mat_AUTO_STEP(): number { return this.cv.Mat_AUTO_STEP }
  public get Mat_CONTINUOUS_FLAG(): number { return this.cv.Mat_CONTINUOUS_FLAG }
  public get Mat_DEPTH_MASK(): number { return this.cv.Mat_DEPTH_MASK }
  public get Mat_MAGIC_MASK(): number { return this.cv.Mat_MAGIC_MASK }
  public get Mat_MAGIC_VAL(): number { return this.cv.Mat_MAGIC_VAL }
  public get Mat_SUBMATRIX_FLAG(): number { return this.cv.Mat_SUBMATRIX_FLAG }
  public get Mat_TYPE_MASK(): number { return this.cv.Mat_TYPE_MASK }
  public get MORPH_BLACKHAT(): number { return this.cv.MORPH_BLACKHAT; }
  public get MORPH_CLOSE(): number { return this.cv.MORPH_CLOSE; }
  public get MORPH_CROSS(): number { return this.cv.MORPH_CROSS; }
  public get MORPH_DILATE(): number { return this.cv.MORPH_DILATE; }
  public get MORPH_ELLIPSE(): number { return this.cv.MORPH_ELLIPSE; }
  public get MORPH_ERODE(): number { return this.cv.MORPH_ERODE; }
  public get MORPH_GRADIENT(): number { return this.cv.MORPH_GRADIENT; }
  public get MORPH_HITMISS(): number { return this.cv.MORPH_HITMISS; }
  public get MORPH_OPEN(): number { return this.cv.MORPH_OPEN; }
  public get MORPH_RECT(): number { return this.cv.MORPH_RECT; }
  public get MORPH_TOPHAT(): number { return this.cv.MORPH_TOPHAT; }
  public get MOTION_AFFINE(): number { return this.cv.MOTION_AFFINE; }
  public get MOTION_EUCLIDEAN(): number { return this.cv.MOTION_EUCLIDEAN; }
  public get MOTION_HOMOGRAPHY(): number { return this.cv.MOTION_HOMOGRAPHY; }
  public get MOTION_TRANSLATION(): number { return this.cv.MOTION_TRANSLATION; }
  public get NORM_HAMMING(): number { return this.cv.NORM_HAMMING }
  public get NORM_HAMMING2(): number { return this.cv.NORM_HAMMING2 }
  public get NORM_INF(): number { return this.cv.NORM_INF }
  public get NORM_L1(): number { return this.cv.NORM_L1 }
  public get NORM_L2(): number { return this.cv.NORM_L2 }
  public get NORM_L2SQR(): number { return this.cv.NORM_L2SQR }
  public get NORM_MINMAX(): number { return this.cv.NORM_MINMAX2 }
  public get NORM_RELATIVE(): number { return this.cv.NORM_RELATIVE }
  public get NORM_TYPE_MASK(): number { return this.cv.NORM_TYPE_MASK }
  public get OpenCLApiCallError(): number { return this.cv.OpenCLApiCallError }
  public get OpenCLDoubleNotSupported(): number { return this.cv.OpenCLDoubleNotSupported }
  public get OpenCLInitError(): number { return this.cv.OpenCLInitError }
  public get OpenCLNoAMDBlasFft(): number { return this.cv.OpenCLNoAMDBlasFft }
  public get OpenGlApiCallError(): number { return this.cv.OpenGlApiCallError }
  public get OpenGlNotSupported(): number { return this.cv.OpenGlNotSupported }
  public get OPTFLOW_FARNEBACK_GAUSSIAN(): number { return this.cv.OPTFLOW_FARNEBACK_GAUSSIAN }
  public get OPTFLOW_LK_GET_MIN_EIGENVALS(): number { return this.cv.OPTFLOW_LK_GET_MIN_EIGENVALS }
  public get OPTFLOW_USE_INITIAL_FLOW(): number { return this.cv.OPTFLOW_USE_INITIAL_FLOW }
  public get Param_ALGORITHM(): number { return this.cv.Param_ALGORITHM }
  public get Param_BOOLEAN(): number { return this.cv.Param_BOOLEAN }
  public get Param_FLOAT(): number { return this.cv.Param_FLOAT }
  public get Param_INT(): number { return this.cv.Param_INT }
  public get Param_MAT_VECTOR(): number { return this.cv.Param_MAT_VECTOR }
  public get Param_MAT(): number { return this.cv.Param_MAT }
  public get Param_REAL(): number { return this.cv.Param_REAL }
  public get Param_SCALAR(): number { return this.cv.Param_SCALAR }
  public get Param_STRING(): number { return this.cv.Param_STRING }
  public get Param_UCHAR(): number { return this.cv.Param_UCHAR }
  public get Param_UINT64(): number { return this.cv.Param_UINT64 }
  public get Param_UNSIGNED_INT(): number { return this.cv.Param_UNSIGNED_INT }
  public get PCA_DATA_AS_COL(): number { return this.cv.PCA_DATA_AS_COL }
  public get PCA_DATA_AS_ROW(): number { return this.cv.PCA_DATA_AS_ROW }
  public get PCA_USE_AVG(): number { return this.cv.PCA_USE_AVG }
  public get PROJ_SPHERICAL_EQRECT(): number { return this.cv.PROJ_SPHERICAL_EQRECT }
  public get PROJ_SPHERICAL_ORTHO(): number { return this.cv.PROJ_SPHERICAL_ORTHO }
  public get REDUCE_AVG(): number { return this.cv.REDUCE_AVG }
  public get REDUCE_MAX(): number { return this.cv.REDUCE_MAX }
  public get REDUCE_MIN(): number { return this.cv.REDUCE_MIN }
  public get REDUCE_SUM(): number { return this.cv.REDUCE_SUM }
  public get RETR_CCOMP(): number { return this.cv.RETR_CCOMP }
  public get RETR_EXTERNAL(): number { return this.cv.RETR_EXTERNAL }
  public get RETR_FLOODFILL(): number { return this.cv.RETR_FLOODFILL }
  public get RETR_LIST(): number { return this.cv.RETR_LIST }
  public get RETR_TREE(): number { return this.cv.RETR_TREE }
  public get RNG_NORMAL(): number { return this.cv.RNG_NORMAL }
  public get RNG_UNIFORM(): number { return this.cv.RNG_UNIFORM }
  public get ROTATE_180(): number { return this.cv.ROTATE_180 }
  public get ROTATE_90_CLOCKWISE(): number { return this.cv.ROTATE_90_CLOCKWISE }
  public get ROTATE_90_COUNTERCLOCKWISE(): number { return this.cv.ROTATE_90_COUNTERCLOCKWISE }
  public get SOLVELP_MULTI(): number { return this.cv.SOLVELP_MULTI }
  public get SOLVELP_SINGLE(): number { return this.cv.SOLVELP_SINGLE }
  public get SOLVELP_UNBOUNDED(): number { return this.cv.SOLVELP_UNBOUNDED }
  public get SOLVELP_UNFEASIBLE(): number { return this.cv.SOLVELP_UNFEASIBLE }
  public get SORT_ASCENDING(): number { return this.cv.SORT_ASCENDING }
  public get SORT_DESCENDING(): number { return this.cv.SORT_DESCENDING }
  public get SORT_EVERY_COLUMN(): number { return this.cv.SORT_EVERY_COLUMN }
  public get SORT_EVERY_ROW(): number { return this.cv.SORT_EVERY_ROW }
  public get SparseMat_HASH_BIT(): number { return this.cv.SparseMat_HASH_BIT }
  public get SparseMat_HASH_SCALE(): number { return this.cv.SparseMat_HASH_SCALE }
  public get SparseMat_MAGIC_VAL(): number { return this.cv.SparseMat_MAGIC_VAL }
  public get SparseMat_MAX_DIM(): number { return this.cv.SparseMat_MAX_DIM }
  public get _BASE(): number { return this.cv._BASE }
  public get _BUMP(): number { return this.cv._BUMP }
  public get StsAssert(): number { return this.cv.StsAssert }
  public get StsAutoTrace(): number { return this.cv.StsAutoTrace }
  public get StsBackTrace(): number { return this.cv.StsBackTrace }
  public get StsBadArg(): number { return this.cv.StsBadArg }
  public get StsBadFlag(): number { return this.cv.StsBadFlag }
  public get StsBadFunc(): number { return this.cv.StsBadFunc }
  public get StsBadMask(): number { return this.cv.StsBadMask }
  public get StsBadMemBlock(): number { return this.cv.StsBadMemBlock }
  public get StsBadPoint(): number { return this.cv.StsBadPoint }
  public get StsBadSize(): number { return this.cv.StsBadSize }
  public get StsDivByZero(): number { return this.cv.StsDivByZero }
  public get StsError(): number { return this.cv.StsError }
  public get StsFilterOffsetErr(): number { return this.cv.StsFilterOffsetErr }
  public get StsFilterStructContentErr(): number { return this.cv.StsFilterStructContentErr }
  public get StsInplaceNotSupported(): number { return this.cv.StsInplaceNotSupported }
  public get StsInternal(): number { return this.cv.StsInternal }
  public get StsKernelStructContentErr(): number { return this.cv.StsKernelStructContentErr }
  public get StsNoConv(): number { return this.cv.StsNoConv }
  public get StsNoMem(): number { return this.cv.StsNoMem }
  public get StsNotImplemented(): number { return this.cv.StsNotImplemented }
  public get StsNullPtr(): number { return this.cv.StsNullPtr }
  public get StsObjectNotFound(): number { return this.cv.StsObjectNotFound }
  public get StsOk(): number { return this.cv.StsOk }
  public get StsOutOfRange(): number { return this.cv.StsOutOfRange }
  public get StsParseError(): number { return this.cv.StsParseError }
  public get StsUnmatchedFormats(): number { return this.cv.StsUnmatchedFormats }
  public get StsUnmatchedSizes(): number { return this.cv.StsUnmatchedSizes }
  public get StsUnsupportedFormat(): number { return this.cv.StsUnsupportedFormat }
  public get StsVecLengthErr(): number { return this.cv.StsVecLengthErr }
  public get Subdiv2D_NEXT_AROUND_DST(): number { return this.cv.Subdiv2D_NEXT_AROUND_DST }
  public get Subdiv2D_NEXT_AROUND_LEFT(): number { return this.cv.Subdiv2D_NEXT_AROUND_LEFT }
  public get Subdiv2D_NEXT_AROUND_ORG(): number { return this.cv.Subdiv2D_NEXT_AROUND_ORG }
  public get Subdiv2D_NEXT_AROUND_RIGHT(): number { return this.cv.Subdiv2D_NEXT_AROUND_RIGHT }
  public get Subdiv2D_PREV_AROUND_DST(): number { return this.cv.Subdiv2D_PREV_AROUND_DST }
  public get Subdiv2D_PREV_AROUND_LEFT(): number { return this.cv.Subdiv2D_PREV_AROUND_LEFT }
  public get Subdiv2D_PREV_AROUND_ORG(): number { return this.cv.Subdiv2D_PREV_AROUND_ORG }
  public get Subdiv2D_PREV_AROUND_RIGHT(): number { return this.cv.Subdiv2D_PREV_AROUND_RIGHT }
  public get Subdiv2D_PTLOC_ERROR(): number { return this.cv.Subdiv2D_PTLOC_ERROR }
  public get Subdiv2D_PTLOC_INSIDE(): number { return this.cv.Subdiv2D_PTLOC_INSIDE }
  public get Subdiv2D_PTLOC_ON_EDGE(): number { return this.cv.Subdiv2D_PTLOC_ON_EDGE }
  public get Subdiv2D_PTLOC_OUTSIDE_RECT(): number { return this.cv.Subdiv2D_PTLOC_OUTSIDE_RECT }
  public get Subdiv2D_PTLOC_VERTEX(): number { return this.cv.Subdiv2D_PTLOC_VERTEX }
  public get SVD_FULL_UV(): number { return this.cv.SVD_FULL_UV }
  public get SVD_MODIFY_A(): number { return this.cv.SVD_MODIFY_A }
  public get SVD_NO_UV(): number { return this.cv.SVD_NO_UV }
  public get TermCriteria_COUNT(): number { return this.cv.TermCriteria_COUNT }
  public get TermCriteria_EPS(): number { return this.cv.TermCriteria_EPS }
  public get TermCriteria_MAX_ITER(): number { return this.cv.TermCriteria_MAX_ITER }
  public get THRESH_BINARY_INV(): number { return this.cv.THRESH_BINARY_INV }
  public get THRESH_BINARY(): number { return this.cv.THRESH_BINARY }
  public get THRESH_MASK(): number { return this.cv.THRESH_MASK }
  public get THRESH_OTSU(): number { return this.cv.THRESH_OTSU }
  public get THRESH_TOZERO_INV(): number { return this.cv.THRESH_TOZERO_INV }
  public get THRESH_TOZERO(): number { return this.cv.THRESH_TOZERO }
  public get THRESH_TRIANGLE(): number { return this.cv.THRESH_TRIANGLE }
  public get THRESH_TRUNC(): number { return this.cv.THRESH_TRUNC }
  public get TM_CCOEFF_NORMED(): number { return this.cv.TM_CCOEFF_NORMED }
  public get TM_CCOEFF(): number { return this.cv.TM_CCOEFF }
  public get TM_CCORR_NORMED(): number { return this.cv.TM_CCORR_NORMED }
  public get TM_CCORR(): number { return this.cv.TM_CCORR }
  public get TM_SQDIFF_NORMED(): number { return this.cv.TM_SQDIFF_NORMED }
  public get TM_SQDIFF(): number { return this.cv.TM_SQDIFF }
  public get TYPE_FUN(): number { return this.cv.TYPE_FUN }
  public get TYPE_GENERAL(): number { return this.cv.TYPE_GENERAL }
  public get TYPE_MARKER(): number { return this.cv.TYPE_MARKER }
  public get TYPE_WRAPPER(): number { return this.cv.TYPE_WRAPPER }
  public get UMat_AUTO_STEP(): number { return this.cv.UMat_AUTO_STEP }
  public get UMat_CONTINUOUS_FLAG(): number { return this.cv.UMat_CONTINUOUS_FLAG }
  public get UMat_DEPTH_MASK(): number { return this.cv.UMat_DEPTH_MASK }
  public get UMat_MAGIC_MASK(): number { return this.cv.UMat_MAGIC_MASK }
  public get UMat_MAGIC_VAL(): number { return this.cv.UMat_MAGIC_VAL }
  public get UMat_SUBMATRIX_FLAG(): number { return this.cv.UMat_SUBMATRIX_FLAG }
  public get UMat_TYPE_MASK(): number { return this.cv.UMat_TYPE_MASK }
  public get UMatData_ASYNC_CLEANUP(): number { return this.cv.UMatData_ASYNC_CLEANUP }
  public get UMatData_COPY_ON_MAP(): number { return this.cv.UMatData_COPY_ON_MAP }
  public get UMatData_DEVICE_COPY_OBSOLETE(): number { return this.cv.UMatData_DEVICE_COPY_OBSOLETE }
  public get UMatData_DEVICE_MEM_MAPPED(): number { return this.cv.UMatData_DEVICE_MEM_MAPPED }
  public get UMatData_HOST_COPY_OBSOLETE(): number { return this.cv.UMatData_HOST_COPY_OBSOLETE }
  public get UMatData_TEMP_COPIED_UMAT(): number { return this.cv.UMatData_TEMP_COPIED_UMAT }
  public get UMatData_TEMP_UMAT(): number { return this.cv.UMatData_TEMP_UMAT }
  public get UMatData_USER_ALLOCATED(): number { return this.cv.UMatData_USER_ALLOCATED }
  public get USAGE_ALLOCATE_DEVICE_MEMORY(): number { return this.cv.USAGE_ALLOCATE_DEVICE_MEMORY }
  public get USAGE_ALLOCATE_HOST_MEMORY(): number { return this.cv.USAGE_ALLOCATE_HOST_MEMORY }
  public get USAGE_ALLOCATE_SHARED_MEMORY(): number { return this.cv.USAGE_ALLOCATE_SHARED_MEMORY }
  public get USAGE_DEFAULT(): number { return this.cv.USAGE_DEFAULT }
  public get WARP_FILL_OUTLIERS(): number { return this.cv.WARP_FILL_OUTLIERS }
  public get WARP_INVERSE_MAP(): number { return this.cv.WARP_INVERSE_MAP }
  public get wasmMaxTableSize(): number { return this.cv.FONT_ITALIC6 }
  public get wasmTableSize(): number { return this.cv.FONT_ITALIC6 }

  /**
   * Get all keys and values colors without underfined values
   * @returns  { key: string; value: number }[]
   */
  getColorsWithoutUnderfined(): BehaviorSubject<{ key: string; value: number }[]> {

    const ret = new BehaviorSubject<{ key: string; value: number }[]>([]);
    this.getColors()
      .subscribe(s =>
        ret.next(s.filter(x => (x.value !== undefined)))
      )
    return ret;
  }
  /**
   * Get all keys and values colors
   * @returns  { key: string; value: number }[]
   */
  getColors(): BehaviorSubject<{ key: string; value: number }[]> {
    const colors = [



      'COLOR_BGR2BGRA',
      'COLOR_BGR2GRAY',
      'COLOR_BGR2HLS_FULL',
      'COLOR_BGR2HLS_FULL8',
      'COLOR_BGR2HLS',
      'COLOR_BGR2HLS2',
      'COLOR_BGR2HSV_FULL',
      'COLOR_BGR2HSV_FULL6',
      'COLOR_BGR2HSV',
      'COLOR_BGR2HSV0',
      'COLOR_BGR2Lab',
      'COLOR_BGR2Lab4',
      'COLOR_BGR2Luv',
      'COLOR_BGR2Luv0',
      'COLOR_BGR2RGB',
      'COLOR_BGR2RGBA',
      'COLOR_BGR2XYZ',
      'COLOR_BGR2XYZ2',
      'COLOR_BGR2YCrCb',
      'COLOR_BGR2YCrCb6',
      'COLOR_BGR2YUV_I420',
      'COLOR_BGR2YUV_I42028',
      'COLOR_BGR2YUV_IYUV',
      'COLOR_BGR2YUV_IYUV28',
      'COLOR_BGR2YUV_YV12',
      'COLOR_BGR2YUV_YV1232',
      'COLOR_BGR2YUV',
      'COLOR_BGR2YUV2',
      'COLOR_BGR5552BGR',
      'COLOR_BGR5552BGR4',
      'COLOR_BGR5552BGRA',
      'COLOR_BGR5552BGRA8',
      'COLOR_BGR5552GRAY',
      'COLOR_BGR5552GRAY1',
      'COLOR_BGR5552RGB',
      'COLOR_BGR5552RGB5',
      'COLOR_BGR5552RGBA',
      'COLOR_BGR5552RGBA9',

      'COLOR_BGRA2BGR',

      'COLOR_BGRA2GRAY',
      'COLOR_BGRA2GRAY0',
      'COLOR_BGRA2RGB',
      'COLOR_BGRA2RGBA',
      'COLOR_BGRA2YUV_I420',
      'COLOR_BGRA2YUV_I42030',
      'COLOR_BGRA2YUV_IYUV',
      'COLOR_BGRA2YUV_IYUV30',
      'COLOR_BGRA2YUV_YV12',
      'COLOR_BGRA2YUV_YV1234',
      'COLOR_COLORCVT_MAX',
      'COLOR_COLORCVT_MAX43',
      'COLOR_GRAY2BGR',


      'COLOR_GRAY2BGRA',
      'COLOR_GRAY2RGB',
      'COLOR_GRAY2RGBA',
      'COLOR_HLS2BGR_FULL',
      'COLOR_HLS2BGR_FULL2',
      'COLOR_HLS2BGR',
      'COLOR_HLS2BGR0',
      'COLOR_HLS2RGB_FULL',
      'COLOR_HLS2RGB_FULL3',
      'COLOR_HLS2RGB',
      'COLOR_HLS2RGB1',
      'COLOR_HSV2BGR_FULL',
      'COLOR_HSV2BGR_FULL0',
      'COLOR_HSV2BGR',
      'COLOR_HSV2BGR4',
      'COLOR_HSV2RGB_FULL',
      'COLOR_HSV2RGB_FULL1',
      'COLOR_HSV2RGB',
      'COLOR_HSV2RGB5',
      'COLOR_Lab2BGR',
      'COLOR_Lab2BGR6',
      'COLOR_Lab2LBGR',
      'COLOR_Lab2LBGR8',
      'COLOR_Lab2LRGB',
      'COLOR_Lab2LRGB9',
      'COLOR_Lab2RGB',
      'COLOR_Lab2RGB7',
      'COLOR_LBGR2Lab',
      'COLOR_LBGR2Lab4',
      'COLOR_LBGR2Luv',
      'COLOR_LBGR2Luv6',
      'COLOR_LRGB2Lab',
      'COLOR_LRGB2Lab5',
      'COLOR_LRGB2Luv',
      'COLOR_LRGB2Luv7',
      'COLOR_Luv2BGR',
      'COLOR_Luv2BGR8',
      'COLOR_Luv2LBGR',
      'COLOR_Luv2LBGR0',
      'COLOR_Luv2LRGB',
      'COLOR_Luv2LRGB1',
      'COLOR_Luv2RGB',
      'COLOR_mRGBA2RGBA',
      'COLOR_mRGBA2RGBA26',
      'COLOR_RGB2BGR',

      'COLOR_RGB2BGRA',
      'COLOR_RGB2GRAY',
      'COLOR_RGB2HLS_FULL',
      'COLOR_RGB2HLS_FULL9',
      'COLOR_RGB2HLS',
      'COLOR_RGB2HLS3',
      'COLOR_RGB2HSV_FULL',
      'COLOR_RGB2HSV_FULL7',
      'COLOR_RGB2HSV',
      'COLOR_RGB2HSV1',
      'COLOR_RGB2Lab',
      'COLOR_RGB2Lab5',
      'COLOR_RGB2Luv',
      'COLOR_RGB2Luv1',
      'COLOR_RGB2RGBA',
      'COLOR_RGB2XYZ',
      'COLOR_RGB2XYZ3',
      'COLOR_RGB2YCrCb',
      'COLOR_RGB2YCrCb7',
      'COLOR_RGB2YUV_I420',
      'COLOR_RGB2YUV_I42027',
      'COLOR_RGB2YUV_IYUV',
      'COLOR_RGB2YUV_IYUV27',
      'COLOR_RGB2YUV_YV12',
      'COLOR_RGB2YUV_YV1231',
      'COLOR_RGB2YUV',
      'COLOR_RGB2YUV3',
      'COLOR_RGBA2BGR',
      'COLOR_RGBA2BGR555',
      'COLOR_RGBA2BGR5557',

      'COLOR_RGBA2BGRA',
      'COLOR_RGBA2GRAY',
      'COLOR_RGBA2GRAY1',
      'COLOR_RGBA2mRGBA',
      'COLOR_RGBA2mRGBA25',
      'COLOR_RGBA2RGB',
      'COLOR_RGBA2YUV_I420',
      'COLOR_RGBA2YUV_I42029',
      'COLOR_RGBA2YUV_IYUV',
      'COLOR_RGBA2YUV_IYUV29',
      'COLOR_RGBA2YUV_YV12',
      'COLOR_RGBA2YUV_YV1233',


    ]

    const ret = new BehaviorSubject<{ key: string; value: number }[]>([]);

    ret.next(colors.map(x => {
      const value = cv[x];
      return ({ key: x, value });
    }));

    return ret;
  }
}
