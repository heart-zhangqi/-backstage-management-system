//  用于操作数据库的模块

const mongoose = require( 'mongoose' );

// 1.连接数据库
const connect = require('./connect.js')

connect.init()

// 2.骨架的处理
const{ shopSchema } = require('./schema/index.js')

// 3.得到的模型
const shopModel = mongoose.model('shops',shopSchema)

// 4.数据库的CURD
const db = {
    shop:{
        add( data ){
            console.log( data)

            return new Promise(( resolve,reject )=>{
                const shopEnity = new shopModel(data)
                shopModel.find({},( err,doc ) => {
                    const f  = doc.some(item => item.id == data.id)
                    console.log( doc)
                    if(f){
                        // 已存在
                        resolve({
                            info:'该店铺信息已存在，不能重复添加',
                            status:0,
                            reslut:[]
                        })
                    }else{
                        // 不存在
                        shopEnity.save( err =>{
                            if( err ){
                                reject({
                                    info:'店铺信息添加异常',
                                    status:1,
                                    reslut:[]
                                })
                            }else{
                                resolve({
                                    info:'店铺信息新增成功',
                                    status:2,
                                    result:[]
                                })
                            }
                        } )
                    }
                })
            })
        },
        del( _id ){
            return new Promise(( resolve,reject ) => {
                shopModel.findById( _id ,(err,doc)=>{
                    if(err){
                        reject({
                            info:'删除失败',
                            status:1,
                            result:[]
                        })
                    }else{
                        doc.remove( err => {
                            shopModel.find({},(err,docs) => {
                                if( !err ){
                                    resolve({
                                        info:'删除成功',
                                        status:2,
                                        result:docs
                                    })
                                }
                            })
                        })
                    }
                })
            })
        },
        modify( data ){
            return new Promise(( resolve,reject ) => {
                shopModel.findById( data._id,( err,doc ) => {
                    for( var i in data ){
                        doc[i] = data[i]
                    }
                    doc.save( err => {
                        if(err){
                            reject({
                                info:'网络异常，请稍后再试',
                                status:0
                            })
                        }else{
                            resolve({
                                info:'数据修改成功',
                                status:2
                            })
                        }
                    })
                })
            })
        },
        query(){
            return new Promise( ( resolve,reject ) => {
                shopModel.find({},(err,docs) => {
                    if(err){
                        reject({
                            info:'查询失败',
                            status:0,
                            result:[]
                        })
                    }else{
                        resolve({
                            info:'查询成功',
                            status:2,
                            result:docs
                        })
                    }
                })
            })
        }
    }
}

module.exports = {
    shop:db.shop
}