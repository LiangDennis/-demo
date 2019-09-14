// pages/components/components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'woshidierge wenben',
    isshow:false,
    password:'',
    avatarUrl:''
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

  // input methods
  onbindinput: function (event) {
    console.log("输入数据的过程中");
    console.log(event.detail);
    console.log(event.detail.value);
    this.setData({
      password:event.detail.value
    });
  },
  onbindfocus:function(event) {
    console.log("获得焦点");
    console.log(event);
    console.log(event.detail);
    console.log(event.detail.value);
  },
  onbindblur:function(event) {
    console.log("失去焦点");
    console.log(event);
    console.log(event.detail);
    console.log(event.detail.value);
  },

  // 按钮methods
  onBindSubmit: function(event) {
    console.log(event.detail);
  },
  onbindgetUserInfo:function(e) {
    console.log(e.detail.userInfo);
    console.log(e.detail.userInfo.avatarUrl);
    this.setData({
      avatarUrl:e.detail.userInfo.avatarUrl
    });
  }
})