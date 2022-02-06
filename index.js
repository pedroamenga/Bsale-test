var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test"
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexión Exitosa!');
    }
});
//query de la BD
conexion.query('SELECT * from ...', function(error, results, fields){
    if(error)
    throw error;

    results.forEach(results => {
        console.log(results);
    });
});

conexion.end();