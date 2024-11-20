const express = require('express');
const welcome = require('../Controllers/welcome');
const register = require('../Controllers/register');
const login = require('../Controllers/login');
const  upProject  = require('../Controllers/AddProject');
const  upresourcetype  = require('../Controllers/Addresourcetype');
const updateresourcetype = require('../Controllers/upresourcetype');
const updateProject = require('../Controllers/upProject');
const { deleteProject } = require('../Controllers/deleteProject');
const { deleteresourcetype } = require('../Controllers/deleteresourcetype');
const  Addresourcetype = require('../Controllers/Addresourcetype');
const  add = require('../Controllers/addresource');
const router = express.Router();


// router.post('/api/project', Addproject);  
router.put('/project/:id', updateProject); 
router.put('/Resourcetype/:id', updateresourcetype); 
router.delete('/project/:id', deleteProject);
router.delete('/resourcetype/:id', deleteresourcetype);


router.get('/', welcome);

router.post('/user/register', register);
router.post('/user/login', login);
router.post('/Resourcetype/Addresourcetype', Addresourcetype);
router.post('/resources/addresource', add);

router.post('/project/AddProject',upProject);  
router.post('/Resourcetype/Addresourcetype',upresourcetype);

module.exports = router
