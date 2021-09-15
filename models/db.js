const mysql = require('mysql');


const db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'pdv'
});


db.connect(function(err){
	if(err){
		console.log("Não foi possivel conectar ao banco!");
        return;
	}else{
		console.log("Conectado ao banco!");
	}

});


// db.on('error', function(err) {
//     console.log("[mysql error]",err);
//   });

module.exports = db;