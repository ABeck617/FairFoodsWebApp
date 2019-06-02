// Require express and create an instance of it
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 3000;
order = [];

// Tells the file system that we're using EJS file
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));

// make a directory foler called Views and put the EJS file in that directory
app.get('/', (req, res) => {
    res.render('fairFoods.ejs');
});


app.post('/order', (req, res) => {
    console.log(req.body.customer)
    console.log(res.body.number)

    let customer = req.body.customer
    let number = res.body.number
    orderObj  = {
        "customer": customer,
        "number": number
    }
    orders.push(orderObj)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 