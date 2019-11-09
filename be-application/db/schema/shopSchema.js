const mongoose = require('mongoose')

// 1.得到一个schema实例
const shopSchema = new mongoose.Schema({
    id:String,
    name:String,//店铺名称
    address:String,//店铺详细地址
    phone: String,//店铺联系方式
    info: String,//店铺信息
    slogan: String,//店铺标语
    region: String,//店铺分类
    feature: String,//店铺特点
    delivery: String,//配送费
    price: String,//起送价
    startTime: String,//营业时间
    endTime: String,//结束时间
    logoUrl: String,//店铺logo
    manageUrl: String,//营业执照
    diningUrl: String//许可证 
})


// 2.导出模板
module.exports = shopSchema