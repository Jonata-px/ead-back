const db = require('./db');

const insert = (tabela = String,data = Array)=>{
    return new Promise((resolve,reject)=>{
        let query = "INSERT INTO `"+tabela+"` VALUES (null,";
        data.map((val,key)=>{
            if(key < data.length - 1){
                query+=' ?,'
            }else{
                query+=' ?)'
            }
        })
        // console.log(data)
        db.query(query,data,(err)=>{
            if(err) 
                reject('erro ao inserir no banco')
            else
                resolve(true)
        })
    })
}

const selectAll = (tabela = String)=>{
    return new Promise((resolve,reject)=>{
        db.query("SELECT * FROM `"+tabela+"`",(err, results)=>{
            if(err) 
                reject("error in selectAll")
            else
                resolve(results);
        })
    })
}

const select = (tabela = String,query = String,arr = Array,all = '*')=>{
    return new Promise((resolve,reject)=>{
        db.query("SELECT "+all+" FROM `"+tabela+"` WHERE "+query,[arr],(err, result)=>{
            if(err) 
                reject("error in select")
            else
                resolve(result[0]);
        })
    })
}

const deletar = (tabela = String,query = String,arr = Array)=>{
    return new Promise((resolve,reject)=>{
        db.query("DELETE FROM `"+tabela+"` WHERE "+query,arr,(err)=>{
            if(err){
                reject("Error ao deletar")
            }else{
                resolve(true)
            }
        })
    })
}

const update = (tabela = String,data = Object,where = String,id)=>{
    return new Promise((resolve,reject)=>{
        let query = "UPDATE `"+tabela+"` SET ";
        var arr = [];
        let count = 0;
        let countObj = Object.keys(data).length;
        for(let chave in data){
            arr.push(data[chave])
            if(count < countObj && count != 0){
                query+=", "
            }
            query+=chave+" = ?"
            count++;
        }

        query+=" WHERE "+where;
        arr.push(id);
        
        db.query(query,arr,(err)=>{
            if(err){
            console.log(err)
                reject('erro ao inserir no banco')
            }else{
                resolve(true)
            }
        })
    })
}





module.exports = 
    {
        insert: insert,
        update: update,
        select: select,
        deletar: deletar,
        selectAll: selectAll
    };