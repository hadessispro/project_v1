const express=  require('express');
const process = require('process');
const os =  require('os')
const _SECOND =  3000;
const mongoose =  require('mongoose');



const checkoverload= ()=>{
    setInterval(()=>{
        const numConnection = mongoose.connections.length;
        const numCores =  os.cpus().length;
        const memoryUsage = process.memoryUsage().rss  
        const maxConnections  = numCores* 5;

        console.log("Action connections::", numConnection)
        console.log(`Memory use:: ${memoryUsage / 1024 / 1024} Mb`);
        if(numCores > maxConnections){
            console.log('Connection overload detected !');
        }
        

    },_SECOND)

}

module.exports= {checkoverload};



