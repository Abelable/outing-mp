import api from './api'

class Base {
  constructor() {
    this.baseUrl = 'http://localhost:3000/'
  }

  async get({ url, data, loadingTitle = '加载中...' }) {
    loadingTitle && wx.showLoading({ title: loadingTitle })
    let res = await api.request({ url, data,
      header: {
        "token": wx.getStorageSync('token') || ''
      }
    })
    wx.hideLoading()
    return this.processRes(res)
  }

  async post({ url, data, loadingTitle = '加载中...' }) {
    loadingTitle && wx.showLoading({ title: loadingTitle })
    let res = await api.request({ url, data,
      method: 'POST',
      header: {
        "content-type": 'application/x-www-form-urlencoded',
        "token": wx.getStorageSync('token') || ''
      }
    })
    wx.hideLoading()
    return this.processRes(res)
  }

  chooseImage(count) {
    return api.chooseImage({count})
  }

  getLocation(){
    return api.getLocation()
  }

  getUserInfo() {
    return api.getUserInfo()
  }

  getImageInfo(src) {
    return api.getImageInfo({src: src.replace('http:', 'https:')})
  }

  wxLogin() {
    return api.login()
  }

  requestSubscribeMessage(tmplId) {
    return api.requestSubscribeMessage({ tmplIds: [tmplId]})
  }

  processRes(res) {
    if ([200,201,204].includes(res.statusCode)) {
      const { error_code: errorCode, msg, data } = res.data
      if (!errorCode) return data
      else wx.showToast({ title: msg, icon: 'none' })
    } else {
      wx.showToast({ title: res.errMsg, icon: 'none' })
    }
  }
}

export default Base
