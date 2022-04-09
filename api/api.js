import {
  Get,
  Post,
} from './config'
// const Url = "https://cardsteelt.zgw.com"
// export const miniVersion = 'trial'
const Url = "https://cardsteels.zgw.com";
export const miniVersion = 'release'

/**
 * 获取钢厂直销热门省份
 * @param {object} parame 
 */
export const GetIndexCityList = (parame) => {
  return Get(Url + '/api/SteelSale/GetIndexCityList', parame)
}

/**
 * 获取钢厂
 * @param {object} parame 
 */
export const GetSteelMillListAZ = (parame) => {
  return Get(Url + '/api/SteelSale/GetSteelMillListAZ', parame)
}
/**
 * 获取用户钢厂列表
 * @param {*} parame 
 */
export const GetSteelMillList = (parame) => {
  return Get(Url + '/api/SteelSale/GetSteelMillList', parame)
}
/**
 * 获取品名材质
 * @param {object} parame 
 */
export const GetPmList = (parame) => {
  return Get(Url + '/api/SteelSale/GetPmList', parame)
}
/**
 * 获取默认数据
 * @param {object} parame 
 */
// export const GetDefaultData = (parame) => {
//   return Get(Url + '/api/SteelSale/GetDefaultData', parame)
// }
/**
 * 获取规格长度
 * @param {*} parame 
 */
export const GetSellLengthSpecificat = (parame) => {
  return Get(Url + '/api/SteelSale/GetSellLengthSpecificat', parame)
}

/**
 * 获取钢厂直销首页列表信息
 * @param {object} parame 
 */
export const GetSteelSaleList = (parame) => {
  return Get(Url + '/api/SteelSale/GetSteelSaleList', parame)
}

/**
 * 获取钢厂资源
 * @param {object} parame 
 */
export const GetSteelSaleList2 = (parame) => {
  return Post(Url + '/api/SteelSale/GetSteelSaleList2', parame)
}

/**
 * 获取比价列表
 * @param {object} parame 
 */
export const GetSteelSaleListByPID = (parame) => {
  return Post(Url + '/api/SteelSale/GetSteelSaleListByPID', parame)
}

/**
 * 获取交货地信息
 * @param {*} parame 
 */
export const GetCityList = (parame) => {
  return Get(Url + '/api/SteelSale/GetCityList', parame)
}

/**
 * 上传图片地址
 */
export const UploadImage = Url + '/api/Tools/UploadImage'
/**
 * 管理分享内容
 * @param {*} parame 
 */
export const ManageShareContent = (parame) => {
  return Post(Url + '/api/Share/ManageShareContent', parame)
}
/**
 * 获取分享设置信息
 * @param {*} parame 
 */
export const GetShareContentByMobile = (parame) => {
  return Get(Url + '/api/Share/GetShareContentByMobile', parame)
}
/**
 * 添加转发记录
 * @param {*} parame 
 */
export const AddUserShareLog = (parame) => {
  return Post(Url + '/api/Share/AddUserShareLog', parame)
}
/**
 * 访客统计表
 * @param {*} parame 
 */
export const GetUserVisitData = (parame) => {
  return Get(Url + '/api/Share/GetUserVisitData', parame)
}

/**
 * 访客统计月份明细
 * @param {*} parame 
 */
export const GetSteelVisitInfoList = (parame) => {
  return Get(Url + '/api/Share/GetSteelVisitInfoList', parame)
}


/**
 * 转发统计表
 * @param {*} parame
 */
export const GetShareData = (parame) => {
  return Get(Url + '/api/Share/GetShareData', parame)
}


/**
 * 转发统计月份明细
 * @param {*} parame 
 */
export const GetSteelShareList = (parame) => {
  return Get(Url + '/api/Share/GetSteelShareList', parame)
}


/**
 * 获取手机号默认的我的钢厂数据
 * @param {*} parame 
 */
export const GetDefaultData = (parame) => {
  return Get(Url + '/api/SteelSale/GetDefaultData', parame)
}

/**
 * 获取微信手机号
 * @param {*} parame 
 */
export const GetWeiXinPhone = (parame) => {
  return Post(Url + '/api/SteelSale/GetWeiXinPhone', parame)
}