const router = require("express").Router();
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const ImageController = require('../../controllers/ImageController');
const path = require('path');
const crypto = require('crypto');
