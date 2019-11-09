const express = require('express');

const router = express.Router();

const { shop } = require( '../db/index' );

var multer = require('multer');

var path = require('path')
// 关于图片的磁盘处理
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join( __dirname,'../public/upload'))
    },
    filename: function (req, file, cb) {
        // originalname:源文件名
      cb(null,file.originalname)
    }
  })

var upload = multer({ storage: storage })

router.route('/')
    .post( upload.any(), async (req,res,next) =>{
        let result = await shop.add(req.body)

        res.render('shop',{
            data:JSON.stringify({
                info:result.info,
                status:result.status,
                result:result.result
            })
        })
    })
    .delete( async (req,res,next) =>{
        const { _id } = req.query
        let result = await shop.del( _id )

        res.render('shop',{
            data:JSON.stringify({
                info:result.info,
                status:result.status,
                result:result.result
            })
        })
    })
    .put(upload.any(),async(req,res,next) =>{
        const result = await shop.modify(req.body)

        res.render('shop',{
            data:JSON.stringify({
                info:result.info,
                status:result.status,
                result:result.result
            })
        })
    })
    .get(async(req,res,next) =>{
        const result = await shop.query()

        res.render('shop',{
            data:JSON.stringify({
                info:result.info,
                status:result.status,
                result:result.result
            })
        })
    })



module.exports = router