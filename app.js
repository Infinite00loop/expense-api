const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const cors = require('cors');
const adminRoutes = require('./routes/admin');
const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use(adminRoutes);

sequelize.sync()
.then(result=>{
    console.log('table created');
    app.listen(7000);
})
.catch(err=>console.log(err));