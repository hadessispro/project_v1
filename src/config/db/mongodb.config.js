const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect(`mongodb://localhost:27017/list_database_academy`)
                .then(()=>console.log("connect !"))
                .catch(err=>console.log(err))
}

module.exports =  {connect}