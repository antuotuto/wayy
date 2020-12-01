// pages/demo3/demo3.js

const db=wx.cloud.database();
const _=db.command;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getData(){
    // db.collection("list")
    // .where({
    //   hits:_.or(_.lte(0),_.gte(1999))
    // })
    // .get()
    // .then(res=>{
    //   this.setData({
    //     dataList:res.data
    //   })
    // })
    
    // hits:_.lt(100000),
    // author:_.neq("王安")

    db.collection("list")
    .where({
      tabs:_.all(['恋爱','人生'])
    })
    .get()
    .then(res=>{
      this.setData({
        dataList:res.data
      })
    })
  },

  upDate(){
    
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