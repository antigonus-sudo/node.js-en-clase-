const{Socket}=require("socket.io")

module.exports=(io)=>{
    io.on('connection',(socket)=>{
        console.log('se ha conectado a un nuevo clienteal servidor')
        socket.on('disconnect',()=>{
            console.log('El cliente se ha desconectado de lservidor')
        })
    })
}