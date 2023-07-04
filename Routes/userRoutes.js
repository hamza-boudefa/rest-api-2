const express=require('express')
const {adduser,getAllUsers, getUserById, getUserByage, updateUser, deleteUser} = require('../controllers/userControler')
const Router=express.Router()

Router.post('/adduser',adduser)
Router.get('/getAllUsers',getAllUsers)
Router.get('/getUserById/:id',getUserById)
Router.get('/getbyage',getUserByage)
Router.put('/updateUser/:name',updateUser)
Router.delete('/deleteUser/:id',deleteUser)

module.exports=Router
