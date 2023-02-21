const express = require('express') ; 

const app = express() ;

const apiRoutes = require('./routes/api');

app.use(express.urlencoded({extended:true})) ;
app.use('/', apiRoutes) ; 

// app.use(function(req,res) {
//     res.status(404).render('404');
// });

// app.use(function(error , req , res , next){
//     res.status(500).render('500');
// })


app.listen(3000) ; 