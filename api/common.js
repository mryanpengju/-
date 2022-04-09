// 本地存储对象数据
export const setStorage = (name, obj) => {
  try {
    wx.setStorageSync(name, JSON.stringify(obj))
  } catch (error) {
    console.log(error);
  }
}
//获取本地存储对象数据
export const getStorage = (name) => {
  try {
    let value = wx.getStorageSync(name)
    if (value) {
      return JSON.parse(value)
    } else {
      return {}
    }

  } catch (error) {
    console.log(error);
  }
}
//检查登录状态
export const checkLogin = () => {
  let userInfo = getStorage('userInfo')
  if (userInfo && userInfo.userInfoID) {
    return {
      login: true,
      data: userInfo
    }
  } else {
    return {
      login: false,
      data: {}
    }
  }
}
//传入价格表 和 指定下标组 调整价格 并返回新的价格表
export const priceTablesChange = (priceTable, indexs, price) => {
  priceTable[indexs.gcIndex].pmList[indexs.pmIndex].priceList[indexs.priceIndex].price = price
  return priceTable
}

// 获取更新价格的priceLists
export const getPriceLists = (steelList) => {
  let arr = []
  if (steelList) {
    steelList.forEach(ele1 => {
      ele1.pmList.forEach(ele2 => {
        ele2.priceList.forEach(ele3 => {
          arr.push(ele3)
        });
      });
    });
    return arr
  }
}
// 获取indexs数组更新价格的priceLists
export const getIndexsPriceLists = (priceTable, selectIndexList, allSheetValue) => {
  let newPriceTable = priceTable
  selectIndexList.forEach(ele => {
    let indexs = JSON.parse(ele)
    let price = newPriceTable[indexs.gcIndex].pmList[indexs.pmIndex].priceList[indexs.priceIndex].price
    console.log(price);
    newPriceTable[indexs.gcIndex].pmList[indexs.pmIndex].priceList[indexs.priceIndex].price = Number(price) + Number(allSheetValue)
  });
  let parameArr = newPriceTable
  return parameArr

}