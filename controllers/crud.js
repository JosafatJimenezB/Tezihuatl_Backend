const conexion = require('../database/db');

exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    const edad = req.body.edad;
    const genero = req.body.genero;
    const estadoCivil = req.body.estadoCivil;
    const domicilio = req.body.domicilio;
    const motivo = req.body.motivo;

    conexion.query('INSERT INTO clients SET ?',{user:user, rol:rol, edad:edad, genero:genero, estadoCivil:estadoCivil, domicilio:domicilio, motivo:motivo},
     (error, results) =>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }       
    })
}


exports.update = (req, res) =>{
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    const edad = req.body.edad;
    const genero = req.body.genero;
    const estadoCivil = req.body.estadoCivil;
    const domicilio = req.body.domicilio;
    const motivo = req.body.motivo;

    conexion.query('UPDATE clients SET ? WHERE id = ?', [{user:user, rol:rol, edad:edad, genero:genero, estadoCivil:estadoCivil, domicilio:domicilio, motivo:motivo}, id],
     (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}
