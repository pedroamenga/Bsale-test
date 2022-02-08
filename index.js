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
    let id = req.params.id
    let nombre = req.params.nombre
    todos = obtenerContactos()
    res.render('index', {nobmre, id})
    res.send('Bienvenido a la API! :D')
});

//all products
app.get('/product', (req, res) => {
    const sql = 'SELECT * FROM bsale_test';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.lenght > 0){
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});

app.get('/product/:id', (req, res) => {
    const {id} = req.params
    const sql = `SELECT * FROM product WHERE id = ${id}`;
        connection.query(sql, (error, result) => {
            if(error) throw error;
            if (result.lenght > 0){
                res.json(result);
            }else{
                res.send('No hay resultados')
            }
        })
})

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO products SET ?';
    const productObj = {
        name:      req.body.name,
        url_image: req.body.url_image,
        price:     req.body.price,
        discount:  req.body.discount,
        category:  req.body.category
    }
connection.query(sql, productObj, error => {
    if (error) throw error;
    res.send('Product created!')
})

})

app.put('/update/:id', (req, res) => {
   const {id} = req.params;
   const {name, url_image, price, discount, category} = req.body;
   const sql = `UPDATE products SET name = '${name}', url_image = '${url_image}', price = ${price}, 
   discount = '${discount}', category = '${category}' WHERE id=${id}`
   connection.query(sql, error => {
    if (error) throw error;
    res.send('Product updated!')
})

})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM product WHERE id=${id}`;

    connection.query(sql, error => {
    if (error) throw error;
    res.send('Borrar producto')
});

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
});

connection.end();