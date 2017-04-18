// pages/house/houseList.js
var houseData=require('../../data/house-data.js')

Page({
  data:{
    searchMoreShow:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(houseData.houseList);
    this.setData({
      houseList:houseData.houseList
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
  },
  bindSearchMoreTap: function() {
    this.setData({
      searchMoreShow:true
    })
  },
  bindHindSearchMoreTap:function() {
    this.setData({
      searchMoreShow:false
    })
  },
  onScrollLower:function(event){
    console.log("onScrollLower");
    wx.showNavigationBarLoading();
    this.processHouseListData(houseData.houseList);
  },
  processHouseListData:function(houseList){
    var totalHouseList = {};
    if(!this.data.isEmpty){
      totalHouseList = this.data.houseList.concat(houseList);
    } else {
      totalHouseList = houseList;
      this.setData({
        isEmpty:false
      })
    }
    this.setData({
        houseList:totalHouseList
    })
    console.log('call  wx.hideNavigationBarLoading')
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
  }
})