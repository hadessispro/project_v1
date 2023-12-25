const app = require('./src/app');
const process = require('process')
const port  = 3000;
const server =app.listen(port,()=>{
    console.log(`welcome to my server ${port}`);
})
// không sửa lại file server này lại file này set cứng

// thông báo kết thúc server
process.on("SIGINT",()=>{
    server.close(()=>console.log("exit my server express"));
})

