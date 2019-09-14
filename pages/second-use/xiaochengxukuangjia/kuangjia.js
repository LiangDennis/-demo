// pages/second-use/xiaochengxukuangjia/kuangjia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    staffA: {firstname:"xixi",lastname:"gigi"},
    staffB: {firstname:"zaza",lastname:"gaga"},
    staffC: {firstname:"onon",lastname:"enen"}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("获取APP信息");
    // const appInstance = getApp();
    // console.log(appInstance);
    // console.log(this);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 测试登录是否可用
  getUser() {
    console.log("getuser");
    wx.login({
      success: res=> {
        console.log(res);
        console.log("success");
      }
    });
    
    console.log(this.data.staff);
  },
  // 获取用户信息
  getUserInfo() {
    console.log("获取用户信息");
    wx.getUserInfo({
      success: res => {
        console.log(res);
        console.log("success");
      }
    })
  }
})