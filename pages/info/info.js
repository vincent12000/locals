var app = getApp()
Page({
  data:{},
  onLoad:function(options){
    console.log('info onload')
    var that = this
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})