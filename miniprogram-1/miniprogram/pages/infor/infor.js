// pages/infor/infor.js

const db=wx.cloud.database();
var myVlu="";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 更新记录
  updateData(){
    db.collection("list")
    .doc("0288fce75fbde771004c48ca6d764cc8")
    .update({
      data:{
        author:"王安"
      }
    }).then(res=>{
      console.log(res)
    })

  },


  // 获取输入的内容
  myIpt(res){
    var vlu=res.detail.value;
    myVlu=vlu
  },

  // 删除记录
  delData(){
    db.collection("list")
    .doc(myVlu)
    .remove()
    .then(res=>{
      console.log(res)
    })
  },

  // 获取记录格式
  btnNum(){
    // db.collection("list").get().then(res=>{

    // })
    
    db.collection("list").count()
    .then(res=>{
      console.log(res)  
    })
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();

    db.collection("list").watch({
      onChange:res=>{
        console.log(res.docs)
        this.setData({
          dataArr:res.docs
        })
      },
      onError:err=>{
        console.log(res)
      }
    })

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