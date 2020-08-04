const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
})

module.exports = multer({
    storage: multerS3({
        s3:s3,
        bucket:'find-one',
        metadata: function(req, file,  callback){
            callback(null, {fieldName: file.fieldname})
        },
        key: function(req, file, callback){
            const ext =path.extname(file.originalname)
            const name = path.basename(file.originalname)
            callback(null, `${name.replace(/\s/g, '')}-${Date.now()}${ext}`)
        }
    })

})