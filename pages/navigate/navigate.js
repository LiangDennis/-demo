// pages/navigate/navigate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  handleRedirect(event) {
    console.log(event.target.id);
    switch(event.target.id) {
      case '1':
        wx.navigateTo({
          url: '../components/components',
        });
        break;
      case '2':
        wx.navigateTo({
          url: '../flex/flex',
        });
        break;
      case '3':
        wx.navigateTo({
          url: '../index/index',
        });
        break;
      case '4':
        wx.navigateTo({
          url: '../login/login',
        });
        break;
      case '5':
        wx.navigateTo({
          url: '../logs/logs',
        });
        break;
      case '6':
        wx.navigateTo({
          url: '../scrollview/scrollview',
        });
        break;
      case '7':
        wx.navigateTo({
          url: '../scrollviewexample/scrollviewexample',
        });
        break;
      case '8':
        wx.navigateTo({
          url: '../xiecheng/xiecheng',
        });
        break;
      default :
        alert("error");
        break;
    }
  },
  outsite() {
    console.log("事件冒泡");
  }
})