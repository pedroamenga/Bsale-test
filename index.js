const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test"
});


app.get('/', (req, res) => {
    res.send('Bienvenido a la API! :D')
})

app.get('/productos', (req, res) => {
    res.send('Lista de productos!')
})

app.post('/add', (req, res) => {
    res.send('Nuevo prodcuto')
})

app.put('/update/:id', (req, res) => {
    res.send('Actualizar producto por id')
})

app.delete('/delete/:id', (req, res) => {
    res.send('Borrar producto')
})

//check connection
connection.connect(function(error){
    if(error) throw error;
    {
        console.log('Estamos conectados a la base de datos!:)');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//query de la BD
//connection.query('SELECT * from users', function(error, results){
//    if(error) throw error;

//    results.forEach(results => {
//        console.log(results);
//    });
//});

connection.end();