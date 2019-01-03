//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
    wx.cloud.callFunction({
      name: 'MapTest',
    }).then(res=>{
      console.log(res.result.member_map)
    })
  }
})
