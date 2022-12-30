var express     = require('express');
var bodyParser  = require('body-parser');
const path = require('path');
var app = express();

// const demoRoutes = require('./routes/demo');
const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');
const addProduct = require('./routes/addProduct');



//app.set('view engine','ejs');
app.set('view engine', 'html');
app.use('/image',express.static(__dirname+'/image/'));


app.use(bodyParser.urlencoded({extended:true,limit:'50mb',parameterLimit:50000}));
app.use(bodyParser.json());
app.use('/jquery',express.static(__dirname+'/node_modules/jquery/dist/'));


app.use("/register",userRoutes);
app.use("/login",loginRoutes);
app.use("/addP",addProduct);

app.use(userRoutes);

// app.use(demoRoutes);


var port  = process.env.port || 8080;
app.listen(port,()=>console.log('server run at port '+port));

