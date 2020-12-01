// pages/anyu/anyu.js

const db=wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:""
  },

  // 加载初始数据
  getData(){
    db.collection("list")
    .get()
    .then(res=>{
      this.setData({
        dataArr:res.data
      })
    })
  },

  // 添加数据
  addData(){
    wx.showLoading({
      title: '数据加载中',
      mask:true
    })
    db.collection("list").add({
      data:{
        title:"测试标题",
        content:"阿斯顿发所大所大所大所大所大所多萨达所大所多"
      }
    }).then(res=>{
      wx.hideLoading()
    })
  },

  // 提交表单添加进数据库
  btnSub(res){
    var resVlu=res.detail.value;
    db.collection("list").add({
      data:resVlu
    }).then(res=>{
      console.log(res)
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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