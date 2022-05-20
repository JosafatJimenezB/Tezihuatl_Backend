const express = require('express')
const { route } = require('express/lib/application');
const router = express.Router()
const conexion = require('../database/db');

const authController = require('../controllers/authController')



//router para las vistas
router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {user:req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})


router.get('/', (req, res) => {
    
    conexion.query('SELECT * FROM clients', (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    });
});


// Mostrar la data

router.get('/data', (req, res) => {
    
    conexion.query('SELECT * FROM clients', (error, results) => {
        if(error){
            throw error;
        }else{
            data = JSON.stringify(results);
            res.send(data);
        }
    });
});






// Ruta para los registros
router.get('/create', (req, res) =>{
    res.render('create');
});


// Ruta para editar los registros
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM clients WHERE id=?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    });
});


// Creacion de ususario
const crud = require('../controllers/crud')
router.post('/save', crud.save)

// Update de usuario
router.post('/update', crud.update);


// Eliminacion de usuario
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM clients WHERE id=?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
});



//router para los métodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router