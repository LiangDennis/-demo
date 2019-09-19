// pages/second-use/biaoqian/biaoqian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempfile:"",
    imgurl:"https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2755303732,1652794948&fm=85&s=CF00F80B974DBB09168C49560300F0B1"
  },

  open() {
    let _that = this;
    wx.chooseImage({
      success: function (res) {
        console.log(res);
        _that.setData({
          tempfile:res.tempFilePaths[0]
        });
        console.log(_that.data.tempfile);
      },
    })
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

  }
})