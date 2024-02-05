import { createCustumerController } from "../Controllers/createCutomerControllers";
const {Router} = require('express')
const express = require('express'); 

const router = express.Router();

console.log('custuemer rotas')

router.get('/',createCustumerController)


module.exports =  router ;