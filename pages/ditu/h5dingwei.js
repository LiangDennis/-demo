// pages/ditu/h5dingwei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0
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

  // 获取地理位置信息
  getMapPosition() {
    // console.log(navigator);
    console.log("hello");
    wx.getSetting({
      success:res=> {
        console.log("获取setting");
        console.log(res);
      }
    })
    wx.getLocation({
      type:'wgs84',
      success: res => {
        console.log(res);
        // this.data.longitude = res.longitude;
        // this.data.latitude = res.latitude;
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        });
      }
    });
  }
})