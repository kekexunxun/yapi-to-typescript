/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-apifox-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, FileData, prepare } from 'yapi-apifox-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-apifox-to-typescript'
// @ts-ignore
import request from './request'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

export interface IRequestPostSystemUserBindIam {
  code: string
  newPwd: string
  oldPwd: string
  tel: string
}

export type IResponsePostSystemUserBindIam = {
  userId: string
  userCode: string
  userName: string
  token: string
  tenantId: string
  activated: boolean
  tenantCode: string
  tenantName: string
  clusterCode: string
  forceModifyPwd: boolean
}[]

const postSystemUserBindIamRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/bindIam',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserBindIam = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserBindIam,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserBindIam>(
    prepare(postSystemUserBindIamRequestConfig, requestData),
    ...args,
  )
}

postSystemUserBindIam.requestConfig = postSystemUserBindIamRequestConfig

export interface IRequestPostSystemUserResetPwdByTel {
  tenantCode?: string
  tel?: string
  oldPassword?: string
  newPassword?: string
  newPassword2?: string
}

export type IResponsePostSystemUserResetPwdByTel = string

const postSystemUserResetPwdByTelRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/resetPwdByTel',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserResetPwdByTel = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserResetPwdByTel,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserResetPwdByTel>(
    prepare(postSystemUserResetPwdByTelRequestConfig, requestData),
    ...args,
  )
}

postSystemUserResetPwdByTel.requestConfig =
  postSystemUserResetPwdByTelRequestConfig

export interface IRequestPostSystemUserLoginByLoginKey {
  loginKey: string
}

export type IResponsePostSystemUserLoginByLoginKey = {
  userId: string
  userCode: string
  userName: string
  token: string
  tenantId: string
  activated: boolean
  tenantCode: string
  tenantName: string
  clusterCode: string
}[]

const postSystemUserLoginByLoginKeyRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/user/loginByLoginKey',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemUserLoginByLoginKey = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserLoginByLoginKey,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserLoginByLoginKey>(
    prepare(postSystemUserLoginByLoginKeyRequestConfig, requestData),
    ...args,
  )
}

postSystemUserLoginByLoginKey.requestConfig =
  postSystemUserLoginByLoginKeyRequestConfig

export interface IRequestPostSystemUserSso {}

export type IResponsePostSystemUserSso = {
  userId: string
  userCode: string
  userName: string
  token: string
  tenantId: string
  activated: boolean
  tenantName: string
}[]

const postSystemUserSsoRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/sso',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserSso = /*#__PURE__*/ (
  requestData?: IRequestPostSystemUserSso,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserSso>(
    prepare(postSystemUserSsoRequestConfig, requestData),
    ...args,
  )
}

postSystemUserSso.requestConfig = postSystemUserSsoRequestConfig

export interface IRequestPostPublicAdaptorSysAreaClusterGetUrlList {
  tenantCode: string
  [k: string]: unknown
}

export type IResponsePostPublicAdaptorSysAreaClusterGetUrlList = {
  id: number
  areaId: string
  areaCode: string
  sys: string
  productCode: string
  url: string
  createdAt: string
  updatedAt: string
  apiUrl: string
  isSplit: boolean
  thirdAppid: string
  sysName: string
}[]

const postPublicAdaptorSysAreaClusterGetUrlListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/public/adaptor/sysAreaCluster/getUrlList',
    method: Method.POST,
    queryNames: ['tenantCode'],
    requestBodyType: RequestBodyType.json,
  }

export const postPublicAdaptorSysAreaClusterGetUrlList = /*#__PURE__*/ (
  requestData: IRequestPostPublicAdaptorSysAreaClusterGetUrlList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPublicAdaptorSysAreaClusterGetUrlList>(
    prepare(
      postPublicAdaptorSysAreaClusterGetUrlListRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postPublicAdaptorSysAreaClusterGetUrlList.requestConfig =
  postPublicAdaptorSysAreaClusterGetUrlListRequestConfig

export interface IRequestPostSystemUserLogin {
  userCode: string
  tenantCode?: string
  password: string
  code: string
  reqNo: string
}

export type IResponsePostSystemUserLogin = {
  userId: string
  userCode: string
  userName: string
  token: string
  tenantId: string
  activated: boolean
  tenantCode: string
  tenantName: string
  clusterCode: string
  forceModifyPwd: boolean
}[]

const postSystemUserLoginRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/login',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserLogin = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserLogin,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserLogin>(
    prepare(postSystemUserLoginRequestConfig, requestData),
    ...args,
  )
}

postSystemUserLogin.requestConfig = postSystemUserLoginRequestConfig

export interface IRequestPostSystemUserUpdatePwd {
  captcha: string
  reqNo: string
  code: string
  oldPwd: string
  newPwd: string
}

export type IResponsePostSystemUserUpdatePwd = string

const postSystemUserUpdatePwdRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/updatePwd',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserUpdatePwd = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserUpdatePwd,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserUpdatePwd>(
    prepare(postSystemUserUpdatePwdRequestConfig, requestData),
    ...args,
  )
}

postSystemUserUpdatePwd.requestConfig = postSystemUserUpdatePwdRequestConfig

export interface IRequestPostOrderSysTenantBindTenantBind {
  appId: string
}

export type IResponsePostOrderSysTenantBindTenantBind = string

const postOrderSysTenantBindTenantBindRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysTenantBind/tenantBind',
    method: Method.POST,
    queryNames: ['appId'],
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysTenantBindTenantBind = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysTenantBindTenantBind,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysTenantBindTenantBind>(
    prepare(postOrderSysTenantBindTenantBindRequestConfig, requestData),
    ...args,
  )
}

postOrderSysTenantBindTenantBind.requestConfig =
  postOrderSysTenantBindTenantBindRequestConfig

export interface IRequestGetSystemPlatformsQueryPage {
  pageNum: string
  pageSize: string
  platformType?: string
}

export interface IResponseGetSystemPlatformsQueryPage {
  total: number
  list: {
    id: number
    code: string
    name: string
    createdAt: string
    updatedAt: string
    productName: string
    isThird: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemPlatformsQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platforms/queryPage',
  method: Method.GET,
  queryNames: ['pageNum', 'pageSize', 'platformType'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemPlatformsQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemPlatformsQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformsQueryPage>(
    prepare(getSystemPlatformsQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemPlatformsQueryPage.requestConfig =
  getSystemPlatformsQueryPageRequestConfig

export interface IRequestPostSystemShopsFindShopList {
  platformList: string[]
  pno?: string
}

export type IResponsePostSystemShopsFindShopList = {
  id: number
  shopCode: string
  shopName: string
  status: number
  platform: string
  company: string
  sellerNick: string
}[]

const postSystemShopsFindShopListRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/shops/findShopList',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemShopsFindShopList = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopsFindShopList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopsFindShopList>(
    prepare(postSystemShopsFindShopListRequestConfig, requestData),
    ...args,
  )
}

postSystemShopsFindShopList.requestConfig =
  postSystemShopsFindShopListRequestConfig

export interface IRequestPostSystemSysMenuAuthMenuPermissionTree {
  userId: string
  appId: string
}

export type IResponsePostSystemSysMenuAuthMenuPermissionTree = {
  purviewId: number
  parentId: number
  businessObjectCode: string
  name: string
  sqlOrder: number
  children: {
    purviewId: number
    parentId: number
    businessObjectCode: string
    name: string
    url: string
    sqlOrder: number
    permissions: {
      permissionId: number
      purviewId: number
      permissionName: string
      permissionCode: string
    }[]
  }[]
}[]

const postSystemSysMenuAuthMenuPermissionTreeRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysMenu/authMenuPermissionTree',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysMenuAuthMenuPermissionTree = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysMenuAuthMenuPermissionTree,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysMenuAuthMenuPermissionTree>(
    prepare(postSystemSysMenuAuthMenuPermissionTreeRequestConfig, requestData),
    ...args,
  )
}

postSystemSysMenuAuthMenuPermissionTree.requestConfig =
  postSystemSysMenuAuthMenuPermissionTreeRequestConfig

export interface IRequestGetSystemAppIdConfigTenantAppIdInfo {}

export interface IResponseGetSystemAppIdConfigTenantAppIdInfo {
  tenantCode: string
  appId: string
  clusterName: string
  cloudApiUrl: string
  ydApiUrl: string
  jstApiUrl: string
}

const getSystemAppIdConfigTenantAppIdInfoRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/appIdConfig/tenantAppIdInfo',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemAppIdConfigTenantAppIdInfo = /*#__PURE__*/ (
  requestData?: IRequestGetSystemAppIdConfigTenantAppIdInfo,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemAppIdConfigTenantAppIdInfo>(
    prepare(getSystemAppIdConfigTenantAppIdInfoRequestConfig, requestData),
    ...args,
  )
}

getSystemAppIdConfigTenantAppIdInfo.requestConfig =
  getSystemAppIdConfigTenantAppIdInfoRequestConfig

export interface IRequestGetSystemSysAiConfigGetEnableConfig {}

export interface IResponseGetSystemSysAiConfigGetEnableConfig {
  id: string
  userCode: string
  appKey: string
  type: string
  status: number
  updatedAt: string
  createdAt: string
}

const getSystemSysAiConfigGetEnableConfigRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysAiConfig/getEnableConfig',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysAiConfigGetEnableConfig = /*#__PURE__*/ (
  requestData?: IRequestGetSystemSysAiConfigGetEnableConfig,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysAiConfigGetEnableConfig>(
    prepare(getSystemSysAiConfigGetEnableConfigRequestConfig, requestData),
    ...args,
  )
}

getSystemSysAiConfigGetEnableConfig.requestConfig =
  getSystemSysAiConfigGetEnableConfigRequestConfig

export interface IRequestGetSystemCaptchaCaptchaImage {
  type: string
}

export interface IResponseGetSystemCaptchaCaptchaImage {
  baseImg: string
  reqNo: string
}

const getSystemCaptchaCaptchaImageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/captcha/captchaImage',
  method: Method.GET,
  queryNames: ['type'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemCaptchaCaptchaImage = /*#__PURE__*/ (
  requestData: IRequestGetSystemCaptchaCaptchaImage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemCaptchaCaptchaImage>(
    prepare(getSystemCaptchaCaptchaImageRequestConfig, requestData),
    ...args,
  )
}

getSystemCaptchaCaptchaImage.requestConfig =
  getSystemCaptchaCaptchaImageRequestConfig

export interface IRequestPostIntegrationYumBelleConversionDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostIntegrationYumBelleConversionDelete = string

const postIntegrationYumBelleConversionDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/integration/yumBelleConversion/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postIntegrationYumBelleConversionDelete = /*#__PURE__*/ (
  requestData: IRequestPostIntegrationYumBelleConversionDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostIntegrationYumBelleConversionDelete>(
    prepare(postIntegrationYumBelleConversionDeleteRequestConfig, requestData),
    ...args,
  )
}

postIntegrationYumBelleConversionDelete.requestConfig =
  postIntegrationYumBelleConversionDeleteRequestConfig

export interface IRequestPostIntegrationYumBelleConversionCreate {
  status: string
  yumName?: string
  yumCode: string
  belleCode: string
  belleName: string
  isEnable?: string
}

export type IResponsePostIntegrationYumBelleConversionCreate = string

const postIntegrationYumBelleConversionCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/integration/yumBelleConversion/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postIntegrationYumBelleConversionCreate = /*#__PURE__*/ (
  requestData: IRequestPostIntegrationYumBelleConversionCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostIntegrationYumBelleConversionCreate>(
    prepare(postIntegrationYumBelleConversionCreateRequestConfig, requestData),
    ...args,
  )
}

postIntegrationYumBelleConversionCreate.requestConfig =
  postIntegrationYumBelleConversionCreateRequestConfig

export interface IRequestPostIntegrationYumBelleConversionUpdate {
  status: string
  yumCode: string
  belleCode: string
  belleName: string
  id: number
  isEnable?: string
}

export type IResponsePostIntegrationYumBelleConversionUpdate = string

const postIntegrationYumBelleConversionUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/integration/yumBelleConversion/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postIntegrationYumBelleConversionUpdate = /*#__PURE__*/ (
  requestData: IRequestPostIntegrationYumBelleConversionUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostIntegrationYumBelleConversionUpdate>(
    prepare(postIntegrationYumBelleConversionUpdateRequestConfig, requestData),
    ...args,
  )
}

postIntegrationYumBelleConversionUpdate.requestConfig =
  postIntegrationYumBelleConversionUpdateRequestConfig

export interface IRequestGetIntegrationYumBelleConversionPage {
  pageNum: string
  pageSize: string
  status?: string
  statusStr?: string
  yumCode?: string
  belleCode?: string
  belleName?: string
  isEnable?: string
}

export interface IResponseGetIntegrationYumBelleConversionPage {
  total: number
  list: {
    id: number
    yumId: string
    yumCode: string
    yumName: string
    belleId: string
    belleCode: string
    belleName: string
    remark: string
    status: string
    category: string
    field1: string
    isEnable: string
    createTime: string
    statusStr: string
    statusName: string
    categoryName: string
    isEnableName: string
    notId: string
    province: string
    city: string
    field1List: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
  firstPage: number
  lastPage: number
}

const getIntegrationYumBelleConversionPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/integration/yumBelleConversion/page',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'status',
      'statusStr',
      'yumCode',
      'belleCode',
      'belleName',
      'isEnable',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getIntegrationYumBelleConversionPage = /*#__PURE__*/ (
  requestData: IRequestGetIntegrationYumBelleConversionPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetIntegrationYumBelleConversionPage>(
    prepare(getIntegrationYumBelleConversionPageRequestConfig, requestData),
    ...args,
  )
}

getIntegrationYumBelleConversionPage.requestConfig =
  getIntegrationYumBelleConversionPageRequestConfig

export interface IRequestPostIntegrationYumBelleConversionGetTypeEnum {}

export type IResponsePostIntegrationYumBelleConversionGetTypeEnum = {
  code: string
  name: string
}[]

const postIntegrationYumBelleConversionGetTypeEnumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/integration/yumBelleConversion/getTypeEnum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postIntegrationYumBelleConversionGetTypeEnum = /*#__PURE__*/ (
  requestData?: IRequestPostIntegrationYumBelleConversionGetTypeEnum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostIntegrationYumBelleConversionGetTypeEnum>(
    prepare(
      postIntegrationYumBelleConversionGetTypeEnumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postIntegrationYumBelleConversionGetTypeEnum.requestConfig =
  postIntegrationYumBelleConversionGetTypeEnumRequestConfig

export interface IRequestPostOrderXxlJobJobInfo {
  action: string
  param: string
}

export interface IResponsePostOrderXxlJobJobInfo {
  recordsFiltered: number
  data: {
    triggerLastTime: string
    alarmEmail: string
    glueUpdatetime: string
    executorParam: string
    addTime: string
    executorBlockStrategy: string
    author: string
    executorRouteStrategy: string
    triggerStatus: number
    triggerNextTime: string
    jobCron: string
    updateTime: string
    jobGroup: number
    glueRemark: string
    jobDesc: string
    glueType: string
    executorHandler: string
    executorFailRetryCount: number
    id: number
    executorTimeout: number
    childJobId: string
  }[]
  recordsTotal: number
  content?: string[]
}

const postOrderXxlJobJobInfoRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/xxlJob/jobInfo',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postOrderXxlJobJobInfo = /*#__PURE__*/ (
  requestData: IRequestPostOrderXxlJobJobInfo,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderXxlJobJobInfo>(
    prepare(postOrderXxlJobJobInfoRequestConfig, requestData),
    ...args,
  )
}

postOrderXxlJobJobInfo.requestConfig = postOrderXxlJobJobInfoRequestConfig

export interface IRequestGetOrderXxlJobJobGroupQueryPage {
  pageNum: string
  pageSize: string
  appName?: string
  title?: string
}

export interface IResponseGetOrderXxlJobJobGroupQueryPage {
  total: number
  list: {
    id: number
    appName: string
    title: string
    order: number
    addressType: number
    addressList: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderXxlJobJobGroupQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/xxlJob/jobGroup/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'appName', 'title'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderXxlJobJobGroupQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderXxlJobJobGroupQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderXxlJobJobGroupQueryPage>(
    prepare(getOrderXxlJobJobGroupQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderXxlJobJobGroupQueryPage.requestConfig =
  getOrderXxlJobJobGroupQueryPageRequestConfig

export interface IRequestGetOrderXxlJobJobGroupLoadById {
  id: string
}

export interface IResponseGetOrderXxlJobJobGroupLoadById {
  total: number
  list: {
    id: number
    appName: string
    title: string
    order: number
    addressType: number
    addressList: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderXxlJobJobGroupLoadByIdRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/xxlJob/jobGroup/loadById',
    method: Method.GET,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderXxlJobJobGroupLoadById = /*#__PURE__*/ (
  requestData: IRequestGetOrderXxlJobJobGroupLoadById,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderXxlJobJobGroupLoadById>(
    prepare(getOrderXxlJobJobGroupLoadByIdRequestConfig, requestData),
    ...args,
  )
}

getOrderXxlJobJobGroupLoadById.requestConfig =
  getOrderXxlJobJobGroupLoadByIdRequestConfig

export interface IRequestPostOrderXxlJobLogClearLogByDateMonth {
  jobGroup: string
  jobId: string
  clearLogDate: string
}

export type IResponsePostOrderXxlJobLogClearLogByDateMonth = string

const postOrderXxlJobLogClearLogByDateMonthRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/xxlJob/log/clearLogByDateMonth',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderXxlJobLogClearLogByDateMonth = /*#__PURE__*/ (
  requestData: IRequestPostOrderXxlJobLogClearLogByDateMonth,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderXxlJobLogClearLogByDateMonth>(
    prepare(postOrderXxlJobLogClearLogByDateMonthRequestConfig, requestData),
    ...args,
  )
}

postOrderXxlJobLogClearLogByDateMonth.requestConfig =
  postOrderXxlJobLogClearLogByDateMonthRequestConfig

export interface IRequestGetOrderXxlJobLogQueryPage {
  pageNum: string
  pageSize: string
  jobGroup: string
  jobId: string
  logStatus?: string
  startTriggerTime?: string
  endTriggerTime?: string
}

export interface IResponseGetOrderXxlJobLogQueryPage {
  total: number
  list: {
    id: number
    jobGroup: number
    jobId: number
    executorAddress: string
    executorHandler: string
    executorParam: string
    executorFailRetryCount: number
    triggerTime: string
    triggerCode: number
    triggerMsg: string
    handleTime: string
    handleCode: number
    handleMsg: string
    alarmStatus: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderXxlJobLogQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/xxlJob/log/queryPage',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'jobGroup',
    'jobId',
    'logStatus',
    'startTriggerTime',
    'endTriggerTime',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getOrderXxlJobLogQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderXxlJobLogQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderXxlJobLogQueryPage>(
    prepare(getOrderXxlJobLogQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderXxlJobLogQueryPage.requestConfig =
  getOrderXxlJobLogQueryPageRequestConfig

export interface IRequestGetSystemSysProclamationConfigQueryPage {
  pageNum: string
  pageSize: string
}

export interface IResponseGetSystemSysProclamationConfigQueryPage {
  total: number
  list: {
    id: string
    title: string
    createdAt: string
    updatedAt: string
    content: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysProclamationConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysProclamationConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysProclamationConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysProclamationConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysProclamationConfigQueryPage>(
    prepare(getSystemSysProclamationConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysProclamationConfigQueryPage.requestConfig =
  getSystemSysProclamationConfigQueryPageRequestConfig

export interface IRequestGetSystemSysInterfaceStatisticsStatisticsQueryPage {
  platform?: string
  stdMethod?: string
  method?: string
  startTime?: string
  endTime?: string
  merchantCode: string
}

export interface IResponseGetSystemSysInterfaceStatisticsStatisticsQueryPage {
  total: number
  list: {
    platform: string
    platformName: string
    method: string
    invokeCount: number
    successCount: number
    failCount: number
    recordDate: string
    stdMethod: string
    stdMethodName: string
    successRate: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysInterfaceStatisticsStatisticsQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysInterfaceStatistics/statisticsQueryPage',
    method: Method.GET,
    queryNames: [
      'platform',
      'stdMethod',
      'method',
      'startTime',
      'endTime',
      'merchantCode',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysInterfaceStatisticsStatisticsQueryPage =
  /*#__PURE__*/ (
    requestData: IRequestGetSystemSysInterfaceStatisticsStatisticsQueryPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetSystemSysInterfaceStatisticsStatisticsQueryPage>(
      prepare(
        getSystemSysInterfaceStatisticsStatisticsQueryPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getSystemSysInterfaceStatisticsStatisticsQueryPage.requestConfig =
  getSystemSysInterfaceStatisticsStatisticsQueryPageRequestConfig

export interface IRequestGetSystemApiStatStatisticsQueryPage {
  startTime?: string
  endTime?: string
  platform?: string
  method?: string
}

export interface IResponseGetSystemApiStatStatisticsQueryPage {
  total: number
  list: {
    platform: string
    platformName: string
    method: string
    methodName: string
    invokeCount: number
    successCount: number
    failCount: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemApiStatStatisticsQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/apiStat/statisticsQueryPage',
    method: Method.GET,
    queryNames: ['startTime', 'endTime', 'platform', 'method'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemApiStatStatisticsQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemApiStatStatisticsQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemApiStatStatisticsQueryPage>(
    prepare(getSystemApiStatStatisticsQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemApiStatStatisticsQueryPage.requestConfig =
  getSystemApiStatStatisticsQueryPageRequestConfig

export interface IRequestGetSystemApiStatStatisticsDownload {
  startTime?: string
  endTime?: string
  platform?: string
  method?: string
}

export interface IResponseGetSystemApiStatStatisticsDownload {
  fileName: string
  content: string
}

const getSystemApiStatStatisticsDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/apiStat/statisticsDownload',
    method: Method.GET,
    queryNames: ['startTime', 'endTime', 'platform', 'method'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemApiStatStatisticsDownload = /*#__PURE__*/ (
  requestData: IRequestGetSystemApiStatStatisticsDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemApiStatStatisticsDownload>(
    prepare(getSystemApiStatStatisticsDownloadRequestConfig, requestData),
    ...args,
  )
}

getSystemApiStatStatisticsDownload.requestConfig =
  getSystemApiStatStatisticsDownloadRequestConfig

export interface IRequestGetSystemApiLogMethodList {}

export type IResponseGetSystemApiLogMethodList = {
  code: string
  name: string
}[]

const getSystemApiLogMethodListRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/apiLog/methodList',
  method: Method.GET,
  requestBodyType: RequestBodyType.query,
}

export const getSystemApiLogMethodList = /*#__PURE__*/ (
  requestData?: IRequestGetSystemApiLogMethodList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemApiLogMethodList>(
    prepare(getSystemApiLogMethodListRequestConfig, requestData),
    ...args,
  )
}

getSystemApiLogMethodList.requestConfig = getSystemApiLogMethodListRequestConfig

export interface IRequestGetOrderApiStatDayQueryReportData {
  startTime: string
  endTime: string
}

export type IResponseGetOrderApiStatDayQueryReportData = {
  invokeCount: number
  successCount: number
  failCount: number
  recordDate: string
}[]

const getOrderApiStatDayQueryReportDataRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/apiStatDay/queryReportData',
    method: Method.GET,
    queryNames: ['startTime', 'endTime'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderApiStatDayQueryReportData = /*#__PURE__*/ (
  requestData: IRequestGetOrderApiStatDayQueryReportData,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderApiStatDayQueryReportData>(
    prepare(getOrderApiStatDayQueryReportDataRequestConfig, requestData),
    ...args,
  )
}

getOrderApiStatDayQueryReportData.requestConfig =
  getOrderApiStatDayQueryReportDataRequestConfig

export interface IRequestGetOrderInterfaceStatDayQueryReportData {
  startTime: string
  endTime: string
}

export type IResponseGetOrderInterfaceStatDayQueryReportData = {
  invokeCount: number
  successCount: number
  failCount: number
  recordDate: string
}[]

const getOrderInterfaceStatDayQueryReportDataRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/interfaceStatDay/queryReportData',
    method: Method.GET,
    queryNames: ['startTime', 'endTime'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderInterfaceStatDayQueryReportData = /*#__PURE__*/ (
  requestData: IRequestGetOrderInterfaceStatDayQueryReportData,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderInterfaceStatDayQueryReportData>(
    prepare(getOrderInterfaceStatDayQueryReportDataRequestConfig, requestData),
    ...args,
  )
}

getOrderInterfaceStatDayQueryReportData.requestConfig =
  getOrderInterfaceStatDayQueryReportDataRequestConfig

export interface IRequestGetSystemSysInterfaceStatisticsStatisticsDownload {
  platform?: string
  stdMethod?: string
  method?: string
  startTime?: string
  endTime?: string
  merchantCode: string
}

export interface IResponseGetSystemSysInterfaceStatisticsStatisticsDownload {
  fileName: string
  content: string
}

const getSystemSysInterfaceStatisticsStatisticsDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysInterfaceStatistics/statisticsDownload',
    method: Method.GET,
    queryNames: [
      'platform',
      'stdMethod',
      'method',
      'startTime',
      'endTime',
      'merchantCode',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysInterfaceStatisticsStatisticsDownload = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysInterfaceStatisticsStatisticsDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysInterfaceStatisticsStatisticsDownload>(
    prepare(
      getSystemSysInterfaceStatisticsStatisticsDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemSysInterfaceStatisticsStatisticsDownload.requestConfig =
  getSystemSysInterfaceStatisticsStatisticsDownloadRequestConfig

export interface IRequestGetSystemSysInterfaceStatisticsStdPlatMethodList {}

export type IResponseGetSystemSysInterfaceStatisticsStdPlatMethodList = {
  code: string
  name: string
}[]

const getSystemSysInterfaceStatisticsStdPlatMethodListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysInterfaceStatistics/stdPlatMethodList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysInterfaceStatisticsStdPlatMethodList = /*#__PURE__*/ (
  requestData?: IRequestGetSystemSysInterfaceStatisticsStdPlatMethodList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysInterfaceStatisticsStdPlatMethodList>(
    prepare(
      getSystemSysInterfaceStatisticsStdPlatMethodListRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemSysInterfaceStatisticsStdPlatMethodList.requestConfig =
  getSystemSysInterfaceStatisticsStdPlatMethodListRequestConfig

export interface IRequestPostSystemSysCompanyInfoDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysCompanyInfoDelete = string

const postSystemSysCompanyInfoDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysCompanyInfo/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysCompanyInfoDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysCompanyInfoDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysCompanyInfoDelete>(
    prepare(postSystemSysCompanyInfoDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysCompanyInfoDelete.requestConfig =
  postSystemSysCompanyInfoDeleteRequestConfig

export interface IRequestPostSystemSysCompanyInfoCreate {
  code: string
  name: string
}

export type IResponsePostSystemSysCompanyInfoCreate = string

const postSystemSysCompanyInfoCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysCompanyInfo/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysCompanyInfoCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysCompanyInfoCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysCompanyInfoCreate>(
    prepare(postSystemSysCompanyInfoCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysCompanyInfoCreate.requestConfig =
  postSystemSysCompanyInfoCreateRequestConfig

export interface IRequestPostSystemSysCompanyInfoUpdate {
  code: string
  name: string
  id: number
}

export type IResponsePostSystemSysCompanyInfoUpdate = string

const postSystemSysCompanyInfoUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysCompanyInfo/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysCompanyInfoUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysCompanyInfoUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysCompanyInfoUpdate>(
    prepare(postSystemSysCompanyInfoUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysCompanyInfoUpdate.requestConfig =
  postSystemSysCompanyInfoUpdateRequestConfig

export interface IRequestGetSystemSysCompanyInfoQueryPage {
  pageNum: string
  pageSize: string
}

export interface IResponseGetSystemSysCompanyInfoQueryPage {
  total: number
  list: {
    id: number
    code: string
    name: string
    createdAt: string
    updatedAt: string
    createBy: string
    updateBy: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysCompanyInfoQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysCompanyInfo/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysCompanyInfoQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysCompanyInfoQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysCompanyInfoQueryPage>(
    prepare(getSystemSysCompanyInfoQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysCompanyInfoQueryPage.requestConfig =
  getSystemSysCompanyInfoQueryPageRequestConfig

export interface IRequestGetSystemPlatformsExport {
  code?: string
  pNo?: string
}

export interface IResponseGetSystemPlatformsExport {
  fileName: string
  content: string
}

const getSystemPlatformsExportRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platforms/export',
  method: Method.GET,
  queryNames: ['code', 'pNo'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemPlatformsExport = /*#__PURE__*/ (
  requestData: IRequestGetSystemPlatformsExport,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformsExport>(
    prepare(getSystemPlatformsExportRequestConfig, requestData),
    ...args,
  )
}

getSystemPlatformsExport.requestConfig = getSystemPlatformsExportRequestConfig

export interface IRequestGetSystemPlatformsQueryPageProduct {
  pageNum: string
  pageSize: string
  code?: string
  pNo?: string
}

export interface IResponseGetSystemPlatformsQueryPageProduct {
  total: number
  list: {
    platform: string
    updatedAt: string
    code: string
    name: string
    productName: string
    pno: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemPlatformsQueryPageProductRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platforms/queryPageProduct',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'code', 'pNo'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemPlatformsQueryPageProduct = /*#__PURE__*/ (
  requestData: IRequestGetSystemPlatformsQueryPageProduct,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformsQueryPageProduct>(
    prepare(getSystemPlatformsQueryPageProductRequestConfig, requestData),
    ...args,
  )
}

getSystemPlatformsQueryPageProduct.requestConfig =
  getSystemPlatformsQueryPageProductRequestConfig

export interface IRequestGetSystemPlatformsPulling {}

export type IResponseGetSystemPlatformsPulling = string

const getSystemPlatformsPullingRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platforms/pulling',
  method: Method.GET,
  requestBodyType: RequestBodyType.query,
}

export const getSystemPlatformsPulling = /*#__PURE__*/ (
  requestData?: IRequestGetSystemPlatformsPulling,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformsPulling>(
    prepare(getSystemPlatformsPullingRequestConfig, requestData),
    ...args,
  )
}

getSystemPlatformsPulling.requestConfig = getSystemPlatformsPullingRequestConfig

export interface IRequestPostSystemPlatformsUpdate {
  id: number
  code: string
  name: string
}

export type IResponsePostSystemPlatformsUpdate = string

const postSystemPlatformsUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platforms/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemPlatformsUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformsUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformsUpdate>(
    prepare(postSystemPlatformsUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformsUpdate.requestConfig = postSystemPlatformsUpdateRequestConfig

export interface IRequestPostSystemPlatformsDelete {
  id: number
}

export type IResponsePostSystemPlatformsDelete = string

const postSystemPlatformsDeleteRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platforms/delete',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemPlatformsDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformsDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformsDelete>(
    prepare(postSystemPlatformsDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformsDelete.requestConfig = postSystemPlatformsDeleteRequestConfig

export interface IRequestGetSystemStandardCurrencyFilesQueryPage {
  pageNum: string
  pageSize: string
  code?: string
  name?: string
}

export interface IResponseGetSystemStandardCurrencyFilesQueryPage {
  total: number
  list: {
    id: string
    code: string
    name: string
    createBy: string
    updateBy: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemStandardCurrencyFilesQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/standardCurrencyFiles/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'code', 'name'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemStandardCurrencyFilesQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemStandardCurrencyFilesQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemStandardCurrencyFilesQueryPage>(
    prepare(getSystemStandardCurrencyFilesQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemStandardCurrencyFilesQueryPage.requestConfig =
  getSystemStandardCurrencyFilesQueryPageRequestConfig

export interface IRequestGetOrderShopsPlatformOcauthExt {
  shopCode: string
  platform: string
}

export interface IResponseGetOrderShopsPlatformOcauthExt {
  appkeyField: string
  appsecretField: string
  ocauthExt: string[]
  fieldsInfo: {
    field: string
    remark: string
    value: string
    required: string
    multiple: string
    type: string
    options: {
      code: string
      name: string
    }[]
  }[]
  businessType: {
    code: string
    name: string
  }[]
}

const getOrderShopsPlatformOcauthExtRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/shops/platform/ocauthExt',
    method: Method.GET,
    queryNames: ['shopCode', 'platform'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderShopsPlatformOcauthExt = /*#__PURE__*/ (
  requestData: IRequestGetOrderShopsPlatformOcauthExt,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderShopsPlatformOcauthExt>(
    prepare(getOrderShopsPlatformOcauthExtRequestConfig, requestData),
    ...args,
  )
}

getOrderShopsPlatformOcauthExt.requestConfig =
  getOrderShopsPlatformOcauthExtRequestConfig

export interface IRequestGetSystemShopsQueryPageVo {
  pageNum: string
  pageSize: string
  shopCode?: string
  shopName?: string
  platform?: string
  status?: string
  createdAtStartDate?: string
  createdAtEndDate?: string
  updateAtStartDate?: string
  updateAtEndDate?: string
}

export interface IResponseGetSystemShopsQueryPageVo {
  total: number
  list: {
    id: number
    shopCode: string
    shopName: string
    status: number
    platform: string
    createdAt: string
    updatedAt: string
    lastTradeSyncTime: string
    lastRefundSyncTime: string
    lastReturnSyncTime: string
    lastExchangeSyncTime: string
    lastItemSyncTime: string
    tokenExpiredDate: string
    lastTradeTrapsSyncTime: string
    lastRefundTrapsSyncTime: string
    lastReturnTrapsSyncTime: string
    lastExchangeTrapsSyncTime: string
    lastRefundAuditSyncTime: string
    tenantId: number
    appKey: string
    authorizeCode: string
    platformName: string
    alias: string
    company: string
    isSyncToken: number
    extendsInfo: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemShopsQueryPageVoRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/shops/queryPageVO',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'shopCode',
    'shopName',
    'platform',
    'status',
    'createdAtStartDate',
    'createdAtEndDate',
    'updateAtStartDate',
    'updateAtEndDate',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getSystemShopsQueryPageVo = /*#__PURE__*/ (
  requestData: IRequestGetSystemShopsQueryPageVo,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemShopsQueryPageVo>(
    prepare(getSystemShopsQueryPageVoRequestConfig, requestData),
    ...args,
  )
}

getSystemShopsQueryPageVo.requestConfig = getSystemShopsQueryPageVoRequestConfig

export interface IRequestPostSystemShopsCreate {
  platform: string
  shopCode: string
  shopName: string
  alias: string
  company: string
  status: string
  lastTradeSyncTime: string
  lastTradeTrapsSyncTime: string
  lastRefundSyncTime: string
  lastSpecialRefundSyncTime: string
  lastRefundTrapsSyncTime: string
  lastReturnSyncTime: string
  lastReturnTrapsSyncTime: string
  lastExchangeSyncTime: string
  lastExchangeTrapsSyncTime: string
  lastUpdateAddrSyncTime: string
  lastUpdateAddrTrapsSyncTime: string
  lastInvoiceSyncTime: string
  lastPickSyncTime: string
  lastRefundAuditSyncTime: string
  tokenExpiredDate: string
  refreshTokenExpiredDate: string
  secretExpiredDate: string
  isSyncToken: string
}

export type IResponsePostSystemShopsCreate = string

const postSystemShopsCreateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/shops/create',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemShopsCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopsCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopsCreate>(
    prepare(postSystemShopsCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemShopsCreate.requestConfig = postSystemShopsCreateRequestConfig

export interface IRequestPostSystemShopsUpdate {
  platform: string
  shopCode: string
  shopName: string
  alias: string
  company: string
  status: number
  lastTradeSyncTime: string
  lastTradeTrapsSyncTime: string
  lastRefundSyncTime: string
  lastSpecialRefundSyncTime: string
  lastRefundTrapsSyncTime: string
  lastReturnSyncTime: string
  lastReturnTrapsSyncTime: string
  lastExchangeSyncTime: string
  lastExchangeTrapsSyncTime: string
  lastUpdateAddrSyncTime: string
  lastUpdateAddrTrapsSyncTime: string
  lastInvoiceSyncTime: string
  lastPickSyncTime: string
  lastRefundAuditSyncTime: string
  tokenExpiredDate: string
  refreshTokenExpiredDate: string
  secretExpiredDate: string
  isSyncToken: string
  id: number
}

export type IResponsePostSystemShopsUpdate = string

const postSystemShopsUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/shops/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemShopsUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopsUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopsUpdate>(
    prepare(postSystemShopsUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemShopsUpdate.requestConfig = postSystemShopsUpdateRequestConfig

export interface IRequestGetSystemShopsFindById {
  id: string
}

export interface IResponseGetSystemShopsFindById {
  id: number
  alias: string
  company: string
  shopCode: string
  shopName: string
  status: number
  platform: string
  createdAt: string
  updatedAt: string
  lastTradeSyncTime: string
  lastRefundSyncTime: string
  lastReturnSyncTime: string
  lastExchangeSyncTime: string
  lastItemSyncTime: string
  lastUpdateAddrSyncTime: string
  tokenExpiredDate: string
  lastTradeTrapsSyncTime: string
  lastRefundTrapsSyncTime: string
  lastReturnTrapsSyncTime: string
  lastExchangeTrapsSyncTime: string
  lastItemTrapsSyncTime: string
  lastUpdateAddrTrapsSyncTime: string
  lastRefundAuditSyncTime: string
  lastSpecialRefundSyncTime: string
  lastInvoiceSyncTime: string
  lastPickSyncTime: string
  refreshTokenExpiredDate: string
  secretExpiredDate: string
  isSyncToken: number
  extTokenExpiredDate: string
  tenantId: number
  appKey: string
}

const getSystemShopsFindByIdRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/shops/findById',
  method: Method.GET,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemShopsFindById = /*#__PURE__*/ (
  requestData: IRequestGetSystemShopsFindById,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemShopsFindById>(
    prepare(getSystemShopsFindByIdRequestConfig, requestData),
    ...args,
  )
}

getSystemShopsFindById.requestConfig = getSystemShopsFindByIdRequestConfig

export interface IRequestPostSystemShopsBatchImportShops {}

export type IResponsePostSystemShopsBatchImportShops = string

const postSystemShopsBatchImportShopsRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shops/batchImportShops',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemShopsBatchImportShops = /*#__PURE__*/ (
  requestData?: IRequestPostSystemShopsBatchImportShops,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopsBatchImportShops>(
    prepare(postSystemShopsBatchImportShopsRequestConfig, requestData),
    ...args,
  )
}

postSystemShopsBatchImportShops.requestConfig =
  postSystemShopsBatchImportShopsRequestConfig

export interface IRequestPostOrderShopsDisable {
  id: string
  name: string
  code: string
}

export type IResponsePostOrderShopsDisable = string

const postOrderShopsDisableRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/shops/disable',
  method: Method.POST,
  queryNames: ['id', 'name', 'code'],
  requestBodyType: RequestBodyType.json,
}

export const postOrderShopsDisable = /*#__PURE__*/ (
  requestData: IRequestPostOrderShopsDisable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderShopsDisable>(
    prepare(postOrderShopsDisableRequestConfig, requestData),
    ...args,
  )
}

postOrderShopsDisable.requestConfig = postOrderShopsDisableRequestConfig

export interface IRequestPostOrderShopsEnable {
  id: string
  name: string
  code: string
  [k: string]: unknown
}

export type IResponsePostOrderShopsEnable = string

const postOrderShopsEnableRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/shops/enable',
  method: Method.POST,
  queryNames: ['id', 'name', 'code'],
  requestBodyType: RequestBodyType.json,
}

export const postOrderShopsEnable = /*#__PURE__*/ (
  requestData: IRequestPostOrderShopsEnable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderShopsEnable>(
    prepare(postOrderShopsEnableRequestConfig, requestData),
    ...args,
  )
}

postOrderShopsEnable.requestConfig = postOrderShopsEnableRequestConfig

export interface IRequestPostOrderShopsRepeal {
  id: string
  name: string
  code: string
  [k: string]: unknown
}

export type IResponsePostOrderShopsRepeal = string

const postOrderShopsRepealRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/shops/repeal',
  method: Method.POST,
  queryNames: ['id', 'name', 'code'],
  requestBodyType: RequestBodyType.json,
}

export const postOrderShopsRepeal = /*#__PURE__*/ (
  requestData: IRequestPostOrderShopsRepeal,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderShopsRepeal>(
    prepare(postOrderShopsRepealRequestConfig, requestData),
    ...args,
  )
}

postOrderShopsRepeal.requestConfig = postOrderShopsRepealRequestConfig

export interface IRequestGetOrderShopsPlatformAuthType {
  platform: string
}

export type IResponseGetOrderShopsPlatformAuthType = {
  code: string
  name: string
}[]

const getOrderShopsPlatformAuthTypeRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/shops/platform/authType',
    method: Method.GET,
    queryNames: ['platform'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderShopsPlatformAuthType = /*#__PURE__*/ (
  requestData: IRequestGetOrderShopsPlatformAuthType,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderShopsPlatformAuthType>(
    prepare(getOrderShopsPlatformAuthTypeRequestConfig, requestData),
    ...args,
  )
}

getOrderShopsPlatformAuthType.requestConfig =
  getOrderShopsPlatformAuthTypeRequestConfig

export interface IRequestPostShopAppkeyServiceShopsFindByCode {
  platform: string
  shop_code: string
}

export interface IResponsePostShopAppkeyServiceShopsFindByCode {
  lastActivitySyncTime: number
  lastExchangeSyncTime: number
  lastRefundSyncTime: number
  lastUpdateAddrTrapsSyncTime: number
  lastOccupiedSyncTime: number
  lastTradeSyncTime: number
  lastItemSyncTime: number
  lastTradeTrapsSyncTime: number
  shopName: string
  lastRefundTrapsSyncTime: number
  lastTradeJxSyncTime: number
  lastItemTrapsSyncTime: number
  platform: string
  translate: {
    access_token: string
    mode: string
    refresh_token: string
    pay_status_format_mode: string
    app_url: string
    code: string
    expires_at: string
    owner_id: string
    code_redirect_url: string
    client_secret: string
    client_id: string
  }
  lastInvCancelSyncTime: number
  lastDeliverySyncTime: number
  createdAt: number
  lastPresaleRefundSyncTime: number
  lastReturnSyncTime: number
  lastExchangeTrapsSyncTime: number
  lastSpecialRefundSyncTime: number
  id: number
  lastPickSyncTime: number
  updatedAt: number
  shopCode: string
  lastReturnTrapsSyncTime: number
  lastPresaleTradeSyncTime: number
  lastStoreSyncTime: number
  params: {
    access_token: string
    mode: string
    refresh_token: string
    pay_status_format_mode: string
    app_url: string
    code: string
    owner_id: string
    code_redirect_url: string
    client_secret: string
    client_id: string
  }
  lastRefundAuditSyncTime: number
  lastUpdateAddrSyncTime: number
  tokenExpiredDate: number
  lastInvoiceSyncTime: number
  fieldsInfo: {
    field: string
    remark: string
    value: string
    required: boolean
    multiple: boolean
    options: {
      code: string
      name: string
    }[]
    type: string
  }[]
  tenantId: number
  status: number
  appkeyField: string
  appsecretField: string
  ocauthExt?: string[]
}

const postShopAppkeyServiceShopsFindByCodeRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/shopAppkeyService/shops/findByCode',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postShopAppkeyServiceShopsFindByCode = /*#__PURE__*/ (
  requestData: IRequestPostShopAppkeyServiceShopsFindByCode,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostShopAppkeyServiceShopsFindByCode>(
    prepare(postShopAppkeyServiceShopsFindByCodeRequestConfig, requestData),
    ...args,
  )
}

postShopAppkeyServiceShopsFindByCode.requestConfig =
  postShopAppkeyServiceShopsFindByCodeRequestConfig

export interface IRequestGetSystemSysPlatformIsvKeyConfigFindConfigByPlatform {
  platform: string
}

export interface IResponseGetSystemSysPlatformIsvKeyConfigFindConfigByPlatform {
  platform: string
  isvKey: string
  isvSecret: string
  adaptorKey: string
  adaptorIsvKey: string
  openPlatform: string
  adaptorIsvSecret: string
  adaptorToken: string
  adaptorRefreshToken: string
  createdAt: string
  updatedAt: string
}

const getSystemSysPlatformIsvKeyConfigFindConfigByPlatformRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPlatformIsvKeyConfig/findConfigByPlatform',
    method: Method.GET,
    queryNames: ['platform'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysPlatformIsvKeyConfigFindConfigByPlatform =
  /*#__PURE__*/ (
    requestData: IRequestGetSystemSysPlatformIsvKeyConfigFindConfigByPlatform,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetSystemSysPlatformIsvKeyConfigFindConfigByPlatform>(
      prepare(
        getSystemSysPlatformIsvKeyConfigFindConfigByPlatformRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getSystemSysPlatformIsvKeyConfigFindConfigByPlatform.requestConfig =
  getSystemSysPlatformIsvKeyConfigFindConfigByPlatformRequestConfig

export interface IRequestGetSystemSysPlatformIsvKeyConfigFindConfig {
  platform: string
  isvKey: string
}

export interface IResponseGetSystemSysPlatformIsvKeyConfigFindConfig {
  platform: string
  isvKey: string
  isvSecret: string
  adaptorKey: string
  adaptorIsvKey: string
  openPlatform: string
  adaptorIsvSecret: string
  adaptorToken: string
  adaptorRefreshToken: string
  createdAt: string
  updatedAt: string
}

const getSystemSysPlatformIsvKeyConfigFindConfigRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPlatformIsvKeyConfig/findConfig',
    method: Method.GET,
    queryNames: ['platform', 'isvKey'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysPlatformIsvKeyConfigFindConfig = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysPlatformIsvKeyConfigFindConfig,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysPlatformIsvKeyConfigFindConfig>(
    prepare(
      getSystemSysPlatformIsvKeyConfigFindConfigRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemSysPlatformIsvKeyConfigFindConfig.requestConfig =
  getSystemSysPlatformIsvKeyConfigFindConfigRequestConfig

export interface IRequestPostOrderAppKeyUpdate {
  extendsInfo: string
  id: number
  appkey?: string
  appsecret?: string
}

export type IResponsePostOrderAppKeyUpdate = number

const postOrderAppKeyUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/appKey/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postOrderAppKeyUpdate = /*#__PURE__*/ (
  requestData: IRequestPostOrderAppKeyUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderAppKeyUpdate>(
    prepare(postOrderAppKeyUpdateRequestConfig, requestData),
    ...args,
  )
}

postOrderAppKeyUpdate.requestConfig = postOrderAppKeyUpdateRequestConfig

export interface IRequestPostShopAppkeyServiceAppKeyGetCode {
  id: number
  businessType?: string
  appkey?: string
  appsecret?: string
  ocauthExt?: {}
}

export interface IResponsePostShopAppkeyServiceAppKeyGetCode {
  type: string
  url: string
}

const postShopAppkeyServiceAppKeyGetCodeRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/shopAppkeyService/appKey/getCode',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postShopAppkeyServiceAppKeyGetCode = /*#__PURE__*/ (
  requestData: IRequestPostShopAppkeyServiceAppKeyGetCode,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostShopAppkeyServiceAppKeyGetCode>(
    prepare(postShopAppkeyServiceAppKeyGetCodeRequestConfig, requestData),
    ...args,
  )
}

postShopAppkeyServiceAppKeyGetCode.requestConfig =
  postShopAppkeyServiceAppKeyGetCodeRequestConfig

export interface IRequestPostShopAppkeyServiceAppKeyGetToken {
  id: number
  businessType?: string
  authcode?: string
}

export type IResponsePostShopAppkeyServiceAppKeyGetToken = string

const postShopAppkeyServiceAppKeyGetTokenRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/shopAppkeyService/appKey/getToken',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postShopAppkeyServiceAppKeyGetToken = /*#__PURE__*/ (
  requestData: IRequestPostShopAppkeyServiceAppKeyGetToken,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostShopAppkeyServiceAppKeyGetToken>(
    prepare(postShopAppkeyServiceAppKeyGetTokenRequestConfig, requestData),
    ...args,
  )
}

postShopAppkeyServiceAppKeyGetToken.requestConfig =
  postShopAppkeyServiceAppKeyGetTokenRequestConfig

export interface IRequestPostShopAppkeyServiceAppKeyRefreshToken {
  id: number
  businessType?: string
}

export type IResponsePostShopAppkeyServiceAppKeyRefreshToken = string

const postShopAppkeyServiceAppKeyRefreshTokenRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/shopAppkeyService/appKey/refreshToken',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postShopAppkeyServiceAppKeyRefreshToken = /*#__PURE__*/ (
  requestData: IRequestPostShopAppkeyServiceAppKeyRefreshToken,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostShopAppkeyServiceAppKeyRefreshToken>(
    prepare(postShopAppkeyServiceAppKeyRefreshTokenRequestConfig, requestData),
    ...args,
  )
}

postShopAppkeyServiceAppKeyRefreshToken.requestConfig =
  postShopAppkeyServiceAppKeyRefreshTokenRequestConfig

export interface IRequestPostOrderSysPlatformIsvKeyConfigGetIsvKeyExpiredDate {
  id: string
  [k: string]: unknown
}

export type IResponsePostOrderSysPlatformIsvKeyConfigGetIsvKeyExpiredDate =
  string

const postOrderSysPlatformIsvKeyConfigGetIsvKeyExpiredDateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysPlatformIsvKeyConfig/getIsvKeyExpiredDate',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysPlatformIsvKeyConfigGetIsvKeyExpiredDate =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderSysPlatformIsvKeyConfigGetIsvKeyExpiredDate,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderSysPlatformIsvKeyConfigGetIsvKeyExpiredDate>(
      prepare(
        postOrderSysPlatformIsvKeyConfigGetIsvKeyExpiredDateRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderSysPlatformIsvKeyConfigGetIsvKeyExpiredDate.requestConfig =
  postOrderSysPlatformIsvKeyConfigGetIsvKeyExpiredDateRequestConfig

export interface IRequestGetShopAppkeyServiceAppKeyPushRdsDetail {
  shopCode: string
}

export interface IResponseGetShopAppkeyServiceAppKeyPushRdsDetail {
  sellerNick: string
  historyDays: string
  rdsId: string
}

const getShopAppkeyServiceAppKeyPushRdsDetailRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/shopAppkeyService/appKey/pushRdsDetail',
    method: Method.GET,
    queryNames: ['shopCode'],
    requestBodyType: RequestBodyType.query,
  }

export const getShopAppkeyServiceAppKeyPushRdsDetail = /*#__PURE__*/ (
  requestData: IRequestGetShopAppkeyServiceAppKeyPushRdsDetail,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetShopAppkeyServiceAppKeyPushRdsDetail>(
    prepare(getShopAppkeyServiceAppKeyPushRdsDetailRequestConfig, requestData),
    ...args,
  )
}

getShopAppkeyServiceAppKeyPushRdsDetail.requestConfig =
  getShopAppkeyServiceAppKeyPushRdsDetailRequestConfig

export interface IRequestPostShopAppkeyServiceAppKeyPushRds {
  shopCode: string
  [k: string]: unknown
}

export type IResponsePostShopAppkeyServiceAppKeyPushRds = string

const postShopAppkeyServiceAppKeyPushRdsRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/shopAppkeyService/appKey/pushRds',
    method: Method.POST,
    queryNames: ['shopCode'],
    requestBodyType: RequestBodyType.json,
  }

export const postShopAppkeyServiceAppKeyPushRds = /*#__PURE__*/ (
  requestData: IRequestPostShopAppkeyServiceAppKeyPushRds,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostShopAppkeyServiceAppKeyPushRds>(
    prepare(postShopAppkeyServiceAppKeyPushRdsRequestConfig, requestData),
    ...args,
  )
}

postShopAppkeyServiceAppKeyPushRds.requestConfig =
  postShopAppkeyServiceAppKeyPushRdsRequestConfig

export interface IRequestPostSystemPlatformStandardCurrencyEnumDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemPlatformStandardCurrencyEnumDelete = string

const postSystemPlatformStandardCurrencyEnumDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformStandardCurrencyEnum/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformStandardCurrencyEnumDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformStandardCurrencyEnumDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformStandardCurrencyEnumDelete>(
    prepare(
      postSystemPlatformStandardCurrencyEnumDeleteRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postSystemPlatformStandardCurrencyEnumDelete.requestConfig =
  postSystemPlatformStandardCurrencyEnumDeleteRequestConfig

export interface IRequestPostSystemPlatformStandardCurrencyEnumCreate {
  platform: string
  platformCurrencyCode: string
  platformCurrencyName: string
  currencyCode: string
  currencyName: string
  currencyId?: string
}

export type IResponsePostSystemPlatformStandardCurrencyEnumCreate = string

const postSystemPlatformStandardCurrencyEnumCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformStandardCurrencyEnum/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformStandardCurrencyEnumCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformStandardCurrencyEnumCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformStandardCurrencyEnumCreate>(
    prepare(
      postSystemPlatformStandardCurrencyEnumCreateRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postSystemPlatformStandardCurrencyEnumCreate.requestConfig =
  postSystemPlatformStandardCurrencyEnumCreateRequestConfig

export interface IRequestPostSystemPlatformStandardCurrencyEnumUpdate {
  platform: string
  platformCurrencyCode: string
  platformCurrencyName: string
  currencyCode: string
  currencyName: string
  currencyId?: string
  id: string
}

export type IResponsePostSystemPlatformStandardCurrencyEnumUpdate = string

const postSystemPlatformStandardCurrencyEnumUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformStandardCurrencyEnum/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformStandardCurrencyEnumUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformStandardCurrencyEnumUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformStandardCurrencyEnumUpdate>(
    prepare(
      postSystemPlatformStandardCurrencyEnumUpdateRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postSystemPlatformStandardCurrencyEnumUpdate.requestConfig =
  postSystemPlatformStandardCurrencyEnumUpdateRequestConfig

export interface IRequestGetSystemPlatformStandardCurrencyEnumQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  platformCurrencyName?: string
  platformCurrencyCode?: string
  currencyName?: string
  currencyCode?: string
}

export interface IResponseGetSystemPlatformStandardCurrencyEnumQueryPage {
  total: number
  list: {
    id: string
    platform: string
    platformCurrencyCode: string
    platformCurrencyName: string
    currencyId: string
    currencyCode: string
    currencyName: string
    createBy: string
    updateBy: string
    updatedAt: string
    platformName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemPlatformStandardCurrencyEnumQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformStandardCurrencyEnum/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'platformCurrencyName',
      'platformCurrencyCode',
      'currencyName',
      'currencyCode',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemPlatformStandardCurrencyEnumQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemPlatformStandardCurrencyEnumQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformStandardCurrencyEnumQueryPage>(
    prepare(
      getSystemPlatformStandardCurrencyEnumQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemPlatformStandardCurrencyEnumQueryPage.requestConfig =
  getSystemPlatformStandardCurrencyEnumQueryPageRequestConfig

export interface IRequestPostSystemSettlementMethodUpdate {
  code: string
  name: string
  id: string
}

export type IResponsePostSystemSettlementMethodUpdate = string

const postSystemSettlementMethodUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/settlementMethod/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSettlementMethodUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSettlementMethodUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSettlementMethodUpdate>(
    prepare(postSystemSettlementMethodUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSettlementMethodUpdate.requestConfig =
  postSystemSettlementMethodUpdateRequestConfig

export interface IRequestPostSystemSettlementMethodDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSettlementMethodDelete = string

const postSystemSettlementMethodDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/settlementMethod/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSettlementMethodDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSettlementMethodDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSettlementMethodDelete>(
    prepare(postSystemSettlementMethodDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSettlementMethodDelete.requestConfig =
  postSystemSettlementMethodDeleteRequestConfig

export interface IRequestPostSystemSettlementMethodCreate {
  code: string
  name: string
}

export type IResponsePostSystemSettlementMethodCreate = string

const postSystemSettlementMethodCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/settlementMethod/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSettlementMethodCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSettlementMethodCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSettlementMethodCreate>(
    prepare(postSystemSettlementMethodCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSettlementMethodCreate.requestConfig =
  postSystemSettlementMethodCreateRequestConfig

export interface IRequestGetSystemSettlementMethodQueryPage {
  pageNum: string
  pageSize: string
  code?: string
  name?: string
}

export interface IResponseGetSystemSettlementMethodQueryPage {
  total: number
  list: {
    id: string
    code: string
    name: string
    createBy: string
    createdAt: string
    updateBy: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSettlementMethodQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/settlementMethod/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'code', 'name'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSettlementMethodQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSettlementMethodQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSettlementMethodQueryPage>(
    prepare(getSystemSettlementMethodQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSettlementMethodQueryPage.requestConfig =
  getSystemSettlementMethodQueryPageRequestConfig

export interface IRequestPostSystemPlatformSettlementMethodConfigDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemPlatformSettlementMethodConfigDelete = string

const postSystemPlatformSettlementMethodConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformSettlementMethodConfig/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformSettlementMethodConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformSettlementMethodConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformSettlementMethodConfigDelete>(
    prepare(
      postSystemPlatformSettlementMethodConfigDeleteRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postSystemPlatformSettlementMethodConfigDelete.requestConfig =
  postSystemPlatformSettlementMethodConfigDeleteRequestConfig

export interface IRequestPostSystemPlatformSettlementMethodConfigCreate {
  platform: string
  platformSettlementCode: string
  platformSettlementName: string
  settlementCode: string
  settlementName: string
}

export type IResponsePostSystemPlatformSettlementMethodConfigCreate = string

const postSystemPlatformSettlementMethodConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformSettlementMethodConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformSettlementMethodConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformSettlementMethodConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformSettlementMethodConfigCreate>(
    prepare(
      postSystemPlatformSettlementMethodConfigCreateRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postSystemPlatformSettlementMethodConfigCreate.requestConfig =
  postSystemPlatformSettlementMethodConfigCreateRequestConfig

export interface IRequestPostSystemPlatformSettlementMethodConfigUpdate {
  platform: string
  platformSettlementCode: string
  platformSettlementName: string
  settlementCode: string
  settlementName: string
  id: number
}

export type IResponsePostSystemPlatformSettlementMethodConfigUpdate = string

const postSystemPlatformSettlementMethodConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformSettlementMethodConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformSettlementMethodConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformSettlementMethodConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformSettlementMethodConfigUpdate>(
    prepare(
      postSystemPlatformSettlementMethodConfigUpdateRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postSystemPlatformSettlementMethodConfigUpdate.requestConfig =
  postSystemPlatformSettlementMethodConfigUpdateRequestConfig

export interface IRequestGetSystemPlatformSettlementMethodConfigQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  platformSettlementName?: string
  platformSettlementCode?: string
  settlementName?: string
  settlementCode?: string
}

export interface IResponseGetSystemPlatformSettlementMethodConfigQueryPage {
  total: number
  list: {
    id: number
    platform: string
    platformSettlementCode: string
    platformSettlementName: string
    settlementCode: string
    settlementName: string
    updatedAt: string
    createdAt: string
    platformName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemPlatformSettlementMethodConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformSettlementMethodConfig/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'platformSettlementName',
      'platformSettlementCode',
      'settlementName',
      'settlementCode',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemPlatformSettlementMethodConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemPlatformSettlementMethodConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformSettlementMethodConfigQueryPage>(
    prepare(
      getSystemPlatformSettlementMethodConfigQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemPlatformSettlementMethodConfigQueryPage.requestConfig =
  getSystemPlatformSettlementMethodConfigQueryPageRequestConfig

export interface IRequestGetSystemLogisticsQueryPage {
  pageNum: string
  pageSize: string
  logisticsCode?: string
  logisticsName?: string
}

export interface IResponseGetSystemLogisticsQueryPage {
  total: number
  list: {
    logisticsCode: string
    logisticsId: string
    logisticsName: string
    initialize: boolean
    createdAt: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemLogisticsQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/logistics/queryPage',
  method: Method.GET,
  queryNames: ['pageNum', 'pageSize', 'logisticsCode', 'logisticsName'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemLogisticsQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemLogisticsQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemLogisticsQueryPage>(
    prepare(getSystemLogisticsQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemLogisticsQueryPage.requestConfig =
  getSystemLogisticsQueryPageRequestConfig

export interface IRequestPostSystemLogisticsCreate {
  logisticsCode: string
  logisticsName: string
}

export type IResponsePostSystemLogisticsCreate = string

const postSystemLogisticsCreateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/logistics/create',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemLogisticsCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemLogisticsCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemLogisticsCreate>(
    prepare(postSystemLogisticsCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemLogisticsCreate.requestConfig = postSystemLogisticsCreateRequestConfig

export interface IRequestPostSystemLogisticsDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemLogisticsDelete = string

const postSystemLogisticsDeleteRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/logistics/delete',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemLogisticsDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemLogisticsDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemLogisticsDelete>(
    prepare(postSystemLogisticsDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemLogisticsDelete.requestConfig = postSystemLogisticsDeleteRequestConfig

export interface IRequestPostSystemLogisticsUpdate {
  logisticsCode: string
  logisticsName: string
}

export type IResponsePostSystemLogisticsUpdate = string

const postSystemLogisticsUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/logistics/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemLogisticsUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemLogisticsUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemLogisticsUpdate>(
    prepare(postSystemLogisticsUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemLogisticsUpdate.requestConfig = postSystemLogisticsUpdateRequestConfig

export interface IRequestPostSystemPlatformLogisticsConfigDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemPlatformLogisticsConfigDelete = string

const postSystemPlatformLogisticsConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformLogisticsConfig/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformLogisticsConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformLogisticsConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformLogisticsConfigDelete>(
    prepare(postSystemPlatformLogisticsConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformLogisticsConfigDelete.requestConfig =
  postSystemPlatformLogisticsConfigDeleteRequestConfig

export interface IRequestPostSystemPlatformLogisticsConfigCreate {
  platform: string
  platformLogisticsCode: string
  platformLogisticsName: string
  logisticsCode: string
  logisticsName?: string
}

export type IResponsePostSystemPlatformLogisticsConfigCreate = string

const postSystemPlatformLogisticsConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformLogisticsConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformLogisticsConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformLogisticsConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformLogisticsConfigCreate>(
    prepare(postSystemPlatformLogisticsConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformLogisticsConfigCreate.requestConfig =
  postSystemPlatformLogisticsConfigCreateRequestConfig

export interface IRequestPostSystemPlatformLogisticsConfigUpdate {
  platform: string
  platformLogisticsCode: string
  platformLogisticsName: string
  logisticsCode: string
  logisticsName?: string
  id: string
}

export type IResponsePostSystemPlatformLogisticsConfigUpdate = string

const postSystemPlatformLogisticsConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformLogisticsConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformLogisticsConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformLogisticsConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformLogisticsConfigUpdate>(
    prepare(postSystemPlatformLogisticsConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformLogisticsConfigUpdate.requestConfig =
  postSystemPlatformLogisticsConfigUpdateRequestConfig

export interface IRequestGetSystemPlatformLogisticsConfigQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  platformLogisticsName?: string
  platformLogisticsCode?: string
  logisticsName?: string
  logisticsCode?: string
}

export interface IResponseGetSystemPlatformLogisticsConfigQueryPage {
  total: number
  list: {
    id: string
    logisticsCode: string
    logisticsName: string
    platform: string
    platformLogisticsId: string
    platformLogisticsCode: string
    platformLogisticsName: string
    createdAt: string
    updatedAt: string
    initialize: number
    platformName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemPlatformLogisticsConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformLogisticsConfig/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'platformLogisticsName',
      'platformLogisticsCode',
      'logisticsName',
      'logisticsCode',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemPlatformLogisticsConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemPlatformLogisticsConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformLogisticsConfigQueryPage>(
    prepare(
      getSystemPlatformLogisticsConfigQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemPlatformLogisticsConfigQueryPage.requestConfig =
  getSystemPlatformLogisticsConfigQueryPageRequestConfig

export interface IRequestGetSystemAreaInfoQueryPage {
  pageNum: string
  pageSize: string
  initialize?: string
  name?: string
  type?: string
  id?: string
  parentId?: string
}

export interface IResponseGetSystemAreaInfoQueryPage {
  total: number
  list: {
    id: number
    type: number
    name: string
    parentId: number
    zip: string
    initialize: number
    updatedAt: string
    createdAt: string
    missing: boolean
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemAreaInfoQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/areaInfo/queryPage',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'initialize',
    'name',
    'type',
    'id',
    'parentId',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getSystemAreaInfoQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemAreaInfoQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemAreaInfoQueryPage>(
    prepare(getSystemAreaInfoQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemAreaInfoQueryPage.requestConfig =
  getSystemAreaInfoQueryPageRequestConfig

export interface IRequestPostSystemAreaInfoCreate {
  name: string
  type: number
  zip: string
  parentId: number
}

export type IResponsePostSystemAreaInfoCreate = string

const postSystemAreaInfoCreateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/areaInfo/create',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemAreaInfoCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemAreaInfoCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemAreaInfoCreate>(
    prepare(postSystemAreaInfoCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemAreaInfoCreate.requestConfig = postSystemAreaInfoCreateRequestConfig

export interface IRequestPostSystemAreaInfoUpdate {
  name: string
  type: number
  id: number
  initialize: string
  zip?: string
}

export type IResponsePostSystemAreaInfoUpdate = string

const postSystemAreaInfoUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/areaInfo/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemAreaInfoUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemAreaInfoUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemAreaInfoUpdate>(
    prepare(postSystemAreaInfoUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemAreaInfoUpdate.requestConfig = postSystemAreaInfoUpdateRequestConfig

export interface IRequestPostSystemAreaInfoDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemAreaInfoDelete = string

const postSystemAreaInfoDeleteRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/areaInfo/delete',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemAreaInfoDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemAreaInfoDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemAreaInfoDelete>(
    prepare(postSystemAreaInfoDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemAreaInfoDelete.requestConfig = postSystemAreaInfoDeleteRequestConfig

export interface IRequestPostSystemPlatformAreaConfigDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemPlatformAreaConfigDelete = string

const postSystemPlatformAreaConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformAreaConfig/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformAreaConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformAreaConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformAreaConfigDelete>(
    prepare(postSystemPlatformAreaConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformAreaConfigDelete.requestConfig =
  postSystemPlatformAreaConfigDeleteRequestConfig

export interface IRequestPostSystemPlatformAreaConfigCreate {
  platform: string
  type: string
  areaId: number
  parentId: number
  name: string
  platformId: string
  remark?: string
  configType?: string
}

export type IResponsePostSystemPlatformAreaConfigCreate = string

const postSystemPlatformAreaConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformAreaConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformAreaConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformAreaConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformAreaConfigCreate>(
    prepare(postSystemPlatformAreaConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformAreaConfigCreate.requestConfig =
  postSystemPlatformAreaConfigCreateRequestConfig

export interface IRequestPostSystemPlatformAreaConfigUpdate {
  platform: string
  type: number
  areaId: number
  parentId: number
  name: string
  platformId: string
  remark?: string
  configType?: string
  id: string
  initialize: string
}

export type IResponsePostSystemPlatformAreaConfigUpdate = string

const postSystemPlatformAreaConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformAreaConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformAreaConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformAreaConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformAreaConfigUpdate>(
    prepare(postSystemPlatformAreaConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformAreaConfigUpdate.requestConfig =
  postSystemPlatformAreaConfigUpdateRequestConfig

export interface IRequestGetSystemPlatformAreaConfigQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  name?: string
  areaId?: string
  platformName?: string
  platformId?: string
}

export interface IResponseGetSystemPlatformAreaConfigQueryPage {
  total: number
  list: {
    id: string
    areaId: number
    type: number
    name: string
    parentId: number
    platform: string
    platformName: string
    updatedAt: string
    createdAt: string
    initialize: number
    platformNm: string
    platformId: string
    remark: string
    extend: string
    configType: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemPlatformAreaConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformAreaConfig/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'name',
      'areaId',
      'platformName',
      'platformId',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemPlatformAreaConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemPlatformAreaConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformAreaConfigQueryPage>(
    prepare(getSystemPlatformAreaConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemPlatformAreaConfigQueryPage.requestConfig =
  getSystemPlatformAreaConfigQueryPageRequestConfig

export interface IRequestPostSystemSysReasonDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysReasonDelete = string

const postSystemSysReasonDeleteRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysReason/delete',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysReasonDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysReasonDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysReasonDelete>(
    prepare(postSystemSysReasonDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysReasonDelete.requestConfig = postSystemSysReasonDeleteRequestConfig

export interface IRequestPostSystemSysReasonCreate {
  reasonCode: string
  reasonName: string
}

export type IResponsePostSystemSysReasonCreate = string

const postSystemSysReasonCreateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysReason/create',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysReasonCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysReasonCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysReasonCreate>(
    prepare(postSystemSysReasonCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysReasonCreate.requestConfig = postSystemSysReasonCreateRequestConfig

export interface IRequestPostSystemSysReasonUpdate {
  reasonCode: string
  reasonName: string
  id: string
}

export type IResponsePostSystemSysReasonUpdate = string

const postSystemSysReasonUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysReason/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysReasonUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysReasonUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysReasonUpdate>(
    prepare(postSystemSysReasonUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysReasonUpdate.requestConfig = postSystemSysReasonUpdateRequestConfig

export interface IRequestGetSystemSysReasonQueryPage {
  pageNum: string
  pageSize: string
  reasonName?: string
}

export interface IResponseGetSystemSysReasonQueryPage {
  total: number
  list: {
    id: string
    reasonCode: string
    reasonName: string
    createdAt: string
    updatedAt: string
    createBy: string
    updateBy: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysReasonQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysReason/queryPage',
  method: Method.GET,
  queryNames: ['pageNum', 'pageSize', 'reasonName'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemSysReasonQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysReasonQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysReasonQueryPage>(
    prepare(getSystemSysReasonQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysReasonQueryPage.requestConfig =
  getSystemSysReasonQueryPageRequestConfig

export interface IRequestGetSystemSysPlatformReasonConfigQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  platformReasonName?: string
  platformReasonCode?: string
  reason?: string
}

export interface IResponseGetSystemSysPlatformReasonConfigQueryPage {
  total: number
  list: {
    id: string
    reason: string
    platform: string
    platformReasonCode: string
    platformReasonName: string
    createdAt: string
    updatedAt: string
    updateBy: string
    platformName: string
    createBy: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysPlatformReasonConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPlatformReasonConfig/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'platformReasonName',
      'platformReasonCode',
      'reason',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysPlatformReasonConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysPlatformReasonConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysPlatformReasonConfigQueryPage>(
    prepare(
      getSystemSysPlatformReasonConfigQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemSysPlatformReasonConfigQueryPage.requestConfig =
  getSystemSysPlatformReasonConfigQueryPageRequestConfig

export interface IRequestPostSystemSysPlatformReasonConfigCreate {
  platform: string
  platformReasonCode: string
  platformReasonName: string
  reason: string
}

export type IResponsePostSystemSysPlatformReasonConfigCreate = string

const postSystemSysPlatformReasonConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPlatformReasonConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysPlatformReasonConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysPlatformReasonConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysPlatformReasonConfigCreate>(
    prepare(postSystemSysPlatformReasonConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysPlatformReasonConfigCreate.requestConfig =
  postSystemSysPlatformReasonConfigCreateRequestConfig

export interface IRequestPostSystemSysPlatformReasonConfigUpdate {
  platform: string
  platformReasonCode: string
  platformReasonName: string
  reason: string
  id: string
}

export type IResponsePostSystemSysPlatformReasonConfigUpdate = string

const postSystemSysPlatformReasonConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPlatformReasonConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysPlatformReasonConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysPlatformReasonConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysPlatformReasonConfigUpdate>(
    prepare(postSystemSysPlatformReasonConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysPlatformReasonConfigUpdate.requestConfig =
  postSystemSysPlatformReasonConfigUpdateRequestConfig

export interface IRequestPostSystemSysPlatformReasonConfigDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysPlatformReasonConfigDelete = string

const postSystemSysPlatformReasonConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPlatformReasonConfig/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysPlatformReasonConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysPlatformReasonConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysPlatformReasonConfigDelete>(
    prepare(postSystemSysPlatformReasonConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysPlatformReasonConfigDelete.requestConfig =
  postSystemSysPlatformReasonConfigDeleteRequestConfig

export interface IRequestPostOrderCommonPlatformDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  orderNo?: string
  tid?: string
  showLog: string
}

export type IResponsePostOrderCommonPlatformDownloadPage = string

const postOrderCommonPlatformDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/platform/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonPlatformDownloadPage = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPlatformDownloadPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPlatformDownloadPage>(
    prepare(postOrderCommonPlatformDownloadPageRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPlatformDownloadPage.requestConfig =
  postOrderCommonPlatformDownloadPageRequestConfig

export type IRequestPostOrderCommonBatchPush = {
  orderNo: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderCommonBatchPush = string

const postOrderCommonBatchPushRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/common/batchPush',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postOrderCommonBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonBatchPush>(
    prepare(postOrderCommonBatchPushRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonBatchPush.requestConfig = postOrderCommonBatchPushRequestConfig

export interface IRequestPostOrderCommonUpdatePushStatus {
  orderNos: string[]
  platform: string
  pushStatus: string
  businessType: string
}

export type IResponsePostOrderCommonUpdatePushStatus = string

const postOrderCommonUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonUpdatePushStatus>(
    prepare(postOrderCommonUpdatePushStatusRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonUpdatePushStatus.requestConfig =
  postOrderCommonUpdatePushStatusRequestConfig

export interface IRequestPostOrderCommonPush {
  orderNo: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderCommonPush = string

const postOrderCommonPushRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/common/push',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postOrderCommonPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPush>(
    prepare(postOrderCommonPushRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPush.requestConfig = postOrderCommonPushRequestConfig

export interface IRequestPostOrderCommonStandardGetSourceJson {
  orderNo: string
  shopCode: string
  platform: string
  businessType: string
}

export type IResponsePostOrderCommonStandardGetSourceJson = string

const postOrderCommonStandardGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/standard/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonStandardGetSourceJson = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonStandardGetSourceJson,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonStandardGetSourceJson>(
    prepare(postOrderCommonStandardGetSourceJsonRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonStandardGetSourceJson.requestConfig =
  postOrderCommonStandardGetSourceJsonRequestConfig

export interface IRequestPostOrderCommonStandardQueryPage {
  businessType: string
  platform: string
  updatedAtStart?: string
  updatedAtEnd?: string
  shopCode?: string
  orderNo?: string
  pushStatus?: string
  updateStartTime?: string
  updateEndTime?: string
  pageNum: number
  pageSize: number
}

export interface IResponsePostOrderCommonStandardQueryPage {
  navigatepageNums: number[]
  startRow: number
  hasNextPage: boolean
  prePage: number
  nextPage: number
  endRow: number
  pageSize: number
  list: {
    ext: string
    shopCode: string
    createdAt: string
    retryNum: number
    orderNo: string
    pushStatus: number
    pickNo: string
    tenantId: string
    warehouse: string
    platform: string
    updatedAt: string
    firstPushTime: string
    nextPushTime: string
    pushTime: string
    sellEtTime: string
    sellStTime: string
    storeSn: string
    poNo: string
    exportTime: string
    orderCate: string
    exportNum: number
  }[]
  pageNum: number
  navigatePages: number
  navigateFirstPage: number
  total: number
  pages: number
  size: number
  isLastPage: boolean
  hasPreviousPage: boolean
  navigateLastPage: number
  isFirstPage: boolean
}

const postOrderCommonStandardQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/standard/queryPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonStandardQueryPage = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonStandardQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonStandardQueryPage>(
    prepare(postOrderCommonStandardQueryPageRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonStandardQueryPage.requestConfig =
  postOrderCommonStandardQueryPageRequestConfig

export interface IRequestPostOrderCommonGetPlatformBusinessType {}

export type IResponsePostOrderCommonGetPlatformBusinessType = {
  code: string
  name: string
}[]

const postOrderCommonGetPlatformBusinessTypeRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/getPlatformBusinessType',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonGetPlatformBusinessType = /*#__PURE__*/ (
  requestData?: IRequestPostOrderCommonGetPlatformBusinessType,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonGetPlatformBusinessType>(
    prepare(postOrderCommonGetPlatformBusinessTypeRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonGetPlatformBusinessType.requestConfig =
  postOrderCommonGetPlatformBusinessTypeRequestConfig

export interface IRequestPostOrderPlatformInvoiceOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  invoiceId?: string
  showLog: string
}

export type IResponsePostOrderPlatformInvoiceOriginalMessageDownloadPage =
  string

const postOrderPlatformInvoiceOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformInvoiceOriginalMessageDownloadPage =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformInvoiceOriginalMessageDownloadPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformInvoiceOriginalMessageDownloadPage>(
      prepare(
        postOrderPlatformInvoiceOriginalMessageDownloadPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformInvoiceOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformInvoiceOriginalMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformInvoiceStandardMessageBatchPush = {
  invoiceId: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderPlatformInvoiceStandardMessageBatchPush = string

const postOrderPlatformInvoiceStandardMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceStandardMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformInvoiceStandardMessageBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformInvoiceStandardMessageBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformInvoiceStandardMessageBatchPush>(
    prepare(
      postOrderPlatformInvoiceStandardMessageBatchPushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformInvoiceStandardMessageBatchPush.requestConfig =
  postOrderPlatformInvoiceStandardMessageBatchPushRequestConfig

export interface IRequestPostOrderSysStdTradeInvoiceUpdatePushStatus {
  tids: string[]
  platform: string
  pushStatus: string
}

export type IResponsePostOrderSysStdTradeInvoiceUpdatePushStatus = string

const postOrderSysStdTradeInvoiceUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdTradeInvoice/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdTradeInvoiceUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdTradeInvoiceUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdTradeInvoiceUpdatePushStatus>(
    prepare(
      postOrderSysStdTradeInvoiceUpdatePushStatusRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderSysStdTradeInvoiceUpdatePushStatus.requestConfig =
  postOrderSysStdTradeInvoiceUpdatePushStatusRequestConfig

export interface IRequestPostOrderPlatformInvoiceStandardMessagePush {
  invoiceId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformInvoiceStandardMessagePush = string

const postOrderPlatformInvoiceStandardMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceStandardMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformInvoiceStandardMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformInvoiceStandardMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformInvoiceStandardMessagePush>(
    prepare(
      postOrderPlatformInvoiceStandardMessagePushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformInvoiceStandardMessagePush.requestConfig =
  postOrderPlatformInvoiceStandardMessagePushRequestConfig

export interface IRequestPostOrderPlatformInvoiceStandardMessageGetSourceJson {
  invoiceId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformInvoiceStandardMessageGetSourceJson =
  string

const postOrderPlatformInvoiceStandardMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceStandardMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformInvoiceStandardMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformInvoiceStandardMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformInvoiceStandardMessageGetSourceJson>(
      prepare(
        postOrderPlatformInvoiceStandardMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformInvoiceStandardMessageGetSourceJson.requestConfig =
  postOrderPlatformInvoiceStandardMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdTradeInvoiceQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  numIid?: string
  skuId?: string
  pushStatus?: string
  status?: string
  storeId?: string
  pageCount?: string
  outerSkuId?: string
}

export interface IResponseGetOrderSysStdTradeInvoiceQueryPage {
  total: number
  list: {
    platform: string
    shopCode: string
    retryNum: number
    pushStatus: number
    pushTime: string
    firstPushTime: string
    nextPushTime: string
    updatedAt: string
    tid: string
    shopName: string
    platformName: string
    invoiceType: string
    invoiceTitle: string
    invoiceContent: string
    invoicePhone: string
    tenantId: number
    invoicePrice: number
    extendsInfo: string
    invoiceStatus: string
    address: string
    invoiceWay: number
    invoiceId: string
    invoiceUserName: string
    invoiceEmail: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdTradeInvoiceQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdTradeInvoice/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'updatedAtStart',
      'updatedAtEnd',
      'platform',
      'shopCode',
      'numIid',
      'skuId',
      'pushStatus',
      'status',
      'storeId',
      'pageCount',
      'outerSkuId',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdTradeInvoiceQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdTradeInvoiceQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdTradeInvoiceQueryPage>(
    prepare(getOrderSysStdTradeInvoiceQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdTradeInvoiceQueryPage.requestConfig =
  getOrderSysStdTradeInvoiceQueryPageRequestConfig

export interface IRequestPostOrderPlatformRecycleTradeOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  tid?: string
  showLog: string
}

export type IResponsePostOrderPlatformRecycleTradeOriginalMessageDownloadPage =
  string

const postOrderPlatformRecycleTradeOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRecycleTradeOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRecycleTradeOriginalMessageDownloadPage =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRecycleTradeOriginalMessageDownloadPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRecycleTradeOriginalMessageDownloadPage>(
      prepare(
        postOrderPlatformRecycleTradeOriginalMessageDownloadPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRecycleTradeOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformRecycleTradeOriginalMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformTradeStandardRecycleMessageBatchPush = {
  tid: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderPlatformTradeStandardRecycleMessageBatchPush =
  string

const postOrderPlatformTradeStandardRecycleMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeStandardRecycleMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeStandardRecycleMessageBatchPush =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformTradeStandardRecycleMessageBatchPush,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformTradeStandardRecycleMessageBatchPush>(
      prepare(
        postOrderPlatformTradeStandardRecycleMessageBatchPushRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformTradeStandardRecycleMessageBatchPush.requestConfig =
  postOrderPlatformTradeStandardRecycleMessageBatchPushRequestConfig

export interface IRequestPostOrderSysStdRecycleTradeUpdatePushStatus {
  tids: string[]
  pushStatus: string
  platform: string
}

export type IResponsePostOrderSysStdRecycleTradeUpdatePushStatus = string

const postOrderSysStdRecycleTradeUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdRecycleTrade/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdRecycleTradeUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdRecycleTradeUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdRecycleTradeUpdatePushStatus>(
    prepare(
      postOrderSysStdRecycleTradeUpdatePushStatusRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderSysStdRecycleTradeUpdatePushStatus.requestConfig =
  postOrderSysStdRecycleTradeUpdatePushStatusRequestConfig

export interface IRequestPostOrderPlatformTradeStandardRecycleMessagePush {
  tid: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformTradeStandardRecycleMessagePush = string

const postOrderPlatformTradeStandardRecycleMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeStandardRecycleMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeStandardRecycleMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformTradeStandardRecycleMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformTradeStandardRecycleMessagePush>(
    prepare(
      postOrderPlatformTradeStandardRecycleMessagePushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformTradeStandardRecycleMessagePush.requestConfig =
  postOrderPlatformTradeStandardRecycleMessagePushRequestConfig

export interface IRequestPostOrderPlatformTradeStandardRecycleMessageGetSourceJson {
  tid: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformTradeStandardRecycleMessageGetSourceJson =
  string

const postOrderPlatformTradeStandardRecycleMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeStandardRecycleMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeStandardRecycleMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformTradeStandardRecycleMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformTradeStandardRecycleMessageGetSourceJson>(
      prepare(
        postOrderPlatformTradeStandardRecycleMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformTradeStandardRecycleMessageGetSourceJson.requestConfig =
  postOrderPlatformTradeStandardRecycleMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdRecycleTradeQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  tid?: string
  pushStatus?: string
  status?: string
  payStatus?: string
  createStart?: string
  createEnd?: string
  payTimeStart?: string
  payTimeEnd?: string
  pageCount?: string
}

export interface IResponseGetOrderSysStdRecycleTradeQueryPage {
  total: number
  list: {
    tid: string
    platform: string
    shopCode: string
    status: string
    buyerNick: string
    sellerNick: string
    payType: string
    sellerName: string
    sellerState: string
    sellerCity: string
    sellerDistrict: string
    sellerTown: string
    sellerAddress: string
    sellerPhone: string
    shipType: string
    shipTime: string
    apprizeId: string
    zmScore: string
    channel: string
    rateGrade: string
    closeReason: string
    created: string
    modified: string
    sceneType: string
    cashOrder: string
    spuId: string
    creditPayAmount: number
    buyerId: string
    sellerId: string
    sellerAlipayUserId: string
    zfbDk: string
    creditPay: string
    createdAt: string
    updatedAt: string
    tenantId: number
    pushStatus: number
    pushTime: string
    firstPushTime: string
    nextPushTime: string
    retryNum: number
    sellerStateCode: string
    sellerCityCode: string
    sellerDistrictCode: string
    platformName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdRecycleTradeQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdRecycleTrade/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'updatedAtStart',
      'updatedAtEnd',
      'platform',
      'shopCode',
      'tid',
      'pushStatus',
      'status',
      'payStatus',
      'createStart',
      'createEnd',
      'payTimeStart',
      'payTimeEnd',
      'pageCount',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdRecycleTradeQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdRecycleTradeQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdRecycleTradeQueryPage>(
    prepare(getOrderSysStdRecycleTradeQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdRecycleTradeQueryPage.requestConfig =
  getOrderSysStdRecycleTradeQueryPageRequestConfig

export interface IRequestPostOrderPlatformUpdateAddrOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  tid?: string
  showLog: string
}

export type IResponsePostOrderPlatformUpdateAddrOriginalMessageDownloadPage =
  string

const postOrderPlatformUpdateAddrOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformUpdateAddrOriginalMessageDownloadPage =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformUpdateAddrOriginalMessageDownloadPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformUpdateAddrOriginalMessageDownloadPage>(
      prepare(
        postOrderPlatformUpdateAddrOriginalMessageDownloadPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformUpdateAddrOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformUpdateAddrOriginalMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformUpdateAddrStandardMessageBatchPush = {
  approveId: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderPlatformUpdateAddrStandardMessageBatchPush =
  string

const postOrderPlatformUpdateAddrStandardMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrStandardMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformUpdateAddrStandardMessageBatchPush =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformUpdateAddrStandardMessageBatchPush,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformUpdateAddrStandardMessageBatchPush>(
      prepare(
        postOrderPlatformUpdateAddrStandardMessageBatchPushRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformUpdateAddrStandardMessageBatchPush.requestConfig =
  postOrderPlatformUpdateAddrStandardMessageBatchPushRequestConfig

export interface IRequestPostOrderSysStdUpdateAddrUpdatePushStatus {
  approveIds: string[]
  platform: string
  pushStatus: string
}

export type IResponsePostOrderSysStdUpdateAddrUpdatePushStatus = string

const postOrderSysStdUpdateAddrUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdUpdateAddr/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdUpdateAddrUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdUpdateAddrUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdUpdateAddrUpdatePushStatus>(
    prepare(
      postOrderSysStdUpdateAddrUpdatePushStatusRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderSysStdUpdateAddrUpdatePushStatus.requestConfig =
  postOrderSysStdUpdateAddrUpdatePushStatusRequestConfig

export interface IRequestPostOrderPlatformUpdateAddrStandardMessagePush {
  approveId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformUpdateAddrStandardMessagePush = string

const postOrderPlatformUpdateAddrStandardMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrStandardMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformUpdateAddrStandardMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformUpdateAddrStandardMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformUpdateAddrStandardMessagePush>(
    prepare(
      postOrderPlatformUpdateAddrStandardMessagePushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformUpdateAddrStandardMessagePush.requestConfig =
  postOrderPlatformUpdateAddrStandardMessagePushRequestConfig

export interface IRequestPostOrderPlatformUpdateAddrStandardMessageGetSourceJson {
  approveId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformUpdateAddrStandardMessageGetSourceJson =
  string

const postOrderPlatformUpdateAddrStandardMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrStandardMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformUpdateAddrStandardMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformUpdateAddrStandardMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformUpdateAddrStandardMessageGetSourceJson>(
      prepare(
        postOrderPlatformUpdateAddrStandardMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformUpdateAddrStandardMessageGetSourceJson.requestConfig =
  postOrderPlatformUpdateAddrStandardMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdUpdateAddrQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  tid?: string
  approveId?: string
  pushStatus?: string
  pageCount?: string
}

export interface IResponseGetOrderSysStdUpdateAddrQueryPage {
  total: number
  list: {
    approveId: string
    tid: string
    platform: string
    shopCode: string
    receiverName: string
    receiverStateCode: string
    receiverState: string
    receiverCityCode: string
    receiverCity: string
    receiverDistrictCode: string
    receiverDistrict: string
    receiverAddress: string
    receiverMobile: string
    status: string
    created: string
    modified: string
    extendsInfo: string
    createdAt: string
    updatedAt: string
    pushStatus: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdUpdateAddrQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdUpdateAddr/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'updatedAtStart',
      'updatedAtEnd',
      'platform',
      'shopCode',
      'tid',
      'approveId',
      'pushStatus',
      'pageCount',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdUpdateAddrQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdUpdateAddrQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdUpdateAddrQueryPage>(
    prepare(getOrderSysStdUpdateAddrQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdUpdateAddrQueryPage.requestConfig =
  getOrderSysStdUpdateAddrQueryPageRequestConfig

export interface IRequestPostOrderPlatformItemOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  numIid?: string
  storeId?: string
  showLog: string
}

export type IResponsePostOrderPlatformItemOriginalMessageDownloadPage = string

const postOrderPlatformItemOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemOriginalMessageDownloadPage = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformItemOriginalMessageDownloadPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformItemOriginalMessageDownloadPage>(
    prepare(
      postOrderPlatformItemOriginalMessageDownloadPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformItemOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformItemOriginalMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformItemStandardMessageBatchPush = {
  skuId: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderPlatformItemStandardMessageBatchPush = string

const postOrderPlatformItemStandardMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemStandardMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemStandardMessageBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformItemStandardMessageBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformItemStandardMessageBatchPush>(
    prepare(
      postOrderPlatformItemStandardMessageBatchPushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformItemStandardMessageBatchPush.requestConfig =
  postOrderPlatformItemStandardMessageBatchPushRequestConfig

export interface IRequestPostOrderSysStdPlatformSkuUpdatePushStatus {
  skuIds: string[]
  platform: string
  pushStatus: string
}

export type IResponsePostOrderSysStdPlatformSkuUpdatePushStatus = string

const postOrderSysStdPlatformSkuUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdPlatformSku/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdPlatformSkuUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdPlatformSkuUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdPlatformSkuUpdatePushStatus>(
    prepare(
      postOrderSysStdPlatformSkuUpdatePushStatusRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderSysStdPlatformSkuUpdatePushStatus.requestConfig =
  postOrderSysStdPlatformSkuUpdatePushStatusRequestConfig

export interface IRequestPostOrderPlatformItemStandardMessagePush {
  skuId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformItemStandardMessagePush = string

const postOrderPlatformItemStandardMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemStandardMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemStandardMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformItemStandardMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformItemStandardMessagePush>(
    prepare(postOrderPlatformItemStandardMessagePushRequestConfig, requestData),
    ...args,
  )
}

postOrderPlatformItemStandardMessagePush.requestConfig =
  postOrderPlatformItemStandardMessagePushRequestConfig

export interface IRequestPostOrderPlatformItemStandardMessageGetSourceJson {
  skuId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformItemStandardMessageGetSourceJson = string

const postOrderPlatformItemStandardMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemStandardMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemStandardMessageGetSourceJson = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformItemStandardMessageGetSourceJson,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformItemStandardMessageGetSourceJson>(
    prepare(
      postOrderPlatformItemStandardMessageGetSourceJsonRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformItemStandardMessageGetSourceJson.requestConfig =
  postOrderPlatformItemStandardMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdPlatformSkuQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  numIid?: string
  skuId?: string
  pushStatus?: string
  status?: string
  storeId?: string
  pageCount?: string
  outerSkuId?: string
}

export interface IResponseGetOrderSysStdPlatformSkuQueryPage {
  total: number
  list: {
    platform: string
    shopCode: string
    pushStatus: number
    pushTime: string
    pushErrorMessage: string
    updatedAt: string
    createdAt: string
    platformName: string
    shopName: string
    storeId: string
    numIid: string
    outerIid: string
    skuId: string
    outerSkuId: string
    title: string
    quantity: number
    approveStatus: string
    price: number
    isDelete: number
    created: string
    modified: string
    extendsInfo: string
    properties: string
    isItem: number
    uniqueKey: string
    presellType: number
    itemModified: string
    itemCreated: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdPlatformSkuQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdPlatformSku/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'updatedAtStart',
      'updatedAtEnd',
      'platform',
      'shopCode',
      'numIid',
      'skuId',
      'pushStatus',
      'status',
      'storeId',
      'pageCount',
      'outerSkuId',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdPlatformSkuQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdPlatformSkuQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdPlatformSkuQueryPage>(
    prepare(getOrderSysStdPlatformSkuQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdPlatformSkuQueryPage.requestConfig =
  getOrderSysStdPlatformSkuQueryPageRequestConfig

export interface IRequestPostOrderPlatformExchangeOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  disputeId?: string
  showLog: string
}

export type IResponsePostOrderPlatformExchangeOriginalMessageDownloadPage =
  string

const postOrderPlatformExchangeOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformExchangeOriginalMessageDownloadPage =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformExchangeOriginalMessageDownloadPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformExchangeOriginalMessageDownloadPage>(
      prepare(
        postOrderPlatformExchangeOriginalMessageDownloadPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformExchangeOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformExchangeOriginalMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformExchangeStandardMessageBatchPush = {
  disputeId: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderPlatformExchangeStandardMessageBatchPush = string

const postOrderPlatformExchangeStandardMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeStandardMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformExchangeStandardMessageBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformExchangeStandardMessageBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformExchangeStandardMessageBatchPush>(
    prepare(
      postOrderPlatformExchangeStandardMessageBatchPushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformExchangeStandardMessageBatchPush.requestConfig =
  postOrderPlatformExchangeStandardMessageBatchPushRequestConfig

export interface IRequestPostOrderSysStdExchangeUpdatePushStatus {
  disputeIds: string[]
  platform: string
  pushStatus: string
}

export type IResponsePostOrderSysStdExchangeUpdatePushStatus = string

const postOrderSysStdExchangeUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdExchange/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdExchangeUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdExchangeUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdExchangeUpdatePushStatus>(
    prepare(postOrderSysStdExchangeUpdatePushStatusRequestConfig, requestData),
    ...args,
  )
}

postOrderSysStdExchangeUpdatePushStatus.requestConfig =
  postOrderSysStdExchangeUpdatePushStatusRequestConfig

export interface IRequestPostOrderPlatformExchangeStandardMessagePush {
  disputeId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformExchangeStandardMessagePush = string

const postOrderPlatformExchangeStandardMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeStandardMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformExchangeStandardMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformExchangeStandardMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformExchangeStandardMessagePush>(
    prepare(
      postOrderPlatformExchangeStandardMessagePushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformExchangeStandardMessagePush.requestConfig =
  postOrderPlatformExchangeStandardMessagePushRequestConfig

export interface IRequestPostOrderPlatformExchangeStandardMessageGetSourceJson {
  disputeId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformExchangeStandardMessageGetSourceJson =
  string

const postOrderPlatformExchangeStandardMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeStandardMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformExchangeStandardMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformExchangeStandardMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformExchangeStandardMessageGetSourceJson>(
      prepare(
        postOrderPlatformExchangeStandardMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformExchangeStandardMessageGetSourceJson.requestConfig =
  postOrderPlatformExchangeStandardMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdExchangeQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  refundId?: string
  tid?: string
  pushStatus?: string
  status?: string
  disputeId?: string
  pageCount?: string
}

export interface IResponseGetOrderSysStdExchangeQueryPage {
  total: number
  list: {
    platform: string
    shopCode: string
    retryNum: number
    pushStatus: number
    pushTime: string
    pushErrorMessage: string
    firstPushTime: string
    updatedAt: string
    createdAt: string
    disputeId: string
    platformName: string
    tid: string
    shopName: string
    status: string
    refundPhase: string
    refundVersion: string
    buyerName: string
    buyerAddress: string
    buyerPhone: string
    buyerLogisticName: string
    buyerLogisticNo: string
    goodStatus: string
    created: string
    modified: string
    platformStatus: string
    buyerState: string
    buyerCity: string
    buyerDistrict: string
    buyerPlatformLogisticName: string
    buyerStateCode: string
    buyerCityCode: string
    buyerDistrictCode: string
    platformBuyerState: string
    platformBuyerCity: string
    platformBuyerDistrict: string
    buyerLogisticCode: string
    sellerAddress: string
    oaid: string
    buyerPlatformLogisticCode: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdExchangeQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdExchange/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'updatedAtStart',
      'updatedAtEnd',
      'platform',
      'shopCode',
      'refundId',
      'tid',
      'pushStatus',
      'status',
      'disputeId',
      'pageCount',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdExchangeQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdExchangeQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdExchangeQueryPage>(
    prepare(getOrderSysStdExchangeQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdExchangeQueryPage.requestConfig =
  getOrderSysStdExchangeQueryPageRequestConfig

export interface IRequestPostOrderPlatformTradeOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  tid?: string
  showLog: string
}

export type IResponsePostOrderPlatformTradeOriginalMessageDownloadPage = string

const postOrderPlatformTradeOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeOriginalMessageDownloadPage = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformTradeOriginalMessageDownloadPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformTradeOriginalMessageDownloadPage>(
    prepare(
      postOrderPlatformTradeOriginalMessageDownloadPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformTradeOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformTradeOriginalMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformTradeStandardMessageBatchPush = {
  tid: string
}[]

export type IResponsePostOrderPlatformTradeStandardMessageBatchPush = string

const postOrderPlatformTradeStandardMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeStandardMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeStandardMessageBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformTradeStandardMessageBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformTradeStandardMessageBatchPush>(
    prepare(
      postOrderPlatformTradeStandardMessageBatchPushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformTradeStandardMessageBatchPush.requestConfig =
  postOrderPlatformTradeStandardMessageBatchPushRequestConfig

export interface IRequestPostOrderPlatformTradeStandardMessagePush {
  tid: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformTradeStandardMessagePush = string

const postOrderPlatformTradeStandardMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeStandardMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeStandardMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformTradeStandardMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformTradeStandardMessagePush>(
    prepare(
      postOrderPlatformTradeStandardMessagePushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformTradeStandardMessagePush.requestConfig =
  postOrderPlatformTradeStandardMessagePushRequestConfig

export interface IRequestPostOrderSysStdTradeUpdatePushStatus {
  tids: string[]
  pushStatus: string
  platform: string
}

export type IResponsePostOrderSysStdTradeUpdatePushStatus = string

const postOrderSysStdTradeUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdTrade/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdTradeUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdTradeUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdTradeUpdatePushStatus>(
    prepare(postOrderSysStdTradeUpdatePushStatusRequestConfig, requestData),
    ...args,
  )
}

postOrderSysStdTradeUpdatePushStatus.requestConfig =
  postOrderSysStdTradeUpdatePushStatusRequestConfig

export interface IRequestPostOrderPlatformTradeStandardMessageGetSourceJson {
  tid: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformTradeStandardMessageGetSourceJson = string

const postOrderPlatformTradeStandardMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeStandardMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeStandardMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformTradeStandardMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformTradeStandardMessageGetSourceJson>(
      prepare(
        postOrderPlatformTradeStandardMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformTradeStandardMessageGetSourceJson.requestConfig =
  postOrderPlatformTradeStandardMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdTradeQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  tid?: string
  pushStatus?: string
  status?: string
  payStatus?: string
  createStart?: string
  createEnd?: string
  payTimeStart?: string
  payTimeEnd?: string
  originalTid?: string
  pageCount?: string
}

export interface IResponseGetOrderSysStdTradeQueryPage {
  total: number
  list: {
    platform: string
    shopCode: string
    pushStatus: number
    updatedAt: string
    createdAt: string
    tid: string
    platformName: string
    shopName: string
    totalFee: number
    discountFee: number
    otherDiscountFee: number
    couponFee: number
    payNo: string
    payment: number
    payType: string
    payStatus: string
    postFee: number
    receiverName: string
    receiverCountry: string
    receiverState: string
    receiverStateCode: string
    receiverCity: string
    receiverCityCode: string
    receiverDistrict: string
    receiverDistrictCode: string
    receiverTown: string
    receiverAddress: string
    receiverZip: string
    receiverMobile: string
    receiverPhone: string
    buyerEmail: string
    status: string
    type: string
    buyerNick: string
    sellerFlag: string
    stepPaidFee: number
    payTime: string
    isCod: number
    num: number
    created: string
    modified: string
    extendsInfo: string
    platformStatus: string
    orderExtType: string
    oaid: string
    needInvoiceFlag: number
    receiptDate: string
    tradeFrom: string
    platformReceiverState: string
    platformReceiverCity: string
    platformReceiverDistrict: string
    pushTime: string
    firstPushTime: string
    storeCode: string
    storeId: string
    pushErrorMessage: string
    sellerMemo: string
    buyerMessage: string
    platformRefundStatus: string
    platformRiskStatus: string
    liveActivites: string
    deliveryType: string
    deliveryNo: string
    vipCardNo: string
    dealExtDesc: string
    siteId: string
    omnichannelParam: string
    omniAttr: string
    omniParam: string
    brandLightShopStoreId: string
    brandLightShopSource: string
    warehouse: string
    originalTid: string
    orderFrom: string
    deliveryTime: string
    stepTradeStatus: string
    refundStatus: string
    deliveryName: string
    platformDiscount: number
    shopDiscount: number
    otherDiscount: number
    buyerPayment: number
    buyerTel: string
    manualPushStatus: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdTradeQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/sysStdTrade/queryPage',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'updatedAtStart',
    'updatedAtEnd',
    'platform',
    'shopCode',
    'tid',
    'pushStatus',
    'status',
    'payStatus',
    'createStart',
    'createEnd',
    'payTimeStart',
    'payTimeEnd',
    'originalTid',
    'pageCount',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getOrderSysStdTradeQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdTradeQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdTradeQueryPage>(
    prepare(getOrderSysStdTradeQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdTradeQueryPage.requestConfig =
  getOrderSysStdTradeQueryPageRequestConfig

export interface IRequestPostOrderPlatformReviewsOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  commentId?: string
  showLog: string
}

export type IResponsePostOrderPlatformReviewsOriginalMessageDownloadPage =
  string

const postOrderPlatformReviewsOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReviewsOriginalMessageDownloadPage =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReviewsOriginalMessageDownloadPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReviewsOriginalMessageDownloadPage>(
      prepare(
        postOrderPlatformReviewsOriginalMessageDownloadPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReviewsOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformReviewsOriginalMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformReviewsStandardMessageBatchPush = {
  commentId: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderPlatformReviewsStandardMessageBatchPush = string

const postOrderPlatformReviewsStandardMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsStandardMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReviewsStandardMessageBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformReviewsStandardMessageBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformReviewsStandardMessageBatchPush>(
    prepare(
      postOrderPlatformReviewsStandardMessageBatchPushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformReviewsStandardMessageBatchPush.requestConfig =
  postOrderPlatformReviewsStandardMessageBatchPushRequestConfig

export interface IRequestPostOrderSysStdReviewsUpdatePushStatus {
  commentIds: string[]
  platform: string
  pushStatus: string
}

export type IResponsePostOrderSysStdReviewsUpdatePushStatus = string

const postOrderSysStdReviewsUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdReviews/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdReviewsUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdReviewsUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdReviewsUpdatePushStatus>(
    prepare(postOrderSysStdReviewsUpdatePushStatusRequestConfig, requestData),
    ...args,
  )
}

postOrderSysStdReviewsUpdatePushStatus.requestConfig =
  postOrderSysStdReviewsUpdatePushStatusRequestConfig

export interface IRequestPostOrderPlatformReviewsStandardMessagePush {
  platform: string
  shopCode: string
  commentId: string
}

export type IResponsePostOrderPlatformReviewsStandardMessagePush = string

const postOrderPlatformReviewsStandardMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsStandardMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReviewsStandardMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformReviewsStandardMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformReviewsStandardMessagePush>(
    prepare(
      postOrderPlatformReviewsStandardMessagePushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformReviewsStandardMessagePush.requestConfig =
  postOrderPlatformReviewsStandardMessagePushRequestConfig

export interface IRequestPostOrderPlatformReviewsStandardMessageGetSourceJson {
  commentId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformReviewsStandardMessageGetSourceJson =
  string

const postOrderPlatformReviewsStandardMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsStandardMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReviewsStandardMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReviewsStandardMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReviewsStandardMessageGetSourceJson>(
      prepare(
        postOrderPlatformReviewsStandardMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReviewsStandardMessageGetSourceJson.requestConfig =
  postOrderPlatformReviewsStandardMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdReviewsQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  tid?: string
  pushStatus?: string
  status?: string
  payStatus?: string
  createStart?: string
  createEnd?: string
  payTimeStart?: string
  payTimeEnd?: string
  originalTid?: string
  pageCount?: string
}

export interface IResponseGetOrderSysStdReviewsQueryPage {
  total: number
  list: {
    platform: string
    shopCode: string
    retryNum: number
    pushStatus: number
    updatedAt: string
    createdAt: string
    id: number
    commentId: string
    tid: string
    numIid: string
    title: string
    reviewContent: string
    overallRating: number
    logisticsRating: number
    reviewTime: string
    attachmentTime: string
    tenantId: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdReviewsQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdReviews/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'updatedAtStart',
      'updatedAtEnd',
      'platform',
      'shopCode',
      'tid',
      'pushStatus',
      'status',
      'payStatus',
      'createStart',
      'createEnd',
      'payTimeStart',
      'payTimeEnd',
      'originalTid',
      'pageCount',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdReviewsQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdReviewsQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdReviewsQueryPage>(
    prepare(getOrderSysStdReviewsQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdReviewsQueryPage.requestConfig =
  getOrderSysStdReviewsQueryPageRequestConfig

export interface IRequestPostOrderPlatformRefundStandardMessageDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  refundId?: string
  showLog: string
}

export type IResponsePostOrderPlatformRefundStandardMessageDownloadPage = string

const postOrderPlatformRefundStandardMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundStandardMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundStandardMessageDownloadPage =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRefundStandardMessageDownloadPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRefundStandardMessageDownloadPage>(
      prepare(
        postOrderPlatformRefundStandardMessageDownloadPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRefundStandardMessageDownloadPage.requestConfig =
  postOrderPlatformRefundStandardMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformRefundStandardMessageBatchPush = {
  refundId: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderPlatformRefundStandardMessageBatchPush = string

const postOrderPlatformRefundStandardMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundStandardMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundStandardMessageBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformRefundStandardMessageBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformRefundStandardMessageBatchPush>(
    prepare(
      postOrderPlatformRefundStandardMessageBatchPushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformRefundStandardMessageBatchPush.requestConfig =
  postOrderPlatformRefundStandardMessageBatchPushRequestConfig

export interface IRequestPostOrderSysStdRefundUpdatePushStatus {
  refundIds: string[]
  platform: string
  pushStatus: string
}

export type IResponsePostOrderSysStdRefundUpdatePushStatus = string

const postOrderSysStdRefundUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdRefund/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdRefundUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdRefundUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdRefundUpdatePushStatus>(
    prepare(postOrderSysStdRefundUpdatePushStatusRequestConfig, requestData),
    ...args,
  )
}

postOrderSysStdRefundUpdatePushStatus.requestConfig =
  postOrderSysStdRefundUpdatePushStatusRequestConfig

export interface IRequestPostOrderPlatformRefundStandardMessagePush {
  platform: string
  shopCode: string
  refundId: string
}

export type IResponsePostOrderPlatformRefundStandardMessagePush = string

const postOrderPlatformRefundStandardMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundStandardMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundStandardMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformRefundStandardMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformRefundStandardMessagePush>(
    prepare(
      postOrderPlatformRefundStandardMessagePushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformRefundStandardMessagePush.requestConfig =
  postOrderPlatformRefundStandardMessagePushRequestConfig

export interface IRequestPostOrderPlatformRefundStandardMessageGetSourceJson {
  platform: string
  shopCode: string
  refundId: string
}

export type IResponsePostOrderPlatformRefundStandardMessageGetSourceJson =
  string

const postOrderPlatformRefundStandardMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundStandardMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundStandardMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRefundStandardMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRefundStandardMessageGetSourceJson>(
      prepare(
        postOrderPlatformRefundStandardMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRefundStandardMessageGetSourceJson.requestConfig =
  postOrderPlatformRefundStandardMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdRefundQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  refundId?: string
  tid?: string
  pushStatus?: string
  status?: string
  pageCount?: string
}

export interface IResponseGetOrderSysStdRefundQueryPage {
  total: number
  list: {
    platform: string
    shopCode: string
    pushStatus: number
    pushTime: string
    firstPushTime: string
    updatedAt: string
    createdAt: string
    refundId: string
    platformName: string
    tid: string
    oid: string
    shopName: string
    status: string
    refundFee: number
    descInfo: string
    created: string
    modified: string
    platformStatus: string
    isAllRefund: number
    pushErrorMessage: string
    orderStatus: string
    refundPhase: string
    refundVersion: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdRefundQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdRefund/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'updatedAtStart',
      'updatedAtEnd',
      'platform',
      'shopCode',
      'refundId',
      'tid',
      'pushStatus',
      'status',
      'pageCount',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdRefundQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdRefundQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdRefundQueryPage>(
    prepare(getOrderSysStdRefundQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdRefundQueryPage.requestConfig =
  getOrderSysStdRefundQueryPageRequestConfig

export interface IRequestPostOrderPlatformReturnStandardMessageDownloadPage {
  platform: string
  platformName: string
  shopCode: string
  shopName: string
  createStart: string
  createEnd: string
  pageNum: string
  tid: string
}

export type IResponsePostOrderPlatformReturnStandardMessageDownloadPage = string

const postOrderPlatformReturnStandardMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnStandardMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnStandardMessageDownloadPage =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReturnStandardMessageDownloadPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReturnStandardMessageDownloadPage>(
      prepare(
        postOrderPlatformReturnStandardMessageDownloadPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReturnStandardMessageDownloadPage.requestConfig =
  postOrderPlatformReturnStandardMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformReturnStandardMessageBatchPush = {
  refundId: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderPlatformReturnStandardMessageBatchPush = string

const postOrderPlatformReturnStandardMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnStandardMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnStandardMessageBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformReturnStandardMessageBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformReturnStandardMessageBatchPush>(
    prepare(
      postOrderPlatformReturnStandardMessageBatchPushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformReturnStandardMessageBatchPush.requestConfig =
  postOrderPlatformReturnStandardMessageBatchPushRequestConfig

export interface IRequestPostOrderSysStdReturnUpdatePushStatus {
  refundIds: string[]
  platform: string
  pushStatus: string
}

export type IResponsePostOrderSysStdReturnUpdatePushStatus = string

const postOrderSysStdReturnUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdReturn/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdReturnUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdReturnUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdReturnUpdatePushStatus>(
    prepare(postOrderSysStdReturnUpdatePushStatusRequestConfig, requestData),
    ...args,
  )
}

postOrderSysStdReturnUpdatePushStatus.requestConfig =
  postOrderSysStdReturnUpdatePushStatusRequestConfig

export interface IRequestPostOrderPlatformReturnStandardMessagePush {
  refundId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformReturnStandardMessagePush = string

const postOrderPlatformReturnStandardMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnStandardMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnStandardMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformReturnStandardMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformReturnStandardMessagePush>(
    prepare(
      postOrderPlatformReturnStandardMessagePushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformReturnStandardMessagePush.requestConfig =
  postOrderPlatformReturnStandardMessagePushRequestConfig

export interface IRequestPostOrderPlatformReturnStandardMessageGetSourceJson {
  refundId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformReturnStandardMessageGetSourceJson =
  string

const postOrderPlatformReturnStandardMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnStandardMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnStandardMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReturnStandardMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReturnStandardMessageGetSourceJson>(
      prepare(
        postOrderPlatformReturnStandardMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReturnStandardMessageGetSourceJson.requestConfig =
  postOrderPlatformReturnStandardMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdReturnQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  refundId?: string
  tid?: string
  pushStatus?: string
  status?: string
  sid?: string
  pageCount?: string
}

export interface IResponseGetOrderSysStdReturnQueryPage {
  total: number
  list: {
    platform: string
    shopCode: string
    retryNum: number
    pushStatus: number
    updatedAt: string
    createdAt: string
    refundId: string
    platformName: string
    tid: string
    oid: string
    shopName: string
    status: string
    refundFee: number
    goodStatus: string
    descInfo: string
    platformStatus: string
    created: string
    modified: string
    extendsInfo: string
    warehouseCode: string
    returnType: number
    orderStatus: string
    refundPhase: string
    refundVersion: string
    pushTime: string
    firstPushTime: string
    companyName: string
    sid: string
    companyCode: string
    platformCompanyCode: string
    platformCompanyName: string
    pushErrorMessage: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdReturnQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdReturn/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'updatedAtStart',
      'updatedAtEnd',
      'platform',
      'shopCode',
      'refundId',
      'tid',
      'pushStatus',
      'status',
      'sid',
      'pageCount',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdReturnQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdReturnQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdReturnQueryPage>(
    prepare(getOrderSysStdReturnQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdReturnQueryPage.requestConfig =
  getOrderSysStdReturnQueryPageRequestConfig

export interface IRequestPostOrderPlatformStoreStandardMessageDownloadPage {
  platform: string
  shopCode: string
  createStart?: string
  createEnd?: string
  pageNum?: string
  storeId?: string
  showLog: string
}

export type IResponsePostOrderPlatformStoreStandardMessageDownloadPage = string

const postOrderPlatformStoreStandardMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreStandardMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreStandardMessageDownloadPage = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformStoreStandardMessageDownloadPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformStoreStandardMessageDownloadPage>(
    prepare(
      postOrderPlatformStoreStandardMessageDownloadPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformStoreStandardMessageDownloadPage.requestConfig =
  postOrderPlatformStoreStandardMessageDownloadPageRequestConfig

export type IRequestPostOrderPlatformStoreStandardMessageBatchPush = {
  storeId: string
  shopCode: string
  platform: string
}[]

export type IResponsePostOrderPlatformStoreStandardMessageBatchPush = string

const postOrderPlatformStoreStandardMessageBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreStandardMessage/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreStandardMessageBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformStoreStandardMessageBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformStoreStandardMessageBatchPush>(
    prepare(
      postOrderPlatformStoreStandardMessageBatchPushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformStoreStandardMessageBatchPush.requestConfig =
  postOrderPlatformStoreStandardMessageBatchPushRequestConfig

export interface IRequestPostOrderSysStdStoreUpdatePushStatus {
  storeIdList: string[]
  platform: string
  pushStatus: string
}

export type IResponsePostOrderSysStdStoreUpdatePushStatus = string

const postOrderSysStdStoreUpdatePushStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdStore/updatePushStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdStoreUpdatePushStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdStoreUpdatePushStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdStoreUpdatePushStatus>(
    prepare(postOrderSysStdStoreUpdatePushStatusRequestConfig, requestData),
    ...args,
  )
}

postOrderSysStdStoreUpdatePushStatus.requestConfig =
  postOrderSysStdStoreUpdatePushStatusRequestConfig

export interface IRequestPostOrderSysStdStoreUpdateLastSyncTime {
  storeIdList?: string[]
  updateAll: boolean
  platform?: string
  shopCode?: string
  lastSyncTime: string
}

export type IResponsePostOrderSysStdStoreUpdateLastSyncTime = string

const postOrderSysStdStoreUpdateLastSyncTimeRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdStore/updateLastSyncTime',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdStoreUpdateLastSyncTime = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdStoreUpdateLastSyncTime,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdStoreUpdateLastSyncTime>(
    prepare(postOrderSysStdStoreUpdateLastSyncTimeRequestConfig, requestData),
    ...args,
  )
}

postOrderSysStdStoreUpdateLastSyncTime.requestConfig =
  postOrderSysStdStoreUpdateLastSyncTimeRequestConfig

export interface IRequestPostOrderPlatformStoreStandardMessagePush {
  storeId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformStoreStandardMessagePush = string

const postOrderPlatformStoreStandardMessagePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreStandardMessage/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreStandardMessagePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformStoreStandardMessagePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformStoreStandardMessagePush>(
    prepare(
      postOrderPlatformStoreStandardMessagePushRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformStoreStandardMessagePush.requestConfig =
  postOrderPlatformStoreStandardMessagePushRequestConfig

export interface IRequestPostOrderPlatformStoreStandardMessageGetSourceJson {
  storeId: string
  shopCode: string
  platform: string
}

export type IResponsePostOrderPlatformStoreStandardMessageGetSourceJson = string

const postOrderPlatformStoreStandardMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreStandardMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreStandardMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformStoreStandardMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformStoreStandardMessageGetSourceJson>(
      prepare(
        postOrderPlatformStoreStandardMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformStoreStandardMessageGetSourceJson.requestConfig =
  postOrderPlatformStoreStandardMessageGetSourceJsonRequestConfig

export interface IRequestGetOrderSysStdStoreQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  storeId?: string
  status?: string
  pushStatus?: string
  pageCount?: string
  createStart?: string
  createEnd?: string
}

export interface IResponseGetOrderSysStdStoreQueryPage {
  total: number
  list: {
    platform: string
    shopCode: string
    retryNum: number
    pushStatus: number
    pushTime: string
    pushErrorMessage: string
    firstPushTime: string
    nextPushTime: string
    updatedAt: string
    createdAt: string
    storeId: string
    storeCode: string
    storeName: string
    outStoreId: string
    status: string
    type: string
    vendorId: string
    vendorName: string
    created: string
    modified: string
    tenantId: number
    platformStatus: string
    lastSyncTime: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdStoreQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/sysStdStore/queryPage',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'updatedAtStart',
    'updatedAtEnd',
    'platform',
    'shopCode',
    'storeId',
    'status',
    'pushStatus',
    'pageCount',
    'createStart',
    'createEnd',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getOrderSysStdStoreQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdStoreQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdStoreQueryPage>(
    prepare(getOrderSysStdStoreQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdStoreQueryPage.requestConfig =
  getOrderSysStdStoreQueryPageRequestConfig

export interface IRequestGetOrderShopsGetDownloadParams {
  platform: string
  shopCode: string
  type: string
  businessType?: string
}

export type IResponseGetOrderShopsGetDownloadParams = {
  code: string
  options: {
    code: string
    name: string
  }[]
  name: string
  type: string
  required: boolean
}[]

const getOrderShopsGetDownloadParamsRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/shops/getDownloadParams',
    method: Method.GET,
    queryNames: ['platform', 'shopCode', 'type', 'businessType'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderShopsGetDownloadParams = /*#__PURE__*/ (
  requestData: IRequestGetOrderShopsGetDownloadParams,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderShopsGetDownloadParams>(
    prepare(getOrderShopsGetDownloadParamsRequestConfig, requestData),
    ...args,
  )
}

getOrderShopsGetDownloadParams.requestConfig =
  getOrderShopsGetDownloadParamsRequestConfig

export interface IRequestGetSystemSysDictGetPlatformDictConfig {
  dictCode: string
  detailCode: string
}

export type IResponseGetSystemSysDictGetPlatformDictConfig = {
  code: string
  text: string
  platform: string
  businessType: string
}[]

const getSystemSysDictGetPlatformDictConfigRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysDict/getPlatformDictConfig',
    method: Method.GET,
    queryNames: ['dictCode', 'detailCode'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysDictGetPlatformDictConfig = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysDictGetPlatformDictConfig,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysDictGetPlatformDictConfig>(
    prepare(getSystemSysDictGetPlatformDictConfigRequestConfig, requestData),
    ...args,
  )
}

getSystemSysDictGetPlatformDictConfig.requestConfig =
  getSystemSysDictGetPlatformDictConfigRequestConfig

export interface IRequestPostOrderCommonPlatformDownload {
  platform: string
  orderNo: string
  businessType: string
}

export type IResponsePostOrderCommonPlatformDownload = string

const postOrderCommonPlatformDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/platform/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonPlatformDownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPlatformDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPlatformDownload>(
    prepare(postOrderCommonPlatformDownloadRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPlatformDownload.requestConfig =
  postOrderCommonPlatformDownloadRequestConfig

export interface IRequestPostOrderCommonPlatformUpdateSyncStatus {
  businessType: string
  platform: string
  orderNos: string[]
}

export type IResponsePostOrderCommonPlatformUpdateSyncStatus = string[]

const postOrderCommonPlatformUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/platform/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonPlatformUpdateSyncStatus = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPlatformUpdateSyncStatus,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPlatformUpdateSyncStatus>(
    prepare(postOrderCommonPlatformUpdateSyncStatusRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPlatformUpdateSyncStatus.requestConfig =
  postOrderCommonPlatformUpdateSyncStatusRequestConfig

export interface IRequestPostOrderCommonPlatformFormatBatch {
  businessType: string
  platform: string
  orderNos: string[]
}

export type IResponsePostOrderCommonPlatformFormatBatch = string[]

const postOrderCommonPlatformFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/platform/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonPlatformFormatBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPlatformFormatBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPlatformFormatBatch>(
    prepare(postOrderCommonPlatformFormatBatchRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPlatformFormatBatch.requestConfig =
  postOrderCommonPlatformFormatBatchRequestConfig

export interface IRequestPostOrderCommonPlatformGetSourceJson {
  platform: string
  orderNo: string
  businessType: string
}

export type IResponsePostOrderCommonPlatformGetSourceJson = string

const postOrderCommonPlatformGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/platform/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonPlatformGetSourceJson = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPlatformGetSourceJson,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPlatformGetSourceJson>(
    prepare(postOrderCommonPlatformGetSourceJsonRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPlatformGetSourceJson.requestConfig =
  postOrderCommonPlatformGetSourceJsonRequestConfig

export interface IRequestPostOrderCommonPlatformFormat {
  businessType: string
  platform: string
  orderNo: string
}

export type IResponsePostOrderCommonPlatformFormat = string[]

const postOrderCommonPlatformFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/platform/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonPlatformFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPlatformFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPlatformFormat>(
    prepare(postOrderCommonPlatformFormatRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPlatformFormat.requestConfig =
  postOrderCommonPlatformFormatRequestConfig

export interface IRequestPostOrderCommonPlatformQueryPage {
  platform?: string
  shopCode?: string
  status?: string
  tid?: string
  businessType?: string
  orderNo?: string
  updatedAtStart?: string
  updatedAtEnd?: string
  pageCount?: boolean
  pageNum: string
  pageSize: string
}

export interface IResponsePostOrderCommonPlatformQueryPage {
  total: number
  list: {
    shopCode: string
    createdAt: string
    orderNo: string
    originContent: string
    numIid: string
    tenantId: string
    originModified: string
    originCreated: string
    platform: string
    syncStatus: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postOrderCommonPlatformQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/platform/queryPage',
    method: Method.POST,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonPlatformQueryPage = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPlatformQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPlatformQueryPage>(
    prepare(postOrderCommonPlatformQueryPageRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPlatformQueryPage.requestConfig =
  postOrderCommonPlatformQueryPageRequestConfig

export interface IRequestPostOrderPlatformInvoiceOriginalMessageDownload {
  platform: string
  shopCode: string
  invoiceId: string
}

export type IResponsePostOrderPlatformInvoiceOriginalMessageDownload = string

const postOrderPlatformInvoiceOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformInvoiceOriginalMessageDownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformInvoiceOriginalMessageDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformInvoiceOriginalMessageDownload>(
    prepare(
      postOrderPlatformInvoiceOriginalMessageDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformInvoiceOriginalMessageDownload.requestConfig =
  postOrderPlatformInvoiceOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderPlatformInvoiceOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  invoiceIds: string[]
}

export type IResponsePostOrderPlatformInvoiceOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformInvoiceOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformInvoiceOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformInvoiceOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformInvoiceOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformInvoiceOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformInvoiceOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformInvoiceOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformInvoiceOriginalMessageGetSourceJson {
  platform: string
  shopCode: string
  invoiceId: string
}

export type IResponsePostOrderPlatformInvoiceOriginalMessageGetSourceJson =
  string

const postOrderPlatformInvoiceOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformInvoiceOriginalMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformInvoiceOriginalMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformInvoiceOriginalMessageGetSourceJson>(
      prepare(
        postOrderPlatformInvoiceOriginalMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformInvoiceOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformInvoiceOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformInvoiceOriginalMessageFormat {
  shopCode: string
  platform: string
  invoiceId: string
}

export type IResponsePostOrderPlatformInvoiceOriginalMessageFormat = string[]

const postOrderPlatformInvoiceOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformInvoiceOriginalMessageFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformInvoiceOriginalMessageFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformInvoiceOriginalMessageFormat>(
    prepare(
      postOrderPlatformInvoiceOriginalMessageFormatRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformInvoiceOriginalMessageFormat.requestConfig =
  postOrderPlatformInvoiceOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformInvoiceOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  syncStatus?: string
  tid?: string
  invoiceId?: string
  originCreatedStart?: string
  originCreatedEnd?: string
  originModifiedStart?: string
  originModifiedEnd?: string
  createStart: string
  createEnd: string
}

export interface IResponseGetOrderPlatformInvoiceOriginalMessageQueryPage {
  total: number
  list: {
    shopCode: string
    orderNo: string
    updateTime: string
    platform: string
    tid: string
    createdAt: string
    originContent: string
    createTime: string
    tenantId: string
    invoiceId: string
    originModified: string
    originCreated: string
    syncStatus: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformInvoiceOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'syncStatus',
      'tid',
      'invoiceId',
      'originCreatedStart',
      'originCreatedEnd',
      'originModifiedStart',
      'originModifiedEnd',
      'createStart',
      'createEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformInvoiceOriginalMessageQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformInvoiceOriginalMessageQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformInvoiceOriginalMessageQueryPage>(
    prepare(
      getOrderPlatformInvoiceOriginalMessageQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderPlatformInvoiceOriginalMessageQueryPage.requestConfig =
  getOrderPlatformInvoiceOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderPlatformInvoiceOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  invoiceIds: string[]
}

export type IResponsePostOrderPlatformInvoiceOriginalMessageFormatBatch =
  string[]

const postOrderPlatformInvoiceOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformInvoiceOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformInvoiceOriginalMessageFormatBatch =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformInvoiceOriginalMessageFormatBatch,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformInvoiceOriginalMessageFormatBatch>(
      prepare(
        postOrderPlatformInvoiceOriginalMessageFormatBatchRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformInvoiceOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformInvoiceOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformItemOriginalMessageGetRdsDetail {
  platform: string
  shopCode: string
  numIid?: string
}

export interface IResponsePostOrderPlatformItemOriginalMessageGetRdsDetail {
  billId: string
  sellerNick: string
  created: string
  modified: string
  jdpResponse: string
  jdpCreated: string
  jdpModified: string
}

const postOrderPlatformItemOriginalMessageGetRdsDetailRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemOriginalMessage/getRdsDetail',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemOriginalMessageGetRdsDetail = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformItemOriginalMessageGetRdsDetail,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformItemOriginalMessageGetRdsDetail>(
    prepare(
      postOrderPlatformItemOriginalMessageGetRdsDetailRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformItemOriginalMessageGetRdsDetail.requestConfig =
  postOrderPlatformItemOriginalMessageGetRdsDetailRequestConfig

export interface IRequestPostOrderPlatformItemOriginalMessageDownload {
  numIid: string
  platform: string
  shopCode: string
  storeId?: string
}

export type IResponsePostOrderPlatformItemOriginalMessageDownload = string

const postOrderPlatformItemOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemOriginalMessageDownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformItemOriginalMessageDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformItemOriginalMessageDownload>(
    prepare(
      postOrderPlatformItemOriginalMessageDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformItemOriginalMessageDownload.requestConfig =
  postOrderPlatformItemOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderCommonPlatformFulldownload {
  businessType: string
  platform: string
  shopCode: string
  storeId: string
}

export type IResponsePostOrderCommonPlatformFulldownload = string

const postOrderCommonPlatformFulldownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/platform/fulldownload',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonPlatformFulldownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPlatformFulldownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPlatformFulldownload>(
    prepare(postOrderCommonPlatformFulldownloadRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPlatformFulldownload.requestConfig =
  postOrderCommonPlatformFulldownloadRequestConfig

export interface IRequestPostOrderPlatformItemOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  numIids: string[]
}

export type IResponsePostOrderPlatformItemOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformItemOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformItemOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformItemOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformItemOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformItemOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformItemOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformItemOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  storeId?: string
  numIids: string[]
}

export type IResponsePostOrderPlatformItemOriginalMessageFormatBatch = string[]

const postOrderPlatformItemOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemOriginalMessageFormatBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformItemOriginalMessageFormatBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformItemOriginalMessageFormatBatch>(
    prepare(
      postOrderPlatformItemOriginalMessageFormatBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformItemOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformItemOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformItemOriginalMessageGetSourceJson {
  platform: string
  shopCode: string
  numIid: string
  storeId?: string
}

export type IResponsePostOrderPlatformItemOriginalMessageGetSourceJson = string

const postOrderPlatformItemOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemOriginalMessageGetSourceJson = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformItemOriginalMessageGetSourceJson,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformItemOriginalMessageGetSourceJson>(
    prepare(
      postOrderPlatformItemOriginalMessageGetSourceJsonRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformItemOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformItemOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformItemOriginalMessageFormat {
  shopCode: string
  platform: string
  numIid: string
  storeId?: string
}

export type IResponsePostOrderPlatformItemOriginalMessageFormat = string[]

const postOrderPlatformItemOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformItemOriginalMessageFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformItemOriginalMessageFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformItemOriginalMessageFormat>(
    prepare(
      postOrderPlatformItemOriginalMessageFormatRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformItemOriginalMessageFormat.requestConfig =
  postOrderPlatformItemOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformItemOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  syncStatus?: string
  numIid: string
  storeId?: string
  originCreatedStart?: string
  originCreatedEnd?: string
  originModifiedStart?: string
  originModifiedEnd?: string
}

export interface IResponseGetOrderPlatformItemOriginalMessageQueryPage {
  total: number
  list: {
    shopCode: string
    createdAt: string
    orderNo: string
    originContent: string
    numIid: string
    tenantId: string
    originModified: string
    originCreated: string
    platform: string
    storeId: string
    syncStatus: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformItemOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformItemOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'syncStatus',
      'numIid',
      'storeId',
      'originCreatedStart',
      'originCreatedEnd',
      'originModifiedStart',
      'originModifiedEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformItemOriginalMessageQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformItemOriginalMessageQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformItemOriginalMessageQueryPage>(
    prepare(
      getOrderPlatformItemOriginalMessageQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderPlatformItemOriginalMessageQueryPage.requestConfig =
  getOrderPlatformItemOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderPlatformRecycleTradeOriginalMessageDownload {
  platform: string
  shopCode: string
  tid: string
}

export type IResponsePostOrderPlatformRecycleTradeOriginalMessageDownload =
  string

const postOrderPlatformRecycleTradeOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRecycleTradeOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRecycleTradeOriginalMessageDownload =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRecycleTradeOriginalMessageDownload,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRecycleTradeOriginalMessageDownload>(
      prepare(
        postOrderPlatformRecycleTradeOriginalMessageDownloadRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRecycleTradeOriginalMessageDownload.requestConfig =
  postOrderPlatformRecycleTradeOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderPlatformRecycleTradeOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  tids: string[]
}

export type IResponsePostOrderPlatformRecycleTradeOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformRecycleTradeOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRecycleTradeOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRecycleTradeOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRecycleTradeOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRecycleTradeOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformRecycleTradeOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRecycleTradeOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformRecycleTradeOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformRecycleTradeOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  tids: string[]
}

export type IResponsePostOrderPlatformRecycleTradeOriginalMessageFormatBatch =
  string[]

const postOrderPlatformRecycleTradeOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRecycleTradeOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRecycleTradeOriginalMessageFormatBatch =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRecycleTradeOriginalMessageFormatBatch,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRecycleTradeOriginalMessageFormatBatch>(
      prepare(
        postOrderPlatformRecycleTradeOriginalMessageFormatBatchRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRecycleTradeOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformRecycleTradeOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformRecycleTradeOriginalMessageGetSourceJson {
  platform: string
  shopCode: string
  tid: string
}

export type IResponsePostOrderPlatformRecycleTradeOriginalMessageGetSourceJson =
  string

const postOrderPlatformRecycleTradeOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRecycleTradeOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRecycleTradeOriginalMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRecycleTradeOriginalMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRecycleTradeOriginalMessageGetSourceJson>(
      prepare(
        postOrderPlatformRecycleTradeOriginalMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRecycleTradeOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformRecycleTradeOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformRecycleTradeOriginalMessageFormat {
  shopCode: string
  platform: string
  tid: string
}

export type IResponsePostOrderPlatformRecycleTradeOriginalMessageFormat =
  string[]

const postOrderPlatformRecycleTradeOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRecycleTradeOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRecycleTradeOriginalMessageFormat =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRecycleTradeOriginalMessageFormat,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRecycleTradeOriginalMessageFormat>(
      prepare(
        postOrderPlatformRecycleTradeOriginalMessageFormatRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRecycleTradeOriginalMessageFormat.requestConfig =
  postOrderPlatformRecycleTradeOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformRecycleTradeOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  syncStatus?: string
  tid?: string
  originCreatedStart?: string
  originCreatedEnd?: string
  originModifiedStart?: string
  originModifiedEnd?: string
  createStart?: string
  createEnd?: string
}

export interface IResponseGetOrderPlatformRecycleTradeOriginalMessageQueryPage {
  total: number
  list: {
    shopCode: string
    platform: string
    createdAt: string
    updatedAt: string
    showLog: boolean
    tid: string
    status: string
    type: string
    syncStatus: number
    originCreated: string
    originModified: string
    createTime: string
    updateTime: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformRecycleTradeOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRecycleTradeOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'syncStatus',
      'tid',
      'originCreatedStart',
      'originCreatedEnd',
      'originModifiedStart',
      'originModifiedEnd',
      'createStart',
      'createEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformRecycleTradeOriginalMessageQueryPage =
  /*#__PURE__*/ (
    requestData: IRequestGetOrderPlatformRecycleTradeOriginalMessageQueryPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetOrderPlatformRecycleTradeOriginalMessageQueryPage>(
      prepare(
        getOrderPlatformRecycleTradeOriginalMessageQueryPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getOrderPlatformRecycleTradeOriginalMessageQueryPage.requestConfig =
  getOrderPlatformRecycleTradeOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderPlatformUpdateAddrOriginalMessageDownload {
  platform: string
  shopCode: string
  tid: string
}

export type IResponsePostOrderPlatformUpdateAddrOriginalMessageDownload = string

const postOrderPlatformUpdateAddrOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformUpdateAddrOriginalMessageDownload =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformUpdateAddrOriginalMessageDownload,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformUpdateAddrOriginalMessageDownload>(
      prepare(
        postOrderPlatformUpdateAddrOriginalMessageDownloadRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformUpdateAddrOriginalMessageDownload.requestConfig =
  postOrderPlatformUpdateAddrOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderPlatformUpdateAddrOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  tids: string[]
}

export type IResponsePostOrderPlatformUpdateAddrOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformUpdateAddrOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformUpdateAddrOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformUpdateAddrOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformUpdateAddrOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformUpdateAddrOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformUpdateAddrOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformUpdateAddrOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformUpdateAddrOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  tids: string[]
}

export type IResponsePostOrderPlatformUpdateAddrOriginalMessageFormatBatch =
  string[]

const postOrderPlatformUpdateAddrOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformUpdateAddrOriginalMessageFormatBatch =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformUpdateAddrOriginalMessageFormatBatch,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformUpdateAddrOriginalMessageFormatBatch>(
      prepare(
        postOrderPlatformUpdateAddrOriginalMessageFormatBatchRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformUpdateAddrOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformUpdateAddrOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformUpdateAddrOriginalMessageGetSourceJson {
  platform: string
  shopCode: string
  tid: string
}

export type IResponsePostOrderPlatformUpdateAddrOriginalMessageGetSourceJson =
  string

const postOrderPlatformUpdateAddrOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformUpdateAddrOriginalMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformUpdateAddrOriginalMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformUpdateAddrOriginalMessageGetSourceJson>(
      prepare(
        postOrderPlatformUpdateAddrOriginalMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformUpdateAddrOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformUpdateAddrOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformUpdateAddrOriginalMessageFormat {
  shopCode: string
  platform: string
  tid: string
}

export type IResponsePostOrderPlatformUpdateAddrOriginalMessageFormat = string[]

const postOrderPlatformUpdateAddrOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformUpdateAddrOriginalMessageFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformUpdateAddrOriginalMessageFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformUpdateAddrOriginalMessageFormat>(
    prepare(
      postOrderPlatformUpdateAddrOriginalMessageFormatRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformUpdateAddrOriginalMessageFormat.requestConfig =
  postOrderPlatformUpdateAddrOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformUpdateAddrOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  syncStatus?: string
  tid?: string
  approveId?: string
  originCreatedStart?: string
  originCreatedEnd?: string
  originModifiedStart?: string
  originModifiedEnd?: string
  CreateStart: string
  CreateEnd: string
}

export interface IResponseGetOrderPlatformUpdateAddrOriginalMessageQueryPage {
  total: number
  list: {
    shopCode: string
    platform: string
    createdAt: string
    updatedAt: string
    showLog: boolean
    tid: string
    syncStatus: number
    originCreated: string
    originModified: string
    createTime: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformUpdateAddrOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformUpdateAddrOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'syncStatus',
      'tid',
      'approveId',
      'originCreatedStart',
      'originCreatedEnd',
      'originModifiedStart',
      'originModifiedEnd',
      'CreateStart',
      'CreateEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformUpdateAddrOriginalMessageQueryPage =
  /*#__PURE__*/ (
    requestData: IRequestGetOrderPlatformUpdateAddrOriginalMessageQueryPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetOrderPlatformUpdateAddrOriginalMessageQueryPage>(
      prepare(
        getOrderPlatformUpdateAddrOriginalMessageQueryPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getOrderPlatformUpdateAddrOriginalMessageQueryPage.requestConfig =
  getOrderPlatformUpdateAddrOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderCommonPlatformFulldownloadStore {
  platform: string
  shopCode: string
}

export type IResponsePostOrderCommonPlatformFulldownloadStore = string

const postOrderCommonPlatformFulldownloadStoreRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/common/platform/fulldownloadStore',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderCommonPlatformFulldownloadStore = /*#__PURE__*/ (
  requestData: IRequestPostOrderCommonPlatformFulldownloadStore,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderCommonPlatformFulldownloadStore>(
    prepare(postOrderCommonPlatformFulldownloadStoreRequestConfig, requestData),
    ...args,
  )
}

postOrderCommonPlatformFulldownloadStore.requestConfig =
  postOrderCommonPlatformFulldownloadStoreRequestConfig

export interface IRequestPostOrderPlatformExchangeOriginalMessageDownload {
  platform: string
  shopCode: string
  disputeId: string
}

export type IResponsePostOrderPlatformExchangeOriginalMessageDownload = string

const postOrderPlatformExchangeOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformExchangeOriginalMessageDownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformExchangeOriginalMessageDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformExchangeOriginalMessageDownload>(
    prepare(
      postOrderPlatformExchangeOriginalMessageDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformExchangeOriginalMessageDownload.requestConfig =
  postOrderPlatformExchangeOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderPlatformExchangeOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  disputeIds: string[]
}

export type IResponsePostOrderPlatformExchangeOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformExchangeOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformExchangeOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformExchangeOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformExchangeOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformExchangeOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformExchangeOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformExchangeOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformExchangeOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  disputeIds: string[]
}

export type IResponsePostOrderPlatformExchangeOriginalMessageFormatBatch =
  string[]

const postOrderPlatformExchangeOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformExchangeOriginalMessageFormatBatch =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformExchangeOriginalMessageFormatBatch,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformExchangeOriginalMessageFormatBatch>(
      prepare(
        postOrderPlatformExchangeOriginalMessageFormatBatchRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformExchangeOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformExchangeOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformExchangeOriginalMessageGetSourceJson {
  platform: string
  shopCode: string
  disputeId: string
}

export type IResponsePostOrderPlatformExchangeOriginalMessageGetSourceJson =
  string

const postOrderPlatformExchangeOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformExchangeOriginalMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformExchangeOriginalMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformExchangeOriginalMessageGetSourceJson>(
      prepare(
        postOrderPlatformExchangeOriginalMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformExchangeOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformExchangeOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformExchangeOriginalMessageFormat {
  shopCode: string
  platform: string
  disputeId: string
}

export type IResponsePostOrderPlatformExchangeOriginalMessageFormat = string[]

const postOrderPlatformExchangeOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformExchangeOriginalMessageFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformExchangeOriginalMessageFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformExchangeOriginalMessageFormat>(
    prepare(
      postOrderPlatformExchangeOriginalMessageFormatRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformExchangeOriginalMessageFormat.requestConfig =
  postOrderPlatformExchangeOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformExchangeOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  syncStatus?: string
  tid: string
  disputeId?: string
  createStart?: string
  createEnd?: string
  updatedAtStart?: string
  updatedAtEnd?: string
  originCreatedStart?: string
  originCreatedEnd?: string
  originModifiedStart?: string
  originModifiedEnd?: string
}

export interface IResponseGetOrderPlatformExchangeOriginalMessageQueryPage {
  total: number
  list: {
    sellerNick: string
    shopCode: string
    orderNo: string
    updateTime: string
    platform: string
    tid: string
    createdAt: string
    originContent: string
    createTime: string
    disputeId: string
    tenantId: string
    originModified: string
    originCreated: string
    syncStatus: string
    status: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformExchangeOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformExchangeOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'syncStatus',
      'tid',
      'disputeId',
      'createStart',
      'createEnd',
      'updatedAtStart',
      'updatedAtEnd',
      'originCreatedStart',
      'originCreatedEnd',
      'originModifiedStart',
      'originModifiedEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformExchangeOriginalMessageQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformExchangeOriginalMessageQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformExchangeOriginalMessageQueryPage>(
    prepare(
      getOrderPlatformExchangeOriginalMessageQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderPlatformExchangeOriginalMessageQueryPage.requestConfig =
  getOrderPlatformExchangeOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderPlatformTradeOriginalMessageGetRdsDetail {
  platform: string
  shopCode: string
  tid?: string
}

export interface IResponsePostOrderPlatformTradeOriginalMessageGetRdsDetail {
  billId: string
  sellerNick: string
  created: string
  modified: string
  jdpResponse: string
  jdpCreated: string
  jdpModified: string
}

const postOrderPlatformTradeOriginalMessageGetRdsDetailRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeOriginalMessage/getRdsDetail',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeOriginalMessageGetRdsDetail = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformTradeOriginalMessageGetRdsDetail,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformTradeOriginalMessageGetRdsDetail>(
    prepare(
      postOrderPlatformTradeOriginalMessageGetRdsDetailRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformTradeOriginalMessageGetRdsDetail.requestConfig =
  postOrderPlatformTradeOriginalMessageGetRdsDetailRequestConfig

export interface IRequestPostOrderPlatformTradeOriginalMessageDownload {
  platform: string
  shopCode: string
  tid: string
}

export type IResponsePostOrderPlatformTradeOriginalMessageDownload = string

const postOrderPlatformTradeOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeOriginalMessageDownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformTradeOriginalMessageDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformTradeOriginalMessageDownload>(
    prepare(
      postOrderPlatformTradeOriginalMessageDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformTradeOriginalMessageDownload.requestConfig =
  postOrderPlatformTradeOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderPlatformTradeOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  tids: string[]
}

export type IResponsePostOrderPlatformTradeOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformTradeOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformTradeOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformTradeOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformTradeOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformTradeOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformTradeOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformTradeOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  tids: string[]
}

export type IResponsePostOrderPlatformTradeOriginalMessageFormatBatch = string[]

const postOrderPlatformTradeOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeOriginalMessageFormatBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformTradeOriginalMessageFormatBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformTradeOriginalMessageFormatBatch>(
    prepare(
      postOrderPlatformTradeOriginalMessageFormatBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformTradeOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformTradeOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformTradeOriginalMessageGetSourceJson {
  platform: string
  tid: string
  shopCode: string
}

export type IResponsePostOrderPlatformTradeOriginalMessageGetSourceJson = string

const postOrderPlatformTradeOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeOriginalMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformTradeOriginalMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformTradeOriginalMessageGetSourceJson>(
      prepare(
        postOrderPlatformTradeOriginalMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformTradeOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformTradeOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformTradeOriginalMessageFormat {
  shopCode: string
  platform: string
  tid: string
}

export type IResponsePostOrderPlatformTradeOriginalMessageFormat = string[]

const postOrderPlatformTradeOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformTradeOriginalMessageFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformTradeOriginalMessageFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformTradeOriginalMessageFormat>(
    prepare(
      postOrderPlatformTradeOriginalMessageFormatRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformTradeOriginalMessageFormat.requestConfig =
  postOrderPlatformTradeOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformTradeOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  updatedAtStart?: string
  updatedAtEnd?: string
  platform?: string
  shopCode?: string
  tid?: string
  createStart?: string
  createEnd?: string
  syncStatus?: string
  originCreatedStart?: string
  originCreatedEnd?: string
  originModifiedStart?: string
  originModifiedEnd?: string
  pageCount?: string
}

export interface IResponseGetOrderPlatformTradeOriginalMessageQueryPage {
  total: number
  list: {
    shopCode: string
    createdAt: string
    orderNo: string
    originContent: string
    createTime: string
    tenantId: string
    updateTime: string
    platform: string
    tid: string
    syncStatus: string
    status: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformTradeOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformTradeOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'updatedAtStart',
      'updatedAtEnd',
      'platform',
      'shopCode',
      'tid',
      'createStart',
      'createEnd',
      'syncStatus',
      'originCreatedStart',
      'originCreatedEnd',
      'originModifiedStart',
      'originModifiedEnd',
      'pageCount',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformTradeOriginalMessageQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformTradeOriginalMessageQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformTradeOriginalMessageQueryPage>(
    prepare(
      getOrderPlatformTradeOriginalMessageQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderPlatformTradeOriginalMessageQueryPage.requestConfig =
  getOrderPlatformTradeOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderPlatformReviewsOriginalMessageDownload {
  platform: string
  commentId: string
  shopCode: string
}

export type IResponsePostOrderPlatformReviewsOriginalMessageDownload = string

const postOrderPlatformReviewsOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReviewsOriginalMessageDownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformReviewsOriginalMessageDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformReviewsOriginalMessageDownload>(
    prepare(
      postOrderPlatformReviewsOriginalMessageDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformReviewsOriginalMessageDownload.requestConfig =
  postOrderPlatformReviewsOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderPlatformReviewsOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  commentIds: string[]
}

export type IResponsePostOrderPlatformReviewsOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformReviewsOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReviewsOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReviewsOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReviewsOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformReviewsOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReviewsOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformReviewsOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformReviewsOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  commentIds: string[]
}

export type IResponsePostOrderPlatformReviewsOriginalMessageFormatBatch =
  string[]

const postOrderPlatformReviewsOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReviewsOriginalMessageFormatBatch =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReviewsOriginalMessageFormatBatch,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReviewsOriginalMessageFormatBatch>(
      prepare(
        postOrderPlatformReviewsOriginalMessageFormatBatchRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReviewsOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformReviewsOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformReviewsOriginalMessageGetSourceJson {
  platform: string
  commentId: string
  shopCode: string
}

export type IResponsePostOrderPlatformReviewsOriginalMessageGetSourceJson =
  string

const postOrderPlatformReviewsOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReviewsOriginalMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReviewsOriginalMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReviewsOriginalMessageGetSourceJson>(
      prepare(
        postOrderPlatformReviewsOriginalMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReviewsOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformReviewsOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformReviewsOriginalMessageFormat {
  shopCode: string
  platform: string
  commentId: string
}

export type IResponsePostOrderPlatformReviewsOriginalMessageFormat = string[]

const postOrderPlatformReviewsOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReviewsOriginalMessageFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformReviewsOriginalMessageFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformReviewsOriginalMessageFormat>(
    prepare(
      postOrderPlatformReviewsOriginalMessageFormatRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformReviewsOriginalMessageFormat.requestConfig =
  postOrderPlatformReviewsOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformReviewsOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  syncStatus?: string
  tid?: string
  commentId?: string
  createStart?: string
  createEnd?: string
  updatedAtStart?: string
  updatedAtEnd?: string
}

export interface IResponseGetOrderPlatformReviewsOriginalMessageQueryPage {
  total: number
  list: {
    shopCode: string
    createdAt: string
    orderNo: string
    originContent: string
    createTime: string
    tenantId: string
    commentId: string
    updateTime: string
    platform: string
    tid: string
    syncStatus: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformReviewsOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReviewsOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'syncStatus',
      'tid',
      'commentId',
      'createStart',
      'createEnd',
      'updatedAtStart',
      'updatedAtEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformReviewsOriginalMessageQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformReviewsOriginalMessageQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformReviewsOriginalMessageQueryPage>(
    prepare(
      getOrderPlatformReviewsOriginalMessageQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderPlatformReviewsOriginalMessageQueryPage.requestConfig =
  getOrderPlatformReviewsOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderPlatformRefundOriginalMessageGetRdsDetail {
  platform: string
  shopCode: string
  refundId?: string
}

export interface IResponsePostOrderPlatformRefundOriginalMessageGetRdsDetail {
  billId: string
  sellerNick: string
  created: string
  modified: string
  jdpResponse: string
  jdpCreated: string
  jdpModified: string
}

const postOrderPlatformRefundOriginalMessageGetRdsDetailRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundOriginalMessage/getRdsDetail',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundOriginalMessageGetRdsDetail =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRefundOriginalMessageGetRdsDetail,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRefundOriginalMessageGetRdsDetail>(
      prepare(
        postOrderPlatformRefundOriginalMessageGetRdsDetailRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRefundOriginalMessageGetRdsDetail.requestConfig =
  postOrderPlatformRefundOriginalMessageGetRdsDetailRequestConfig

export interface IRequestPostOrderPlatformRefundOriginalMessageDownload {
  platform: string
  refundId: string
  shopCode: string
}

export type IResponsePostOrderPlatformRefundOriginalMessageDownload = string

const postOrderPlatformRefundOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundOriginalMessageDownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformRefundOriginalMessageDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformRefundOriginalMessageDownload>(
    prepare(
      postOrderPlatformRefundOriginalMessageDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformRefundOriginalMessageDownload.requestConfig =
  postOrderPlatformRefundOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderPlatformRefundOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  refundId?: string
  showLog: string
  createStart?: string
  createEnd?: string
  pageNum?: string
}

export type IResponsePostOrderPlatformRefundOriginalMessageDownloadPage = string

const postOrderPlatformRefundOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundOriginalMessageDownloadPage =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRefundOriginalMessageDownloadPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRefundOriginalMessageDownloadPage>(
      prepare(
        postOrderPlatformRefundOriginalMessageDownloadPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRefundOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformRefundOriginalMessageDownloadPageRequestConfig

export interface IRequestPostOrderPlatformRefundOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  refundIds: string[]
}

export type IResponsePostOrderPlatformRefundOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformRefundOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRefundOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRefundOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformRefundOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRefundOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformRefundOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformRefundOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  refundIds: string[]
}

export type IResponsePostOrderPlatformRefundOriginalMessageFormatBatch =
  string[]

const postOrderPlatformRefundOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundOriginalMessageFormatBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformRefundOriginalMessageFormatBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformRefundOriginalMessageFormatBatch>(
    prepare(
      postOrderPlatformRefundOriginalMessageFormatBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformRefundOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformRefundOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformRefundOriginalMessageGetSourceJson {
  platform: string
  refundId: string
  shopCode: string
}

export type IResponsePostOrderPlatformRefundOriginalMessageGetSourceJson =
  string

const postOrderPlatformRefundOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundOriginalMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformRefundOriginalMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformRefundOriginalMessageGetSourceJson>(
      prepare(
        postOrderPlatformRefundOriginalMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformRefundOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformRefundOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformRefundOriginalMessageFormat {
  shopCode: string
  platform: string
  refundId: string
}

export type IResponsePostOrderPlatformRefundOriginalMessageFormat = string[]

const postOrderPlatformRefundOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRefundOriginalMessageFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformRefundOriginalMessageFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformRefundOriginalMessageFormat>(
    prepare(
      postOrderPlatformRefundOriginalMessageFormatRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformRefundOriginalMessageFormat.requestConfig =
  postOrderPlatformRefundOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformRefundOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  syncStatus?: string
  tid: string
  refundId?: string
  createStart?: string
  createEnd?: string
  updatedAtStart?: string
  updatedAtEnd?: string
  originCreatedStart?: string
  originCreatedEnd?: string
  originModifiedStart?: string
  originModifiedEnd?: string
}

export interface IResponseGetOrderPlatformRefundOriginalMessageQueryPage {
  total: number
  list: {
    sellerNick: string
    shopCode: string
    sourceRds: string
    orderNo: string
    updateTime: string
    platform: string
    tid: string
    hasGoodReturn: string
    originContent: string
    createTime: string
    tenantId: string
    originModified: string
    originCreated: string
    refundId: string
    syncStatus: string
    status: string
    updatedAt: string
    oid: string
    createdAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformRefundOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRefundOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'syncStatus',
      'tid',
      'refundId',
      'createStart',
      'createEnd',
      'updatedAtStart',
      'updatedAtEnd',
      'originCreatedStart',
      'originCreatedEnd',
      'originModifiedStart',
      'originModifiedEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformRefundOriginalMessageQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformRefundOriginalMessageQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformRefundOriginalMessageQueryPage>(
    prepare(
      getOrderPlatformRefundOriginalMessageQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderPlatformRefundOriginalMessageQueryPage.requestConfig =
  getOrderPlatformRefundOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderPlatformReturnOriginalMessageDownload {
  platform: string
  shopCode: string
  refundId: string
}

export type IResponsePostOrderPlatformReturnOriginalMessageDownload = string

const postOrderPlatformReturnOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnOriginalMessageDownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformReturnOriginalMessageDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformReturnOriginalMessageDownload>(
    prepare(
      postOrderPlatformReturnOriginalMessageDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformReturnOriginalMessageDownload.requestConfig =
  postOrderPlatformReturnOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderPlatformReturnOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  refundIds: string[]
}

export type IResponsePostOrderPlatformReturnOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformReturnOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReturnOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReturnOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformReturnOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReturnOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformReturnOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformReturnOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  refundId?: string
  showLog: string
  createStart?: string
  createEnd?: string
  pageNum?: string
}

export type IResponsePostOrderPlatformReturnOriginalMessageDownloadPage = string

const postOrderPlatformReturnOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnOriginalMessageDownloadPage =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReturnOriginalMessageDownloadPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReturnOriginalMessageDownloadPage>(
      prepare(
        postOrderPlatformReturnOriginalMessageDownloadPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReturnOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformReturnOriginalMessageDownloadPageRequestConfig

export interface IRequestPostOrderPlatformReturnOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  refundIds: string[]
}

export type IResponsePostOrderPlatformReturnOriginalMessageFormatBatch =
  string[]

const postOrderPlatformReturnOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnOriginalMessageFormatBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformReturnOriginalMessageFormatBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformReturnOriginalMessageFormatBatch>(
    prepare(
      postOrderPlatformReturnOriginalMessageFormatBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformReturnOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformReturnOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformReturnOriginalMessageGetSourceJson {
  platform: string
  refundId: string
  shopCode: string
}

export type IResponsePostOrderPlatformReturnOriginalMessageGetSourceJson =
  string

const postOrderPlatformReturnOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnOriginalMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformReturnOriginalMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformReturnOriginalMessageGetSourceJson>(
      prepare(
        postOrderPlatformReturnOriginalMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformReturnOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformReturnOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformReturnOriginalMessageFormat {
  shopCode: string
  platform: string
  refundId: string
}

export type IResponsePostOrderPlatformReturnOriginalMessageFormat = string[]

const postOrderPlatformReturnOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformReturnOriginalMessageFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformReturnOriginalMessageFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformReturnOriginalMessageFormat>(
    prepare(
      postOrderPlatformReturnOriginalMessageFormatRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformReturnOriginalMessageFormat.requestConfig =
  postOrderPlatformReturnOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformReturnOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  syncStatus?: string
  tid: string
  refundId?: string
  createStart?: string
  createEnd?: string
  updatedAtStart?: string
  updatedAtEnd?: string
  originCreatedStart?: string
  originCreatedEnd?: string
  originModifiedStart?: string
  originModifiedEnd?: string
}

export interface IResponseGetOrderPlatformReturnOriginalMessageQueryPage {
  total: number
  list: {
    shopCode: string
    orderNo: string
    rightsStatus: string
    rightsType: string
    pid: string
    updateTime: string
    oid: string
    storeId: string
    processStoreId: string
    platform: string
    tid: string
    createdAt: string
    originContent: string
    createTime: string
    tenantId: string
    originModified: string
    originCreated: string
    refundId: string
    syncStatus: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformReturnOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformReturnOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'syncStatus',
      'tid',
      'refundId',
      'createStart',
      'createEnd',
      'updatedAtStart',
      'updatedAtEnd',
      'originCreatedStart',
      'originCreatedEnd',
      'originModifiedStart',
      'originModifiedEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformReturnOriginalMessageQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformReturnOriginalMessageQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformReturnOriginalMessageQueryPage>(
    prepare(
      getOrderPlatformReturnOriginalMessageQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderPlatformReturnOriginalMessageQueryPage.requestConfig =
  getOrderPlatformReturnOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderPlatformStoreOriginalMessageDownload {
  platform: string
  shopCode: string
  storeId: string
}

export type IResponsePostOrderPlatformStoreOriginalMessageDownload = string

const postOrderPlatformStoreOriginalMessageDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreOriginalMessage/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreOriginalMessageDownload = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformStoreOriginalMessageDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformStoreOriginalMessageDownload>(
    prepare(
      postOrderPlatformStoreOriginalMessageDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformStoreOriginalMessageDownload.requestConfig =
  postOrderPlatformStoreOriginalMessageDownloadRequestConfig

export interface IRequestPostOrderPlatformStoreOriginalMessageDownloadPage {
  platform: string
  shopCode: string
  storeId?: string
  showLog: string
  createStart?: string
  createEnd?: string
  pageNum?: string
}

export type IResponsePostOrderPlatformStoreOriginalMessageDownloadPage = string

const postOrderPlatformStoreOriginalMessageDownloadPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreOriginalMessage/downloadPage',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreOriginalMessageDownloadPage = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformStoreOriginalMessageDownloadPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformStoreOriginalMessageDownloadPage>(
    prepare(
      postOrderPlatformStoreOriginalMessageDownloadPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformStoreOriginalMessageDownloadPage.requestConfig =
  postOrderPlatformStoreOriginalMessageDownloadPageRequestConfig

export interface IRequestPostOrderPlatformStoreOriginalMessageUpdateSyncStatus {
  syncStatus: number
  platform: string
  storeIds: string[]
}

export type IResponsePostOrderPlatformStoreOriginalMessageUpdateSyncStatus =
  string[]

const postOrderPlatformStoreOriginalMessageUpdateSyncStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreOriginalMessage/updateSyncStatus',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreOriginalMessageUpdateSyncStatus =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformStoreOriginalMessageUpdateSyncStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformStoreOriginalMessageUpdateSyncStatus>(
      prepare(
        postOrderPlatformStoreOriginalMessageUpdateSyncStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformStoreOriginalMessageUpdateSyncStatus.requestConfig =
  postOrderPlatformStoreOriginalMessageUpdateSyncStatusRequestConfig

export interface IRequestPostOrderPlatformStoreOriginalMessageFormatBatch {
  syncStatus: string
  platform: string
  storeIds: string[]
}

export type IResponsePostOrderPlatformStoreOriginalMessageFormatBatch = string[]

const postOrderPlatformStoreOriginalMessageFormatBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreOriginalMessage/formatBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreOriginalMessageFormatBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformStoreOriginalMessageFormatBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformStoreOriginalMessageFormatBatch>(
    prepare(
      postOrderPlatformStoreOriginalMessageFormatBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformStoreOriginalMessageFormatBatch.requestConfig =
  postOrderPlatformStoreOriginalMessageFormatBatchRequestConfig

export interface IRequestPostOrderPlatformStoreOriginalMessageGetSourceJson {
  platform: string
  shopCode: string
  storeId: string
}

export type IResponsePostOrderPlatformStoreOriginalMessageGetSourceJson = string

const postOrderPlatformStoreOriginalMessageGetSourceJsonRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreOriginalMessage/getSourceJson',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreOriginalMessageGetSourceJson =
  /*#__PURE__*/ (
    requestData: IRequestPostOrderPlatformStoreOriginalMessageGetSourceJson,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostOrderPlatformStoreOriginalMessageGetSourceJson>(
      prepare(
        postOrderPlatformStoreOriginalMessageGetSourceJsonRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postOrderPlatformStoreOriginalMessageGetSourceJson.requestConfig =
  postOrderPlatformStoreOriginalMessageGetSourceJsonRequestConfig

export interface IRequestPostOrderPlatformStoreOriginalMessageFormat {
  shopCode: string
  platform: string
  storeId: string
}

export type IResponsePostOrderPlatformStoreOriginalMessageFormat = string[]

const postOrderPlatformStoreOriginalMessageFormatRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreOriginalMessage/format',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformStoreOriginalMessageFormat = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformStoreOriginalMessageFormat,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformStoreOriginalMessageFormat>(
    prepare(
      postOrderPlatformStoreOriginalMessageFormatRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformStoreOriginalMessageFormat.requestConfig =
  postOrderPlatformStoreOriginalMessageFormatRequestConfig

export interface IRequestGetOrderPlatformStoreOriginalMessageQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  syncStatus?: string
  storeId?: string
  originCreatedStart?: string
  originCreatedEnd?: string
  originModifiedStart?: string
  originModifiedEnd?: string
}

export interface IResponseGetOrderPlatformStoreOriginalMessageQueryPage {
  total: number
  list: {
    shopCode: string
    orderNo: string
    updateTime: string
    storeId: string
    platform: string
    createdAt: string
    originContent: string
    createTime: string
    tenantId: string
    originModified: string
    originCreated: string
    syncStatus: string
    storeCode: string
    status: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformStoreOriginalMessageQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformStoreOriginalMessage/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'syncStatus',
      'storeId',
      'originCreatedStart',
      'originCreatedEnd',
      'originModifiedStart',
      'originModifiedEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformStoreOriginalMessageQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformStoreOriginalMessageQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformStoreOriginalMessageQueryPage>(
    prepare(
      getOrderPlatformStoreOriginalMessageQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderPlatformStoreOriginalMessageQueryPage.requestConfig =
  getOrderPlatformStoreOriginalMessageQueryPageRequestConfig

export interface IRequestPostOrderSysStdEcHoldRetryRetryPush {
  skuId: string
  platform: string
  shopCode: string
}

export type IResponsePostOrderSysStdEcHoldRetryRetryPush = string

const postOrderSysStdEcHoldRetryRetryPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdEcHoldRetry/retryPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdEcHoldRetryRetryPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdEcHoldRetryRetryPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdEcHoldRetryRetryPush>(
    prepare(postOrderSysStdEcHoldRetryRetryPushRequestConfig, requestData),
    ...args,
  )
}

postOrderSysStdEcHoldRetryRetryPush.requestConfig =
  postOrderSysStdEcHoldRetryRetryPushRequestConfig

export interface IRequestGetOrderSysStdEcHoldRetryQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  outerSkuId?: string
  updatedAtStart?: string
  updatedAtEnd?: string
}

export interface IResponseGetOrderSysStdEcHoldRetryQueryPage {
  total: number
  list: {
    platform: string
    shopCode: string
    outerSkuId: string
    skuId: string
    updatedAt: string
    pushStatus: number
    pushTime: string
    retryNum: number
    nextRetryTime: string
    firstPushTime: string
    platformName: string
    shopName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdEcHoldRetryQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdEcHoldRetry/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'outerSkuId',
      'updatedAtStart',
      'updatedAtEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdEcHoldRetryQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdEcHoldRetryQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdEcHoldRetryQueryPage>(
    prepare(getOrderSysStdEcHoldRetryQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdEcHoldRetryQueryPage.requestConfig =
  getOrderSysStdEcHoldRetryQueryPageRequestConfig

export type IRequestPostOrderTempOriginInvoiceQueueDeleteBatch = {
  tid: string
}[]

export type IResponsePostOrderTempOriginInvoiceQueueDeleteBatch = string

const postOrderTempOriginInvoiceQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginInvoiceQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginInvoiceQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginInvoiceQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginInvoiceQueueDeleteBatch>(
    prepare(
      postOrderTempOriginInvoiceQueueDeleteBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginInvoiceQueueDeleteBatch.requestConfig =
  postOrderTempOriginInvoiceQueueDeleteBatchRequestConfig

export interface IRequestGetOrderTempOriginInvoiceQueueQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  tid?: string
  shopCode?: string
  createTimeStart?: string
  createTimeEnd?: string
  sourceType?: string
}

export interface IResponseGetOrderTempOriginInvoiceQueueQueryPage {
  total: number
  list: {
    createAt: string
    sourceType: string
    shopCode: string
    tenantId: number
    formatKey: string
    retryNum: number
    nextRetryTime: string
    subCode: string
    subMsg: string
    tid: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderTempOriginInvoiceQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginInvoiceQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'tid',
      'shopCode',
      'createTimeStart',
      'createTimeEnd',
      'sourceType',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTempOriginInvoiceQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderTempOriginInvoiceQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTempOriginInvoiceQueueQueryPage>(
    prepare(getOrderTempOriginInvoiceQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderTempOriginInvoiceQueueQueryPage.requestConfig =
  getOrderTempOriginInvoiceQueueQueryPageRequestConfig

export interface IRequestPostOrderTempOriginInvoiceQueueResetRetryNum {
  ids: string[]
}

export type IResponsePostOrderTempOriginInvoiceQueueResetRetryNum = string

const postOrderTempOriginInvoiceQueueResetRetryNumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginInvoiceQueue/resetRetryNum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginInvoiceQueueResetRetryNum = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginInvoiceQueueResetRetryNum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginInvoiceQueueResetRetryNum>(
    prepare(
      postOrderTempOriginInvoiceQueueResetRetryNumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginInvoiceQueueResetRetryNum.requestConfig =
  postOrderTempOriginInvoiceQueueResetRetryNumRequestConfig

export type IRequestPostOrderTempOriginItemQueueDeleteBatch = {
  itemId: string
}[]

export type IResponsePostOrderTempOriginItemQueueDeleteBatch = string

const postOrderTempOriginItemQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginItemQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginItemQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginItemQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginItemQueueDeleteBatch>(
    prepare(postOrderTempOriginItemQueueDeleteBatchRequestConfig, requestData),
    ...args,
  )
}

postOrderTempOriginItemQueueDeleteBatch.requestConfig =
  postOrderTempOriginItemQueueDeleteBatchRequestConfig

export interface IRequestGetOrderTempOriginItemQueueQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  itemId?: string
  shopCode?: string
  createTimeStart?: string
  createTimeEnd?: string
  sourceType?: string
}

export interface IResponseGetOrderTempOriginItemQueueQueryPage {
  total: number
  list: {
    createAt: string
    sourceType: string
    shopCode: string
    tenantId: number
    formatKey: string
    retryNum: number
    nextRetryTime: string
    itemId: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderTempOriginItemQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginItemQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'itemId',
      'shopCode',
      'createTimeStart',
      'createTimeEnd',
      'sourceType',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTempOriginItemQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderTempOriginItemQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTempOriginItemQueueQueryPage>(
    prepare(getOrderTempOriginItemQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderTempOriginItemQueueQueryPage.requestConfig =
  getOrderTempOriginItemQueueQueryPageRequestConfig

export interface IRequestPostOrderTempOriginItemQueueResetRetryNum {
  ids: string[]
}

export type IResponsePostOrderTempOriginItemQueueResetRetryNum = string

const postOrderTempOriginItemQueueResetRetryNumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginItemQueue/resetRetryNum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginItemQueueResetRetryNum = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginItemQueueResetRetryNum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginItemQueueResetRetryNum>(
    prepare(
      postOrderTempOriginItemQueueResetRetryNumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginItemQueueResetRetryNum.requestConfig =
  postOrderTempOriginItemQueueResetRetryNumRequestConfig

export type IRequestPostOrderTempPlatNoticeQueueDeleteBatch = {
  dealCode: string
}[]

export type IResponsePostOrderTempPlatNoticeQueueDeleteBatch = string

const postOrderTempPlatNoticeQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempPlatNoticeQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempPlatNoticeQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempPlatNoticeQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempPlatNoticeQueueDeleteBatch>(
    prepare(postOrderTempPlatNoticeQueueDeleteBatchRequestConfig, requestData),
    ...args,
  )
}

postOrderTempPlatNoticeQueueDeleteBatch.requestConfig =
  postOrderTempPlatNoticeQueueDeleteBatchRequestConfig

export interface IRequestGetOrderTempPlatNoticeQueueQueryPage {
  pageNum: string
  pageSize: string
  dealCode?: string
  dealType?: string
  methodName?: string
  shopCode?: string
  createTimeStart?: string
  createTimeEnd?: string
  sourceType?: string
}

export interface IResponseGetOrderTempPlatNoticeQueueQueryPage {
  total: number
  list: {
    createAt: string
    sourceType: string
    shopCode: string
    tenantId: number
    formatKey: string
    retryNum: number
    nextRetryTime: string
    subCode: string
    subMsg: string
    dealCode: string
    dealType: string
    methodName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderTempPlatNoticeQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempPlatNoticeQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'dealCode',
      'dealType',
      'methodName',
      'shopCode',
      'createTimeStart',
      'createTimeEnd',
      'sourceType',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTempPlatNoticeQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderTempPlatNoticeQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTempPlatNoticeQueueQueryPage>(
    prepare(getOrderTempPlatNoticeQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderTempPlatNoticeQueueQueryPage.requestConfig =
  getOrderTempPlatNoticeQueueQueryPageRequestConfig

export interface IRequestPostOrderTempPlatNoticeQueueResetRetryNum {
  ids: string[]
}

export type IResponsePostOrderTempPlatNoticeQueueResetRetryNum = string

const postOrderTempPlatNoticeQueueResetRetryNumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempPlatNoticeQueue/resetRetryNum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempPlatNoticeQueueResetRetryNum = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempPlatNoticeQueueResetRetryNum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempPlatNoticeQueueResetRetryNum>(
    prepare(
      postOrderTempPlatNoticeQueueResetRetryNumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempPlatNoticeQueueResetRetryNum.requestConfig =
  postOrderTempPlatNoticeQueueResetRetryNumRequestConfig

export type IRequestPostOrderTempOriginPickQueueDeleteBatch = {
  pickNo: string
}[]

export type IResponsePostOrderTempOriginPickQueueDeleteBatch = string

const postOrderTempOriginPickQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginPickQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginPickQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginPickQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginPickQueueDeleteBatch>(
    prepare(postOrderTempOriginPickQueueDeleteBatchRequestConfig, requestData),
    ...args,
  )
}

postOrderTempOriginPickQueueDeleteBatch.requestConfig =
  postOrderTempOriginPickQueueDeleteBatchRequestConfig

export interface IRequestGetOrderTempOriginPickQueueQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  poNo?: string
  pickNo?: string
  shopCode?: string
  createTimeStart?: string
  createTimeEnd?: string
  sourceType?: string
}

export interface IResponseGetOrderTempOriginPickQueueQueryPage {
  total: number
  list: {
    createAt: string
    sourceType: string
    shopCode: string
    tenantId: number
    formatKey: string
    retryNum: number
    nextRetryTime: string
    subCode: string
    subMsg: string
    pickNo: string
    poNo: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderTempOriginPickQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginPickQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'poNo',
      'pickNo',
      'shopCode',
      'createTimeStart',
      'createTimeEnd',
      'sourceType',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTempOriginPickQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderTempOriginPickQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTempOriginPickQueueQueryPage>(
    prepare(getOrderTempOriginPickQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderTempOriginPickQueueQueryPage.requestConfig =
  getOrderTempOriginPickQueueQueryPageRequestConfig

export interface IRequestPostOrderTempOriginPickQueueResetRetryNum {
  ids: string[]
}

export type IResponsePostOrderTempOriginPickQueueResetRetryNum = string

const postOrderTempOriginPickQueueResetRetryNumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginPickQueue/resetRetryNum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginPickQueueResetRetryNum = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginPickQueueResetRetryNum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginPickQueueResetRetryNum>(
    prepare(
      postOrderTempOriginPickQueueResetRetryNumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginPickQueueResetRetryNum.requestConfig =
  postOrderTempOriginPickQueueResetRetryNumRequestConfig

export type IRequestPostOrderTempOriginExchangeQueueDeleteBatch = {
  exchangeId: string
}[]

export type IResponsePostOrderTempOriginExchangeQueueDeleteBatch = string

const postOrderTempOriginExchangeQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginExchangeQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginExchangeQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginExchangeQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginExchangeQueueDeleteBatch>(
    prepare(
      postOrderTempOriginExchangeQueueDeleteBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginExchangeQueueDeleteBatch.requestConfig =
  postOrderTempOriginExchangeQueueDeleteBatchRequestConfig

export interface IRequestGetOrderTempOriginExchangeQueueQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  exchangeId?: string
  shopCode?: string
  createTimeStart?: string
  createTimeEnd?: string
  sourceType?: string
}

export interface IResponseGetOrderTempOriginExchangeQueueQueryPage {
  total: number
  list: {
    createAt: string
    sourceType: string
    shopCode: string
    tenantId: number
    formatKey: string
    retryNum: number
    nextRetryTime: string
    exchangeId: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderTempOriginExchangeQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginExchangeQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'exchangeId',
      'shopCode',
      'createTimeStart',
      'createTimeEnd',
      'sourceType',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTempOriginExchangeQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderTempOriginExchangeQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTempOriginExchangeQueueQueryPage>(
    prepare(getOrderTempOriginExchangeQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderTempOriginExchangeQueueQueryPage.requestConfig =
  getOrderTempOriginExchangeQueueQueryPageRequestConfig

export interface IRequestPostOrderTempOriginExchangeQueueResetRetryNum {
  ids: string[]
}

export type IResponsePostOrderTempOriginExchangeQueueResetRetryNum = string

const postOrderTempOriginExchangeQueueResetRetryNumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginExchangeQueue/resetRetryNum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginExchangeQueueResetRetryNum = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginExchangeQueueResetRetryNum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginExchangeQueueResetRetryNum>(
    prepare(
      postOrderTempOriginExchangeQueueResetRetryNumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginExchangeQueueResetRetryNum.requestConfig =
  postOrderTempOriginExchangeQueueResetRetryNumRequestConfig

export interface IRequestPostOrderRetryPushQueueDelete {
  id: string
}

export type IResponsePostOrderRetryPushQueueDelete = string

const postOrderRetryPushQueueDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/retryPushQueue/delete',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderRetryPushQueueDelete = /*#__PURE__*/ (
  requestData: IRequestPostOrderRetryPushQueueDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRetryPushQueueDelete>(
    prepare(postOrderRetryPushQueueDeleteRequestConfig, requestData),
    ...args,
  )
}

postOrderRetryPushQueueDelete.requestConfig =
  postOrderRetryPushQueueDeleteRequestConfig

export interface IRequestPostOrderRetryPushQueueBakBatchPushByDate {
  retryTimeEnd: string
  retryTimeStart: string
}

export type IResponsePostOrderRetryPushQueueBakBatchPushByDate = string

const postOrderRetryPushQueueBakBatchPushByDateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/retryPushQueueBak/batchPushByDate',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderRetryPushQueueBakBatchPushByDate = /*#__PURE__*/ (
  requestData: IRequestPostOrderRetryPushQueueBakBatchPushByDate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRetryPushQueueBakBatchPushByDate>(
    prepare(
      postOrderRetryPushQueueBakBatchPushByDateRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderRetryPushQueueBakBatchPushByDate.requestConfig =
  postOrderRetryPushQueueBakBatchPushByDateRequestConfig

export type IRequestPostOrderRetryPushQueueDeleteBatch = {
  id: string
}[]

export type IResponsePostOrderRetryPushQueueDeleteBatch = string

const postOrderRetryPushQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/retryPushQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderRetryPushQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderRetryPushQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRetryPushQueueDeleteBatch>(
    prepare(postOrderRetryPushQueueDeleteBatchRequestConfig, requestData),
    ...args,
  )
}

postOrderRetryPushQueueDeleteBatch.requestConfig =
  postOrderRetryPushQueueDeleteBatchRequestConfig

export type IRequestPostOrderRetryPushQueueBatchPush = {
  id: string
}[]

export type IResponsePostOrderRetryPushQueueBatchPush = string

const postOrderRetryPushQueueBatchPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/retryPushQueue/batchPush',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderRetryPushQueueBatchPush = /*#__PURE__*/ (
  requestData: IRequestPostOrderRetryPushQueueBatchPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRetryPushQueueBatchPush>(
    prepare(postOrderRetryPushQueueBatchPushRequestConfig, requestData),
    ...args,
  )
}

postOrderRetryPushQueueBatchPush.requestConfig =
  postOrderRetryPushQueueBatchPushRequestConfig

export interface IRequestPostOrderRetryPushQueuePush {
  id: string
}

export type IResponsePostOrderRetryPushQueuePush = string

const postOrderRetryPushQueuePushRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/order/retryPushQueue/push',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postOrderRetryPushQueuePush = /*#__PURE__*/ (
  requestData: IRequestPostOrderRetryPushQueuePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRetryPushQueuePush>(
    prepare(postOrderRetryPushQueuePushRequestConfig, requestData),
    ...args,
  )
}

postOrderRetryPushQueuePush.requestConfig =
  postOrderRetryPushQueuePushRequestConfig

export interface IRequestGetOrderRetryPushQueueQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  retryFlag?: string
  type?: string
  id?: string
  shopCode?: string
  retryTimeStart?: string
  retryTimeEnd?: string
}

export interface IResponseGetOrderRetryPushQueueQueryPage {
  total: number
  list: {
    id: string
    platform: string
    shopCode: string
    type: string
    pushErrorMessage: string
    message: string
    retryNum: number
    nextRetryTime: string
    modified: string
    tenantId: string
    platformName: string
    typeName: string
    shopName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderRetryPushQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/retryPushQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'retryFlag',
      'type',
      'id',
      'shopCode',
      'retryTimeStart',
      'retryTimeEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderRetryPushQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderRetryPushQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderRetryPushQueueQueryPage>(
    prepare(getOrderRetryPushQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderRetryPushQueueQueryPage.requestConfig =
  getOrderRetryPushQueueQueryPageRequestConfig

export interface IRequestGetOrderRetryPushQueueTypeList {}

export type IResponseGetOrderRetryPushQueueTypeList = {
  code: string
  name: string
}[]

const getOrderRetryPushQueueTypeListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/retryPushQueue/typeList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getOrderRetryPushQueueTypeList = /*#__PURE__*/ (
  requestData?: IRequestGetOrderRetryPushQueueTypeList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderRetryPushQueueTypeList>(
    prepare(getOrderRetryPushQueueTypeListRequestConfig, requestData),
    ...args,
  )
}

getOrderRetryPushQueueTypeList.requestConfig =
  getOrderRetryPushQueueTypeListRequestConfig

export type IRequestPostOrderTempOriginTradeQueueDeleteBatch = {
  tid: string
  sourceType: string
}[]

export type IResponsePostOrderTempOriginTradeQueueDeleteBatch = string

const postOrderTempOriginTradeQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginTradeQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginTradeQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginTradeQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginTradeQueueDeleteBatch>(
    prepare(postOrderTempOriginTradeQueueDeleteBatchRequestConfig, requestData),
    ...args,
  )
}

postOrderTempOriginTradeQueueDeleteBatch.requestConfig =
  postOrderTempOriginTradeQueueDeleteBatchRequestConfig

export interface IRequestGetOrderTempOriginTradeQueueQueryPage {
  pageNum: string
  pageSize: string
  sourceType?: string
  shopCode?: string
  tid?: string
  createTimeStart?: string
  createTimeEnd?: string
}

export interface IResponseGetOrderTempOriginTradeQueueQueryPage {
  total: number
  list: {
    createAt: string
    sourceType: string
    shopCode: string
    tenantId: number
    formatKey: string
    retryNum: number
    nextRetryTime: string
    tid: string
    subMsg: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderTempOriginTradeQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginTradeQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'sourceType',
      'shopCode',
      'tid',
      'createTimeStart',
      'createTimeEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTempOriginTradeQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderTempOriginTradeQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTempOriginTradeQueueQueryPage>(
    prepare(getOrderTempOriginTradeQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderTempOriginTradeQueueQueryPage.requestConfig =
  getOrderTempOriginTradeQueueQueryPageRequestConfig

export interface IRequestPostOrderTempOriginTradeQueueResetRetryNum {
  ids: string[]
}

export type IResponsePostOrderTempOriginTradeQueueResetRetryNum = string

const postOrderTempOriginTradeQueueResetRetryNumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginTradeQueue/resetRetryNum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginTradeQueueResetRetryNum = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginTradeQueueResetRetryNum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginTradeQueueResetRetryNum>(
    prepare(
      postOrderTempOriginTradeQueueResetRetryNumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginTradeQueueResetRetryNum.requestConfig =
  postOrderTempOriginTradeQueueResetRetryNumRequestConfig

export type IRequestPostOrderTempOriginRefundQueueDeleteBatch = {
  refundId: string
  sourceType: string
}[]

export type IResponsePostOrderTempOriginRefundQueueDeleteBatch = string

const postOrderTempOriginRefundQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginRefundQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginRefundQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginRefundQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginRefundQueueDeleteBatch>(
    prepare(
      postOrderTempOriginRefundQueueDeleteBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginRefundQueueDeleteBatch.requestConfig =
  postOrderTempOriginRefundQueueDeleteBatchRequestConfig

export interface IRequestGetOrderTempOriginRefundQueueQueryPage {
  pageNum: string
  pageSize: string
  refundId?: string
  shopCode?: string
  createTimeStart?: string
  createTimeEnd?: string
  sourceType?: string
}

export interface IResponseGetOrderTempOriginRefundQueueQueryPage {
  total: number
  list: {
    createAt: string
    sourceType: string
    shopCode: string
    tenantId: number
    formatKey: string
    retryNum: number
    nextRetryTime: string
    refundId: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderTempOriginRefundQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginRefundQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'refundId',
      'shopCode',
      'createTimeStart',
      'createTimeEnd',
      'sourceType',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTempOriginRefundQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderTempOriginRefundQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTempOriginRefundQueueQueryPage>(
    prepare(getOrderTempOriginRefundQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderTempOriginRefundQueueQueryPage.requestConfig =
  getOrderTempOriginRefundQueueQueryPageRequestConfig

export interface IRequestPostOrderTempOriginRefundQueueResetRetryNum {
  ids: string[]
}

export type IResponsePostOrderTempOriginRefundQueueResetRetryNum = string

const postOrderTempOriginRefundQueueResetRetryNumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginRefundQueue/resetRetryNum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginRefundQueueResetRetryNum = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginRefundQueueResetRetryNum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginRefundQueueResetRetryNum>(
    prepare(
      postOrderTempOriginRefundQueueResetRetryNumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginRefundQueueResetRetryNum.requestConfig =
  postOrderTempOriginRefundQueueResetRetryNumRequestConfig

export type IRequestPostOrderTempOriginReturnQueueDeleteBatch = {
  returnId: string
}[]

export type IResponsePostOrderTempOriginReturnQueueDeleteBatch = string

const postOrderTempOriginReturnQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginReturnQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginReturnQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginReturnQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginReturnQueueDeleteBatch>(
    prepare(
      postOrderTempOriginReturnQueueDeleteBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginReturnQueueDeleteBatch.requestConfig =
  postOrderTempOriginReturnQueueDeleteBatchRequestConfig

export interface IRequestGetOrderTempOriginReturnQueueQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  returnId?: string
  shopCode?: string
  createTimeStart?: string
  createTimeEnd?: string
  sourceType?: string
}

export interface IResponseGetOrderTempOriginReturnQueueQueryPage {
  total: number
  list: {
    createAt: string
    sourceType: string
    shopCode: string
    tenantId: number
    formatKey: string
    retryNum: number
    nextRetryTime: string
    returnId: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderTempOriginReturnQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginReturnQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'returnId',
      'shopCode',
      'createTimeStart',
      'createTimeEnd',
      'sourceType',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTempOriginReturnQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderTempOriginReturnQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTempOriginReturnQueueQueryPage>(
    prepare(getOrderTempOriginReturnQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderTempOriginReturnQueueQueryPage.requestConfig =
  getOrderTempOriginReturnQueueQueryPageRequestConfig

export interface IRequestPostOrderTempOriginReturnQueueResetRetryNum {
  ids: string[]
}

export type IResponsePostOrderTempOriginReturnQueueResetRetryNum = string

const postOrderTempOriginReturnQueueResetRetryNumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginReturnQueue/resetRetryNum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginReturnQueueResetRetryNum = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginReturnQueueResetRetryNum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginReturnQueueResetRetryNum>(
    prepare(
      postOrderTempOriginReturnQueueResetRetryNumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginReturnQueueResetRetryNum.requestConfig =
  postOrderTempOriginReturnQueueResetRetryNumRequestConfig

export type IRequestPostOrderTempOriginStoreQueueDeleteBatch = {
  storeId: string
}[]

export type IResponsePostOrderTempOriginStoreQueueDeleteBatch = string

const postOrderTempOriginStoreQueueDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginStoreQueue/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginStoreQueueDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginStoreQueueDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginStoreQueueDeleteBatch>(
    prepare(postOrderTempOriginStoreQueueDeleteBatchRequestConfig, requestData),
    ...args,
  )
}

postOrderTempOriginStoreQueueDeleteBatch.requestConfig =
  postOrderTempOriginStoreQueueDeleteBatchRequestConfig

export interface IRequestGetOrderTempOriginStoreQueueQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  storeId?: string
  shopCode?: string
  createTimeStart?: string
  createTimeEnd?: string
  sourceType?: string
}

export interface IResponseGetOrderTempOriginStoreQueueQueryPage {
  total: number
  list: {
    createAt: string
    sourceType: string
    shopCode: string
    tenantId: number
    formatKey: string
    retryNum: number
    nextRetryTime: string
    subCode: string
    subMsg: string
    storeId: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderTempOriginStoreQueueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginStoreQueue/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'storeId',
      'shopCode',
      'createTimeStart',
      'createTimeEnd',
      'sourceType',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTempOriginStoreQueueQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderTempOriginStoreQueueQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTempOriginStoreQueueQueryPage>(
    prepare(getOrderTempOriginStoreQueueQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderTempOriginStoreQueueQueryPage.requestConfig =
  getOrderTempOriginStoreQueueQueryPageRequestConfig

export interface IRequestPostOrderTempOriginStoreQueueResetRetryNum {
  ids: string[]
}

export type IResponsePostOrderTempOriginStoreQueueResetRetryNum = string

const postOrderTempOriginStoreQueueResetRetryNumRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/tempOriginStoreQueue/resetRetryNum',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTempOriginStoreQueueResetRetryNum = /*#__PURE__*/ (
  requestData: IRequestPostOrderTempOriginStoreQueueResetRetryNum,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTempOriginStoreQueueResetRetryNum>(
    prepare(
      postOrderTempOriginStoreQueueResetRetryNumRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderTempOriginStoreQueueResetRetryNum.requestConfig =
  postOrderTempOriginStoreQueueResetRetryNumRequestConfig

export interface IRequestGetSystemAppIdConfigQueryPage {
  pageNum: string
  pageSize: string
  name?: string
  id?: string
}

export interface IResponseGetSystemAppIdConfigQueryPage {
  total: number
  list: {
    id: string
    name: string
    publicKey: string
    privateKey: string
    status: number
    createdAt: string
    updatedAt: string
    createBy: string
    modifyBy: string
    tenantId: number
    type: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemAppIdConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/appIdConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'name', 'id'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemAppIdConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemAppIdConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemAppIdConfigQueryPage>(
    prepare(getSystemAppIdConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemAppIdConfigQueryPage.requestConfig =
  getSystemAppIdConfigQueryPageRequestConfig

export interface IRequestPostSystemSysExternalConfigDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysExternalConfigDelete = string

const postSystemSysExternalConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysExternalConfig/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysExternalConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysExternalConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysExternalConfigDelete>(
    prepare(postSystemSysExternalConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysExternalConfigDelete.requestConfig =
  postSystemSysExternalConfigDeleteRequestConfig

export interface IRequestGetSystemAppIdConfigSendVerificationCode {}

export type IResponseGetSystemAppIdConfigSendVerificationCode = string

const getSystemAppIdConfigSendVerificationCodeRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/appIdConfig/sendVerificationCode',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemAppIdConfigSendVerificationCode = /*#__PURE__*/ (
  requestData?: IRequestGetSystemAppIdConfigSendVerificationCode,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemAppIdConfigSendVerificationCode>(
    prepare(getSystemAppIdConfigSendVerificationCodeRequestConfig, requestData),
    ...args,
  )
}

getSystemAppIdConfigSendVerificationCode.requestConfig =
  getSystemAppIdConfigSendVerificationCodeRequestConfig

export interface IRequestGetSystemAppIdConfigSync {}

export type IResponseGetSystemAppIdConfigSync = string

const getSystemAppIdConfigSyncRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/appIdConfig/sync',
  method: Method.GET,
  requestBodyType: RequestBodyType.query,
}

export const getSystemAppIdConfigSync = /*#__PURE__*/ (
  requestData?: IRequestGetSystemAppIdConfigSync,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemAppIdConfigSync>(
    prepare(getSystemAppIdConfigSyncRequestConfig, requestData),
    ...args,
  )
}

getSystemAppIdConfigSync.requestConfig = getSystemAppIdConfigSyncRequestConfig

export interface IRequestPostSystemSysExternalConfigEnable {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysExternalConfigEnable = string

const postSystemSysExternalConfigEnableRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysExternalConfig/enable',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysExternalConfigEnable = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysExternalConfigEnable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysExternalConfigEnable>(
    prepare(postSystemSysExternalConfigEnableRequestConfig, requestData),
    ...args,
  )
}

postSystemSysExternalConfigEnable.requestConfig =
  postSystemSysExternalConfigEnableRequestConfig

export interface IRequestGetSystemAppIdConfigAppIdMaskCheck {
  verificationCode?: string
}

export interface IResponseGetSystemAppIdConfigAppIdMaskCheck {
  check: boolean
  tel?: string
}

const getSystemAppIdConfigAppIdMaskCheckRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/appIdConfig/appIdMaskCheck',
    method: Method.GET,
    queryNames: ['verificationCode'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemAppIdConfigAppIdMaskCheck = /*#__PURE__*/ (
  requestData: IRequestGetSystemAppIdConfigAppIdMaskCheck,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemAppIdConfigAppIdMaskCheck>(
    prepare(getSystemAppIdConfigAppIdMaskCheckRequestConfig, requestData),
    ...args,
  )
}

getSystemAppIdConfigAppIdMaskCheck.requestConfig =
  getSystemAppIdConfigAppIdMaskCheckRequestConfig

export interface IRequestPostSystemSysExternalConfigCreate {
  appId: string
  url: string
  platform: string
  shopCode: string
  signType: string
  status: string
}

export type IResponsePostSystemSysExternalConfigCreate = string

const postSystemSysExternalConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysExternalConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysExternalConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysExternalConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysExternalConfigCreate>(
    prepare(postSystemSysExternalConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysExternalConfigCreate.requestConfig =
  postSystemSysExternalConfigCreateRequestConfig

export interface IRequestPostSystemSysExternalConfigDisable {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysExternalConfigDisable = string

const postSystemSysExternalConfigDisableRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysExternalConfig/disable',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysExternalConfigDisable = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysExternalConfigDisable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysExternalConfigDisable>(
    prepare(postSystemSysExternalConfigDisableRequestConfig, requestData),
    ...args,
  )
}

postSystemSysExternalConfigDisable.requestConfig =
  postSystemSysExternalConfigDisableRequestConfig

export interface IRequestPostSystemSysExternalConfigUpdate {
  appId: string
  url: string
  platform: string
  shopCode: string
  signType: string
  status: string
  id: string
}

export type IResponsePostSystemSysExternalConfigUpdate = string

const postSystemSysExternalConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysExternalConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysExternalConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysExternalConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysExternalConfigUpdate>(
    prepare(postSystemSysExternalConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysExternalConfigUpdate.requestConfig =
  postSystemSysExternalConfigUpdateRequestConfig

export interface IRequestGetSystemSysExternalConfigQueryPage {
  pageNum: string
  pageSize: string
  appId?: string
  pageCount?: string
}

export interface IResponseGetSystemSysExternalConfigQueryPage {
  total: number
  list: {
    id: string
    appId: string
    signType: string
    url: string
    status: number
    createdAt: string
    updatedAt: string
    createBy: string
    modifyBy: string
    tenantId: number
    platform: string
    shopCode: string
    appName: string
    publicKey: string
    privateKey: string
    platformName: string
    shopName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysExternalConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysExternalConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'appId', 'pageCount'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysExternalConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysExternalConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysExternalConfigQueryPage>(
    prepare(getSystemSysExternalConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysExternalConfigQueryPage.requestConfig =
  getSystemSysExternalConfigQueryPageRequestConfig

export interface IRequestGetSystemAppIdConfigFindById {
  id: string
}

export interface IResponseGetSystemAppIdConfigFindById {
  id: string
  name: string
  publicKey: string
  privateKey: string
  status: number
  createdAt: string
  updatedAt: string
  createBy: string
  modifyBy: string
  tenantId: number
  type: string
}

const getSystemAppIdConfigFindByIdRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/appIdConfig/findById',
  method: Method.GET,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemAppIdConfigFindById = /*#__PURE__*/ (
  requestData: IRequestGetSystemAppIdConfigFindById,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemAppIdConfigFindById>(
    prepare(getSystemAppIdConfigFindByIdRequestConfig, requestData),
    ...args,
  )
}

getSystemAppIdConfigFindById.requestConfig =
  getSystemAppIdConfigFindByIdRequestConfig

export interface IRequestPostSystemSysSafeControlConfigGetProductInfo {}

export interface IResponsePostSystemSysSafeControlConfigGetProductInfo {
  productAuthCode: string
  productCode: string
}

const postSystemSysSafeControlConfigGetProductInfoRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysSafeControlConfig/getProductInfo',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysSafeControlConfigGetProductInfo = /*#__PURE__*/ (
  requestData?: IRequestPostSystemSysSafeControlConfigGetProductInfo,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysSafeControlConfigGetProductInfo>(
    prepare(
      postSystemSysSafeControlConfigGetProductInfoRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postSystemSysSafeControlConfigGetProductInfo.requestConfig =
  postSystemSysSafeControlConfigGetProductInfoRequestConfig

export interface IRequestGetSystemSysSafeControlConfigQueryPage {
  pageNum: string
  pageSize: string
}

export interface IResponseGetSystemSysSafeControlConfigQueryPage {
  total: number
  list: {
    safeFieldDisplayName: string
    safeValue: string
    endDate: string
    description: number
    id: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysSafeControlConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysSafeControlConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysSafeControlConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysSafeControlConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysSafeControlConfigQueryPage>(
    prepare(getSystemSysSafeControlConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysSafeControlConfigQueryPage.requestConfig =
  getSystemSysSafeControlConfigQueryPageRequestConfig

export interface IRequestPostSystemSysSafeControlConfigGetSafeControlConfig {}

export type IResponsePostSystemSysSafeControlConfigGetSafeControlConfig = string

const postSystemSysSafeControlConfigGetSafeControlConfigRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysSafeControlConfig/getSafeControlConfig',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysSafeControlConfigGetSafeControlConfig =
  /*#__PURE__*/ (
    requestData?: IRequestPostSystemSysSafeControlConfigGetSafeControlConfig,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostSystemSysSafeControlConfigGetSafeControlConfig>(
      prepare(
        postSystemSysSafeControlConfigGetSafeControlConfigRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postSystemSysSafeControlConfigGetSafeControlConfig.requestConfig =
  postSystemSysSafeControlConfigGetSafeControlConfigRequestConfig

export interface IRequestPostSystemPlatformRouterMessageCenterSaveRouterCenter {
  sourceUrl: string
  companyName: string
  platform: string
  shopCode: string
  routerCode: string
}

export type IResponsePostSystemPlatformRouterMessageCenterSaveRouterCenter =
  string

const postSystemPlatformRouterMessageCenterSaveRouterCenterRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformRouterMessageCenter/saveRouterCenter',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformRouterMessageCenterSaveRouterCenter =
  /*#__PURE__*/ (
    requestData: IRequestPostSystemPlatformRouterMessageCenterSaveRouterCenter,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostSystemPlatformRouterMessageCenterSaveRouterCenter>(
      prepare(
        postSystemPlatformRouterMessageCenterSaveRouterCenterRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postSystemPlatformRouterMessageCenterSaveRouterCenter.requestConfig =
  postSystemPlatformRouterMessageCenterSaveRouterCenterRequestConfig

export interface IRequestGetSystemPlatformRouterMessageCenterShopDataByPlatform {
  platform: string
}

export interface IResponseGetSystemPlatformRouterMessageCenterShopDataByPlatform {
  routerArray: {
    checkStatus: string
    name: string
    methodStr: string
  }[]
  shopArray: {
    checkStatus: string
    code: string
    name: string
    id: number
    platform: string
  }[]
}

const getSystemPlatformRouterMessageCenterShopDataByPlatformRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformRouterMessageCenter/shopDataByPlatform',
    method: Method.GET,
    queryNames: ['platform'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemPlatformRouterMessageCenterShopDataByPlatform =
  /*#__PURE__*/ (
    requestData: IRequestGetSystemPlatformRouterMessageCenterShopDataByPlatform,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetSystemPlatformRouterMessageCenterShopDataByPlatform>(
      prepare(
        getSystemPlatformRouterMessageCenterShopDataByPlatformRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getSystemPlatformRouterMessageCenterShopDataByPlatform.requestConfig =
  getSystemPlatformRouterMessageCenterShopDataByPlatformRequestConfig

export interface IRequestGetSystemPlatformRouterMessageCenterLoadPlatformRouter {}

export interface IResponseGetSystemPlatformRouterMessageCenterLoadPlatformRouter {
  config: {
    sourceUrl: string
    companyName: string
  }
  platform: {}
}

const getSystemPlatformRouterMessageCenterLoadPlatformRouterRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformRouterMessageCenter/loadPlatformRouter',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemPlatformRouterMessageCenterLoadPlatformRouter =
  /*#__PURE__*/ (
    requestData?: IRequestGetSystemPlatformRouterMessageCenterLoadPlatformRouter,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetSystemPlatformRouterMessageCenterLoadPlatformRouter>(
      prepare(
        getSystemPlatformRouterMessageCenterLoadPlatformRouterRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getSystemPlatformRouterMessageCenterLoadPlatformRouter.requestConfig =
  getSystemPlatformRouterMessageCenterLoadPlatformRouterRequestConfig

export interface IRequestPostOrderPlatformMnsMappingInitPlatformMnsMapping {}

export type IResponsePostOrderPlatformMnsMappingInitPlatformMnsMapping = string

const postOrderPlatformMnsMappingInitPlatformMnsMappingRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformMnsMapping/initPlatformMnsMapping',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformMnsMappingInitPlatformMnsMapping = /*#__PURE__*/ (
  requestData?: IRequestPostOrderPlatformMnsMappingInitPlatformMnsMapping,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformMnsMappingInitPlatformMnsMapping>(
    prepare(
      postOrderPlatformMnsMappingInitPlatformMnsMappingRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformMnsMappingInitPlatformMnsMapping.requestConfig =
  postOrderPlatformMnsMappingInitPlatformMnsMappingRequestConfig

export interface IRequestPostSystemTopicConfigUpdate {
  msgServiceStatus: number
  batchPushStatus: number
  ipUrl: string
  sourceUrl: string
  companyName: string
  id: string
  tenantId: string
}

export type IResponsePostSystemTopicConfigUpdate = string

const postSystemTopicConfigUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/topicConfig/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemTopicConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemTopicConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemTopicConfigUpdate>(
    prepare(postSystemTopicConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemTopicConfigUpdate.requestConfig =
  postSystemTopicConfigUpdateRequestConfig

export interface IRequestPostOrderTopicMessageCenterUpdate {
  platform: string
  shopsId: string
  topicCode: string
}

export type IResponsePostOrderTopicMessageCenterUpdate = string

const postOrderTopicMessageCenterUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/topicMessageCenter/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderTopicMessageCenterUpdate = /*#__PURE__*/ (
  requestData: IRequestPostOrderTopicMessageCenterUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderTopicMessageCenterUpdate>(
    prepare(postOrderTopicMessageCenterUpdateRequestConfig, requestData),
    ...args,
  )
}

postOrderTopicMessageCenterUpdate.requestConfig =
  postOrderTopicMessageCenterUpdateRequestConfig

export interface IRequestGetOrderTopicPlatformEnumAllList {}

export type IResponseGetOrderTopicPlatformEnumAllList = {
  platform: string
  platformNum: string
  platformName: string
}[]

const getOrderTopicPlatformEnumAllListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/topicPlatformEnum/allList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTopicPlatformEnumAllList = /*#__PURE__*/ (
  requestData?: IRequestGetOrderTopicPlatformEnumAllList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTopicPlatformEnumAllList>(
    prepare(getOrderTopicPlatformEnumAllListRequestConfig, requestData),
    ...args,
  )
}

getOrderTopicPlatformEnumAllList.requestConfig =
  getOrderTopicPlatformEnumAllListRequestConfig

export interface IRequestGetOrderTopicPlatformEnumFindByPlatform {
  platform: string
}

export interface IResponseGetOrderTopicPlatformEnumFindByPlatform {
  platform: string
  platformNum: string
  topicCode: string
  extendsShopId: string
  platformName: string
  topicCodeJSON: string
  shopJSON: string
}

const getOrderTopicPlatformEnumFindByPlatformRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/topicPlatformEnum/findByPlatform',
    method: Method.GET,
    queryNames: ['platform'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTopicPlatformEnumFindByPlatform = /*#__PURE__*/ (
  requestData: IRequestGetOrderTopicPlatformEnumFindByPlatform,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTopicPlatformEnumFindByPlatform>(
    prepare(getOrderTopicPlatformEnumFindByPlatformRequestConfig, requestData),
    ...args,
  )
}

getOrderTopicPlatformEnumFindByPlatform.requestConfig =
  getOrderTopicPlatformEnumFindByPlatformRequestConfig

export interface IRequestGetOrderTopicMessageCenterQueryOneByPlatform {
  platform: string
}

export interface IResponseGetOrderTopicMessageCenterQueryOneByPlatform {
  id: string
  platform: string
  shopsId: string
  shopsExtendsKey: string
  topicCode: string
  tenantId: string
  updateAt: string
}

const getOrderTopicMessageCenterQueryOneByPlatformRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/topicMessageCenter/queryOneByPlatform',
    method: Method.GET,
    queryNames: ['platform'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderTopicMessageCenterQueryOneByPlatform = /*#__PURE__*/ (
  requestData: IRequestGetOrderTopicMessageCenterQueryOneByPlatform,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderTopicMessageCenterQueryOneByPlatform>(
    prepare(
      getOrderTopicMessageCenterQueryOneByPlatformRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderTopicMessageCenterQueryOneByPlatform.requestConfig =
  getOrderTopicMessageCenterQueryOneByPlatformRequestConfig

export interface IRequestGetSystemTopicConfigFindOne {}

export interface IResponseGetSystemTopicConfigFindOne {
  id: string
  msgServiceStatus: number
  batchPushStatus: number
  ipUrl: string
  sourceUrl: string
  companyName: string
  tenantId: string
  createAt: string
  updateAt: string
}

const getSystemTopicConfigFindOneRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/topicConfig/findOne',
  method: Method.GET,
  requestBodyType: RequestBodyType.query,
}

export const getSystemTopicConfigFindOne = /*#__PURE__*/ (
  requestData?: IRequestGetSystemTopicConfigFindOne,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemTopicConfigFindOne>(
    prepare(getSystemTopicConfigFindOneRequestConfig, requestData),
    ...args,
  )
}

getSystemTopicConfigFindOne.requestConfig =
  getSystemTopicConfigFindOneRequestConfig

export type IRequestDeleteSystemShopDownloadConfigDelete = number[]

export type IResponseDeleteSystemShopDownloadConfigDelete = number

const deleteSystemShopDownloadConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopDownloadConfig/delete',
    method: Method.DELETE,
    requestBodyType: RequestBodyType.json,
  }

export const deleteSystemShopDownloadConfigDelete = /*#__PURE__*/ (
  requestData: IRequestDeleteSystemShopDownloadConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseDeleteSystemShopDownloadConfigDelete>(
    prepare(deleteSystemShopDownloadConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

deleteSystemShopDownloadConfigDelete.requestConfig =
  deleteSystemShopDownloadConfigDeleteRequestConfig

export type IRequestPostSystemShopDownloadConfigEnable = number[]

export type IResponsePostSystemShopDownloadConfigEnable = number

const postSystemShopDownloadConfigEnableRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopDownloadConfig/enable',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemShopDownloadConfigEnable = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopDownloadConfigEnable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopDownloadConfigEnable>(
    prepare(postSystemShopDownloadConfigEnableRequestConfig, requestData),
    ...args,
  )
}

postSystemShopDownloadConfigEnable.requestConfig =
  postSystemShopDownloadConfigEnableRequestConfig

export interface IRequestPostSystemShopDownloadConfigCopy {
  platform: string
  sourceShopCode: string
  targetShopCode: string
}

export type IResponsePostSystemShopDownloadConfigCopy = number

const postSystemShopDownloadConfigCopyRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopDownloadConfig/copy',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemShopDownloadConfigCopy = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopDownloadConfigCopy,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopDownloadConfigCopy>(
    prepare(postSystemShopDownloadConfigCopyRequestConfig, requestData),
    ...args,
  )
}

postSystemShopDownloadConfigCopy.requestConfig =
  postSystemShopDownloadConfigCopyRequestConfig

export interface IRequestPostSystemShopDownloadConfigCreate {
  platform: string
  interfaceCode: string
  interfaceName: string
  shopCode: string
  status: string
}

export type IResponsePostSystemShopDownloadConfigCreate = number

const postSystemShopDownloadConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopDownloadConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemShopDownloadConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopDownloadConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopDownloadConfigCreate>(
    prepare(postSystemShopDownloadConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemShopDownloadConfigCreate.requestConfig =
  postSystemShopDownloadConfigCreateRequestConfig

export interface IRequestPostSystemShopDownloadConfigUpdate {
  platform: string
  interfaceCode: string
  interfaceName: string
  shopCode: string
  status: string
  id: number
}

export type IResponsePostSystemShopDownloadConfigUpdate = number

const postSystemShopDownloadConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopDownloadConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemShopDownloadConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopDownloadConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopDownloadConfigUpdate>(
    prepare(postSystemShopDownloadConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemShopDownloadConfigUpdate.requestConfig =
  postSystemShopDownloadConfigUpdateRequestConfig

export type IRequestPostSystemShopDownloadConfigDisable = number[]

export type IResponsePostSystemShopDownloadConfigDisable = number

const postSystemShopDownloadConfigDisableRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopDownloadConfig/disable',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemShopDownloadConfigDisable = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopDownloadConfigDisable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopDownloadConfigDisable>(
    prepare(postSystemShopDownloadConfigDisableRequestConfig, requestData),
    ...args,
  )
}

postSystemShopDownloadConfigDisable.requestConfig =
  postSystemShopDownloadConfigDisableRequestConfig

export interface IRequestGetSystemShopDownloadConfigQuery {
  pageNum: string
  pageSize: string
  platform?: string
  interfaceCode?: string
  status?: string
  shopCodes?: string
  pageCount?: string
}

export interface IResponseGetSystemShopDownloadConfigQuery {
  total: number
  list: {
    id: number
    platform: string
    interfaceCode: string
    interfaceName: string
    shopCode: string
    status: number
    updatedAt: string
    createBy: string
    createdAt: string
    tenantId: number
    platformName: string
    shopName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemShopDownloadConfigQueryRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopDownloadConfig/query',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'interfaceCode',
      'status',
      'shopCodes',
      'pageCount',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemShopDownloadConfigQuery = /*#__PURE__*/ (
  requestData: IRequestGetSystemShopDownloadConfigQuery,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemShopDownloadConfigQuery>(
    prepare(getSystemShopDownloadConfigQueryRequestConfig, requestData),
    ...args,
  )
}

getSystemShopDownloadConfigQuery.requestConfig =
  getSystemShopDownloadConfigQueryRequestConfig

export interface IRequestGetSystemShopDownloadConfigGetInterfaceCodes {}

export type IResponseGetSystemShopDownloadConfigGetInterfaceCodes = {
  code: string
  name: string
}[]

const getSystemShopDownloadConfigGetInterfaceCodesRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopDownloadConfig/getInterfaceCodes',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemShopDownloadConfigGetInterfaceCodes = /*#__PURE__*/ (
  requestData?: IRequestGetSystemShopDownloadConfigGetInterfaceCodes,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemShopDownloadConfigGetInterfaceCodes>(
    prepare(
      getSystemShopDownloadConfigGetInterfaceCodesRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemShopDownloadConfigGetInterfaceCodes.requestConfig =
  getSystemShopDownloadConfigGetInterfaceCodesRequestConfig

export type IRequestPostSystemShopsConfigCreateBatch = {
  id: number
  openId: string
  tenantId: number
  shopCode: string
}[]

export type IResponsePostSystemShopsConfigCreateBatch = string

const postSystemShopsConfigCreateBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopsConfig/createBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemShopsConfigCreateBatch = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopsConfigCreateBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopsConfigCreateBatch>(
    prepare(postSystemShopsConfigCreateBatchRequestConfig, requestData),
    ...args,
  )
}

postSystemShopsConfigCreateBatch.requestConfig =
  postSystemShopsConfigCreateBatchRequestConfig

export interface IRequestPostSystemShopsConfigQueryPage {
  openId: string
  tenantId: number
  pageNum: string
  pageSize: string
}

export interface IResponsePostSystemShopsConfigQueryPage {
  total: number
  list: {
    openId: string
    tenantId: number
    shopCode: string
    publicKey: string
    privateKey: string
    openUrl: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postSystemShopsConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/shopsConfig/queryPage',
    method: Method.POST,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemShopsConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestPostSystemShopsConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemShopsConfigQueryPage>(
    prepare(postSystemShopsConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

postSystemShopsConfigQueryPage.requestConfig =
  postSystemShopsConfigQueryPageRequestConfig

export interface IRequestPostSystemThirdConfigQuery {
  openUrl: string
  openid: string
  status: string
  pageNum: string
  pageSize: string
}

export interface IResponsePostSystemThirdConfigQuery {
  total: number
  list: {
    id: number
    openId: string
    openName: string
    publicKey: string
    privateKey: string
    tenantId: number
    tenantCode: string
    openUrl: string
    platform: string
    status: string
    createdAt: string
    updatedAt: string
    createBy: string
    modifyBy: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postSystemThirdConfigQueryRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/thirdConfig/query',
  method: Method.POST,
  queryNames: ['pageNum', 'pageSize'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemThirdConfigQuery = /*#__PURE__*/ (
  requestData: IRequestPostSystemThirdConfigQuery,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemThirdConfigQuery>(
    prepare(postSystemThirdConfigQueryRequestConfig, requestData),
    ...args,
  )
}

postSystemThirdConfigQuery.requestConfig =
  postSystemThirdConfigQueryRequestConfig

export interface IRequestGetSystemThirdConfigFindById {
  openId: string
}

export interface IResponseGetSystemThirdConfigFindById {
  id: number
  openId: string
  openName: string
  publicKey: string
  privateKey: string
  tenantId: number
  tenantCode: string
  openUrl: string
  platform: string
  status: string
  createdAt: string
}

const getSystemThirdConfigFindByIdRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/thirdConfig/findById',
  method: Method.GET,
  queryNames: ['openId'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemThirdConfigFindById = /*#__PURE__*/ (
  requestData: IRequestGetSystemThirdConfigFindById,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemThirdConfigFindById>(
    prepare(getSystemThirdConfigFindByIdRequestConfig, requestData),
    ...args,
  )
}

getSystemThirdConfigFindById.requestConfig =
  getSystemThirdConfigFindByIdRequestConfig

export type IRequestPostOrderPlatformRestrictionResultDeleteBatch = number[]

export type IResponsePostOrderPlatformRestrictionResultDeleteBatch = string

const postOrderPlatformRestrictionResultDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRestrictionResult/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRestrictionResultDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformRestrictionResultDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformRestrictionResultDeleteBatch>(
    prepare(
      postOrderPlatformRestrictionResultDeleteBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderPlatformRestrictionResultDeleteBatch.requestConfig =
  postOrderPlatformRestrictionResultDeleteBatchRequestConfig

export interface IRequestGetOrderGlobalRestrictionStrategyPullResResult {}

export type IResponseGetOrderGlobalRestrictionStrategyPullResResult = string

const getOrderGlobalRestrictionStrategyPullResResultRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/globalRestrictionStrategy/pullResResult',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getOrderGlobalRestrictionStrategyPullResResult = /*#__PURE__*/ (
  requestData?: IRequestGetOrderGlobalRestrictionStrategyPullResResult,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderGlobalRestrictionStrategyPullResResult>(
    prepare(
      getOrderGlobalRestrictionStrategyPullResResultRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getOrderGlobalRestrictionStrategyPullResResult.requestConfig =
  getOrderGlobalRestrictionStrategyPullResResultRequestConfig

export interface IRequestPostOrderPlatformRestrictionResultCreate {
  content: string
  code: string
  platform: string
  interfaceType: string
  opType: string
  timeMin?: string
  remark: string
  startTime?: string
  endTime?: string
}

export type IResponsePostOrderPlatformRestrictionResultCreate = string

const postOrderPlatformRestrictionResultCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRestrictionResult/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRestrictionResultCreate = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformRestrictionResultCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformRestrictionResultCreate>(
    prepare(postOrderPlatformRestrictionResultCreateRequestConfig, requestData),
    ...args,
  )
}

postOrderPlatformRestrictionResultCreate.requestConfig =
  postOrderPlatformRestrictionResultCreateRequestConfig

export interface IRequestPostOrderPlatformRestrictionResultUpdate {
  content: string
  code: string
  platform: string
  interfaceType: string
  opType: string
  timeMin?: string
  remark: string
  id: number
  startTime?: string
  endTime?: string
}

export type IResponsePostOrderPlatformRestrictionResultUpdate = string

const postOrderPlatformRestrictionResultUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRestrictionResult/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRestrictionResultUpdate = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformRestrictionResultUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformRestrictionResultUpdate>(
    prepare(postOrderPlatformRestrictionResultUpdateRequestConfig, requestData),
    ...args,
  )
}

postOrderPlatformRestrictionResultUpdate.requestConfig =
  postOrderPlatformRestrictionResultUpdateRequestConfig

export interface IRequestPostOrderPlatformRestrictionResultQuery {
  platform: string
  opType: string
  interfaceType: string
  content: string
  code: string
  pageNum: string
  pageSize: string
}

export interface IResponsePostOrderPlatformRestrictionResultQuery {
  total: number
  list: {
    id: number
    platform: string
    code: string
    content: string
    opType: string
    remark: string
    createTime: string
    createBy: string
    modifyTime: string
    modifyBy: string
    tenantId: number
    isFrom: string
    interfaceType: string
    timeMin: number
    startTime: string
    endTime: string
    subCode: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postOrderPlatformRestrictionResultQueryRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformRestrictionResult/query',
    method: Method.POST,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.json,
  }

export const postOrderPlatformRestrictionResultQuery = /*#__PURE__*/ (
  requestData: IRequestPostOrderPlatformRestrictionResultQuery,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderPlatformRestrictionResultQuery>(
    prepare(postOrderPlatformRestrictionResultQueryRequestConfig, requestData),
    ...args,
  )
}

postOrderPlatformRestrictionResultQuery.requestConfig =
  postOrderPlatformRestrictionResultQueryRequestConfig

export type IRequestPostOrderRestrictionStrategySkuDeleteBatch = number[]

export type IResponsePostOrderRestrictionStrategySkuDeleteBatch = string

const postOrderRestrictionStrategySkuDeleteBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/restrictionStrategySku/deleteBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderRestrictionStrategySkuDeleteBatch = /*#__PURE__*/ (
  requestData: IRequestPostOrderRestrictionStrategySkuDeleteBatch,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRestrictionStrategySkuDeleteBatch>(
    prepare(
      postOrderRestrictionStrategySkuDeleteBatchRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderRestrictionStrategySkuDeleteBatch.requestConfig =
  postOrderRestrictionStrategySkuDeleteBatchRequestConfig

export interface IRequestPostOrderRestrictionStrategySkuCreate {
  platform: string
  shopCode: string
  interfaceType: string
  startTime: string
  endTime: string
  acType: string
  tid?: string
  refundId?: string
  returnId?: string
  exchangeId?: string
  numIid?: string
  skuId?: string
  actName?: string
}

export type IResponsePostOrderRestrictionStrategySkuCreate = string

const postOrderRestrictionStrategySkuCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/restrictionStrategySku/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderRestrictionStrategySkuCreate = /*#__PURE__*/ (
  requestData: IRequestPostOrderRestrictionStrategySkuCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRestrictionStrategySkuCreate>(
    prepare(postOrderRestrictionStrategySkuCreateRequestConfig, requestData),
    ...args,
  )
}

postOrderRestrictionStrategySkuCreate.requestConfig =
  postOrderRestrictionStrategySkuCreateRequestConfig

export interface IRequestPostOrderRestrictionStrategySkuUpdate {
  platform: string
  shopCode: string
  interfaceType: string
  startTime: string
  endTime: string
  acType: string
  id: number
  tid?: string
  refundId?: string
  returnId?: string
  exchangeId?: string
  numIid?: string
  skuId?: string
  actName?: string
}

export type IResponsePostOrderRestrictionStrategySkuUpdate = string

const postOrderRestrictionStrategySkuUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/restrictionStrategySku/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderRestrictionStrategySkuUpdate = /*#__PURE__*/ (
  requestData: IRequestPostOrderRestrictionStrategySkuUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRestrictionStrategySkuUpdate>(
    prepare(postOrderRestrictionStrategySkuUpdateRequestConfig, requestData),
    ...args,
  )
}

postOrderRestrictionStrategySkuUpdate.requestConfig =
  postOrderRestrictionStrategySkuUpdateRequestConfig

export interface IRequestPostOrderRestrictionStrategySkuDeleteRestriction {
  platform: string
  shopCode: string
  numIid: string
  skuId: string
}

export type IResponsePostOrderRestrictionStrategySkuDeleteRestriction = string

const postOrderRestrictionStrategySkuDeleteRestrictionRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/restrictionStrategySku/deleteRestriction',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderRestrictionStrategySkuDeleteRestriction = /*#__PURE__*/ (
  requestData: IRequestPostOrderRestrictionStrategySkuDeleteRestriction,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRestrictionStrategySkuDeleteRestriction>(
    prepare(
      postOrderRestrictionStrategySkuDeleteRestrictionRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postOrderRestrictionStrategySkuDeleteRestriction.requestConfig =
  postOrderRestrictionStrategySkuDeleteRestrictionRequestConfig

export interface IRequestGetOrderGlobalRestrictionStrategyGet {
  id: string
}

export interface IResponseGetOrderGlobalRestrictionStrategyGet {
  id: number
  isUse: string
  incTime: number
  isIncTimeUse: string
  incSynNum: number
  incSameTime: number
  isIncSameTimeUse: string
  incOverSynNum: number
  incReplaceSynNum: number
  isIncReplaceSynNumUse: string
  isPlatformRestrictionResultUse: string
  createTime: string
  createBy: string
  modifyTime: string
  modifyBy: string
}

const getOrderGlobalRestrictionStrategyGetRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/globalRestrictionStrategy/get',
    method: Method.GET,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderGlobalRestrictionStrategyGet = /*#__PURE__*/ (
  requestData: IRequestGetOrderGlobalRestrictionStrategyGet,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderGlobalRestrictionStrategyGet>(
    prepare(getOrderGlobalRestrictionStrategyGetRequestConfig, requestData),
    ...args,
  )
}

getOrderGlobalRestrictionStrategyGet.requestConfig =
  getOrderGlobalRestrictionStrategyGetRequestConfig

export interface IRequestPostOrderRestrictionStrategySkuQuery {
  numIid: string
  platform: string
  shopCode: string
  tid: string
  acType: string
  actName: string
  endTime: string
  interfaceType: string
  skuId: string
  startTime: string
  pageNum: string
  pageSize: string
}

export interface IResponsePostOrderRestrictionStrategySkuQuery {
  total: number
  list: {
    id: number
    platform: string
    shopCode: string
    acType: number
    startTime: string
    endTime: string
    tenantId: number
    interfaceType: string
    tid: string
    refundId: string
    returnId: string
    exchangeId: string
    numIid: string
    skuId: string
    actName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postOrderRestrictionStrategySkuQueryRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/restrictionStrategySku/query',
    method: Method.POST,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.json,
  }

export const postOrderRestrictionStrategySkuQuery = /*#__PURE__*/ (
  requestData: IRequestPostOrderRestrictionStrategySkuQuery,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderRestrictionStrategySkuQuery>(
    prepare(postOrderRestrictionStrategySkuQueryRequestConfig, requestData),
    ...args,
  )
}

postOrderRestrictionStrategySkuQuery.requestConfig =
  postOrderRestrictionStrategySkuQueryRequestConfig

export interface IRequestPostSystemSysRetryConfigDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysRetryConfigDelete = number

const postSystemSysRetryConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysRetryConfig/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysRetryConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysRetryConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysRetryConfigDelete>(
    prepare(postSystemSysRetryConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysRetryConfigDelete.requestConfig =
  postSystemSysRetryConfigDeleteRequestConfig

export interface IRequestPostSystemSysRetryConfigCreate {
  errorCode: string
  isRetry: string
  maxNumber: number
  retryInterval: number
}

export type IResponsePostSystemSysRetryConfigCreate = number

const postSystemSysRetryConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysRetryConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysRetryConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysRetryConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysRetryConfigCreate>(
    prepare(postSystemSysRetryConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysRetryConfigCreate.requestConfig =
  postSystemSysRetryConfigCreateRequestConfig

export interface IRequestPostSystemSysRetryConfigUpdate {
  errorCode: string
  isRetry: string
  maxNumber: number
  retryInterval: number
  id: number
}

export type IResponsePostSystemSysRetryConfigUpdate = number

const postSystemSysRetryConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysRetryConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysRetryConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysRetryConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysRetryConfigUpdate>(
    prepare(postSystemSysRetryConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysRetryConfigUpdate.requestConfig =
  postSystemSysRetryConfigUpdateRequestConfig

export interface IRequestGetSystemSysRetryConfigQueryPage {
  pageNum: string
  pageSize: string
  errorCode?: string
}

export interface IResponseGetSystemSysRetryConfigQueryPage {
  total: number
  list: {
    id: number
    errorCode: string
    isRetry: number
    maxNumber: number
    retryInterval: number
    createdAt: string
    updatedAt: string
    createBy: string
    updateBy: string
    tenantId: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysRetryConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysRetryConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'errorCode'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysRetryConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysRetryConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysRetryConfigQueryPage>(
    prepare(getSystemSysRetryConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysRetryConfigQueryPage.requestConfig =
  getSystemSysRetryConfigQueryPageRequestConfig

export interface IRequestPostSystemSysPushConfigDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysPushConfigDelete = number

const postSystemSysPushConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPushConfig/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysPushConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysPushConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysPushConfigDelete>(
    prepare(postSystemSysPushConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysPushConfigDelete.requestConfig =
  postSystemSysPushConfigDeleteRequestConfig

export interface IRequestPostSystemSysPushConfigCreate {
  platform: string
  interfaceCode: string
  interfaceName: string
  pushStatusCode: string[]
  pushStatus: string
  extend: string
}

export type IResponsePostSystemSysPushConfigCreate = number

const postSystemSysPushConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPushConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysPushConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysPushConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysPushConfigCreate>(
    prepare(postSystemSysPushConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysPushConfigCreate.requestConfig =
  postSystemSysPushConfigCreateRequestConfig

export interface IRequestPostSystemSysPushConfigUpdate {
  platform: string
  interfaceCode: string
  interfaceName: string
  pushStatusCode: string[]
  pushStatus: string
  extend: string
  id: number
}

export type IResponsePostSystemSysPushConfigUpdate = number

const postSystemSysPushConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPushConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysPushConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysPushConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysPushConfigUpdate>(
    prepare(postSystemSysPushConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysPushConfigUpdate.requestConfig =
  postSystemSysPushConfigUpdateRequestConfig

export interface IRequestGetSystemSysPushConfigStatusByInterface {
  type: string
}

export type IResponseGetSystemSysPushConfigStatusByInterface = {
  code: string
  name: string
}[]

const getSystemSysPushConfigStatusByInterfaceRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPushConfig/statusByInterface',
    method: Method.GET,
    queryNames: ['type'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysPushConfigStatusByInterface = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysPushConfigStatusByInterface,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysPushConfigStatusByInterface>(
    prepare(getSystemSysPushConfigStatusByInterfaceRequestConfig, requestData),
    ...args,
  )
}

getSystemSysPushConfigStatusByInterface.requestConfig =
  getSystemSysPushConfigStatusByInterfaceRequestConfig

export interface IRequestGetSystemSysPushConfigQueryPage {
  pageNum: string
  pageSize: string
  interfaceCode?: string
  platform?: string
}

export interface IResponseGetSystemSysPushConfigQueryPage {
  total: number
  list: {
    id: number
    platform: string
    interfaceCode: string
    interfaceName: string
    pushStatus: string
    createdAt: string
    updatedAt: string
    createBy: string
    modifyBy: string
    extend: string
    platformName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysPushConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPushConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'interfaceCode', 'platform'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysPushConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysPushConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysPushConfigQueryPage>(
    prepare(getSystemSysPushConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysPushConfigQueryPage.requestConfig =
  getSystemSysPushConfigQueryPageRequestConfig

export interface IRequestGetSystemSysPushConfigFindInterfaceList {}

export type IResponseGetSystemSysPushConfigFindInterfaceList = {
  code: string
  name: string
}[]

const getSystemSysPushConfigFindInterfaceListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysPushConfig/findInterfaceList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysPushConfigFindInterfaceList = /*#__PURE__*/ (
  requestData?: IRequestGetSystemSysPushConfigFindInterfaceList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysPushConfigFindInterfaceList>(
    prepare(getSystemSysPushConfigFindInterfaceListRequestConfig, requestData),
    ...args,
  )
}

getSystemSysPushConfigFindInterfaceList.requestConfig =
  getSystemSysPushConfigFindInterfaceListRequestConfig

export interface IRequestPostSystemDataClearConfigDelete {
  tableName: string
  tableColumn: string
}

export type IResponsePostSystemDataClearConfigDelete = string

const postSystemDataClearConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/dataClearConfig/delete',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemDataClearConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemDataClearConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemDataClearConfigDelete>(
    prepare(postSystemDataClearConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemDataClearConfigDelete.requestConfig =
  postSystemDataClearConfigDeleteRequestConfig

export interface IRequestPostSystemDataClearConfigAdd {
  tableName: string
  tableColumn: string
  clearIntervalDay: number
  saveDayNum: number
  status: number
}

export type IResponsePostSystemDataClearConfigAdd = string

const postSystemDataClearConfigAddRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/dataClearConfig/add',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemDataClearConfigAdd = /*#__PURE__*/ (
  requestData: IRequestPostSystemDataClearConfigAdd,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemDataClearConfigAdd>(
    prepare(postSystemDataClearConfigAddRequestConfig, requestData),
    ...args,
  )
}

postSystemDataClearConfigAdd.requestConfig =
  postSystemDataClearConfigAddRequestConfig

export interface IRequestPostSystemDataClearConfigUpdate {
  tableName: string
  tableColumn: string
  clearIntervalDay: number
  saveDayNum: number
  status: number
}

export type IResponsePostSystemDataClearConfigUpdate = string

const postSystemDataClearConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/dataClearConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemDataClearConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemDataClearConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemDataClearConfigUpdate>(
    prepare(postSystemDataClearConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemDataClearConfigUpdate.requestConfig =
  postSystemDataClearConfigUpdateRequestConfig

export interface IRequestPostSystemDataClearConfigList {
  tableName: string
  tableColumn: string
  status: string
  pageNum: number
  pageSize: number
}

export type IResponsePostSystemDataClearConfigList = {
  tableName: string
  tableColumn: string
  saveDayNum: number
  clearIntervalDay: number
  status: number
  createdAt: string
  updatedAt: string
}[]

const postSystemDataClearConfigListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/dataClearConfig/list',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemDataClearConfigList = /*#__PURE__*/ (
  requestData: IRequestPostSystemDataClearConfigList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemDataClearConfigList>(
    prepare(postSystemDataClearConfigListRequestConfig, requestData),
    ...args,
  )
}

postSystemDataClearConfigList.requestConfig =
  postSystemDataClearConfigListRequestConfig

export interface IRequestPostSystemSysMessageChannelConfigDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysMessageChannelConfigDelete = string

const postSystemSysMessageChannelConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysMessageChannelConfig/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysMessageChannelConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysMessageChannelConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysMessageChannelConfigDelete>(
    prepare(postSystemSysMessageChannelConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysMessageChannelConfigDelete.requestConfig =
  postSystemSysMessageChannelConfigDeleteRequestConfig

export interface IRequestPostSystemSysMessageChannelConfigCreate {
  ext: string
  channel: string
  channelName: string
}

export type IResponsePostSystemSysMessageChannelConfigCreate = string

const postSystemSysMessageChannelConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysMessageChannelConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysMessageChannelConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysMessageChannelConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysMessageChannelConfigCreate>(
    prepare(postSystemSysMessageChannelConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysMessageChannelConfigCreate.requestConfig =
  postSystemSysMessageChannelConfigCreateRequestConfig

export interface IRequestPostSystemSysMessageChannelConfigOperate {
  id: string
  /**
   * 1-启用 0-禁用
   */
  status: string
  [k: string]: unknown
}

export type IResponsePostSystemSysMessageChannelConfigOperate = string

const postSystemSysMessageChannelConfigOperateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysMessageChannelConfig/operate',
    method: Method.POST,
    queryNames: ['id', 'status'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysMessageChannelConfigOperate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysMessageChannelConfigOperate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysMessageChannelConfigOperate>(
    prepare(postSystemSysMessageChannelConfigOperateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysMessageChannelConfigOperate.requestConfig =
  postSystemSysMessageChannelConfigOperateRequestConfig

export interface IRequestPostSystemSysMessageChannelConfigUpdate {
  ext: string
  channel: string
  channelName: string
  id: string
}

export type IResponsePostSystemSysMessageChannelConfigUpdate = string

const postSystemSysMessageChannelConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysMessageChannelConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysMessageChannelConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysMessageChannelConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysMessageChannelConfigUpdate>(
    prepare(postSystemSysMessageChannelConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysMessageChannelConfigUpdate.requestConfig =
  postSystemSysMessageChannelConfigUpdateRequestConfig

export interface IRequestGetSystemSysMessageChannelConfigQueryPage {
  pageNum: string
  pageSize: string
  status?: string
  channel?: string
}

export interface IResponseGetSystemSysMessageChannelConfigQueryPage {
  total: number
  list: {
    id: string
    channel: string
    ext: string
    status: number
    createAt: string
    createBy: string
    updateAt: string
    updateBy: string
    tenantId: number
    channelName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysMessageChannelConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysMessageChannelConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'status', 'channel'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysMessageChannelConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysMessageChannelConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysMessageChannelConfigQueryPage>(
    prepare(
      getSystemSysMessageChannelConfigQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemSysMessageChannelConfigQueryPage.requestConfig =
  getSystemSysMessageChannelConfigQueryPageRequestConfig

export interface IRequestPostSystemSysNoticeConfigDelete {
  /**
   * 1-启用 2-禁用
   */
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysNoticeConfigDelete = number

const postSystemSysNoticeConfigDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysNoticeConfig/delete',
    method: Method.POST,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysNoticeConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysNoticeConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysNoticeConfigDelete>(
    prepare(postSystemSysNoticeConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysNoticeConfigDelete.requestConfig =
  postSystemSysNoticeConfigDeleteRequestConfig

export interface IRequestPostSystemSysNoticeConfigCreate {
  scene: string
  platform?: string
  threshold?: string
  thresholdUnit?: string
  frequency?: string
  frequencyUnit?: string
  list: {
    noticeWay: string
    receiver?: string
    content?: string
    channelId?: string
    title?: string
  }[]
}

export type IResponsePostSystemSysNoticeConfigCreate = number

const postSystemSysNoticeConfigCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysNoticeConfig/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysNoticeConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysNoticeConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysNoticeConfigCreate>(
    prepare(postSystemSysNoticeConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysNoticeConfigCreate.requestConfig =
  postSystemSysNoticeConfigCreateRequestConfig

export interface IRequestPostSystemSysNoticeConfigOperate {
  ids: string[]
  /**
   * 1-启用 2-禁用
   */
  type: string
}

export type IResponsePostSystemSysNoticeConfigOperate = number

const postSystemSysNoticeConfigOperateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysNoticeConfig/operate',
    method: Method.POST,
    queryNames: ['type'],
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysNoticeConfigOperate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysNoticeConfigOperate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysNoticeConfigOperate>(
    prepare(postSystemSysNoticeConfigOperateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysNoticeConfigOperate.requestConfig =
  postSystemSysNoticeConfigOperateRequestConfig

export interface IRequestPostSystemSysNoticeConfigUpdate {
  id: string
  scene: string
  platform?: string
  threshold?: string
  thresholdUnit?: string
  frequency?: string
  frequencyUnit?: string
  list: {
    noticeWay: string
    receiver?: string
    content?: string
    channelId?: string
    title?: string
  }[]
}

export type IResponsePostSystemSysNoticeConfigUpdate = number

const postSystemSysNoticeConfigUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysNoticeConfig/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysNoticeConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysNoticeConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysNoticeConfigUpdate>(
    prepare(postSystemSysNoticeConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysNoticeConfigUpdate.requestConfig =
  postSystemSysNoticeConfigUpdateRequestConfig

export interface IRequestGetSystemSysNoticeConfigQueryPage {
  pageNum: string
  pageSize: string
  scene?: string
  noticeWay?: string
  status?: string
}

export interface IResponseGetSystemSysNoticeConfigQueryPage {
  total: number
  list: {
    id: string
    scene: string
    platform: string
    threshold: number
    thresholdUnit: string
    frequency: number
    frequencyUnit: string
    createAt: string
    createBy: string
    updateAt: string
    updateBy: string
    status: number
    timeThreshold: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysNoticeConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysNoticeConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'scene', 'noticeWay', 'status'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysNoticeConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysNoticeConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysNoticeConfigQueryPage>(
    prepare(getSystemSysNoticeConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysNoticeConfigQueryPage.requestConfig =
  getSystemSysNoticeConfigQueryPageRequestConfig

export interface IRequestGetSystemSysNoticeConfigMessageMethods {
  platform: string
}

export type IResponseGetSystemSysNoticeConfigMessageMethods = string[]

const getSystemSysNoticeConfigMessageMethodsRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysNoticeConfig/messageMethods',
    method: Method.GET,
    queryNames: ['platform'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysNoticeConfigMessageMethods = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysNoticeConfigMessageMethods,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysNoticeConfigMessageMethods>(
    prepare(getSystemSysNoticeConfigMessageMethodsRequestConfig, requestData),
    ...args,
  )
}

getSystemSysNoticeConfigMessageMethods.requestConfig =
  getSystemSysNoticeConfigMessageMethodsRequestConfig

export interface IRequestGetSystemSysNoticeConfigFindById {
  id: string
}

export interface IResponseGetSystemSysNoticeConfigFindById {
  id: string
  scene: string
  platform: string
  threshold: number
  thresholdUnit: string
  frequency: number
  frequencyUnit: string
  createAt: string
  createBy: string
  updateAt: string
  updateBy: string
  status: number
  tenantId: number
  ext: string
  timeThreshold: string
  list: {
    id: string
    noticeId: string
    status: number
    noticeWay: string
    title: string
    content: string
    channelId: string
    receiver: string
    createAt: string
    createBy: string
    updateAt: string
    updateBy: string
  }[]
  saasAdmin: boolean
  inlay: boolean
}

const getSystemSysNoticeConfigFindByIdRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysNoticeConfig/findById',
    method: Method.GET,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysNoticeConfigFindById = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysNoticeConfigFindById,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysNoticeConfigFindById>(
    prepare(getSystemSysNoticeConfigFindByIdRequestConfig, requestData),
    ...args,
  )
}

getSystemSysNoticeConfigFindById.requestConfig =
  getSystemSysNoticeConfigFindByIdRequestConfig

export interface IRequestGetSystemBmpShopsDecryptFuseQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopName?: string
  status?: string
}

export interface IResponseGetSystemBmpShopsDecryptFuseQueryPage {
  total: number
  list: {
    id: number
    platformName: string
    shopName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemBmpShopsDecryptFuseQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/bmpShopsDecryptFuse/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'platform', 'shopName', 'status'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemBmpShopsDecryptFuseQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemBmpShopsDecryptFuseQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemBmpShopsDecryptFuseQueryPage>(
    prepare(getSystemBmpShopsDecryptFuseQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemBmpShopsDecryptFuseQueryPage.requestConfig =
  getSystemBmpShopsDecryptFuseQueryPageRequestConfig

export interface IRequestGetSystemBmpShopsDecryptFuseGetFuseDetail {}

export type IResponseGetSystemBmpShopsDecryptFuseGetFuseDetail = string

const getSystemBmpShopsDecryptFuseGetFuseDetailRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/bmpShopsDecryptFuse/getFuseDetail',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemBmpShopsDecryptFuseGetFuseDetail = /*#__PURE__*/ (
  requestData?: IRequestGetSystemBmpShopsDecryptFuseGetFuseDetail,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemBmpShopsDecryptFuseGetFuseDetail>(
    prepare(
      getSystemBmpShopsDecryptFuseGetFuseDetailRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getSystemBmpShopsDecryptFuseGetFuseDetail.requestConfig =
  getSystemBmpShopsDecryptFuseGetFuseDetailRequestConfig

export interface IRequestPostSystemSysAiConfigDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysAiConfigDelete = string

const postSystemSysAiConfigDeleteRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysAiConfig/delete',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysAiConfigDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysAiConfigDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysAiConfigDelete>(
    prepare(postSystemSysAiConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysAiConfigDelete.requestConfig =
  postSystemSysAiConfigDeleteRequestConfig

export interface IRequestPostSystemSysAiConfigEnable {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysAiConfigEnable = string

const postSystemSysAiConfigEnableRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysAiConfig/enable',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysAiConfigEnable = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysAiConfigEnable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysAiConfigEnable>(
    prepare(postSystemSysAiConfigEnableRequestConfig, requestData),
    ...args,
  )
}

postSystemSysAiConfigEnable.requestConfig =
  postSystemSysAiConfigEnableRequestConfig

export interface IRequestPostSystemSysAiConfigCreate {
  userCode: string
  appKey: string
  type: string
}

export type IResponsePostSystemSysAiConfigCreate = string

const postSystemSysAiConfigCreateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysAiConfig/create',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysAiConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysAiConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysAiConfigCreate>(
    prepare(postSystemSysAiConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysAiConfigCreate.requestConfig =
  postSystemSysAiConfigCreateRequestConfig

export interface IRequestPostSystemSysAiConfigDisable {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysAiConfigDisable = string

const postSystemSysAiConfigDisableRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysAiConfig/disable',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysAiConfigDisable = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysAiConfigDisable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysAiConfigDisable>(
    prepare(postSystemSysAiConfigDisableRequestConfig, requestData),
    ...args,
  )
}

postSystemSysAiConfigDisable.requestConfig =
  postSystemSysAiConfigDisableRequestConfig

export interface IRequestPostSystemSysAiConfigUpdate {
  userCode: string
  appKey: string
  type: string
  id: string
}

export type IResponsePostSystemSysAiConfigUpdate = string

const postSystemSysAiConfigUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysAiConfig/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysAiConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysAiConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysAiConfigUpdate>(
    prepare(postSystemSysAiConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysAiConfigUpdate.requestConfig =
  postSystemSysAiConfigUpdateRequestConfig

export interface IRequestGetSystemSysAiConfigQueryPage {
  pageNum: string
  pageSize: string
  userCode?: string
  appKey?: string
}

export interface IResponseGetSystemSysAiConfigQueryPage {
  total: number
  list: {
    id: string
    userCode: string
    appKey: string
    type: string
    status: number
    updatedAt: string
    createdAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysAiConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysAiConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'userCode', 'appKey'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysAiConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysAiConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysAiConfigQueryPage>(
    prepare(getSystemSysAiConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysAiConfigQueryPage.requestConfig =
  getSystemSysAiConfigQueryPageRequestConfig

export interface IRequestPostOrderSysPushSupplementTaskRepeal {
  taskId: string
  [k: string]: unknown
}

export type IResponsePostOrderSysPushSupplementTaskRepeal = string

const postOrderSysPushSupplementTaskRepealRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysPushSupplementTask/repeal',
    method: Method.POST,
    queryNames: ['taskId'],
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysPushSupplementTaskRepeal = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysPushSupplementTaskRepeal,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysPushSupplementTaskRepeal>(
    prepare(postOrderSysPushSupplementTaskRepealRequestConfig, requestData),
    ...args,
  )
}

postOrderSysPushSupplementTaskRepeal.requestConfig =
  postOrderSysPushSupplementTaskRepealRequestConfig

export interface IRequestPostOrderSysPushSupplementTaskDelete {
  taskId: string
  [k: string]: unknown
}

export type IResponsePostOrderSysPushSupplementTaskDelete = string

const postOrderSysPushSupplementTaskDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysPushSupplementTask/delete',
    method: Method.POST,
    queryNames: ['taskId'],
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysPushSupplementTaskDelete = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysPushSupplementTaskDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysPushSupplementTaskDelete>(
    prepare(postOrderSysPushSupplementTaskDeleteRequestConfig, requestData),
    ...args,
  )
}

postOrderSysPushSupplementTaskDelete.requestConfig =
  postOrderSysPushSupplementTaskDeleteRequestConfig

export interface IRequestPostOrderSysPushSupplementTaskCreate {
  documentTypes: string
  startTime?: string
  endTime?: string
  remark?: string
  pushStatus?: string
  shopCode?: string
  platform?: string
}

export type IResponsePostOrderSysPushSupplementTaskCreate = string

const postOrderSysPushSupplementTaskCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysPushSupplementTask/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysPushSupplementTaskCreate = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysPushSupplementTaskCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysPushSupplementTaskCreate>(
    prepare(postOrderSysPushSupplementTaskCreateRequestConfig, requestData),
    ...args,
  )
}

postOrderSysPushSupplementTaskCreate.requestConfig =
  postOrderSysPushSupplementTaskCreateRequestConfig

export interface IRequestGetOrderSysPushSupplementTaskFindById {
  taskId: string
}

export interface IResponseGetOrderSysPushSupplementTaskFindById {
  taskId: number
  documentTypes: string
  startTime: string
  endTime: string
  pushStatus: number
  status: number
  quantity: number
  remark: string
  createBy: string
  createdAt: string
  updateBy: string
  updatedAt: string
  tenantId: number
  shopCode: string
  platform: string
}

const getOrderSysPushSupplementTaskFindByIdRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysPushSupplementTask/findById',
    method: Method.GET,
    queryNames: ['taskId'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysPushSupplementTaskFindById = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysPushSupplementTaskFindById,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysPushSupplementTaskFindById>(
    prepare(getOrderSysPushSupplementTaskFindByIdRequestConfig, requestData),
    ...args,
  )
}

getOrderSysPushSupplementTaskFindById.requestConfig =
  getOrderSysPushSupplementTaskFindByIdRequestConfig

export interface IRequestPostOrderSysPushSupplementTaskUpdate {
  documentTypes: string
  startTime?: string
  endTime?: string
  remark?: string
  pushStatus?: string
  shopCode?: string
  platform?: string
  taskId: number
}

export type IResponsePostOrderSysPushSupplementTaskUpdate = string

const postOrderSysPushSupplementTaskUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysPushSupplementTask/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysPushSupplementTaskUpdate = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysPushSupplementTaskUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysPushSupplementTaskUpdate>(
    prepare(postOrderSysPushSupplementTaskUpdateRequestConfig, requestData),
    ...args,
  )
}

postOrderSysPushSupplementTaskUpdate.requestConfig =
  postOrderSysPushSupplementTaskUpdateRequestConfig

export interface IRequestGetOrderSysPushSupplementTaskQueryPage {
  pageNum: string
  pageSize: string
  taskId?: string
  documentTypes?: string
  startTime?: string
  endTime?: string
  remark?: string
  pushStatus?: string
}

export interface IResponseGetOrderSysPushSupplementTaskQueryPage {
  total: number
  list: {
    taskId: number
    documentTypes: string
    startTime: string
    endTime: string
    pushStatus: number
    status: number
    quantity: number
    remark: string
    createBy: string
    createdAt: string
    updateBy: string
    updatedAt: string
    tenantId: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysPushSupplementTaskQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysPushSupplementTask/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'taskId',
      'documentTypes',
      'startTime',
      'endTime',
      'remark',
      'pushStatus',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysPushSupplementTaskQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysPushSupplementTaskQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysPushSupplementTaskQueryPage>(
    prepare(getOrderSysPushSupplementTaskQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysPushSupplementTaskQueryPage.requestConfig =
  getOrderSysPushSupplementTaskQueryPageRequestConfig

export interface IRequestGetOrderSysPushSupplementTaskStatusList {}

export type IResponseGetOrderSysPushSupplementTaskStatusList = {
  code: number
  name: string
}[]

const getOrderSysPushSupplementTaskStatusListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysPushSupplementTask/statusList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysPushSupplementTaskStatusList = /*#__PURE__*/ (
  requestData?: IRequestGetOrderSysPushSupplementTaskStatusList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysPushSupplementTaskStatusList>(
    prepare(getOrderSysPushSupplementTaskStatusListRequestConfig, requestData),
    ...args,
  )
}

getOrderSysPushSupplementTaskStatusList.requestConfig =
  getOrderSysPushSupplementTaskStatusListRequestConfig

export interface IRequestGetOrderSysPushSupplementTaskTypeList {}

export type IResponseGetOrderSysPushSupplementTaskTypeList = {
  code: number
  name: string
}[]

const getOrderSysPushSupplementTaskTypeListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysPushSupplementTask/typeList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysPushSupplementTaskTypeList = /*#__PURE__*/ (
  requestData?: IRequestGetOrderSysPushSupplementTaskTypeList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysPushSupplementTaskTypeList>(
    prepare(getOrderSysPushSupplementTaskTypeListRequestConfig, requestData),
    ...args,
  )
}

getOrderSysPushSupplementTaskTypeList.requestConfig =
  getOrderSysPushSupplementTaskTypeListRequestConfig

export interface IRequestPostOrderSysStdEcHoldLogPushByLog {
  platform?: string
  shopCode?: string
  id?: string
}

export type IResponsePostOrderSysStdEcHoldLogPushByLog = string

const postOrderSysStdEcHoldLogPushByLogRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdEcHoldLog/pushByLog',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postOrderSysStdEcHoldLogPushByLog = /*#__PURE__*/ (
  requestData: IRequestPostOrderSysStdEcHoldLogPushByLog,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderSysStdEcHoldLogPushByLog>(
    prepare(postOrderSysStdEcHoldLogPushByLogRequestConfig, requestData),
    ...args,
  )
}

postOrderSysStdEcHoldLogPushByLog.requestConfig =
  postOrderSysStdEcHoldLogPushByLogRequestConfig

export interface IRequestGetOrderSysStdEcHoldLogQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  outerSkuId?: string
  updatedAtStart?: string
  updatedAtEnd?: string
}

export interface IResponseGetOrderSysStdEcHoldLogQueryPage {
  total: number
  list: {
    id: string
    platform: string
    shopCode: string
    platformName: string
    shopName: string
    outerSkuId: string
    skuId: string
    version: string
    withHoldQuantity: number
    createdAt: string
    updatedAt: string
    pushStatus: number
    pushTime: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderSysStdEcHoldLogQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/sysStdEcHoldLog/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'outerSkuId',
      'updatedAtStart',
      'updatedAtEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderSysStdEcHoldLogQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderSysStdEcHoldLogQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderSysStdEcHoldLogQueryPage>(
    prepare(getOrderSysStdEcHoldLogQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderSysStdEcHoldLogQueryPage.requestConfig =
  getOrderSysStdEcHoldLogQueryPageRequestConfig

export interface IRequestPostSystemApiLogConfigOperator {
  method: string
  status: number
  id: number
}

export type IResponsePostSystemApiLogConfigOperator = string

const postSystemApiLogConfigOperatorRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/apiLogConfig/operator',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemApiLogConfigOperator = /*#__PURE__*/ (
  requestData: IRequestPostSystemApiLogConfigOperator,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemApiLogConfigOperator>(
    prepare(postSystemApiLogConfigOperatorRequestConfig, requestData),
    ...args,
  )
}

postSystemApiLogConfigOperator.requestConfig =
  postSystemApiLogConfigOperatorRequestConfig

export interface IRequestPostSystemApiLogConfigUpdate {
  method: string
  status: number
  id: number
}

export type IResponsePostSystemApiLogConfigUpdate = string

const postSystemApiLogConfigUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/apiLogConfig/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemApiLogConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemApiLogConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemApiLogConfigUpdate>(
    prepare(postSystemApiLogConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemApiLogConfigUpdate.requestConfig =
  postSystemApiLogConfigUpdateRequestConfig

export interface IRequestPostSystemApiLogConfigRefreshCache {}

export type IResponsePostSystemApiLogConfigRefreshCache = string

const postSystemApiLogConfigRefreshCacheRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/apiLogConfig/refreshCache',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemApiLogConfigRefreshCache = /*#__PURE__*/ (
  requestData?: IRequestPostSystemApiLogConfigRefreshCache,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemApiLogConfigRefreshCache>(
    prepare(postSystemApiLogConfigRefreshCacheRequestConfig, requestData),
    ...args,
  )
}

postSystemApiLogConfigRefreshCache.requestConfig =
  postSystemApiLogConfigRefreshCacheRequestConfig

export interface IRequestPostSystemApiLogConfigCreate {
  method: string
  status: number
}

export type IResponsePostSystemApiLogConfigCreate = string

const postSystemApiLogConfigCreateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/apiLogConfig/create',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemApiLogConfigCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemApiLogConfigCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemApiLogConfigCreate>(
    prepare(postSystemApiLogConfigCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemApiLogConfigCreate.requestConfig =
  postSystemApiLogConfigCreateRequestConfig

export interface IRequestGetSystemApiLogQueryPage {
  pageNum: string
  pageSize: string
  startTime?: string
  endTime?: string
  platform?: string
  shopCode?: string
  method?: string
  firstTxnNo?: string
  requestBody?: string
  status?: string
}

export interface IResponseGetSystemApiLogQueryPage {
  total: number
  list: {
    id: string
    ip: string
    shopCode: string
    platform: string
    method: string
    methodName: string
    requestId: string
    requestBody: string
    respCode: string
    respMsg: string
    respBody: string
    requestTime: number
    status: number
    updatedAt: string
    createdAt: string
    firstTxnNo: string
    secondTxnNo: string
    platformRequestBody: string
    platformRespBody: string
    tenantId: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemApiLogQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/apiLog/queryPage',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'startTime',
    'endTime',
    'platform',
    'shopCode',
    'method',
    'firstTxnNo',
    'requestBody',
    'status',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getSystemApiLogQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemApiLogQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemApiLogQueryPage>(
    prepare(getSystemApiLogQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemApiLogQueryPage.requestConfig = getSystemApiLogQueryPageRequestConfig

export interface IRequestGetSystemApiLogGetBackLogMethods {}

export type IResponseGetSystemApiLogGetBackLogMethods = {
  name: string
  value: string
}[]

const getSystemApiLogGetBackLogMethodsRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/apiLog/getBackLogMethods',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemApiLogGetBackLogMethods = /*#__PURE__*/ (
  requestData?: IRequestGetSystemApiLogGetBackLogMethods,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemApiLogGetBackLogMethods>(
    prepare(getSystemApiLogGetBackLogMethodsRequestConfig, requestData),
    ...args,
  )
}

getSystemApiLogGetBackLogMethods.requestConfig =
  getSystemApiLogGetBackLogMethodsRequestConfig

export interface IRequestGetSystemApiLogConfigQueryPage {
  pageNum: string
  pageSize: string
  method?: string
  status?: string
}

export interface IResponseGetSystemApiLogConfigQueryPage {
  total: number
  list: {
    id: number
    method: string
    methodName: string
    status: number
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemApiLogConfigQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/apiLogConfig/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'method', 'status'],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemApiLogConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemApiLogConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemApiLogConfigQueryPage>(
    prepare(getSystemApiLogConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemApiLogConfigQueryPage.requestConfig =
  getSystemApiLogConfigQueryPageRequestConfig

export interface IRequestPostOrderJobShopsLogQueryPage {
  platform?: string
  shopCode?: string
  excuteType?: string
  queryStartTime?: string
  queryEndTime?: string
  pageNum: string
  pageSize: string
}

export interface IResponsePostOrderJobShopsLogQueryPage {
  total: number
  list: {
    shopCode: string
    shopName: string
    tenantId: string
    platform: string
    excuteType: string
    startTime: string
    endTime: string
    excuteTime: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postOrderJobShopsLogQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/jobShopsLog/queryPage',
    method: Method.POST,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.json,
  }

export const postOrderJobShopsLogQueryPage = /*#__PURE__*/ (
  requestData: IRequestPostOrderJobShopsLogQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostOrderJobShopsLogQueryPage>(
    prepare(postOrderJobShopsLogQueryPageRequestConfig, requestData),
    ...args,
  )
}

postOrderJobShopsLogQueryPage.requestConfig =
  postOrderJobShopsLogQueryPageRequestConfig

export interface IRequestGetSystemSysUserOperateLogQueryPage {
  pageNum: string
  pageSize: string
  startTime?: string
  endTime?: string
  category?: string
  place?: string
  operate?: string
}

export interface IResponseGetSystemSysUserOperateLogQueryPage {
  total: number
  list: {
    id: number
    userId: string
    userCode: string
    userName: string
    ip: string
    place: string
    category: string
    operate: string
    createdAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysUserOperateLogQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysUserOperateLog/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'startTime',
      'endTime',
      'category',
      'place',
      'operate',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysUserOperateLogQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysUserOperateLogQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysUserOperateLogQueryPage>(
    prepare(getSystemSysUserOperateLogQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysUserOperateLogQueryPage.requestConfig =
  getSystemSysUserOperateLogQueryPageRequestConfig

export interface IRequestGetSystemSysUserOperateLogPlaceList {}

export type IResponseGetSystemSysUserOperateLogPlaceList = string[]

const getSystemSysUserOperateLogPlaceListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysUserOperateLog/placeList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysUserOperateLogPlaceList = /*#__PURE__*/ (
  requestData?: IRequestGetSystemSysUserOperateLogPlaceList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysUserOperateLogPlaceList>(
    prepare(getSystemSysUserOperateLogPlaceListRequestConfig, requestData),
    ...args,
  )
}

getSystemSysUserOperateLogPlaceList.requestConfig =
  getSystemSysUserOperateLogPlaceListRequestConfig

export interface IRequestGetSystemSysUserOperateLogCategoryList {}

export type IResponseGetSystemSysUserOperateLogCategoryList = string[]

const getSystemSysUserOperateLogCategoryListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysUserOperateLog/categoryList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysUserOperateLogCategoryList = /*#__PURE__*/ (
  requestData?: IRequestGetSystemSysUserOperateLogCategoryList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysUserOperateLogCategoryList>(
    prepare(getSystemSysUserOperateLogCategoryListRequestConfig, requestData),
    ...args,
  )
}

getSystemSysUserOperateLogCategoryList.requestConfig =
  getSystemSysUserOperateLogCategoryListRequestConfig

export interface IRequestGetSystemSysStockUpdateLogQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  barcode?: string
  numIid?: string
  skuId?: string
  startTime?: string
  endTime?: string
  result?: string
}

export interface IResponseGetSystemSysStockUpdateLogQueryPage {
  total: number
  list: {
    id: string
    ip: string
    shopCode: string
    platform: string
    method: string
    methodName: string
    requestId: string
    requestBody: string
    respCode: string
    respMsg: string
    respBody: string
    requestTime: number
    status: number
    updatedAt: string
    createdAt: string
    firstTxnNo: string
    secondTxnNo: string
    platformRequestBody: string
    platformRespBody: string
    tenantId: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysStockUpdateLogQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysStockUpdateLog/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
      'barcode',
      'numIid',
      'skuId',
      'startTime',
      'endTime',
      'result',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysStockUpdateLogQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysStockUpdateLogQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysStockUpdateLogQueryPage>(
    prepare(getSystemSysStockUpdateLogQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysStockUpdateLogQueryPage.requestConfig =
  getSystemSysStockUpdateLogQueryPageRequestConfig

export interface IRequestGetSystemSysStockUpdateLogDownload {
  platform?: string
  shopCode?: string
  barcode?: string
  numIid?: string
  skuId?: string
  startTime?: string
  endTime?: string
  result?: string
}

export interface IResponseGetSystemSysStockUpdateLogDownload {
  fileName: string
  content: string
}

const getSystemSysStockUpdateLogDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysStockUpdateLog/download',
    method: Method.GET,
    queryNames: [
      'platform',
      'shopCode',
      'barcode',
      'numIid',
      'skuId',
      'startTime',
      'endTime',
      'result',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getSystemSysStockUpdateLogDownload = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysStockUpdateLogDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysStockUpdateLogDownload>(
    prepare(getSystemSysStockUpdateLogDownloadRequestConfig, requestData),
    ...args,
  )
}

getSystemSysStockUpdateLogDownload.requestConfig =
  getSystemSysStockUpdateLogDownloadRequestConfig

export interface IRequestGetOrderPlatformNoticeLogQueryPage {
  pageNum: string
  pageSize: string
  firstTxnNo?: string
  platform?: string
  createdStart?: string
  createdEnd?: string
  status?: string
  requestBody?: string
}

export interface IResponseGetOrderPlatformNoticeLogQueryPage {
  total: number
  list: {
    id: number
    ip: string
    appKey: string
    firstTxnNo: string
    platform: string
    requestId: string
    noticeUrl: string
    methodName: string
    status: number
    requestBody: string
    respBody: string
    requestTime: number
    updatedAt: string
    createdAt: string
    tenantId: string
    platformName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformNoticeLogQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformNoticeLog/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'firstTxnNo',
      'platform',
      'createdStart',
      'createdEnd',
      'status',
      'requestBody',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformNoticeLogQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformNoticeLogQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformNoticeLogQueryPage>(
    prepare(getOrderPlatformNoticeLogQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderPlatformNoticeLogQueryPage.requestConfig =
  getOrderPlatformNoticeLogQueryPageRequestConfig

export interface IRequestGetSystemSysAlarmQueryList {
  pageNum: string
  pageSize: string
}

export interface IResponseGetSystemSysAlarmQueryList {
  total: number
  list: {
    id: string
    alarmType: string
    num: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysAlarmQueryListRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysAlarm/queryList',
  method: Method.GET,
  queryNames: ['pageNum', 'pageSize'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemSysAlarmQueryList = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysAlarmQueryList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysAlarmQueryList>(
    prepare(getSystemSysAlarmQueryListRequestConfig, requestData),
    ...args,
  )
}

getSystemSysAlarmQueryList.requestConfig =
  getSystemSysAlarmQueryListRequestConfig

export interface IRequestGetSystemSysAlarmQueryPage {
  pageNum: string
  pageSize: string
  platform?: string
  shopCode?: string
  alarmType?: string
  billType?: string
  createdAtStartDate?: string
  createdAtEndDate?: string
  updateAtStartDate?: string
  updateAtEndDate?: string
}

export interface IResponseGetSystemSysAlarmQueryPage {
  total: number
  list: {
    id: string
    alarmType: string
    num: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysAlarmQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysAlarm/queryPage',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'platform',
    'shopCode',
    'alarmType',
    'billType',
    'createdAtStartDate',
    'createdAtEndDate',
    'updateAtStartDate',
    'updateAtEndDate',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getSystemSysAlarmQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysAlarmQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysAlarmQueryPage>(
    prepare(getSystemSysAlarmQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysAlarmQueryPage.requestConfig =
  getSystemSysAlarmQueryPageRequestConfig

export interface IRequestPostSystemSysAlarmDelete {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysAlarmDelete = string

const postSystemSysAlarmDeleteRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysAlarm/delete',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysAlarmDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysAlarmDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysAlarmDelete>(
    prepare(postSystemSysAlarmDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysAlarmDelete.requestConfig = postSystemSysAlarmDeleteRequestConfig

export type IRequestPostSystemSysAlarmBatchDelete = string[]

export type IResponsePostSystemSysAlarmBatchDelete = string

const postSystemSysAlarmBatchDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysAlarm/batchDelete',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysAlarmBatchDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysAlarmBatchDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysAlarmBatchDelete>(
    prepare(postSystemSysAlarmBatchDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemSysAlarmBatchDelete.requestConfig =
  postSystemSysAlarmBatchDeleteRequestConfig

export interface IRequestGetOrderPlatformMessageInfoLogQueryPage {
  pageNum: string
  pageSize: string
  keyWord?: string
}

export interface IResponseGetOrderPlatformMessageInfoLogQueryPage {
  total: number
  list: {
    id: string
    ip: string
    shopCode: string
    platform: string
    method: string
    methodName: string
    requestId: string
    requestBody: string
    respCode: string
    respMsg: string
    respBody: string
    requestTime: number
    status: number
    updatedAt: string
    createdAt: string
    firstTxnNo: string
    secondTxnNo: string
    platformRequestBody: string
    platformRespBody: string
    tenantId: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getOrderPlatformMessageInfoLogQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/order/platformMessageInfoLog/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize', 'keyWord'],
    requestBodyType: RequestBodyType.query,
  }

export const getOrderPlatformMessageInfoLogQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetOrderPlatformMessageInfoLogQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetOrderPlatformMessageInfoLogQueryPage>(
    prepare(getOrderPlatformMessageInfoLogQueryPageRequestConfig, requestData),
    ...args,
  )
}

getOrderPlatformMessageInfoLogQueryPage.requestConfig =
  getOrderPlatformMessageInfoLogQueryPageRequestConfig

export interface IRequestPostSystemSysConfigUpdate {
  id: number
  type: string
  /**
   * 0-关闭 1-开启
   */
  value: string
}

export type IResponsePostSystemSysConfigUpdate = string

const postSystemSysConfigUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysConfig/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysConfigUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysConfigUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysConfigUpdate>(
    prepare(postSystemSysConfigUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysConfigUpdate.requestConfig = postSystemSysConfigUpdateRequestConfig

export interface IRequestGetSystemSysConfigQueryPage {
  pageNum: string
  pageSize: string
}

export interface IResponseGetSystemSysConfigQueryPage {
  total: number
  list: {
    id: number
    value: string
    defaultValue: string
    template: string
    status: number
    type: string
    remark: string
    createdAt: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysConfigQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysConfig/queryPage',
  method: Method.GET,
  queryNames: ['pageNum', 'pageSize'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemSysConfigQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysConfigQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysConfigQueryPage>(
    prepare(getSystemSysConfigQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysConfigQueryPage.requestConfig =
  getSystemSysConfigQueryPageRequestConfig

export interface IRequestPostSystemUserEnable {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemUserEnable = string

const postSystemUserEnableRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/enable',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserEnable = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserEnable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserEnable>(
    prepare(postSystemUserEnableRequestConfig, requestData),
    ...args,
  )
}

postSystemUserEnable.requestConfig = postSystemUserEnableRequestConfig

export interface IRequestPostSystemUserDisable {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemUserDisable = string

const postSystemUserDisableRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/disable',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserDisable = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserDisable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserDisable>(
    prepare(postSystemUserDisableRequestConfig, requestData),
    ...args,
  )
}

postSystemUserDisable.requestConfig = postSystemUserDisableRequestConfig

export interface IRequestPostSystemUserUpdate {
  code: string
  name: string
  tel: string
  email: string
  roleIds: number[]
  remark: string
  id: string
}

export type IResponsePostSystemUserUpdate = string

const postSystemUserUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserUpdate>(
    prepare(postSystemUserUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemUserUpdate.requestConfig = postSystemUserUpdateRequestConfig

export interface IRequestGetSystemUserFindById {
  id: string
}

export interface IResponseGetSystemUserFindById {
  name: string
  remark: string
  email: string
  code: string
  status: string
  createBy: string
  password: string
  id: string
  createTime: string
  tel: string
  isInitPwd: string
  pwdErrNum: number
  tenantId: number
  bindIam: number
  roleIds: string[]
}

const getSystemUserFindByIdRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/findById',
  method: Method.GET,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemUserFindById = /*#__PURE__*/ (
  requestData: IRequestGetSystemUserFindById,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemUserFindById>(
    prepare(getSystemUserFindByIdRequestConfig, requestData),
    ...args,
  )
}

getSystemUserFindById.requestConfig = getSystemUserFindByIdRequestConfig

export interface IRequestPostSystemUserUnlock {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemUserUnlock = string

const postSystemUserUnlockRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/unlock',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserUnlock = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserUnlock,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserUnlock>(
    prepare(postSystemUserUnlockRequestConfig, requestData),
    ...args,
  )
}

postSystemUserUnlock.requestConfig = postSystemUserUnlockRequestConfig

export interface IRequestPostSystemUserResetPwd {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemUserResetPwd = string

const postSystemUserResetPwdRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/resetPwd',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserResetPwd = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserResetPwd,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserResetPwd>(
    prepare(postSystemUserResetPwdRequestConfig, requestData),
    ...args,
  )
}

postSystemUserResetPwd.requestConfig = postSystemUserResetPwdRequestConfig

export interface IRequestGetSystemUserQueryPage {
  pageNum: string
  pageSize: string
  code?: string
  name?: string
  tel?: string
  email?: string
  createBy?: string
  status?: string
}

export interface IResponseGetSystemUserQueryPage {
  total: number
  list: {
    name: string
    code: string
    status: string
    password: string
    id: string
    createTime: string
    tel: string
    email: string
    bindIam: number
    remark: string
    department: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemUserQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/queryPage',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'code',
    'name',
    'tel',
    'email',
    'createBy',
    'status',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getSystemUserQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemUserQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemUserQueryPage>(
    prepare(getSystemUserQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemUserQueryPage.requestConfig = getSystemUserQueryPageRequestConfig

export interface IRequestPostSystemUserCreate {
  code: string
  name: string
  tel: string
  email: string
  roleIds: number[]
  remark: string
}

export type IResponsePostSystemUserCreate = string

const postSystemUserCreateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/user/create',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemUserCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemUserCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemUserCreate>(
    prepare(postSystemUserCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemUserCreate.requestConfig = postSystemUserCreateRequestConfig

export interface IRequestPostSystemSysRoleEnable {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysRoleEnable = string

const postSystemSysRoleEnableRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysRole/enable',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysRoleEnable = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysRoleEnable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysRoleEnable>(
    prepare(postSystemSysRoleEnableRequestConfig, requestData),
    ...args,
  )
}

postSystemSysRoleEnable.requestConfig = postSystemSysRoleEnableRequestConfig

export interface IRequestPostSystemSysRoleCreate {
  code: string
  name: string
  shopCodes: string[]
  platformList: string[]
  companyList: string[]
  remark: string
  purviewIds: number[]
  permissionMenus: {
    purviewId: number
    permissionId: number
  }[]
}

export type IResponsePostSystemSysRoleCreate = string

const postSystemSysRoleCreateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysRole/create',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysRoleCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysRoleCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysRoleCreate>(
    prepare(postSystemSysRoleCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysRoleCreate.requestConfig = postSystemSysRoleCreateRequestConfig

export interface IRequestPostSystemSysMenuMenuPermissionTree {
  userId: string
  appId: string
}

export type IResponsePostSystemSysMenuMenuPermissionTree = {
  purviewId: number
  parentId: number
  businessObjectCode: string
  name: string
  sqlOrder: number
  children: {
    purviewId: number
    parentId: number
    businessObjectCode: string
    name: string
    url: string
    sqlOrder: number
    permissions: {
      permissionId: number
      purviewId: number
      permissionName: string
      permissionCode: string
    }[]
  }[]
}[]

const postSystemSysMenuMenuPermissionTreeRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/sysMenu/menuPermissionTree',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemSysMenuMenuPermissionTree = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysMenuMenuPermissionTree,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysMenuMenuPermissionTree>(
    prepare(postSystemSysMenuMenuPermissionTreeRequestConfig, requestData),
    ...args,
  )
}

postSystemSysMenuMenuPermissionTree.requestConfig =
  postSystemSysMenuMenuPermissionTreeRequestConfig

export interface IRequestPostSystemSysRoleDisable {
  id: string
  [k: string]: unknown
}

export type IResponsePostSystemSysRoleDisable = string

const postSystemSysRoleDisableRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysRole/disable',
  method: Method.POST,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysRoleDisable = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysRoleDisable,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysRoleDisable>(
    prepare(postSystemSysRoleDisableRequestConfig, requestData),
    ...args,
  )
}

postSystemSysRoleDisable.requestConfig = postSystemSysRoleDisableRequestConfig

export interface IRequestPostSystemSysRoleUpdate {
  code: string
  name: string
  shopCodes: string[]
  platformList: string[]
  companyList: string[]
  remark: string
  purviewIds: number[]
  permissionMenus: {
    purviewId: number
    permissionId: number
  }[]
  id: number
}

export type IResponsePostSystemSysRoleUpdate = string

const postSystemSysRoleUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysRole/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemSysRoleUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemSysRoleUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemSysRoleUpdate>(
    prepare(postSystemSysRoleUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemSysRoleUpdate.requestConfig = postSystemSysRoleUpdateRequestConfig

export interface IRequestGetSystemSysRoleQueryPage {
  pageNum: string
  pageSize: string
  names?: string
  codes?: string
  status?: string
  createdAtStartDate?: string
  createdAtEndDate?: string
  updateAtStartDate?: string
  updateAtEndDate?: string
}

export interface IResponseGetSystemSysRoleQueryPage {
  total: number
  list: {
    id: number
    code: string
    name: string
    status: string
    remark: string
    createdAt: string
    updatedAt: string
    createBy: string
    updateBy: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemSysRoleQueryPageRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysRole/queryPage',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'names',
    'codes',
    'status',
    'createdAtStartDate',
    'createdAtEndDate',
    'updateAtStartDate',
    'updateAtEndDate',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getSystemSysRoleQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysRoleQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysRoleQueryPage>(
    prepare(getSystemSysRoleQueryPageRequestConfig, requestData),
    ...args,
  )
}

getSystemSysRoleQueryPage.requestConfig = getSystemSysRoleQueryPageRequestConfig

export interface IRequestGetSystemSysRoleFindById {
  id: string
}

export interface IResponseGetSystemSysRoleFindById {
  id: number
  code: string
  name: string
  status: string
  remark: string
  updatedAt: string
  createBy: string
  updateBy: string
  shopCodes: string[]
  purviewIds: number[]
  platformList: string[]
  companyList: string[]
  permissionMenus: {
    roleId: number
    permissionId: number
    purviewId: number
    status: number
  }[]
}

const getSystemSysRoleFindByIdRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/sysRole/findById',
  method: Method.GET,
  queryNames: ['id'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemSysRoleFindById = /*#__PURE__*/ (
  requestData: IRequestGetSystemSysRoleFindById,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemSysRoleFindById>(
    prepare(getSystemSysRoleFindByIdRequestConfig, requestData),
    ...args,
  )
}

getSystemSysRoleFindById.requestConfig = getSystemSysRoleFindByIdRequestConfig

export interface IRequestPostPrintLogisticsExpressInterceptPush {
  requestId: string
}

export type IResponsePostPrintLogisticsExpressInterceptPush = string

const postPrintLogisticsExpressInterceptPushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/logistics/express/intercept/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintLogisticsExpressInterceptPush = /*#__PURE__*/ (
  requestData: IRequestPostPrintLogisticsExpressInterceptPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintLogisticsExpressInterceptPush>(
    prepare(postPrintLogisticsExpressInterceptPushRequestConfig, requestData),
    ...args,
  )
}

postPrintLogisticsExpressInterceptPush.requestConfig =
  postPrintLogisticsExpressInterceptPushRequestConfig

export interface IRequestPostPrintLogisticsExpressInterceptList {
  startTime?: string
  endTime?: string
  platformCode?: string
  waybillCode?: string
  requestId?: string
  success?: string
  status?: string
  pushStatus?: string
  pageNum: number
  pageSize: number
}

export interface IResponsePostPrintLogisticsExpressInterceptList {
  total: number
  list: {
    requestId: string
    tenantCode: string
    platformCode: string
    authName: null
    waybillCode: string
    success: number
    status: null
    statusRemark: null
    pushStatus: null
    pushRemark: null
    createTime: string
    updateTime: null
    requestParam: string
    responseParam: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postPrintLogisticsExpressInterceptListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/logistics/express/intercept/list',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintLogisticsExpressInterceptList = /*#__PURE__*/ (
  requestData: IRequestPostPrintLogisticsExpressInterceptList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintLogisticsExpressInterceptList>(
    prepare(postPrintLogisticsExpressInterceptListRequestConfig, requestData),
    ...args,
  )
}

postPrintLogisticsExpressInterceptList.requestConfig =
  postPrintLogisticsExpressInterceptListRequestConfig

export interface IRequestGetPrintLogisticsExpressInterceptGetInterfaceParam {
  requestId: string
}

export interface IResponseGetPrintLogisticsExpressInterceptGetInterfaceParam {
  requestId: string
  method: string
  requestParam: string
  responseParam: string
  requestParamPlatform: string
  responseParamPlatform: string
  createTime: string
  updateTime: string
  requestParamPlatformJson: null
  responseParamPlatformJson: null
  requestParamJson: {
    charset: string
    biz_content: string
    method: string
    format: string
    sign: string
    check: boolean
    version: string
    platform_code: string
    app_id: string
    request_id: string
    sign_type: string
    tenant_code: string
    timestamp: string
  }
  responseParamJson: {
    msg: string
    code: string
    requestId: string
    success: boolean
    timestamp: string
  }
}

const getPrintLogisticsExpressInterceptGetInterfaceParamRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/logistics/express/intercept/getInterfaceParam',
    method: Method.GET,
    queryNames: ['requestId'],
    requestBodyType: RequestBodyType.query,
  }

export const getPrintLogisticsExpressInterceptGetInterfaceParam =
  /*#__PURE__*/ (
    requestData: IRequestGetPrintLogisticsExpressInterceptGetInterfaceParam,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetPrintLogisticsExpressInterceptGetInterfaceParam>(
      prepare(
        getPrintLogisticsExpressInterceptGetInterfaceParamRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getPrintLogisticsExpressInterceptGetInterfaceParam.requestConfig =
  getPrintLogisticsExpressInterceptGetInterfaceParamRequestConfig

export interface IRequestPostSystemExpressAuthDelete {
  id: number
}

export type IResponsePostSystemExpressAuthDelete = string

const postSystemExpressAuthDeleteRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/expressAuth/delete',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemExpressAuthDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemExpressAuthDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemExpressAuthDelete>(
    prepare(postSystemExpressAuthDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemExpressAuthDelete.requestConfig =
  postSystemExpressAuthDeleteRequestConfig

export interface IRequestPostSystemExpressAuthRefreshToken {
  id: number
}

export type IResponsePostSystemExpressAuthRefreshToken = string

const postSystemExpressAuthRefreshTokenRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/expressAuth/refreshToken',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemExpressAuthRefreshToken = /*#__PURE__*/ (
  requestData: IRequestPostSystemExpressAuthRefreshToken,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemExpressAuthRefreshToken>(
    prepare(postSystemExpressAuthRefreshTokenRequestConfig, requestData),
    ...args,
  )
}

postSystemExpressAuthRefreshToken.requestConfig =
  postSystemExpressAuthRefreshTokenRequestConfig

export interface IRequestPostSystemExpressAuthUpdate {
  id: number
  status?: number
  extendsInfo?: string
}

export type IResponsePostSystemExpressAuthUpdate = string

const postSystemExpressAuthUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/expressAuth/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemExpressAuthUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemExpressAuthUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemExpressAuthUpdate>(
    prepare(postSystemExpressAuthUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemExpressAuthUpdate.requestConfig =
  postSystemExpressAuthUpdateRequestConfig

export interface IRequestGetSystemExpressAuthQuery {
  pageNum: string
  pageSize: string
  authName?: string
  platformCode?: string
  status?: string
}

export interface IResponseGetSystemExpressAuthQuery {
  total: number
  list: {
    id: number
    authName: string
    platformName: string
    platformCode: string
    status: string
    createAt: string
    updatedAt: string
    pageNum: number
    pageSize: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemExpressAuthQueryRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/expressAuth/query',
  method: Method.GET,
  queryNames: ['pageNum', 'pageSize', 'authName', 'platformCode', 'status'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemExpressAuthQuery = /*#__PURE__*/ (
  requestData: IRequestGetSystemExpressAuthQuery,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemExpressAuthQuery>(
    prepare(getSystemExpressAuthQueryRequestConfig, requestData),
    ...args,
  )
}

getSystemExpressAuthQuery.requestConfig = getSystemExpressAuthQueryRequestConfig

export interface IRequestPostSystemExpressAuthGetToken {
  id: number
}

export type IResponsePostSystemExpressAuthGetToken = string

const postSystemExpressAuthGetTokenRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/expressAuth/getToken',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemExpressAuthGetToken = /*#__PURE__*/ (
  requestData: IRequestPostSystemExpressAuthGetToken,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemExpressAuthGetToken>(
    prepare(postSystemExpressAuthGetTokenRequestConfig, requestData),
    ...args,
  )
}

postSystemExpressAuthGetToken.requestConfig =
  postSystemExpressAuthGetTokenRequestConfig

export interface IRequestGetSystemExpressAuthQueryExpressList {}

export type IResponseGetSystemExpressAuthQueryExpressList = {
  code: string
  value: string
}[]

const getSystemExpressAuthQueryExpressListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/expressAuth/queryExpressList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSystemExpressAuthQueryExpressList = /*#__PURE__*/ (
  requestData?: IRequestGetSystemExpressAuthQueryExpressList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemExpressAuthQueryExpressList>(
    prepare(getSystemExpressAuthQueryExpressListRequestConfig, requestData),
    ...args,
  )
}

getSystemExpressAuthQueryExpressList.requestConfig =
  getSystemExpressAuthQueryExpressListRequestConfig

export interface IRequestGetSystemExpressAuthGet {
  authName?: string
  platformCode?: string
}

export interface IResponseGetSystemExpressAuthGet {
  authName: string
  pageSize: number
  params: {
    privateKey: string
    orderPassword: string
    app_url: string
    apiAccount: string
    customerCode: string
  }
  pageNum: number
  createAt: number
  translate: {
    privateKey: string
    orderPassword: string
    apiAccount: string
    customerCode: string
  }
  fieldsInfo: {
    field: string
    remark: string
    value: string
    required: boolean
  }[]
  tenantId: string
  id: number
  platformName: string
  platformCode: string
  status: string
  updatedAt: number
}

const getSystemExpressAuthGetRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/expressAuth/get',
  method: Method.GET,
  queryNames: ['authName', 'platformCode'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemExpressAuthGet = /*#__PURE__*/ (
  requestData: IRequestGetSystemExpressAuthGet,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemExpressAuthGet>(
    prepare(getSystemExpressAuthGetRequestConfig, requestData),
    ...args,
  )
}

getSystemExpressAuthGet.requestConfig = getSystemExpressAuthGetRequestConfig

export interface IRequestPostPrintBizprintFaceSheetSyncTemplate {
  platformCode: string
  shopCode: string
  cpCode: string
  tenantCode: string
}

export type IResponsePostPrintBizprintFaceSheetSyncTemplate = string

const postPrintBizprintFaceSheetSyncTemplateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/faceSheet/syncTemplate',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintFaceSheetSyncTemplate = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintFaceSheetSyncTemplate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintFaceSheetSyncTemplate>(
    prepare(postPrintBizprintFaceSheetSyncTemplateRequestConfig, requestData),
    ...args,
  )
}

postPrintBizprintFaceSheetSyncTemplate.requestConfig =
  postPrintBizprintFaceSheetSyncTemplateRequestConfig

export interface IRequestPostPrintBizprintFaceSheetListTemplate {
  platformCode: string
  shopCode: string
  cpCode?: string
  tenantCode: string
  pageNum: number
  pageSize: number
}

export interface IResponsePostPrintBizprintFaceSheetListTemplate {
  total: number
  list: {
    id: number
    tenantCode: string
    platformCode: string
    platformName: string
    shopCode: string
    shopName: string
    deliveryTypeCode: string
    stdCpCode: string
    deliveryTypeName: string
    status: string
    createBy: string
    createTime: string
    modifyBy: null
    modifyTime: null
    templateDetail: string
    templateName: string
    stdTemplateUrl: string
    customAreaName: string
    customAreaUrl: string
    customKeys: null
    assigned: boolean
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postPrintBizprintFaceSheetListTemplateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/faceSheet/listTemplate',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintFaceSheetListTemplate = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintFaceSheetListTemplate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintFaceSheetListTemplate>(
    prepare(postPrintBizprintFaceSheetListTemplateRequestConfig, requestData),
    ...args,
  )
}

postPrintBizprintFaceSheetListTemplate.requestConfig =
  postPrintBizprintFaceSheetListTemplateRequestConfig

export interface IRequestGetPrintBizprintFaceSheetGetCpCodeList {}

export interface IResponseGetPrintBizprintFaceSheetGetCpCodeList {
  item: {
    code: string
    value: string
  }[]
}

const getPrintBizprintFaceSheetGetCpCodeListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/faceSheet/getCpCodeList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getPrintBizprintFaceSheetGetCpCodeList = /*#__PURE__*/ (
  requestData?: IRequestGetPrintBizprintFaceSheetGetCpCodeList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetPrintBizprintFaceSheetGetCpCodeList>(
    prepare(getPrintBizprintFaceSheetGetCpCodeListRequestConfig, requestData),
    ...args,
  )
}

getPrintBizprintFaceSheetGetCpCodeList.requestConfig =
  getPrintBizprintFaceSheetGetCpCodeListRequestConfig

export interface IRequestGetPrintBizprintCustomAreaAggregateConfigList {
  platformCode: string
}

export interface IResponseGetPrintBizprintCustomAreaAggregateConfigList {
  platformCode: string
  keyMappings: {
    key?: string
    stdCustomKeys?: string[]
  }[]
}

const getPrintBizprintCustomAreaAggregateConfigListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/customAreaAggregateConfig/list',
    method: Method.GET,
    queryNames: ['platformCode'],
    requestBodyType: RequestBodyType.query,
  }

export const getPrintBizprintCustomAreaAggregateConfigList = /*#__PURE__*/ (
  requestData: IRequestGetPrintBizprintCustomAreaAggregateConfigList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetPrintBizprintCustomAreaAggregateConfigList>(
    prepare(
      getPrintBizprintCustomAreaAggregateConfigListRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getPrintBizprintCustomAreaAggregateConfigList.requestConfig =
  getPrintBizprintCustomAreaAggregateConfigListRequestConfig

export interface IRequestGetPrintBizprintCustomAreaAggregateConfigQueryConfigItems {}

export interface IResponseGetPrintBizprintCustomAreaAggregateConfigQueryConfigItems {
  platformAggregateConfigs: {
    platformCode?: string
    keys?: {
      code?: string
      name?: string
    }[]
    stdCustomKeys?: {
      code: string
      name: string
    }[]
  }[]
}

const getPrintBizprintCustomAreaAggregateConfigQueryConfigItemsRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/customAreaAggregateConfig/queryConfigItems',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getPrintBizprintCustomAreaAggregateConfigQueryConfigItems =
  /*#__PURE__*/ (
    requestData?: IRequestGetPrintBizprintCustomAreaAggregateConfigQueryConfigItems,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetPrintBizprintCustomAreaAggregateConfigQueryConfigItems>(
      prepare(
        getPrintBizprintCustomAreaAggregateConfigQueryConfigItemsRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getPrintBizprintCustomAreaAggregateConfigQueryConfigItems.requestConfig =
  getPrintBizprintCustomAreaAggregateConfigQueryConfigItemsRequestConfig

export interface IRequestPostPrintBizprintCustomAreaAggregateConfigSave {
  platformCode: string
  keyMappings: {
    key: string
    stdCustomKeys: string[]
  }[]
}

export type IResponsePostPrintBizprintCustomAreaAggregateConfigSave = null

const postPrintBizprintCustomAreaAggregateConfigSaveRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/customAreaAggregateConfig/save',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintCustomAreaAggregateConfigSave = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintCustomAreaAggregateConfigSave,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintCustomAreaAggregateConfigSave>(
    prepare(
      postPrintBizprintCustomAreaAggregateConfigSaveRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postPrintBizprintCustomAreaAggregateConfigSave.requestConfig =
  postPrintBizprintCustomAreaAggregateConfigSaveRequestConfig

export interface IRequestPostPrintBizprintPrintRecordQuery {
  startPrintTime: string
  endPrintTime: string
  waybillNo: string
  printStatus: string
  platformCode: string
  pageNum: number
  pageSize: number
}

export interface IResponsePostPrintBizprintPrintRecordQuery {
  total: number
  list: {
    shopCode: string
    templateUrl: string
    requestResult: string
    id: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: string[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postPrintBizprintPrintRecordQueryRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/print/record/query',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintPrintRecordQuery = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintPrintRecordQuery,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintPrintRecordQuery>(
    prepare(postPrintBizprintPrintRecordQueryRequestConfig, requestData),
    ...args,
  )
}

postPrintBizprintPrintRecordQuery.requestConfig =
  postPrintBizprintPrintRecordQueryRequestConfig

export interface IRequestPostPrintBizprintPrintRePrint {
  id: string
}

export type IResponsePostPrintBizprintPrintRePrint = string

const postPrintBizprintPrintRePrintRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/print/rePrint',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintPrintRePrint = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintPrintRePrint,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintPrintRePrint>(
    prepare(postPrintBizprintPrintRePrintRequestConfig, requestData),
    ...args,
  )
}

postPrintBizprintPrintRePrint.requestConfig =
  postPrintBizprintPrintRePrintRequestConfig

export interface IRequestPostPrintBizprintFaceSheetQueryWaybillGetApiLog {
  billNo?: string
  sourceBillNo?: string
  waybillCode?: string
  requestId?: string
  platformCode?: string
  shopCode?: string
  cpCode?: string
  status?: string
  pageNum: number
  pageSize: number
}

export interface IResponsePostPrintBizprintFaceSheetQueryWaybillGetApiLog {
  total: number
  list: {
    id: number
    requestId: string
    platformCode: string
    cpCode: string
    status: number
    billNo: string
    waybillCode: string
    tenantCode: string
    cpName: string
    packId: string
    requestParam: string
    responseParam: string
    createBy: string
    createTime: string
    modifyBy: string
    modifyTime: string
    shopCode: string
    sourceBillNo: string
    platformName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postPrintBizprintFaceSheetQueryWaybillGetApiLogRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/faceSheet/queryWaybillGetApiLog',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintFaceSheetQueryWaybillGetApiLog = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintFaceSheetQueryWaybillGetApiLog,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintFaceSheetQueryWaybillGetApiLog>(
    prepare(
      postPrintBizprintFaceSheetQueryWaybillGetApiLogRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postPrintBizprintFaceSheetQueryWaybillGetApiLog.requestConfig =
  postPrintBizprintFaceSheetQueryWaybillGetApiLogRequestConfig

export interface IRequestGetPrintBizprintFaceSheetGetInterfaceParam {
  requestId: string
}

export interface IResponseGetPrintBizprintFaceSheetGetInterfaceParam {
  requestId: string
  method: string
  requestParam: string
  responseParam: string
  createTime: string
  modifyTime: string
}

const getPrintBizprintFaceSheetGetInterfaceParamRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/faceSheet/getInterfaceParam',
    method: Method.GET,
    queryNames: ['requestId'],
    requestBodyType: RequestBodyType.query,
  }

export const getPrintBizprintFaceSheetGetInterfaceParam = /*#__PURE__*/ (
  requestData: IRequestGetPrintBizprintFaceSheetGetInterfaceParam,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetPrintBizprintFaceSheetGetInterfaceParam>(
    prepare(
      getPrintBizprintFaceSheetGetInterfaceParamRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getPrintBizprintFaceSheetGetInterfaceParam.requestConfig =
  getPrintBizprintFaceSheetGetInterfaceParamRequestConfig

export interface IRequestPostPrintLogisticsExpressTracePush {
  waybillCode: string
}

export type IResponsePostPrintLogisticsExpressTracePush = string

const postPrintLogisticsExpressTracePushRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/logistics/express/trace/push',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintLogisticsExpressTracePush = /*#__PURE__*/ (
  requestData: IRequestPostPrintLogisticsExpressTracePush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintLogisticsExpressTracePush>(
    prepare(postPrintLogisticsExpressTracePushRequestConfig, requestData),
    ...args,
  )
}

postPrintLogisticsExpressTracePush.requestConfig =
  postPrintLogisticsExpressTracePushRequestConfig

export interface IRequestPostPrintLogisticsExpressTraceList {
  startTime?: string
  endTime?: string
  platformCode?: string
  waybillCode?: string
  lastStatus?: string
  pushStatus?: string
  pageNum: number
  pageSize: number
}

export interface IResponsePostPrintLogisticsExpressTraceList {
  total: number
  list: {
    requestId: string
    tenantCode: string
    platformCode: string
    authName: null
    waybillCode: string
    success: number
    status: null
    statusRemark: null
    pushStatus: null
    pushRemark: null
    createTime: string
    updateTime: null
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postPrintLogisticsExpressTraceListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/logistics/express/trace/list',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintLogisticsExpressTraceList = /*#__PURE__*/ (
  requestData: IRequestPostPrintLogisticsExpressTraceList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintLogisticsExpressTraceList>(
    prepare(postPrintLogisticsExpressTraceListRequestConfig, requestData),
    ...args,
  )
}

postPrintLogisticsExpressTraceList.requestConfig =
  postPrintLogisticsExpressTraceListRequestConfig

export interface IRequestPostPrintBizprintFaceSheetQuerySignExpress {
  useStandardCpCode?: string
  platformCode?: string
  shopCode?: string
  cpCode?: string
  tenantCode?: string
}

export interface IResponsePostPrintBizprintFaceSheetQuerySignExpress {
  signExpressList: {
    stdCpCode: string
    cpCode: string
    cpName: string
    branchCode: string
    branchName: string
    settleAccount: string
    quantity: number
    signAddress: {
      province: string
      city: string
      district: string
      street: string
      detail: string
    }[]
    ext: string
  }[]
}

const postPrintBizprintFaceSheetQuerySignExpressRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/faceSheet/querySignExpress',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintFaceSheetQuerySignExpress = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintFaceSheetQuerySignExpress,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintFaceSheetQuerySignExpress>(
    prepare(
      postPrintBizprintFaceSheetQuerySignExpressRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postPrintBizprintFaceSheetQuerySignExpress.requestConfig =
  postPrintBizprintFaceSheetQuerySignExpressRequestConfig

export interface IRequestPostPrintBizprintFaceSheetQueryWaybillCancelApiLog {
  tenantCode?: string
  requestId?: string
  billNo?: string
  waybillCode?: string
  sourceBillNo?: string
  platformCode?: string
  shopCode?: string
  cpCode?: string
  status?: number
  pageNum: number
  pageSize: number
}

export interface IResponsePostPrintBizprintFaceSheetQueryWaybillCancelApiLog {
  total: number
  list: {
    id: number
    tenantCode: string
    platformCode: string
    platformName: string
    shopCode: string
    cpCode: string
    cpName: string
    status: number
    billNo: string
    sourceBillNo: string
    waybillCode: string
    requestId: string
    createBy: string
    createTime: string
    modifyBy: string
    modifyTime: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postPrintBizprintFaceSheetQueryWaybillCancelApiLogRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/faceSheet/queryWaybillCancelApiLog',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintFaceSheetQueryWaybillCancelApiLog =
  /*#__PURE__*/ (
    requestData: IRequestPostPrintBizprintFaceSheetQueryWaybillCancelApiLog,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostPrintBizprintFaceSheetQueryWaybillCancelApiLog>(
      prepare(
        postPrintBizprintFaceSheetQueryWaybillCancelApiLogRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postPrintBizprintFaceSheetQueryWaybillCancelApiLog.requestConfig =
  postPrintBizprintFaceSheetQueryWaybillCancelApiLogRequestConfig

export interface IRequestPostPrintBizprintCustomTemplateDelete {
  id: string
}

export type IResponsePostPrintBizprintCustomTemplateDelete = string

const postPrintBizprintCustomTemplateDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/customTemplate/delete',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintCustomTemplateDelete = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintCustomTemplateDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintCustomTemplateDelete>(
    prepare(postPrintBizprintCustomTemplateDeleteRequestConfig, requestData),
    ...args,
  )
}

postPrintBizprintCustomTemplateDelete.requestConfig =
  postPrintBizprintCustomTemplateDeleteRequestConfig

export interface IRequestPostPrintBizprintCustomTemplateCreate {
  platformCode: string
  name: string
  content: string
}

export type IResponsePostPrintBizprintCustomTemplateCreate = string

const postPrintBizprintCustomTemplateCreateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/customTemplate/create',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintCustomTemplateCreate = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintCustomTemplateCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintCustomTemplateCreate>(
    prepare(postPrintBizprintCustomTemplateCreateRequestConfig, requestData),
    ...args,
  )
}

postPrintBizprintCustomTemplateCreate.requestConfig =
  postPrintBizprintCustomTemplateCreateRequestConfig

export interface IRequestPostPrintBizprintCustomTemplateUpdate {
  platformCode: string
  name: string
  content: string
  id: string
}

export type IResponsePostPrintBizprintCustomTemplateUpdate = string

const postPrintBizprintCustomTemplateUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/customTemplate/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintCustomTemplateUpdate = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintCustomTemplateUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintCustomTemplateUpdate>(
    prepare(postPrintBizprintCustomTemplateUpdateRequestConfig, requestData),
    ...args,
  )
}

postPrintBizprintCustomTemplateUpdate.requestConfig =
  postPrintBizprintCustomTemplateUpdateRequestConfig

export interface IRequestPostPrintBizprintCustomTemplateList {
  platformCode: string
  name: string
  pageNum: string
  pageSize: string
}

export interface IResponsePostPrintBizprintCustomTemplateList {
  total: number
  list: {
    id: string
    tenantCode: string
    platformCode: string
    name: string
    content: string
    url: string
    createTime: string
    modifyTime: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postPrintBizprintCustomTemplateListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/customTemplate/list',
    method: Method.POST,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.json,
  }

export const postPrintBizprintCustomTemplateList = /*#__PURE__*/ (
  requestData: IRequestPostPrintBizprintCustomTemplateList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostPrintBizprintCustomTemplateList>(
    prepare(postPrintBizprintCustomTemplateListRequestConfig, requestData),
    ...args,
  )
}

postPrintBizprintCustomTemplateList.requestConfig =
  postPrintBizprintCustomTemplateListRequestConfig

export interface IRequestGetPrintBizprintFaceSheetGetPlatformList {}

export type IResponseGetPrintBizprintFaceSheetGetPlatformList = {
  code: string
  value: string
}[]

const getPrintBizprintFaceSheetGetPlatformListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/print/bizprint/faceSheet/getPlatformList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getPrintBizprintFaceSheetGetPlatformList = /*#__PURE__*/ (
  requestData?: IRequestGetPrintBizprintFaceSheetGetPlatformList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetPrintBizprintFaceSheetGetPlatformList>(
    prepare(getPrintBizprintFaceSheetGetPlatformListRequestConfig, requestData),
    ...args,
  )
}

getPrintBizprintFaceSheetGetPlatformList.requestConfig =
  getPrintBizprintFaceSheetGetPlatformListRequestConfig

export interface IRequestPostSmsAdaptorSmsQuerySmsRecordStatistic {
  platformCode?: string
  shopCode?: string
  sendStatus?: string
  startTime?: string
  endTime?: string
}

export type IResponsePostSmsAdaptorSmsQuerySmsRecordStatistic = {
  tenantCode: string
  platformCode: string
  shopCode: string
  sendStatus: string
  sendCount: number
  createDate: string
}[]

const postSmsAdaptorSmsQuerySmsRecordStatisticRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/sms/adaptor/sms/querySmsRecordStatistic',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSmsAdaptorSmsQuerySmsRecordStatistic = /*#__PURE__*/ (
  requestData: IRequestPostSmsAdaptorSmsQuerySmsRecordStatistic,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSmsAdaptorSmsQuerySmsRecordStatistic>(
    prepare(postSmsAdaptorSmsQuerySmsRecordStatisticRequestConfig, requestData),
    ...args,
  )
}

postSmsAdaptorSmsQuerySmsRecordStatistic.requestConfig =
  postSmsAdaptorSmsQuerySmsRecordStatisticRequestConfig

export interface IRequestGetSmsAdaptorSmsGetPlatformList {}

export type IResponseGetSmsAdaptorSmsGetPlatformList = {
  code: string
  value: string
}[]

const getSmsAdaptorSmsGetPlatformListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/sms/adaptor/sms/getPlatformList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getSmsAdaptorSmsGetPlatformList = /*#__PURE__*/ (
  requestData?: IRequestGetSmsAdaptorSmsGetPlatformList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSmsAdaptorSmsGetPlatformList>(
    prepare(getSmsAdaptorSmsGetPlatformListRequestConfig, requestData),
    ...args,
  )
}

getSmsAdaptorSmsGetPlatformList.requestConfig =
  getSmsAdaptorSmsGetPlatformListRequestConfig

export interface IRequestPostSmsAdaptorSmsQuerySmsRecord {
  platformCode?: string
  shopCode?: string
  startTime?: string
  endTime?: string
  sendStatus?: string
  messageId?: string
  pageNum: number
  pageSize: number
}

export interface IResponsePostSmsAdaptorSmsQuerySmsRecord {
  total: number
  list: {
    tenantCode: string
    platformCode: string
    platformName: string
    shopCode: string
    shopName: string
    mobile: string
    messageId: string
    remark: string
    sign: null
    templateId: null
    sendContent: null
    sendStatus: number
    createDate: string
    createTime: string
    modifyTime: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const postSmsAdaptorSmsQuerySmsRecordRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/sms/adaptor/sms/querySmsRecord',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSmsAdaptorSmsQuerySmsRecord = /*#__PURE__*/ (
  requestData: IRequestPostSmsAdaptorSmsQuerySmsRecord,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSmsAdaptorSmsQuerySmsRecord>(
    prepare(postSmsAdaptorSmsQuerySmsRecordRequestConfig, requestData),
    ...args,
  )
}

postSmsAdaptorSmsQuerySmsRecord.requestConfig =
  postSmsAdaptorSmsQuerySmsRecordRequestConfig

export interface IRequestPostProductAdaptorproductProductInfoUpdate {
  productInfo: {
    id: string
    title: string
    brandCode: string
    categoryId: string
    categoryFullName: string
    sourceType: string
    status: string
    quantity: number
    price: number
    name: string
    code: string
  }
  productCategoryAttributes: {
    propertyId: string
    propertyVal: string
  }[]
  productStaticResources: string[]
  productDetailDescList: {
    resourceType: string
    sort: number
    fieldVal: string
    previewUrl: string
    sourceFrom: number
  }[]
  productSkuItems: {
    id: string
    name: string
    code: string
    productId: string
    classification: string
    price: number
    quantity: number
    field1: string
    fieldVal1: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
    field1Name: string
    fieldName1: string
    key: string
    _X_ROW_KEY: string
  }[]
  platformProperties: {
    platform: string
    list: {
      key: string
      val: string
      name: string
    }[]
  }[]
}

export type IResponsePostProductAdaptorproductProductInfoUpdate = string

const postProductAdaptorproductProductInfoUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productInfo/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductProductInfoUpdate = /*#__PURE__*/ (
  requestData: IRequestPostProductAdaptorproductProductInfoUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostProductAdaptorproductProductInfoUpdate>(
    prepare(
      postProductAdaptorproductProductInfoUpdateRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postProductAdaptorproductProductInfoUpdate.requestConfig =
  postProductAdaptorproductProductInfoUpdateRequestConfig

export interface IRequestPostProductAdaptorproductProductInfoUpdateProductAndLink {
  productInfo: {
    id: string
    title: string
    brandCode: string
    categoryId: string
    categoryFullName: string
    sourceType: string
    status: string
    quantity: number
    price: number
    name: string
    code: string
  }
  productCategoryAttributes: {
    propertyId: string
    propertyVal: string
  }[]
  productStaticResources: string[]
  productDetailDescList: {
    resourceType: string
    sort: number
    fieldVal: string
    previewUrl: string
    sourceFrom: number
  }[]
  productSkuItems: {
    id: string
    name: string
    code: string
    productId: string
    classification: string
    price: number
    quantity: number
    field1: string
    fieldVal1: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
    field1Name: string
    fieldName1: string
    key: string
    _X_ROW_KEY: string
  }[]
  platformProperties: {
    platform: string
    list: {
      key: string
      val: string
      name: string
    }[]
  }[]
}

export type IResponsePostProductAdaptorproductProductInfoUpdateProductAndLink =
  string

const postProductAdaptorproductProductInfoUpdateProductAndLinkRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productInfo/updateProductAndLink',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductProductInfoUpdateProductAndLink =
  /*#__PURE__*/ (
    requestData: IRequestPostProductAdaptorproductProductInfoUpdateProductAndLink,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductProductInfoUpdateProductAndLink>(
      prepare(
        postProductAdaptorproductProductInfoUpdateProductAndLinkRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductProductInfoUpdateProductAndLink.requestConfig =
  postProductAdaptorproductProductInfoUpdateProductAndLinkRequestConfig

export interface IRequestPostProductAdaptorproductProductInfoCopy {
  newCode: string
  productId: string
}

export type IResponsePostProductAdaptorproductProductInfoCopy = string

const postProductAdaptorproductProductInfoCopyRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productInfo/copy',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductProductInfoCopy = /*#__PURE__*/ (
  requestData: IRequestPostProductAdaptorproductProductInfoCopy,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostProductAdaptorproductProductInfoCopy>(
    prepare(postProductAdaptorproductProductInfoCopyRequestConfig, requestData),
    ...args,
  )
}

postProductAdaptorproductProductInfoCopy.requestConfig =
  postProductAdaptorproductProductInfoCopyRequestConfig

export interface IRequestPostProductAdaptorproductLinkProductInfoCreateLink {
  productId: string
  shops: {
    platform: string
    shopCode: string
  }[]
}

export type IResponsePostProductAdaptorproductLinkProductInfoCreateLink = string

const postProductAdaptorproductLinkProductInfoCreateLinkRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/linkProductInfo/createLink',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductLinkProductInfoCreateLink =
  /*#__PURE__*/ (
    requestData: IRequestPostProductAdaptorproductLinkProductInfoCreateLink,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductLinkProductInfoCreateLink>(
      prepare(
        postProductAdaptorproductLinkProductInfoCreateLinkRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductLinkProductInfoCreateLink.requestConfig =
  postProductAdaptorproductLinkProductInfoCreateLinkRequestConfig

export interface IRequestGetProductAdaptorproductProductInfoFindDetail {
  id: string
}

export interface IResponseGetProductAdaptorproductProductInfoFindDetail {
  productInfo: {
    id: string
    name: string
    code: string
    itemNo: string
    brandCode: string
    categoryId: string
    categoryFullName: string
    title: string
    status: string
    tenantId: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    shopCode: string
    platform: string
    productId: string
    price: number
    quantity: number
    barcode: string
  }
  productCategoryAttributes: {
    id: string
    productId: string
    categoryId: string
    propertyId: string
    propertyVal: string
    tenantId: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    shopCode: string
    platform: string
    propertyValName: string
  }[]
  productSkuItems: {
    id: string
    name: string
    code: string
    barcode: string
    productId: string
    classification: string
    price: number
    multiPrice: number
    quantity: number
    field1: string
    fieldVal1: string
    field2: string
    fieldVal2: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
    shopCode: string
    platform: string
    marketTime: string
    field1Name: string
    field2Name: string
  }[]
  productStaticResources: {
    id: string
    sourceUrl: string
    sort: number
    productId: string
    resourceType: string
    sourceFrom: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
    shopCode: string
    platform: string
    previewUrl: string
  }[]
  platformExtendsProperties: {
    id: string
    key: string
    val: string
    name: string
    productId: string
    tenantId: string
    shopCode: string
    platform: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
  }[]
  productDetailDescList: {
    id: string
    productId: string
    fieldVal: string
    resourceType: string
    sort: number
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
    shopCode: string
    platform: string
    previewUrl: string
  }[]
}

const getProductAdaptorproductProductInfoFindDetailRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productInfo/findDetail',
    method: Method.GET,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductProductInfoFindDetail = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductProductInfoFindDetail,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductProductInfoFindDetail>(
    prepare(
      getProductAdaptorproductProductInfoFindDetailRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getProductAdaptorproductProductInfoFindDetail.requestConfig =
  getProductAdaptorproductProductInfoFindDetailRequestConfig

export interface IRequestGetProductAdaptorproductProductInfoQueryPage {
  pageNum: string
  pageSize: string
  name?: string
  sourceType?: string
  title?: string
  categoryFullName?: string
  code?: string
  skuCode?: string
  price?: string
  brandCode?: string
  createStart?: string
  createEnd?: string
  updateStart?: string
  updateEnd?: string
}

export interface IResponseGetProductAdaptorproductProductInfoQueryPage {
  total: number
  list: {
    id: string
    name: string
    code: string
    brandCode: string
    brandName: string
    categoryId: string
    categoryFullName: string
    title: string
    status: string
    tenantId: string
    price: number
    quantity: number
    sourceType: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    barcode: string
    itemNo: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getProductAdaptorproductProductInfoQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productInfo/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'name',
      'sourceType',
      'title',
      'categoryFullName',
      'code',
      'skuCode',
      'price',
      'brandCode',
      'createStart',
      'createEnd',
      'updateStart',
      'updateEnd',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductProductInfoQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductProductInfoQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductProductInfoQueryPage>(
    prepare(
      getProductAdaptorproductProductInfoQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getProductAdaptorproductProductInfoQueryPage.requestConfig =
  getProductAdaptorproductProductInfoQueryPageRequestConfig

export interface IRequestGetProductAdaptorproductPlatformItemQueryPage {
  pageNum: string
  pageSize: string
  numIid?: string
  platformItemName?: string
  platform?: string
  status?: string
  createdAtStartDate?: string
  createdAtEndDate?: string
  updateAtStartDate?: string
  updateAtEndDate?: string
}

export interface IResponseGetProductAdaptorproductPlatformItemQueryPage {
  total: number
  list: {
    numIid: string
    platform: string
    shopCode: string
    title: string
    thumbUrl: string
    status: string
    tenantId: string
    ext: string
    createdAt: string
    updatedAt: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getProductAdaptorproductPlatformItemQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformItem/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'numIid',
      'platformItemName',
      'platform',
      'status',
      'createdAtStartDate',
      'createdAtEndDate',
      'updateAtStartDate',
      'updateAtEndDate',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductPlatformItemQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductPlatformItemQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductPlatformItemQueryPage>(
    prepare(
      getProductAdaptorproductPlatformItemQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getProductAdaptorproductPlatformItemQueryPage.requestConfig =
  getProductAdaptorproductPlatformItemQueryPageRequestConfig

export interface IRequestPostProductAdaptorproductPlatformItemDownload {
  numIid: string
  platform: string
  shopCode: string
}

export type IResponsePostProductAdaptorproductPlatformItemDownload = string

const postProductAdaptorproductPlatformItemDownloadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformItem/download',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductPlatformItemDownload = /*#__PURE__*/ (
  requestData: IRequestPostProductAdaptorproductPlatformItemDownload,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostProductAdaptorproductPlatformItemDownload>(
    prepare(
      postProductAdaptorproductPlatformItemDownloadRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postProductAdaptorproductPlatformItemDownload.requestConfig =
  postProductAdaptorproductPlatformItemDownloadRequestConfig

export interface IRequestPostProductAdaptorproductPlatformItemClaim {
  numIid: string
  platform: string
  shopCode: string
}

export type IResponsePostProductAdaptorproductPlatformItemClaim = string

const postProductAdaptorproductPlatformItemClaimRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformItem/claim',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductPlatformItemClaim = /*#__PURE__*/ (
  requestData: IRequestPostProductAdaptorproductPlatformItemClaim,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostProductAdaptorproductPlatformItemClaim>(
    prepare(
      postProductAdaptorproductPlatformItemClaimRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postProductAdaptorproductPlatformItemClaim.requestConfig =
  postProductAdaptorproductPlatformItemClaimRequestConfig

export interface IRequestPostProductAdaptorproductPlatformItemCategoryMappingForTaobao {
  numIid: string
  platform: string
  shopCode: string
}

export type IResponsePostProductAdaptorproductPlatformItemCategoryMappingForTaobao =
  string

const postProductAdaptorproductPlatformItemCategoryMappingForTaobaoRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformItem/categoryMappingForTaobao',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductPlatformItemCategoryMappingForTaobao =
  /*#__PURE__*/ (
    requestData: IRequestPostProductAdaptorproductPlatformItemCategoryMappingForTaobao,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductPlatformItemCategoryMappingForTaobao>(
      prepare(
        postProductAdaptorproductPlatformItemCategoryMappingForTaobaoRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductPlatformItemCategoryMappingForTaobao.requestConfig =
  postProductAdaptorproductPlatformItemCategoryMappingForTaobaoRequestConfig

export interface IRequestPostProductAdaptorproductPlatformItemInitForTaobao {
  numIid: string
  platform: string
  shopCode: string
}

export type IResponsePostProductAdaptorproductPlatformItemInitForTaobao = string

const postProductAdaptorproductPlatformItemInitForTaobaoRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformItem/initForTaobao',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductPlatformItemInitForTaobao =
  /*#__PURE__*/ (
    requestData: IRequestPostProductAdaptorproductPlatformItemInitForTaobao,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductPlatformItemInitForTaobao>(
      prepare(
        postProductAdaptorproductPlatformItemInitForTaobaoRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductPlatformItemInitForTaobao.requestConfig =
  postProductAdaptorproductPlatformItemInitForTaobaoRequestConfig

export type IRequestPostProductAdaptorproductPlatformProductStandardBatchSubmit =
  {
    platform: string
    shopCode: string
    productId: string
  }[]

export type IResponsePostProductAdaptorproductPlatformProductStandardBatchSubmit =
  {
    shopCode: string
    productId: string
    data: {
      categoryId: string
    }
    name: string
    shopName: string
    platformName: string
    message: string
    platform: string
    productName: string
  }[]

const postProductAdaptorproductPlatformProductStandardBatchSubmitRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformProductStandard/batchSubmit',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductPlatformProductStandardBatchSubmit =
  /*#__PURE__*/ (
    requestData: IRequestPostProductAdaptorproductPlatformProductStandardBatchSubmit,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductPlatformProductStandardBatchSubmit>(
      prepare(
        postProductAdaptorproductPlatformProductStandardBatchSubmitRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductPlatformProductStandardBatchSubmit.requestConfig =
  postProductAdaptorproductPlatformProductStandardBatchSubmitRequestConfig

export type IRequestPostProductAdaptorproductPlatformProductStandardUpshelf =
  string[]

export type IResponsePostProductAdaptorproductPlatformProductStandardUpshelf =
  string

const postProductAdaptorproductPlatformProductStandardUpshelfRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformProductStandard/upshelf',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductPlatformProductStandardUpshelf =
  /*#__PURE__*/ (
    requestData: IRequestPostProductAdaptorproductPlatformProductStandardUpshelf,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductPlatformProductStandardUpshelf>(
      prepare(
        postProductAdaptorproductPlatformProductStandardUpshelfRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductPlatformProductStandardUpshelf.requestConfig =
  postProductAdaptorproductPlatformProductStandardUpshelfRequestConfig

export interface IRequestGetProductAdaptorproductLinkProductInfoQueryPage {
  pageNum: string
  pageSize: string
  title?: string
  categoryFullName?: string
  code?: string
  platformItemId?: string
  createStart?: string
  createEnd?: string
  brandCode?: string
  status?: string
  price?: string
  skuCode?: string
  updateStart?: string
  updateEnd?: string
  platform?: string
  shopCode?: string
}

export interface IResponseGetProductAdaptorproductLinkProductInfoQueryPage {
  total: number
  list: {
    id: string
    name: string
    code: string
    brandCode: string
    brandName: string
    categoryId: string
    categoryFullName: string
    title: string
    status: string
    tenantId: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    shopCode: string
    platform: string
    productId: string
    price: number
    quantity: number
    barcode: string
    itemNo: string
    platformItemId: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getProductAdaptorproductLinkProductInfoQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/linkProductInfo/queryPage',
    method: Method.GET,
    queryNames: [
      'pageNum',
      'pageSize',
      'title',
      'categoryFullName',
      'code',
      'platformItemId',
      'createStart',
      'createEnd',
      'brandCode',
      'status',
      'price',
      'skuCode',
      'updateStart',
      'updateEnd',
      'platform',
      'shopCode',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductLinkProductInfoQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductLinkProductInfoQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductLinkProductInfoQueryPage>(
    prepare(
      getProductAdaptorproductLinkProductInfoQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getProductAdaptorproductLinkProductInfoQueryPage.requestConfig =
  getProductAdaptorproductLinkProductInfoQueryPageRequestConfig

export type IRequestPostProductAdaptorproductPlatformProductStandardDownshelf =
  string[]

export type IResponsePostProductAdaptorproductPlatformProductStandardDownshelf =
  string

const postProductAdaptorproductPlatformProductStandardDownshelfRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformProductStandard/downshelf',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductPlatformProductStandardDownshelf =
  /*#__PURE__*/ (
    requestData: IRequestPostProductAdaptorproductPlatformProductStandardDownshelf,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductPlatformProductStandardDownshelf>(
      prepare(
        postProductAdaptorproductPlatformProductStandardDownshelfRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductPlatformProductStandardDownshelf.requestConfig =
  postProductAdaptorproductPlatformProductStandardDownshelfRequestConfig

export interface IRequestGetProductAdaptorproductBaseCategoryQueryList {
  level?: string
  pid?: string
  checkChild?: string
}

export type IResponseGetProductAdaptorproductBaseCategoryQueryList = {
  id: string
  code: string
  name: string
  pid: string
  level: number
  isParent: boolean
  createdAt: string
  updatedAt: string
}[]

const getProductAdaptorproductBaseCategoryQueryListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/baseCategory/queryList',
    method: Method.GET,
    queryNames: ['level', 'pid', 'checkChild'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductBaseCategoryQueryList = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductBaseCategoryQueryList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductBaseCategoryQueryList>(
    prepare(
      getProductAdaptorproductBaseCategoryQueryListRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getProductAdaptorproductBaseCategoryQueryList.requestConfig =
  getProductAdaptorproductBaseCategoryQueryListRequestConfig

export interface IRequestGetProductAdaptorproductLinkProductInfoFindDetail {
  id: string
  productId: string
  platform: string
  shopCode: string
}

export interface IResponseGetProductAdaptorproductLinkProductInfoFindDetail {
  linkProductInfo: {
    id: string
    name: string
    code: string
    itemNo: string
    brandCode: string
    categoryId: string
    categoryFullName: string
    title: string
    status: string
    tenantId: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    shopCode: string
    platform: string
    productId: string
    price: number
    quantity: number
    barcode: string
  }
  linkProductCategoryAttributes: {
    id: string
    productId: string
    categoryId: string
    propertyId: string
    propertyVal: string
    tenantId: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    shopCode: string
    platform: string
    propertyValName: string
  }[]
  linkProductSkuItems: {
    id: string
    name: string
    code: string
    barcode: string
    productId: string
    classification: string
    price: number
    multiPrice: number
    quantity: number
    field1: string
    fieldVal1: string
    field2: string
    fieldVal2: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
    shopCode: string
    platform: string
    marketTime: string
    field1Name: string
    field2Name: string
  }[]
  linkProductStaticResources: {
    id: string
    sourceUrl: string
    sort: number
    productId: string
    resourceType: string
    sourceFrom: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
    shopCode: string
    platform: string
    previewUrl: string
  }[]
  linkPlatformExtendsProperties: {
    id: string
    key: string
    val: string
    name: string
    productId: string
    tenantId: string
    shopCode: string
    platform: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
  }[]
  linkProductDetailDescList: {
    id: string
    productId: string
    fieldVal: string
    resourceType: string
    sort: number
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
    shopCode: string
    platform: string
    previewUrl: string
  }[]
}

const getProductAdaptorproductLinkProductInfoFindDetailRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/linkProductInfo/findDetail',
    method: Method.GET,
    queryNames: ['id', 'productId', 'platform', 'shopCode'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductLinkProductInfoFindDetail = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductLinkProductInfoFindDetail,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductLinkProductInfoFindDetail>(
    prepare(
      getProductAdaptorproductLinkProductInfoFindDetailRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getProductAdaptorproductLinkProductInfoFindDetail.requestConfig =
  getProductAdaptorproductLinkProductInfoFindDetailRequestConfig

export interface IRequestGetProductAdaptorproductPlatformProductStandardUpdateStatus {
  id: string
}

export type IResponseGetProductAdaptorproductPlatformProductStandardUpdateStatus =
  string

const getProductAdaptorproductPlatformProductStandardUpdateStatusRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformProductStandard/updateStatus',
    method: Method.GET,
    queryNames: ['id'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductPlatformProductStandardUpdateStatus =
  /*#__PURE__*/ (
    requestData: IRequestGetProductAdaptorproductPlatformProductStandardUpdateStatus,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetProductAdaptorproductPlatformProductStandardUpdateStatus>(
      prepare(
        getProductAdaptorproductPlatformProductStandardUpdateStatusRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getProductAdaptorproductPlatformProductStandardUpdateStatus.requestConfig =
  getProductAdaptorproductPlatformProductStandardUpdateStatusRequestConfig

export interface IRequestPostProductAdaptorproductLinkProductInfoUpdate {
  linkProductInfo: {
    id: string
    title: string
    brandCode: string
    categoryId: string
    categoryFullName: string
    platform: string
    shopCode: string
    productId: string
    status: string
    quantity: number
    price: number
    name: string
    code: string
  }
  linkProductCategoryAttributes: {
    propertyId: string
    propertyVal: string
  }[]
  linkProductStaticResources: {
    sort: number
    resourceType: string
    sourceUrl: string
    previewUrl: string
    url: string
    sourceFrom: number
  }[]
  linkProductDetailDescList: {
    resourceType: string
    sort: number
    fieldVal: string
    previewUrl: string
    sourceFrom: number
  }[]
  linkProductSkuItems: {
    id: string
    name: string
    code: string
    classification: string
    price: number
    multiPrice: number
    quantity: number
    field1: string
    fieldVal1: string
    field2: string
    fieldVal2: string
    field1Name: string
    field2Name: string
  }[]
  linkPlatformExtendsProperties: {
    key: string
    val: string
    name: string
  }[]
}

export type IResponsePostProductAdaptorproductLinkProductInfoUpdate = string

const postProductAdaptorproductLinkProductInfoUpdateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/linkProductInfo/update',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductLinkProductInfoUpdate = /*#__PURE__*/ (
  requestData: IRequestPostProductAdaptorproductLinkProductInfoUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostProductAdaptorproductLinkProductInfoUpdate>(
    prepare(
      postProductAdaptorproductLinkProductInfoUpdateRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postProductAdaptorproductLinkProductInfoUpdate.requestConfig =
  postProductAdaptorproductLinkProductInfoUpdateRequestConfig

export type IRequestPostProductAdaptorproductLinkProductInfoDelete = string[]

export type IResponsePostProductAdaptorproductLinkProductInfoDelete = string

const postProductAdaptorproductLinkProductInfoDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/linkProductInfo/delete',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductLinkProductInfoDelete = /*#__PURE__*/ (
  requestData: IRequestPostProductAdaptorproductLinkProductInfoDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostProductAdaptorproductLinkProductInfoDelete>(
    prepare(
      postProductAdaptorproductLinkProductInfoDeleteRequestConfig,
      requestData,
    ),
    ...args,
  )
}

postProductAdaptorproductLinkProductInfoDelete.requestConfig =
  postProductAdaptorproductLinkProductInfoDeleteRequestConfig

export interface IRequestGetProductAdaptorproductProductStaticResourceQueryPage {
  pageNum: string
  pageSize: string
}

export interface IResponseGetProductAdaptorproductProductStaticResourceQueryPage {
  total: number
  list: {
    id: string
    sourceUrl: string
    sort: number
    productId: string
    resourceType: string
    sourceFrom: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    tenantId: string
    previewUrl: string
    productName: string
    productCode: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getProductAdaptorproductProductStaticResourceQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productStaticResource/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductProductStaticResourceQueryPage =
  /*#__PURE__*/ (
    requestData: IRequestGetProductAdaptorproductProductStaticResourceQueryPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetProductAdaptorproductProductStaticResourceQueryPage>(
      prepare(
        getProductAdaptorproductProductStaticResourceQueryPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getProductAdaptorproductProductStaticResourceQueryPage.requestConfig =
  getProductAdaptorproductProductStaticResourceQueryPageRequestConfig

export interface IRequestPostProductAdaptorproductProductStaticResourceUploadZip {}

export type IResponsePostProductAdaptorproductProductStaticResourceUploadZip =
  string

const postProductAdaptorproductProductStaticResourceUploadZipRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productStaticResource/uploadZip',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductProductStaticResourceUploadZip =
  /*#__PURE__*/ (
    requestData?: IRequestPostProductAdaptorproductProductStaticResourceUploadZip,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductProductStaticResourceUploadZip>(
      prepare(
        postProductAdaptorproductProductStaticResourceUploadZipRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductProductStaticResourceUploadZip.requestConfig =
  postProductAdaptorproductProductStaticResourceUploadZipRequestConfig

export interface IRequestGetProductAdaptorproductPlatformsQueryPage {
  pageNum: string
  pageSize: string
}

export interface IResponseGetProductAdaptorproductPlatformsQueryPage {
  total: number
  list: {
    id: number
    code: string
    name: string
    createdAt: string
    productName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getProductAdaptorproductPlatformsQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platforms/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductPlatformsQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductPlatformsQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductPlatformsQueryPage>(
    prepare(
      getProductAdaptorproductPlatformsQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getProductAdaptorproductPlatformsQueryPage.requestConfig =
  getProductAdaptorproductPlatformsQueryPageRequestConfig

export interface IRequestGetProductAdaptorproductBaseBrandQueryPage {
  pageNum: string
  pageSize: string
}

export interface IResponseGetProductAdaptorproductBaseBrandQueryPage {
  total: number
  list: {
    id: string
    code: string
    name: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getProductAdaptorproductBaseBrandQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/baseBrand/queryPage',
    method: Method.GET,
    queryNames: ['pageNum', 'pageSize'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductBaseBrandQueryPage = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductBaseBrandQueryPage,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductBaseBrandQueryPage>(
    prepare(
      getProductAdaptorproductBaseBrandQueryPageRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getProductAdaptorproductBaseBrandQueryPage.requestConfig =
  getProductAdaptorproductBaseBrandQueryPageRequestConfig

export interface IRequestGetProductAdaptorproductBasePropertyQueryList {
  categoryId: string
}

export type IResponseGetProductAdaptorproductBasePropertyQueryList = {
  id: string
  code: string
  name: string
  pid: string
  level: number
  createdAt: string
  updatedAt: string
  rdType: string
  required: string
  propertyType: string
  categoryId: string
}[]

const getProductAdaptorproductBasePropertyQueryListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/baseProperty/queryList',
    method: Method.GET,
    queryNames: ['categoryId'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductBasePropertyQueryList = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductBasePropertyQueryList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductBasePropertyQueryList>(
    prepare(
      getProductAdaptorproductBasePropertyQueryListRequestConfig,
      requestData,
    ),
    ...args,
  )
}

getProductAdaptorproductBasePropertyQueryList.requestConfig =
  getProductAdaptorproductBasePropertyQueryListRequestConfig

export interface IRequestGetProductAdaptorproductBasePropertyValueQueryList {
  propertyId: string
}

export type IResponseGetProductAdaptorproductBasePropertyValueQueryList = {
  id: string
  code: string
  name: string
  createdAt: string
  updatedAt: string
  propertyId: string
  sort: number
}[]

const getProductAdaptorproductBasePropertyValueQueryListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/basePropertyValue/queryList',
    method: Method.GET,
    queryNames: ['propertyId'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductBasePropertyValueQueryList =
  /*#__PURE__*/ (
    requestData: IRequestGetProductAdaptorproductBasePropertyValueQueryList,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetProductAdaptorproductBasePropertyValueQueryList>(
      prepare(
        getProductAdaptorproductBasePropertyValueQueryListRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getProductAdaptorproductBasePropertyValueQueryList.requestConfig =
  getProductAdaptorproductBasePropertyValueQueryListRequestConfig

export interface IRequestGetProductAdaptorproductBasePropertyValueQueryPage {
  productId: string
  propertyId: string
  type: string
  pageNum: string
  pageSize: string
  platform: string
  shopCode: string
}

export interface IResponseGetProductAdaptorproductBasePropertyValueQueryPage {
  total: number
  list: {
    id: string
    code: string
    name: string
    createdAt: string
    updatedAt: string
    propertyId: string
    sort: number
    propertyName: string
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getProductAdaptorproductBasePropertyValueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/basePropertyValue/queryPage',
    method: Method.GET,
    queryNames: [
      'productId',
      'propertyId',
      'type',
      'pageNum',
      'pageSize',
      'platform',
      'shopCode',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductBasePropertyValueQueryPage =
  /*#__PURE__*/ (
    requestData: IRequestGetProductAdaptorproductBasePropertyValueQueryPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetProductAdaptorproductBasePropertyValueQueryPage>(
      prepare(
        getProductAdaptorproductBasePropertyValueQueryPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getProductAdaptorproductBasePropertyValueQueryPage.requestConfig =
  getProductAdaptorproductBasePropertyValueQueryPageRequestConfig

export interface IRequestGetProductAdaptorproductShopsQueryList {
  platform: string
}

export type IResponseGetProductAdaptorproductShopsQueryList = {
  shopCode: string
  lastExchangeSyncTime: number
  lastRefundSyncTime: number
  lastTradeSyncTime: number
  lastReturnTrapsSyncTime: number
  lastItemSyncTime: number
  lastTradeTrapsSyncTime: number
  shopName: string
  lastRefundTrapsSyncTime: number
  params: {
    qimenpos_target_app_key: string
    app_url: string
    code: string
    code_redirect_url: string
    shopName: string
    scene: string
    access_token: string
    refresh_token: string
    app_key: string
    qimenpos_app_url: string
    qimenpos_customerid: string
    source_rds: string
    seller_nick: string
    app_secret: string
    expires_in: string
    taobao_user_nick: string
    qimen_app_url: string
    push_through_platform: string
    market: string
    delivery_template_id: string
    exchange_query_rds: string
    id: number
    xsd: number
    repair_to_return: string
    shipping_new: string
    oss_endpoint: string
    taobao_user_id: string
    subscribe_topics: string
    subscribe_message: string
    customer_id: string
    app_session: string
    stock_type: string
  }
  platform: string
  createdAt: number
  lastReturnSyncTime: number
  lastExchangeTrapsSyncTime: number
  tenantId: number
  alias: string
  appKey: string
  id: number
  status: number
  updatedAt: number
  tokenExpiredDate: number
  lastRefundAuditSyncTime: number
  company: string
}[]

const getProductAdaptorproductShopsQueryListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/shops/queryList',
    method: Method.GET,
    queryNames: ['platform'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductShopsQueryList = /*#__PURE__*/ (
  requestData: IRequestGetProductAdaptorproductShopsQueryList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetProductAdaptorproductShopsQueryList>(
    prepare(getProductAdaptorproductShopsQueryListRequestConfig, requestData),
    ...args,
  )
}

getProductAdaptorproductShopsQueryList.requestConfig =
  getProductAdaptorproductShopsQueryListRequestConfig

export interface IRequestGetProductAdaptorproductProductPropertyValueQueryPage {
  productId: string
  propertyId: string
  type: string
  platform: string
  shopCode: string
  pageNum: string
  pageSize: string
}

export interface IResponseGetProductAdaptorproductProductPropertyValueQueryPage {
  total: number
  list: {
    id: string
    productId: string
    type: string
    name: string
    propertyId: string
    shopCode: string
    platform: string
    createdAt: string
    updatedAt: string
    sort: number
  }[]
  pageNum: number
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getProductAdaptorproductProductPropertyValueQueryPageRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productPropertyValue/queryPage',
    method: Method.GET,
    queryNames: [
      'productId',
      'propertyId',
      'type',
      'platform',
      'shopCode',
      'pageNum',
      'pageSize',
    ],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductProductPropertyValueQueryPage =
  /*#__PURE__*/ (
    requestData: IRequestGetProductAdaptorproductProductPropertyValueQueryPage,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetProductAdaptorproductProductPropertyValueQueryPage>(
      prepare(
        getProductAdaptorproductProductPropertyValueQueryPageRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getProductAdaptorproductProductPropertyValueQueryPage.requestConfig =
  getProductAdaptorproductProductPropertyValueQueryPageRequestConfig

export interface IRequestGetProductAdaptorproductPinduoduoProductGoodsCountryGet {
  shopCode: string
}

export type IResponseGetProductAdaptorproductPinduoduoProductGoodsCountryGet = {
  countryId: string
  countryName: string
}[]

const getProductAdaptorproductPinduoduoProductGoodsCountryGetRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/pinduoduoProduct/goodsCountryGet',
    method: Method.GET,
    queryNames: ['shopCode'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductPinduoduoProductGoodsCountryGet =
  /*#__PURE__*/ (
    requestData: IRequestGetProductAdaptorproductPinduoduoProductGoodsCountryGet,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetProductAdaptorproductPinduoduoProductGoodsCountryGet>(
      prepare(
        getProductAdaptorproductPinduoduoProductGoodsCountryGetRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getProductAdaptorproductPinduoduoProductGoodsCountryGet.requestConfig =
  getProductAdaptorproductPinduoduoProductGoodsCountryGetRequestConfig

export interface IRequestGetProductAdaptorproductPlatformProductStandardDeliveryTemplateList {
  shopCode: string
  platform: string
  categoryId: string
}

export type IResponseGetProductAdaptorproductPlatformProductStandardDeliveryTemplateList =
  {
    templateId: string
    templateName: string
  }[]

const getProductAdaptorproductPlatformProductStandardDeliveryTemplateListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/platformProductStandard/deliveryTemplateList',
    method: Method.GET,
    queryNames: ['shopCode', 'platform', 'categoryId'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductPlatformProductStandardDeliveryTemplateList =
  /*#__PURE__*/ (
    requestData: IRequestGetProductAdaptorproductPlatformProductStandardDeliveryTemplateList,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetProductAdaptorproductPlatformProductStandardDeliveryTemplateList>(
      prepare(
        getProductAdaptorproductPlatformProductStandardDeliveryTemplateListRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getProductAdaptorproductPlatformProductStandardDeliveryTemplateList.requestConfig =
  getProductAdaptorproductPlatformProductStandardDeliveryTemplateListRequestConfig

export type IRequestPostProductAdaptorproductProductPropertyValueCreateBatch = {
  productId: string
  propertyId: string
  type: string
  platform: string
  shopCode: string
  name: string
}[]

export type IResponsePostProductAdaptorproductProductPropertyValueCreateBatch =
  string

const postProductAdaptorproductProductPropertyValueCreateBatchRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productPropertyValue/createBatch',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductProductPropertyValueCreateBatch =
  /*#__PURE__*/ (
    requestData: IRequestPostProductAdaptorproductProductPropertyValueCreateBatch,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductProductPropertyValueCreateBatch>(
      prepare(
        postProductAdaptorproductProductPropertyValueCreateBatchRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductProductPropertyValueCreateBatch.requestConfig =
  postProductAdaptorproductProductPropertyValueCreateBatchRequestConfig

export interface IRequestGetProductAdaptorproductJingdongProductFindPromiseTemplate {
  shopCode: string
  categoryId: string
}

export type IResponseGetProductAdaptorproductJingdongProductFindPromiseTemplate =
  {
    templateId: string
    templateName: string
  }[]

const getProductAdaptorproductJingdongProductFindPromiseTemplateRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/jingdongProduct/findPromiseTemplate',
    method: Method.GET,
    queryNames: ['shopCode', 'categoryId'],
    requestBodyType: RequestBodyType.query,
  }

export const getProductAdaptorproductJingdongProductFindPromiseTemplate =
  /*#__PURE__*/ (
    requestData: IRequestGetProductAdaptorproductJingdongProductFindPromiseTemplate,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponseGetProductAdaptorproductJingdongProductFindPromiseTemplate>(
      prepare(
        getProductAdaptorproductJingdongProductFindPromiseTemplateRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

getProductAdaptorproductJingdongProductFindPromiseTemplate.requestConfig =
  getProductAdaptorproductJingdongProductFindPromiseTemplateRequestConfig

export type IRequestPostProductAdaptorproductProductPropertyValueDelete =
  string[]

export type IResponsePostProductAdaptorproductProductPropertyValueDelete =
  string

const postProductAdaptorproductProductPropertyValueDeleteRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productPropertyValue/delete',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductProductPropertyValueDelete =
  /*#__PURE__*/ (
    requestData: IRequestPostProductAdaptorproductProductPropertyValueDelete,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductProductPropertyValueDelete>(
      prepare(
        postProductAdaptorproductProductPropertyValueDeleteRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductProductPropertyValueDelete.requestConfig =
  postProductAdaptorproductProductPropertyValueDeleteRequestConfig

export interface IRequestPostProductAdaptorproductProductStaticResourceUploadMaterial {}

export type IResponsePostProductAdaptorproductProductStaticResourceUploadMaterial =
  {
    sort: string
    type: string
    uri: string
    url: string
  }[]

const postProductAdaptorproductProductStaticResourceUploadMaterialRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productStaticResource/uploadMaterial',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductProductStaticResourceUploadMaterial =
  /*#__PURE__*/ (
    requestData?: IRequestPostProductAdaptorproductProductStaticResourceUploadMaterial,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductProductStaticResourceUploadMaterial>(
      prepare(
        postProductAdaptorproductProductStaticResourceUploadMaterialRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductProductStaticResourceUploadMaterial.requestConfig =
  postProductAdaptorproductProductStaticResourceUploadMaterialRequestConfig

export interface IRequestPostProductAdaptorproductProductStaticResourceUpload {}

export interface IResponsePostProductAdaptorproductProductStaticResourceUpload {
  uri: string
  url: string
}

const postProductAdaptorproductProductStaticResourceUploadRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/product/adaptorproduct/productStaticResource/upload',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postProductAdaptorproductProductStaticResourceUpload =
  /*#__PURE__*/ (
    requestData?: IRequestPostProductAdaptorproductProductStaticResourceUpload,
    ...args: UserRequestRestArgs
  ) => {
    return request<IResponsePostProductAdaptorproductProductStaticResourceUpload>(
      prepare(
        postProductAdaptorproductProductStaticResourceUploadRequestConfig,
        requestData,
      ),
      ...args,
    )
  }

postProductAdaptorproductProductStaticResourceUpload.requestConfig =
  postProductAdaptorproductProductStaticResourceUploadRequestConfig

export interface IRequestPostCustomsCustomsPush {
  requestId: string
  [k: string]: unknown
}

export type IResponsePostCustomsCustomsPush = string

const postCustomsCustomsPushRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/customs/customs/push',
  method: Method.POST,
  queryNames: ['requestId'],
  requestBodyType: RequestBodyType.json,
}

export const postCustomsCustomsPush = /*#__PURE__*/ (
  requestData: IRequestPostCustomsCustomsPush,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostCustomsCustomsPush>(
    prepare(postCustomsCustomsPushRequestConfig, requestData),
    ...args,
  )
}

postCustomsCustomsPush.requestConfig = postCustomsCustomsPushRequestConfig

export interface IRequestGetCustomsCustomsList {
  pageNum: string
  pageSize: string
  platformCode?: string
  billNo?: string
  startTime?: string
  endTime?: string
  customsStatus?: string
  pushStatus?: string
}

export interface IResponseGetCustomsCustomsList {
  total: number
  list: {
    authCode: string
    platformCode: string
    status: string
    createAt: string
    updatedAt: string
    id: string
    requestId: string
  }[]
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getCustomsCustomsListRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/customs/customs/list',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'platformCode',
    'billNo',
    'startTime',
    'endTime',
    'customsStatus',
    'pushStatus',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getCustomsCustomsList = /*#__PURE__*/ (
  requestData: IRequestGetCustomsCustomsList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetCustomsCustomsList>(
    prepare(getCustomsCustomsListRequestConfig, requestData),
    ...args,
  )
}

getCustomsCustomsList.requestConfig = getCustomsCustomsListRequestConfig

export interface IRequestGetCustomsCustomsGetInterfaceParam {
  requestId: string
}

export interface IResponseGetCustomsCustomsGetInterfaceParam {
  responseParam: string
  requestParam: string
}

const getCustomsCustomsGetInterfaceParamRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/customs/customs/getInterfaceParam',
    method: Method.GET,
    queryNames: ['requestId'],
    requestBodyType: RequestBodyType.query,
  }

export const getCustomsCustomsGetInterfaceParam = /*#__PURE__*/ (
  requestData: IRequestGetCustomsCustomsGetInterfaceParam,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetCustomsCustomsGetInterfaceParam>(
    prepare(getCustomsCustomsGetInterfaceParamRequestConfig, requestData),
    ...args,
  )
}

getCustomsCustomsGetInterfaceParam.requestConfig =
  getCustomsCustomsGetInterfaceParamRequestConfig

export interface IRequestPostSystemPlatformAuthDelete {
  id: string
}

export type IResponsePostSystemPlatformAuthDelete = string

const postSystemPlatformAuthDeleteRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platformAuth/delete',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemPlatformAuthDelete = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformAuthDelete,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformAuthDelete>(
    prepare(postSystemPlatformAuthDeleteRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformAuthDelete.requestConfig =
  postSystemPlatformAuthDeleteRequestConfig

export interface IRequestPostSystemPlatformAuthRefreshToken {
  id: string
}

export type IResponsePostSystemPlatformAuthRefreshToken = string

const postSystemPlatformAuthRefreshTokenRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformAuth/refreshToken',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformAuthRefreshToken = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformAuthRefreshToken,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformAuthRefreshToken>(
    prepare(postSystemPlatformAuthRefreshTokenRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformAuthRefreshToken.requestConfig =
  postSystemPlatformAuthRefreshTokenRequestConfig

export interface IRequestPostSystemPlatformAuthCreate {
  platformCode?: string
  authCode?: string
}

export type IResponsePostSystemPlatformAuthCreate = string

const postSystemPlatformAuthCreateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platformAuth/create',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemPlatformAuthCreate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformAuthCreate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformAuthCreate>(
    prepare(postSystemPlatformAuthCreateRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformAuthCreate.requestConfig =
  postSystemPlatformAuthCreateRequestConfig

export interface IRequestPostSystemPlatformAuthUpdate {
  id: string
  authName?: string
  platformCode?: string
  extendsInfo?: string
  status?: number
}

export type IResponsePostSystemPlatformAuthUpdate = string

const postSystemPlatformAuthUpdateRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platformAuth/update',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
}

export const postSystemPlatformAuthUpdate = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformAuthUpdate,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformAuthUpdate>(
    prepare(postSystemPlatformAuthUpdateRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformAuthUpdate.requestConfig =
  postSystemPlatformAuthUpdateRequestConfig

export interface IRequestPostSystemPlatformAuthGetToken {
  id: string
}

export type IResponsePostSystemPlatformAuthGetToken = string

const postSystemPlatformAuthGetTokenRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/system/platformAuth/getToken',
    method: Method.POST,
    requestBodyType: RequestBodyType.json,
  }

export const postSystemPlatformAuthGetToken = /*#__PURE__*/ (
  requestData: IRequestPostSystemPlatformAuthGetToken,
  ...args: UserRequestRestArgs
) => {
  return request<IResponsePostSystemPlatformAuthGetToken>(
    prepare(postSystemPlatformAuthGetTokenRequestConfig, requestData),
    ...args,
  )
}

postSystemPlatformAuthGetToken.requestConfig =
  postSystemPlatformAuthGetTokenRequestConfig

export interface IRequestGetSystemPlatformAuthQuery {
  pageNum: string
  pageSize: string
  authCode?: string
  platformCode?: string
  status?: string
  productCode: string
}

export interface IResponseGetSystemPlatformAuthQuery {
  total: number
  list: {
    authCode: string
    platformCode: string
    status: string
    createAt: string
    updatedAt: string
    id: string
  }[]
  pageSize: number
  size: number
  startRow: number
  endRow: number
  pages: number
  prePage: number
  nextPage: number
  isFirstPage: boolean
  isLastPage: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
  navigatePages: number
  navigatepageNums: number[]
  navigateFirstPage: number
  navigateLastPage: number
}

const getSystemPlatformAuthQueryRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platformAuth/query',
  method: Method.GET,
  queryNames: [
    'pageNum',
    'pageSize',
    'authCode',
    'platformCode',
    'status',
    'productCode',
  ],
  requestBodyType: RequestBodyType.query,
}

export const getSystemPlatformAuthQuery = /*#__PURE__*/ (
  requestData: IRequestGetSystemPlatformAuthQuery,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformAuthQuery>(
    prepare(getSystemPlatformAuthQueryRequestConfig, requestData),
    ...args,
  )
}

getSystemPlatformAuthQuery.requestConfig =
  getSystemPlatformAuthQueryRequestConfig

export interface IRequestGetCustomsCustomsGetPlatformList {}

export type IResponseGetCustomsCustomsGetPlatformList = {
  value: string
  code: string
}[]

const getCustomsCustomsGetPlatformListRequestConfig: RequestConfig =
  /*#__PURE__*/ {
    path: '/customs/customs/getPlatformList',
    method: Method.GET,
    requestBodyType: RequestBodyType.query,
  }

export const getCustomsCustomsGetPlatformList = /*#__PURE__*/ (
  requestData?: IRequestGetCustomsCustomsGetPlatformList,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetCustomsCustomsGetPlatformList>(
    prepare(getCustomsCustomsGetPlatformListRequestConfig, requestData),
    ...args,
  )
}

getCustomsCustomsGetPlatformList.requestConfig =
  getCustomsCustomsGetPlatformListRequestConfig

export interface IRequestGetSystemPlatformAuthGet {
  authCode: string
  platformCode: string
  productCode: string
}

export interface IResponseGetSystemPlatformAuthGet {
  lastExchangeSyncTime: number
  lastRefundSyncTime: number
  lastUpdateAddrTrapsSyncTime: number
  lastTradeSyncTime: number
  lastItemSyncTime: number
  lastTradeTrapsSyncTime: number
  shopName: string
  lastRefundTrapsSyncTime: number
  lastItemTrapsSyncTime: number
  platform: string
  translate: {
    app_type: string
    app_url: string
    code: string
    access_token: string
    shop_id: string
    refresh_token: string
    app_key: string
    queryTuanZhang: string
    service_id: string
    app_secret: string
    expires_in: string
    download_by_api: string
    addr_confirm: string
  }
  createdAt: number
  lastReturnSyncTime: number
  lastExchangeTrapsSyncTime: number
  alias: string
  appKey: string
  id: number
  shopCode: string
  lastReturnTrapsSyncTime: number
  params: {
    access_token: string
    shop_id: string
    refresh_token: string
    app_type: string
    app_url: string
    code: string
    app_key: string
    queryTuanZhang: string
    service_id: string
    app_secret: string
    download_by_api: string
    addr_confirm: string
  }
  lastRefundAuditSyncTime: number
  lastUpdateAddrSyncTime: number
  fieldsInfo: {
    field: string
    remark: string
    value: string
    required: boolean
  }[]
  tenantId: number
  status: number
}

const getSystemPlatformAuthGetRequestConfig: RequestConfig = /*#__PURE__*/ {
  path: '/system/platformAuth/get',
  method: Method.GET,
  queryNames: ['authCode', 'platformCode', 'productCode'],
  requestBodyType: RequestBodyType.query,
}

export const getSystemPlatformAuthGet = /*#__PURE__*/ (
  requestData: IRequestGetSystemPlatformAuthGet,
  ...args: UserRequestRestArgs
) => {
  return request<IResponseGetSystemPlatformAuthGet>(
    prepare(getSystemPlatformAuthGetRequestConfig, requestData),
    ...args,
  )
}

getSystemPlatformAuthGet.requestConfig = getSystemPlatformAuthGetRequestConfig

/* prettier-ignore-end */
