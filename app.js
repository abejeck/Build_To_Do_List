"use strict";
import express from 'express';
const app = express();

app.set('view engine', 'ejs')
app.set('views', './templates')



const PORT = 3000; //original = 5001


app.get('/', (req, res) => {
    res.render('index');

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});


