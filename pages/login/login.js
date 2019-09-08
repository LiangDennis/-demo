// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    namemsg:'',
    pasmsg:''
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

  onbindsubmit (event) {
    console.log(event);
    console.log(event.detail.value);
    if(event.detail.value.username == "" || event.detail.value.password == "") {
      if(event.detail.value.username == "") {
        this.setData({
          namemsg:'请输入用户名'
        });
      }else {
        this.setData({
          namemsg:''
        });
      }
      if(event.detail.value.password == "") {
        this.setData({
          pasmsg:'请输入密码'
        });
      }else {
        this.setData({
          pasmsg:''
        });
      }
    }else {
      this.setData({
        namemsg:'',
        pasmsg:''
      });
      console.log("提交成功");
    }

    // if(event.detail.value.username =="" ) {
    //   this.setData({
    //     namemsg:'请输入用户名'
    //   });
    // } else if (event.detail.value.password == ""){
    //   this.setData({
    //     pasmsg:'请输入密码'
    //   });
    // }else {
    //   console.log("提交成功");
    // }
  }
})