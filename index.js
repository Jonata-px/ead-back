const express = require('express');   //INCLUIR O EXPRESS
const path = require('path');  //METODO NODE PARA PEGAR O CAMINHO PRINCIPAL
const bodyParser = require('body-parser');

const app = express();	//PREPARAR EXPRESS PARA USO

app.use(bodyParser.json()); 			//para suportar json-encoded bodies
app.use(bodyParser.urlencoded({ 		//para suportar url-encoded bodies 
    extended:true
}))


//USAR O SISTEMA DE ROTAS DO EXPRESS COM O EJS
 app.engine('html', require('ejs').renderFile);
 app.set('view engine', 'html');
 app.use('/public', express.static(path.join(__dirname, 'public')));
 app.set('views',path.join(__dirname,'/views'));


//ROTAS
 app.get('/',(req,res)=>{
    //   res.render('index');
    res.send('Olá mundo');
 });










app.listen(5000,()=>{  		//PORTA PARA O SERVIDOR LOCAL
    console.log('servidor rodando 5000');
})